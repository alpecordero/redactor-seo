/**
 * Cloudflare Worker ULTRA SEGURO para formulario de contacto
 * Protecciones implementadas:
 * - Rate limiting por IP (3/hora, 10/día)
 * - Honeypot trap
 * - Filtros anti-spam avanzados
 * - Validaciones robustas
 * - Logging de intentos sospechosos
 */

export default {
  async fetch(request, env) {
    const corsHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    };

    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders });
    }

    if (request.method !== 'POST') {
      return new Response(
        JSON.stringify({ error: 'Método no permitido' }),
        { status: 405, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    try {
      // 1. VERIFICAR CONFIGURACIÓN
      if (!env.RESEND_API_KEY || !env.CONTACT_EMAIL_TO) {
        return new Response(
          JSON.stringify({ error: 'Configuración incompleta' }),
          { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      // 2. RATE LIMITING POR IP
      const clientIP = request.headers.get('CF-Connecting-IP') || request.headers.get('X-Forwarded-For') || 'unknown';
      const now = Date.now();
      const hour = 60 * 60 * 1000;
      const day = 24 * hour;

      // Verificar límites si hay KV store disponible
      if (env.RATE_LIMIT_KV) {
        try {
          const rateLimitKey = `rate_${clientIP}`;
          const rateLimitData = await env.RATE_LIMIT_KV.get(rateLimitKey);

          let hourlyCount = 0;
          let dailyCount = 0;

          if (rateLimitData) {
            const data = JSON.parse(rateLimitData);
            const hourAgo = now - hour;
            const dayAgo = now - day;

            // Contar emails en la última hora
            hourlyCount = data.timestamps.filter(t => t > hourAgo).length;
            // Contar emails en el último día
            dailyCount = data.timestamps.filter(t => t > dayAgo).length;

            // BLOQUEAR si excede límites
            if (hourlyCount >= 3) {
              console.log(`🚫 Rate limit HOURLY exceeded for IP: ${clientIP} (${hourlyCount}/3)`);
              return new Response(
                JSON.stringify({ error: 'Demasiadas solicitudes. Máximo 3 por hora.' }),
                { status: 429, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
              );
            }

            if (dailyCount >= 10) {
              console.log(`🚫 Rate limit DAILY exceeded for IP: ${clientIP} (${dailyCount}/10)`);
              return new Response(
                JSON.stringify({ error: 'Límite diario alcanzado. Máximo 10 emails por día.' }),
                { status: 429, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
              );
            }
          }
        } catch (e) {
          console.log('Rate limit check failed:', e);
        }
      }

      // 3. PARSEAR Y VALIDAR DATOS
      const data = await request.json();

      // 3a. HONEYPOT CHECK - Si el campo está lleno = BOT
      if (data.website_url && data.website_url.trim() !== '') {
        console.log(`🍯 HONEYPOT triggered by IP: ${clientIP} - Bot detected!`);
        // Responder como si fuera exitoso para confundir al bot
        return new Response(
          JSON.stringify({ success: true, message: '✅ Mensaje enviado' }),
          { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      // 3b. EXTRAER CAMPOS
      const nombre = data.nombre?.trim() || '';
      const email = data.email?.trim() || '';
      const web = data.web?.trim() || '';
      const servicio = data.servicio?.trim() || '';
      const mensaje = data.mensaje?.trim() || '';

      // 3c. VALIDACIONES BÁSICAS
      if (!nombre || !email || !servicio || !mensaje) {
        return new Response(
          JSON.stringify({ error: 'Faltan campos obligatorios' }),
          { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      // 3d. VALIDAR EMAIL
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return new Response(
          JSON.stringify({ error: 'Email no válido' }),
          { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      // 4. FILTROS ANTI-SPAM AVANZADOS

      // 4a. Longitud mínima de mensaje
      if (mensaje.length < 20) {
        console.log(`🚫 Mensaje demasiado corto from ${clientIP}: "${mensaje}"`);
        return new Response(
          JSON.stringify({ error: 'El mensaje debe tener al menos 20 caracteres' }),
          { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      // 4b. Patrones de spam comunes
      const spamPatterns = [
        /viagra/i, /cialis/i, /casino/i, /poker/i, /lottery/i, /winner/i,
        /crypto/i, /bitcoin/i, /investment/i, /profit/i, /earn.*money/i,
        /click here/i, /visit.*site/i, /free.*money/i, /make.*\$\d+/i,
        /loan/i, /debt/i, /credit.*repair/i, /weight.*loss/i,
        /enlargement/i, /enhancement/i, /miracle/i, /guarantee/i,
        /act now/i, /limited time/i, /urgent/i, /congratulations/i
      ];

      const textToCheck = `${nombre} ${email} ${mensaje}`.toLowerCase();
      const spamDetected = spamPatterns.some(pattern => pattern.test(textToCheck));

      if (spamDetected) {
        console.log(`🚫 SPAM detected from ${clientIP}: Patterns found in content`);
        // Log del contenido para análisis
        console.log(`SPAM content: nombre="${nombre}", email="${email}", mensaje="${mensaje.substring(0, 100)}..."`);

        return new Response(
          JSON.stringify({ error: 'Contenido no válido detectado' }),
          { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      // 4c. Detectar texto repetitivo (típico de bots)
      const words = mensaje.toLowerCase().split(/\s+/);
      const uniqueWords = new Set(words);
      const repetitionRatio = uniqueWords.size / words.length;

      if (repetitionRatio < 0.3 && words.length > 10) {
        console.log(`🚫 Repetitive text detected from ${clientIP}: ratio=${repetitionRatio}`);
        return new Response(
          JSON.stringify({ error: 'Mensaje no válido' }),
          { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      // 4d. Verificar que no sea solo enlaces
      const urlCount = (mensaje.match(/https?:\/\/[^\s]+/gi) || []).length;
      if (urlCount > 2) {
        console.log(`🚫 Too many URLs from ${clientIP}: ${urlCount} URLs found`);
        return new Response(
          JSON.stringify({ error: 'Demasiados enlaces en el mensaje' }),
          { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      // 5. NORMALIZAR WEB URL
      let webUrl = web;
      if (webUrl && !webUrl.match(/^https?:\/\//)) {
        webUrl = `https://${webUrl}`;
      }

      // 6. ENVIAR EMAIL
      const emailResponse = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${env.RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'Contacto RedactorSEO <info@redactorseo.es>',
          to: [env.CONTACT_EMAIL_TO],
          reply_to: email,
          subject: `Nuevo contacto de ${nombre} - ${servicio}`,
          html: createEmailHTML(nombre, email, webUrl, servicio, mensaje, clientIP),
        }),
      });

      if (!emailResponse.ok) {
        const error = await emailResponse.text();
        console.error(`Email send failed: ${error}`);
        return new Response(
          JSON.stringify({ error: 'Error al enviar email' }),
          { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      // 7. ACTUALIZAR RATE LIMITING
      if (env.RATE_LIMIT_KV) {
        try {
          const rateLimitKey = `rate_${clientIP}`;
          const currentData = await env.RATE_LIMIT_KV.get(rateLimitKey);

          let timestamps = [now];
          if (currentData) {
            const data = JSON.parse(currentData);
            // Mantener solo timestamps del último día
            const dayAgo = now - day;
            timestamps = [...data.timestamps.filter(t => t > dayAgo), now];
          }

          await env.RATE_LIMIT_KV.put(rateLimitKey, JSON.stringify({
            timestamps,
            lastUpdate: now
          }), { expirationTtl: 86400 }); // 24 horas

        } catch (e) {
          console.log('Rate limit update failed:', e);
        }
      }

      // 8. LOG ÉXITO
      console.log(`✅ Legitimate email sent from ${clientIP}: ${nombre} <${email}>`);

      return new Response(
        JSON.stringify({ success: true, message: '✅ Mensaje enviado correctamente' }),
        { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );

    } catch (error) {
      console.error('Server error:', error);
      return new Response(
        JSON.stringify({ error: 'Error del servidor' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }
  },
};

// Función para crear el HTML del email con información de seguridad
function createEmailHTML(nombre, email, webUrl, servicio, mensaje, clientIP) {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: #0d9488; color: white; padding: 20px; text-align: center;">
        <h1 style="margin: 0;">🎯 Nuevo contacto - RedactorSEO</h1>
        <div style="margin-top: 10px; font-size: 12px; opacity: 0.9;">
          ✅ Verificado por sistema anti-spam
        </div>
      </div>

      <div style="background: white; padding: 30px; border: 1px solid #e5e7eb;">
        <h2 style="color: #0d9488; margin-top: 0;">📋 Información del cliente</h2>

        <table style="width: 100%; border-collapse: collapse;">
          <tr style="border-bottom: 1px solid #f3f4f6;">
            <td style="padding: 12px 0; font-weight: bold; width: 120px;">Nombre:</td>
            <td style="padding: 12px 0;">${nombre}</td>
          </tr>
          <tr style="border-bottom: 1px solid #f3f4f6;">
            <td style="padding: 12px 0; font-weight: bold;">Email:</td>
            <td style="padding: 12px 0;"><a href="mailto:${email}" style="color: #0d9488;">${email}</a></td>
          </tr>
          <tr style="border-bottom: 1px solid #f3f4f6;">
            <td style="padding: 12px 0; font-weight: bold;">Web actual:</td>
            <td style="padding: 12px 0;">
              ${webUrl ? `<a href="${webUrl}" target="_blank" style="color: #0d9488;">${webUrl}</a>` : 'No especificada'}
            </td>
          </tr>
          <tr style="border-bottom: 1px solid #f3f4f6;">
            <td style="padding: 12px 0; font-weight: bold;">¿Qué necesitas?:</td>
            <td style="padding: 12px 0;">
              <span style="background: #f0fdfa; color: #0d9488; padding: 6px 12px; border-radius: 4px; font-weight: 600;">
                ${servicio}
              </span>
            </td>
          </tr>
        </table>

        <h2 style="color: #0d9488; margin: 30px 0 15px 0;">💬 Cuéntame tu proyecto</h2>
        <div style="background: #f8fafc; padding: 20px; border-left: 4px solid #0d9488; line-height: 1.6;">
          ${mensaje.replace(/\n/g, '<br>')}
        </div>

        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 12px;">
          <p><strong>Fecha:</strong> ${new Date().toLocaleString('es-ES', { timeZone: 'Europe/Madrid' })}</p>
          <p><strong>IP cliente:</strong> ${clientIP}</p>
          <p><strong>Verificaciones:</strong> ✅ Honeypot ✅ Rate limit ✅ Anti-spam ✅ Validaciones</p>
        </div>
      </div>
    </div>
  `;
}