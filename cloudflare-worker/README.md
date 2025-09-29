# Cloudflare Worker - Formulario de Contacto

Este directorio contiene el Cloudflare Worker para manejar el formulario de contacto de forma segura.

## 🚀 Despliegue

### 1. Instalar Wrangler CLI
```bash
npm install -g wrangler
```

### 2. Autenticar con Cloudflare
```bash
wrangler login
```

### 3. Configurar variables de entorno
En el dashboard de Cloudflare Workers, añadir estas variables:
- `CONTACT_EMAIL_FROM`: info@redactorseo.es
- `CONTACT_EMAIL_TO`: info@redactorseo.es

### 4. Desplegar el Worker
```bash
cd cloudflare-worker
wrangler publish
```

### 5. Obtener la URL del Worker
Después del despliegue, obtendrás una URL como:
`https://redactor-seo-contact-form.your-subdomain.workers.dev`

## 🔧 Configuración

### Variables de entorno en Cloudflare Dashboard:
1. Ve a Workers & Pages > redactor-seo-contact-form > Settings > Variables
2. Añade estas variables de entorno:
   - `CONTACT_EMAIL_FROM` = `info@redactorseo.es`
   - `CONTACT_EMAIL_TO` = `info@redactorseo.es`

### Actualizar el frontend:
Cambiar la URL del fetch en `/src/pages/contacto.astro:222`:
```javascript
const response = await fetch('https://tu-worker-url.workers.dev', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data)
});
```

## 🔒 Seguridad

### ✅ Ventajas del Worker:
- Variables de entorno completamente ocultas del cliente
- CORS configurado correctamente
- Validación robusta de datos
- Sin servidor backend necesario
- Servicio gratuito de MailChannels para envío de emails

### 🛡️ Características de seguridad implementadas:
- Validación de Content-Type
- Sanitización de datos de entrada
- Validación de formato de email
- Manejo de errores robusto
- Logs de debugging sin exponer datos sensibles

## 📧 Envío de Emails

El Worker usa **MailChannels** (gratuito con Cloudflare Workers) en lugar de SMTP:
- Sin necesidad de configurar SMTP
- Sin límites de envío en el plan gratuito
- Mayor deliverability que SMTP tradicional
- Configuración más simple

## 🔄 Testing Local

Para probar localmente:
```bash
cd cloudflare-worker
wrangler dev
```

Esto abrirá el Worker en `http://localhost:8787` para testing.