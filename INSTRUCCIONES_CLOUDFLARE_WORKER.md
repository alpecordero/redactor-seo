# 🚀 Instrucciones de Despliegue - Cloudflare Worker con Resend

## 📋 Pasos para activar el formulario seguro:

### 1️⃣ **Crear cuenta en Resend.com**
1. Ve a [resend.com](https://resend.com) y crea una cuenta gratuita
2. Verifica tu dominio `redactorseo.es` (o usa el sandbox)
3. Genera un **API Key** en el dashboard
4. Guarda la clave que empieza con `re_`

### 2️⃣ **Configurar KV namespace (opcional)**
```bash
cd cloudflare-worker
wrangler kv:namespace create "RATE_LIMIT_KV"
wrangler kv:namespace create "RATE_LIMIT_KV" --preview
```

### 3️⃣ **Actualizar wrangler.toml**
Reemplaza los IDs en `wrangler.toml` con los generados arriba.

### 4️⃣ **Desplegar el Worker**
```bash
cd cloudflare-worker
wrangler publish
```

### 5️⃣ **Configurar variables de entorno**
1. Ve a **Cloudflare Dashboard** > **Workers & Pages**
2. Busca `redactor-seo-contact-form`
3. Ve a **Settings** > **Variables**
4. Añade estas variables:
   - `CONTACT_EMAIL_FROM` = `info@redactorseo.es`
   - `CONTACT_EMAIL_TO` = `info@redactorseo.es`
   - `RESEND_API_KEY` = `re_xxxxxxxx` (tu clave de Resend)
5. Guarda los cambios

### 6️⃣ **Probar el formulario**
1. El Worker ya está actualizado con la URL correcta
2. Prueba enviando un mensaje desde el formulario
3. Verifica que llegue el email

## 🔒 **Protección Anti-Spam implementada:**

### ✅ **Rate Limiting:**
- Máximo 3 emails por hora por IP
- Protección automática contra spam masivo

### ✅ **Filtros de contenido:**
- Detección de patrones de spam comunes
- Mensajes mínimos de 10 caracteres
- Bloqueo de palabras clave sospechosas

### ✅ **Seguridad total:**
- API Key de Resend completamente oculta
- Sin archivos `.env` expuestos
- CORS configurado correctamente

### ✅ **Beneficios:**
- 3000 emails gratuitos/mes (suficiente para tus 10/mes)
- Sin problemas de DNS o configuración SMTP
- Funciona inmediatamente
- Logs detallados en Cloudflare Dashboard

## 📊 **Límites y uso:**
- **Plan gratuito Resend**: 3000 emails/mes
- **Rate limiting**: 3 emails/hora por IP
- **Protección spam**: Automática
- **Esperado**: ~10 emails/mes (0.3% del límite)

## ❓ **¿Necesitas ayuda?**
Una vez configuradas las variables de entorno, el sistema estará listo para producción.