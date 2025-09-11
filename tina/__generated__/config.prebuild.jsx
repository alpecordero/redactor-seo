// tina/config.ts
import { defineConfig } from "tinacms";
var config_default = defineConfig({
  branch: "main",
  clientId: process.env.TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,
  build: {
    outputFolder: "admin",
    publicFolder: "public"
  },
  media: {
    tina: {
      mediaRoot: "src/assets/images",
      publicFolder: "public"
    }
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
            label: "T\xEDtulo",
            isTitle: true,
            required: true
          },
          {
            type: "string",
            name: "description",
            label: "Descripci\xF3n SEO",
            description: "Descripci\xF3n que aparecer\xE1 en Google (m\xE1x. 160 caracteres)",
            required: true
          },
          {
            type: "datetime",
            name: "pubDate",
            label: "Fecha de publicaci\xF3n",
            required: true
          },
          {
            type: "image",
            name: "heroImage",
            label: "Imagen destacada",
            description: "Imagen principal del art\xEDculo (recomendado: 1200x630px)"
          },
          {
            type: "string",
            name: "tags",
            label: "Etiquetas",
            list: true,
            description: "Palabras clave relevantes para el art\xEDculo"
          },
          {
            type: "string",
            name: "metaTitle",
            label: "T\xEDtulo SEO (opcional)",
            description: "Si no se especifica, se usar\xE1 el t\xEDtulo principal"
          },
          {
            type: "rich-text",
            name: "body",
            label: "Contenido",
            isBody: true
          }
        ]
      },
      {
        name: "pages",
        label: "P\xE1ginas",
        path: "src/content/pages",
        format: "md",
        fields: [
          {
            type: "string",
            name: "title",
            label: "T\xEDtulo",
            isTitle: true,
            required: true
          },
          {
            type: "string",
            name: "description",
            label: "Descripci\xF3n"
          },
          {
            type: "rich-text",
            name: "body",
            label: "Contenido",
            isBody: true
          }
        ]
      }
    ]
  }
});
export {
  config_default as default
};
