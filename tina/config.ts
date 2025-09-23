import { defineConfig } from "tinacms";

export default defineConfig({
  branch: "main",
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
        fields: [
          {
            type: "object",
            name: "hero",
            label: "1. Sección Hero",
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
              },
              {
                type: "string",
                name: "candleMessages",
                label: "Mensajes de las velas",
                list: true,
                required: true,
                ui: {
                  description: "Mensajes que aparecen al hacer clic en 'Enciende una vela'",
                },
              },
            ],
          },
          {
            type: "object",
            name: "googleDeathSection",
            label: "2. Sección - El buscador de Google ha muerto",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Título (H2)",
                required: true,
              },
              {
                type: "string",
                name: "paragraph",
                label: "Párrafo principal",
                required: true,
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "object",
                name: "checkboxItems",
                label: "Elementos con checkbox",
                list: true,
                fields: [
                  {
                    type: "string",
                    name: "text",
                    label: "Texto del elemento",
                    required: true,
                    ui: {
                      component: "textarea",
                    },
                  },
                ],
              },
              {
                type: "string",
                name: "closingPhrase",
                label: "Frase de cierre",
                required: true,
                ui: {
                  component: "textarea",
                  description: "Frase que aparecerá al final de la sección, después de los elementos con checkbox",
                },
              },
            ],
          },
          {
            type: "object",
            name: "painPointsSection",
            label: "3. Sección - Dolores del cliente",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Título (H2)",
                required: true,
              },
              {
                type: "string",
                name: "subtitleFirstPart",
                label: "Subtítulo",
                required: true,
                ui: {
                  component: "textarea",
                  description: "Subtítulo que aparecerá debajo del título",
                },
              },
              {
                type: "object",
                name: "phrases",
                label: "Frases divididas",
                list: true,
                required: true,
                ui: {
                  description: "Frases con parte izquierda y derecha separadas por flecha",
                },
                fields: [
                  {
                    type: "string",
                    name: "leftPart",
                    label: "Parte izquierda",
                    required: true,
                    ui: {
                      description: "Texto que aparecerá a la izquierda de la flecha",
                    },
                  },
                  {
                    type: "string",
                    name: "rightPart",
                    label: "Parte derecha",
                    required: true,
                    ui: {
                      description: "Texto que aparecerá a la derecha de la flecha",
                    },
                  },
                ],
              },
              {
                type: "string",
                name: "closingPhrase",
                label: "Frase final de introducción a productos",
                required: true,
                ui: {
                  component: "textarea",
                },
              },
            ],
          },
          {
            type: "object",
            name: "transitionMessageSection",
            label: "4. Sección - Cita inspiracional",
            fields: [
              {
                type: "string",
                name: "mainText",
                label: "Primera parte de la cita",
                required: true,
                ui: {
                  description: "Ej: 'Loco es el que, haciendo siempre lo mismo, espera', aparecerá en blanco",
                },
              },
              {
                type: "string",
                name: "highlightedText",
                label: "Parte destacada de la cita",
                required: true,
                ui: {
                  description: "Ej: 'resultados diferentes', aparecerá en naranja",
                },
              },
              {
                type: "string",
                name: "continuationText",
                label: "Autor de la cita",
                required: true,
                ui: {
                  description: "Nombre del autor de la cita (ej: 'Albert Einstein')",
                },
              },
              {
                type: "string",
                name: "secondaryText",
                label: "Texto secundario",
                required: true,
                ui: {
                  description: "Aparecerá debajo en tamaño más pequeño",
                  component: "textarea",
                },
              },
            ],
          },
          {
            type: "object",
            name: "bridgeSection",
            label: "4.5. Sección - Puente filosófico",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Título (H2)",
                required: true,
                ui: {
                  description: "Título principal de la sección puente",
                },
              },
              {
                type: "string",
                name: "paragraph",
                label: "Párrafo principal",
                required: true,
                ui: {
                  component: "textarea",
                  description: "Texto explicativo que conecta la filosofía con la propuesta",
                },
              },
            ],
          },
          {
            type: "object",
            name: "servicesPackagesSection",
            label: "5. Sección - Paquetes de servicios",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Título principal",
                required: true,
              },
              {
                type: "object",
                name: "packages",
                label: "Paquetes de servicios",
                list: true,
                fields: [
                  {
                    type: "string",
                    name: "icon",
                    label: "Icono (emoji)",
                    required: true,
                  },
                  {
                    type: "string",
                    name: "heading",
                    label: "Título del servicio",
                    required: true,
                    ui: {
                      description: "Ej: 'Audito tu mensaje', 'Reescribo tu web'",
                    },
                  },
                  {
                    type: "string",
                    name: "description",
                    label: "Descripción del servicio",
                    required: true,
                    ui: {
                      component: "textarea",
                      description: "Descripción principal que aparece debajo del título (texto de 20px)",
                    },
                  },
                  {
                    type: "string",
                    name: "deliverables",
                    label: "Bullets/Entregables",
                    list: true,
                    required: true,
                    ui: {
                      description: "Lista de entregables separados por bullets (•). Ej: 'Reporte completo', 'Análisis competencia'",
                    },
                  },
                  {
                    type: "string",
                    name: "ctaText",
                    label: "Texto del botón",
                    required: true,
                    ui: {
                      description: "Texto que aparece en el botón CTA",
                    },
                  },
                  {
                    type: "string",
                    name: "ctaLink",
                    label: "Enlace del botón CTA",
                    required: true,
                  },
                ],
              },
              {
                type: "object",
                name: "finalCta",
                label: "CTA final hacia servicios",
                fields: [
                  {
                    type: "string",
                    name: "text",
                    label: "Texto introductorio",
                    required: true,
                  },
                  {
                    type: "string",
                    name: "linkText",
                    label: "Texto del enlace",
                    required: true,
                  },
                  {
                    type: "string",
                    name: "linkUrl",
                    label: "URL del enlace",
                    required: true,
                  },
                ],
              },
            ],
          },
          {
            type: "object",
            name: "statsSection",
            label: "6. Sección - Resultados que hablan por sí solos",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Título principal",
                required: true,
              },
              {
                type: "string",
                name: "subtitle",
                label: "Subtítulo/Descripción",
                required: true,
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "object",
                name: "stats",
                label: "Estadísticas",
                list: true,
                fields: [
                  {
                    type: "number",
                    name: "value",
                    label: "Valor numérico",
                    required: true,
                  },
                  {
                    type: "string",
                    name: "suffix",
                    label: "Sufijo (%, +, etc.)",
                    required: true,
                  },
                  {
                    type: "string",
                    name: "description",
                    label: "Descripción",
                    required: true,
                  },
                ],
              },
            ],
          },
          {
            type: "object",
            name: "ctaSection",
            label: "7. Sección - Call to Action Final",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Título principal",
                required: true,
              },
              {
                type: "string",
                name: "description",
                label: "Descripción",
                required: true,
              },
              {
                type: "string",
                name: "buttonText",
                label: "Texto del botón",
                required: true,
              },
              {
                type: "string",
                name: "buttonLink",
                label: "Enlace del botón",
                required: true,
              },
            ],
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
            type: "string",
            name: "subtitle",
            label: "Subtítulo",
            description: "Solo para página Sobre Mí",
          },
          {
            type: "string",
            name: "introduction",
            label: "Introducción",
            description: "Solo para página Sobre Mí",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "image",
            name: "profileImage",
            label: "Imagen de perfil",
            description: "Solo para página Sobre Mí",
          },
          {
            type: "object",
            name: "experienceSection",
            label: "Sección de Experiencia",
            description: "Solo para página Sobre Mí",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Título de la sección",
              },
              {
                type: "string",
                name: "subtitle",
                label: "Subtítulo de la sección",
              },
              {
                type: "object",
                name: "items",
                label: "Elementos de experiencia",
                list: true,
                fields: [
                  {
                    type: "string",
                    name: "icon",
                    label: "Icono (emoji)",
                  },
                  {
                    type: "string",
                    name: "title",
                    label: "Título",
                  },
                  {
                    type: "string",
                    name: "description",
                    label: "Descripción",
                    ui: {
                      component: "textarea",
                    },
                  },
                ],
              },
            ],
          },
          {
            type: "object",
            name: "valuesSection",
            label: "Sección de Valores",
            description: "Solo para página Sobre Mí",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Título de la sección",
              },
              {
                type: "string",
                name: "subtitle",
                label: "Subtítulo de la sección",
              },
              {
                type: "object",
                name: "values",
                label: "Valores",
                list: true,
                fields: [
                  {
                    type: "string",
                    name: "title",
                    label: "Título del valor",
                  },
                  {
                    type: "string",
                    name: "description",
                    label: "Descripción",
                    ui: {
                      component: "textarea",
                    },
                  },
                ],
              },
            ],
          },
          {
            type: "object",
            name: "testimonial",
            label: "Testimonio",
            description: "Solo para página Sobre Mí",
            fields: [
              {
                type: "string",
                name: "quote",
                label: "Cita del testimonio",
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "string",
                name: "author",
                label: "Autor del testimonio",
              },
              {
                type: "string",
                name: "role",
                label: "Cargo del autor",
              },
            ],
          },
          {
            type: "object",
            name: "ctaSection",
            label: "Sección CTA",
            description: "Solo para página Sobre Mí",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Título del CTA",
              },
              {
                type: "string",
                name: "description",
                label: "Descripción del CTA",
              },
              {
                type: "string",
                name: "buttonText",
                label: "Texto del botón",
              },
            ],
          },
          {
            type: "rich-text",
            name: "body",
            label: "Contenido principal",
            isBody: true,
          },
        ],
      },
    ],
  },
});