/**
 * Cloudflare Worker para el formulario de contacto de RedactorSEO
 * Actualizado para capturar todos los campos del formulario
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
      // Verificar variables de entorno
      if (!env.RESEND_API_KEY || !env.CONTACT_EMAIL_TO) {
        return new Response(
          JSON.stringify({ error: 'Configuración incompleta' }),
          { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      // Parsear datos del formulario
      const data = await request.json();

      // Extraer todos los campos del formulario
      const nombre = data.nombre || data.name;
      const email = data.email;
      const web = data.web;
      const servicio = data.servicio || data.service;
      const mensaje = data.mensaje || data.message;

      // Validar campos obligatorios
      if (!nombre || !email || !servicio || !mensaje) {
        return new Response(
          JSON.stringify({ error: 'Faltan campos obligatorios' }),
          { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      // Validar email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return new Response(
          JSON.stringify({ error: 'Email no válido' }),
          { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      // Normalizar URL de la web
      let webUrl = web;
      if (webUrl && !webUrl.match(/^https?:\/\//)) {
        webUrl = `https://${webUrl}`;
      }

      // Crear contenido del email
      const emailSubject = `Nuevo contacto de ${nombre} - ${servicio}`;

      const emailHTML = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #0d9488; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0;">
            <h1 style="margin: 0; font-size: 24px;">🎯 Nuevo contacto - RedactorSEO</h1>
          </div>

          <div style="background: white; padding: 30px; border: 1px solid #e5e7eb; border-top: none;">
            <h2 style="color: #0d9488; margin-top: 0;">📋 Información del cliente</h2>

            <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
              <tr style="border-bottom: 1px solid #f3f4f6;">
                <td style="padding: 12px 0; font-weight: bold; color: #374151; width: 150px;">Nombre:</td>
                <td style="padding: 12px 0; color: #6b7280;">${nombre}</td>
              </tr>
              <tr style="border-bottom: 1px solid #f3f4f6;">
                <td style="padding: 12px 0; font-weight: bold; color: #374151;">Email:</td>
                <td style="padding: 12px 0;"><a href="mailto:${email}" style="color: #0d9488; text-decoration: none;">${email}</a></td>
              </tr>
              <tr style="border-bottom: 1px solid #f3f4f6;">
                <td style="padding: 12px 0; font-weight: bold; color: #374151;">Web:</td>
                <td style="padding: 12px 0;">
                  ${webUrl ? `<a href="${webUrl}" target="_blank" style="color: #0d9488; text-decoration: none;">${webUrl}</a>` : '<span style="color: #9ca3af;">No especificada</span>'}
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #f3f4f6;">
                <td style="padding: 12px 0; font-weight: bold; color: #374151;">Servicio:</td>
                <td style="padding: 12px 0;">
                  <span style="background: #f0fdfa; color: #0d9488; padding: 4px 8px; border-radius: 4px; font-weight: 600;">
                    ${servicio}
                  </span>
                </td>
              </tr>
            </table>

            <h2 style="color: #0d9488; margin-bottom: 15px;">💬 Mensaje</h2>
            <div style="background: #f8fafc; padding: 20px; border-left: 4px solid #0d9488; border-radius: 0 4px 4px 0; line-height: 1.6;">
              ${mensaje.replace(/\n/g, '<br>')}
            </div>

            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 14px;">
              <p><strong>Enviado desde:</strong> ${new URL(request.url).origin}</p>
              <p><strong>Fecha:</strong> ${new Date().toLocaleString('es-ES', { timeZone: 'Europe/Madrid' })}</p>
            </div>
          </div>
        </div>
      `;

      // Enviar email usando Resend
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
          subject: emailSubject,
          html: emailHTML,
        }),
      });

      if (!emailResponse.ok) {
        const error = await emailResponse.text();
        console.error('Error enviando email:', error);
        return new Response(
          JSON.stringify({ error: 'Error al enviar', debug: error }),
          { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      const result = await emailResponse.json();
      console.log('Email enviado exitosamente:', result.id);

      return new Response(
        JSON.stringify({ success: true, message: '✅ Mensaje enviado correctamente' }),
        { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );

    } catch (error) {
      console.error('Error del servidor:', error);
      return new Response(
        JSON.stringify({ error: 'Error del servidor', debug: error.message }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }
  },
};