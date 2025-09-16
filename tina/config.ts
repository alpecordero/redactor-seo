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
        name: "homepage",
        label: "Homepage",
        path: "src/content/homepage",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "index",
        },
        fields: [
          {
            type: "object",
            name: "hero",
            label: "Sección Hero",
            fields: [
              {
                type: "string",
                name: "subtitle",
                label: "Subtítulo",
                required: true,
              },
              {
                type: "string",
                name: "title",
                label: "Título Principal",
                required: true,
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "string",
                name: "description",
                label: "Descripción",
                required: true,
                ui: {
                  component: "textarea",
                },
              },
            ],
          },
          {
            type: "object",
            name: "phrases",
            label: "Sección de Frases",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Título de la sección",
                required: true,
              },
              {
                type: "object",
                name: "items",
                label: "Frases",
                list: true,
                fields: [
                  {
                    type: "string",
                    name: "problem",
                    label: "Problema",
                    required: true,
                  },
                  {
                    type: "string",
                    name: "solution",
                    label: "Solución",
                    required: true,
                  },
                ],
              },
            ],
          },
          {
            type: "rich-text",
            name: "richText",
            label: "Contenido Enriquecido",
            description: "Sección de texto enriquecido editable con títulos, listas y formato",
          },
        ],
      },
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