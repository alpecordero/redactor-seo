# Guía de Migración a Mac - RedactorSEO

Esta guía te ayudará a configurar el proyecto **RedactorSEO** en tu nuevo Mac para desarrollo local.

## Información del Proyecto

- **Framework**: Astro v5.13.7
- **Hosting**: Cloudflare Pages
- **CMS**: TinaCMS v2.8.2
- **CSS**: Tailwind CSS v4.1.13
- **Modo**: SSR (Server-Side Rendering)
- **URL Producción**: https://redactorseo.es

---

## 📋 Requisitos Previos en Mac

### 1. Instalar Homebrew (si no lo tienes)
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

### 2. Instalar Node.js y npm
```bash
# Instalar Node.js (recomendado: v18.x o v20.x)
brew install node@20

# Verificar instalación
node --version  # Debe mostrar v20.x.x o superior
npm --version   # Debe mostrar v10.x.x o superior
```

> **Nota**: El proyecto actual usa Node.js v22.15.0, pero v20.x LTS es más estable para Mac.

### 3. Instalar Git (si no está instalado)
```bash
brew install git
```

---

## 🚀 Pasos de Migración

### Paso 1: Clonar el Repositorio

Si el proyecto ya está en GitHub:
```bash
# Navega a la carpeta donde quieres el proyecto
cd ~/Proyectos  # o la carpeta que prefieras

# Clona el repositorio
git clone <URL-DEL-REPOSITORIO-GITHUB> redactor-seo
cd redactor-seo
```

Si estás transfiriendo archivos directamente:
```bash
# Copia la carpeta del proyecto a tu Mac
# Luego navega a ella:
cd ~/ruta/a/redactor-seo
```

### Paso 2: Instalar Dependencias

```bash
# Instalar todas las dependencias del proyecto
npm install
```

Este comando instalará:
- Astro v5.13.7
- Tailwind CSS v4.1.13
- TinaCMS v2.8.2
- Adaptador de Cloudflare
- Y todas las demás dependencias

### Paso 3: Configurar Variables de Entorno

El proyecto necesita un archivo `.env` con las credenciales:

```bash
# Copiar el archivo de ejemplo
cp .env.example .env
```

Luego, edita el archivo `.env` y completa con tus credenciales:

```env
# TinaCMS (para el panel de administración)
TINA_CLIENT_ID=tu-client-id-de-tina
TINA_TOKEN=tu-token-de-tina

# Email Configuration (para el formulario de contacto)
SMTP_HOST=tu-servidor-smtp
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=tu-usuario-smtp
SMTP_PASSWORD=tu-contraseña-smtp
CONTACT_EMAIL_FROM=tu-email-remitente
CONTACT_EMAIL_TO=tu-email-destino
```

> **⚠️ IMPORTANTE**: El archivo `.env` está en `.gitignore` y NO se debe subir a GitHub por seguridad.

### Paso 4: Iniciar el Servidor de Desarrollo

```bash
# Iniciar Astro en modo desarrollo
npm run dev
```

El sitio estará disponible en: **http://localhost:4321**

---

## 🛠️ Comandos Disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Inicia servidor de desarrollo en `localhost:4321` |
| `npm run build` | Construye el sitio para producción en `./dist/` |
| `npm run preview` | Vista previa local del build de producción |
| `npm run tinacms:dev` | Inicia TinaCMS en modo desarrollo |
| `npm run tinacms:build` | Construye el panel de administración de TinaCMS |
| `npm run tinacms:admin` | Abre el panel de administración de TinaCMS |

---

## 📝 Acceso a TinaCMS (Panel de Administración)

TinaCMS te permite editar el contenido del sitio de forma visual.

### Acceder localmente:
```bash
npm run tinacms:dev
```

Luego visita: **http://localhost:4321/admin**

### Credenciales:
- Las credenciales de TinaCMS (`TINA_CLIENT_ID` y `TINA_TOKEN`) están en tu archivo `.env`
- Asegúrate de tener los valores correctos del entorno de producción

---

## 🌐 Configuración de Cloudflare Pages

El proyecto está configurado para desplegarse automáticamente en Cloudflare Pages.

### Configuración en Cloudflare Dashboard:

1. **Build Settings**:
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Node version: `20` o superior

2. **Environment Variables** (configurar en Cloudflare):
   ```
   TINA_CLIENT_ID=<tu-client-id>
   TINA_TOKEN=<tu-token>
   SMTP_HOST=<tu-servidor-smtp>
   SMTP_PORT=587
   SMTP_SECURE=false
   SMTP_USER=<tu-usuario-smtp>
   SMTP_PASSWORD=<tu-contraseña-smtp>
   CONTACT_EMAIL_FROM=<tu-email-remitente>
   CONTACT_EMAIL_TO=<tu-email-destino>
   ```

