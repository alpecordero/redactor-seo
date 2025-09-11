import { defineConfig } from "tinacms";

export default defineConfig({
  branch: "main",
  clientId: process.env.TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "src/assets/images",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "post",
        label: "Blog Posts",
        path: "src/content/blog",
        format: "md",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Título",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Descripción SEO",
            description: "Descripción que aparecerá en Google (máx. 160 caracteres)",
            required: true,
          },
          {
            type: "datetime",
            name: "pubDate",
            label: "Fecha de publicación",
            required: true,
          },
          {
            type: "image",
            name: "heroImage",
            label: "Imagen destacada",
            description: "Imagen principal del artículo (recomendado: 1200x630px)",
          },
          {
            type: "string",
            name: "tags",
            label: "Etiquetas",
            list: true,
            description: "Palabras clave relevantes para el artículo",
          },
          {
            type: "string",
            name: "metaTitle",
            label: "Título SEO (opcional)",
            description: "Si no se especifica, se usará el título principal",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Contenido",
            isBody: true,
          },
        ],
      },
      {
        name: "pages",
        label: "Páginas",
        path: "src/content/pages",
        format: "md",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Título",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Descripción",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Contenido",
            isBody: true,
          },
        ],
      },
    ],
  },
});