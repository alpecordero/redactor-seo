import type { APIRoute } from 'astro';
import nodemailer from 'nodemailer';

export const prerender = false;

// Create transporter for Proton Mail
const createTransporter = () => {
  // Check if we have email configuration
  const smtpHost = import.meta.env.SMTP_HOST || process.env.SMTP_HOST;
  const smtpUser = import.meta.env.SMTP_USER || process.env.SMTP_USER;
  const smtpPassword = import.meta.env.SMTP_PASSWORD || process.env.SMTP_PASSWORD;
  
  if (!smtpHost || !smtpUser || !smtpPassword) {
    console.warn('Email configuration not found. Emails will be logged only.');
    return null;
  }

  return nodemailer.createTransport({
    host: smtpHost,
    port: parseInt(import.meta.env.SMTP_PORT || process.env.SMTP_PORT || '465'),
    secure: (import.meta.env.SMTP_SECURE || process.env.SMTP_SECURE || 'true') === 'true',
    auth: {
      user: smtpUser,
      pass: smtpPassword,
    },
  });
};

export const POST: APIRoute = async ({ request }) => {
  try {
    // Validate content type
    const contentType = request.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      return new Response(JSON.stringify({ 
        error: 'Content-Type debe ser application/json' 
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    let data;
    try {
      data = await request.json();
    } catch (parseError) {
      console.error('JSON parsing error:', parseError);
      return new Response(JSON.stringify({ 
        error: 'Datos JSON no válidos' 
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    // Validate required fields
    if (!data.nombre || !data.email || !data.mensaje || !data.servicio) {
      return new Response(JSON.stringify({ 
        error: 'Faltan campos obligatorios' 
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return new Response(JSON.stringify({ 
        error: 'Email no válido' 
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Normalize web URL if provided
    let webUrl = data.web;
    if (webUrl && !webUrl.match(/^https?:\/\//)) {
      webUrl = `https://${webUrl}`;
    }

    // Create email content
    const emailSubject = `Nuevo contacto de ${data.nombre} - ${data.servicio}`;
    const emailContent = `
NUEVO CONTACTO - RedactorSEO

Información del cliente:
• Nombre: ${data.nombre}
• Email: ${data.email}
• Web: ${webUrl || 'No especificada'}

Servicio solicitado: ${data.servicio}
Presupuesto: ${data.presupuesto || 'No especificado'}

Mensaje:
${data.mensaje}

---
Enviado desde: ${new URL(request.url).origin}
Fecha: ${new Date().toLocaleString('es-ES', { timeZone: 'Europe/Madrid' })}
`.trim();

    // HTML version for better formatting
    const emailHTML = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .header { background: #0d9488; color: white; padding: 20px; text-align: center; }
    .content { padding: 20px; }
    .info-table { width: 100%; border-collapse: collapse; margin: 20px 0; }
    .info-table td { padding: 8px; border-bottom: 1px solid #eee; }
    .info-table td:first-child { font-weight: bold; width: 150px; }
    .message { background: #f8f9fa; padding: 15px; border-left: 4px solid #0d9488; margin: 20px 0; }
    .footer { color: #666; font-size: 12px; margin-top: 20px; padding-top: 20px; border-top: 1px solid #eee; }
  </style>
</head>
<body>
  <div class="header">
    <h1>Nuevo contacto - RedactorSEO</h1>
  </div>
  
  <div class="content">
    <h2>Información del cliente</h2>
    <table class="info-table">
      <tr><td>Nombre:</td><td>${data.nombre}</td></tr>
      <tr><td>Email:</td><td><a href="mailto:${data.email}">${data.email}</a></td></tr>
      <tr><td>Web:</td><td>${webUrl ? `<a href="${webUrl}" target="_blank">${webUrl}</a>` : 'No especificada'}</td></tr>
      <tr><td>Servicio:</td><td><strong>${data.servicio}</strong></td></tr>
      <tr><td>Presupuesto:</td><td>${data.presupuesto || 'No especificado'}</td></tr>
    </table>
    
    <h2>Mensaje</h2>
    <div class="message">
      ${data.mensaje.replace(/\n/g, '<br>')}
    </div>
    
    <div class="footer">
      Enviado desde: ${new URL(request.url).origin}<br>
      Fecha: ${new Date().toLocaleString('es-ES', { timeZone: 'Europe/Madrid' })}
    </div>
  </div>
</body>
</html>
`.trim();

    // Try to send email if configured
    const transporter = createTransporter();
    
    if (transporter) {
      const fromEmail = import.meta.env.CONTACT_EMAIL_FROM || process.env.CONTACT_EMAIL_FROM || 'info@redactorseo.es';
      const toEmail = import.meta.env.CONTACT_EMAIL_TO || process.env.CONTACT_EMAIL_TO || 'info@redactorseo.es';
      
      try {
        // Try setting the client as sender to make Reply work better
        await transporter.sendMail({
          from: `"${data.nombre} (via RedactorSEO)" <${fromEmail}>`,
          to: toEmail,
          replyTo: data.email,
          subject: emailSubject,
          text: emailContent,
          html: emailHTML,
          headers: {
            'Reply-To': data.email,
            'Return-Path': fromEmail,
          }
        });
        
        console.log(`Email sent successfully to ${toEmail}`);
      } catch (emailError) {
        console.error('Failed to send email:', emailError);
        // Don't fail the request if email fails, just log it
        console.log('CONTACT FORM SUBMISSION (email failed):');
        console.log(emailContent);
        console.log('---');
      }
    } else {
      // Log the contact if email is not configured
      console.log('CONTACT FORM SUBMISSION (no email config):');
      console.log(emailContent);
      console.log('---');
    }
    
    return new Response(JSON.stringify({ 
      success: true,
      message: 'Mensaje recibido correctamente' 
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
    
  } catch (error) {
    console.error('Contact form error:', error);
    
    return new Response(JSON.stringify({ 
      error: 'Error interno del servidor' 
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}