3. **Despliegue**:
   - Cada push a la rama `main` despliega automáticamente a producción
   - Cloudflare Pages se encarga de ejecutar el build y servir el sitio

---

## 📦 Estructura del Proyecto

```
redactor-seo/
├── public/                 # Archivos estáticos (imágenes, favicon, etc.)
├── src/
│   ├── assets/            # Imágenes y recursos procesados
│   ├── components/        # Componentes reutilizables de Astro
│   ├── content/           # Contenido gestionado por TinaCMS
│   ├── layouts/           # Layouts de página
│   ├── pages/             # Páginas del sitio (routing automático)
│   ├── styles/            # Estilos CSS globales
│   └── utils/             # Utilidades y helpers
├── tina/                  # Configuración de TinaCMS
│   └── config.ts          # Schema y configuración del CMS
├── cloudflare-worker/     # Workers de Cloudflare (formularios, contador)
├── dist/                  # Build de producción (generado)
├── .env                   # Variables de entorno (NO subir a Git)
├── .env.example           # Ejemplo de variables de entorno
├── .gitignore             # Archivos ignorados por Git
├── astro.config.mjs       # Configuración de Astro
├── tailwind.config.mjs    # Configuración de Tailwind CSS
├── package.json           # Dependencias y scripts
└── wrangler.toml          # Configuración de Cloudflare Workers
```

---

## 🔧 Solución de Problemas en Mac

### Error: "command not found: node"
```bash
# Asegúrate de que Node.js esté en el PATH
echo 'export PATH="/opt/homebrew/bin:$PATH"' >> ~/.zshrc
source ~/.zshrc
```

### Error: "Permission denied" al instalar dependencias
```bash
# No uses sudo con npm. Si tienes problemas:
npm config set prefix ~/.npm-global
echo 'export PATH="~/.npm-global/bin:$PATH"' >> ~/.zshrc
source ~/.zshrc
```

### Error: "Port 4321 already in use"
```bash
# Mata el proceso que usa el puerto
lsof -ti:4321 | xargs kill -9

# O usa otro puerto
npm run dev -- --port 3000
```

### El sitio no carga estilos correctamente
```bash
# Limpia la caché y reconstruye
rm -rf node_modules .astro dist
npm install
npm run dev
```

### Problemas con permisos de archivos
```bash
# Asegúrate de tener permisos sobre la carpeta
chmod -R 755 /ruta/a/redactor-seo
```

---

## 🔐 Seguridad y Buenas Prácticas

1. **Nunca subas el archivo `.env` a GitHub**
   - Está incluido en `.gitignore` por seguridad
   - Contiene credenciales sensibles

2. **Mantén las dependencias actualizadas**:
   ```bash
   npm outdated
   npm update
   ```

3. **Revisa antes de hacer commits**:
   ```bash
   git status
   git diff
   ```

4. **Usa ramas para nuevas funcionalidades**:
   ```bash
   git checkout -b feature/nueva-funcionalidad
   ```

---

## 📚 Recursos Adicionales

- **Documentación de Astro**: https://docs.astro.build
- **Documentación de TinaCMS**: https://tina.io/docs
- **Documentación de Tailwind CSS**: https://tailwindcss.com/docs
- **Cloudflare Pages Docs**: https://developers.cloudflare.com/pages
- **Instrucciones Worker Contacto**: Ver `INSTRUCCIONES_CLOUDFLARE_WORKER.md`

---

## ✅ Checklist de Migración

- [ ] Homebrew instalado
- [ ] Node.js v20+ instalado
- [ ] Git instalado
- [ ] Proyecto clonado/transferido
- [ ] Dependencias instaladas (`npm install`)
- [ ] Archivo `.env` configurado con credenciales correctas
- [ ] Servidor de desarrollo funciona (`npm run dev`)
- [ ] Acceso a TinaCMS funciona (`/admin`)
- [ ] Build de producción funciona (`npm run build`)
- [ ] Conexión con repositorio GitHub configurada

---

## 🆘 ¿Necesitas Ayuda?

Si encuentras algún problema durante la migración:

1. Verifica que todas las dependencias estén instaladas correctamente
2. Revisa que el archivo `.env` tenga todas las variables necesarias
3. Consulta los logs de error en la terminal
4. Revisa la documentación oficial de Astro y TinaCMS
5. Verifica que la versión de Node.js sea compatible (v18+)

---

## 🎉 ¡Listo!

Una vez completados todos los pasos, tendrás el proyecto funcionando en tu Mac.

Para desarrollo diario:
```bash
cd ~/ruta/a/redactor-seo
npm run dev
```

Para crear un build de producción:
```bash
npm run build
npm run preview
```

**¡Feliz desarrollo!** 🚀
