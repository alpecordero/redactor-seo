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
            name: "seo",
            label: "SEO",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Título SEO",
                required: true,
                ui: {
                  description: "Título que aparece en Google (máx. 60 caracteres)",
                },
              },
              {
                type: "string",
                name: "description",
                label: "Meta descripción",
                required: true,
                ui: {
                  component: "textarea",
                  description: "Descripción que aparece en Google (máx. 160 caracteres)",
                },
              },
            ],
          },
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
                  description: "Texto explicativo que conecta la filosofía con la propuesta. Puedes usar enlaces con formato markdown: [texto](url)",
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
            name: "testimonialsSection",
            label: "6.5. Testimonios de Clientes",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Título de la sección",
                required: true,
              },
              {
                type: "string",
                name: "subtitle",
                label: "Subtítulo",
                required: true,
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "object",
                name: "testimonials",
                label: "Testimonios",
                list: true,
                fields: [
                  {
                    type: "string",
                    name: "name",
                    label: "Nombre del cliente",
                    required: true,
                  },
                  {
                    type: "string",
                    name: "company",
                    label: "Empresa/Posición",
                    required: true,
                  },
                  {
                    type: "string",
                    name: "testimonial",
                    label: "Testimonio",
                    required: true,
                    ui: {
                      component: "textarea",
                    },
                  },
                  {
                    type: "image",
                    name: "image",
                    label: "Foto del cliente",
                    required: true,
                  },
                  {
                    type: "string",
                    name: "link",
                    label: "Enlace web/perfil",
                    ui: {
                      description: "URL a su web, LinkedIn o perfil profesional",
                    },
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
      {
        name: "auditoria",
        label: "Auditoría de Contenido",
        path: "src/content/auditoria",
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
            name: "seo",
            label: "SEO",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Título SEO",
                required: true,
                ui: {
                  description: "Título que aparece en Google (máx. 60 caracteres)",
                },
              },
              {
                type: "string",
                name: "description",
                label: "Meta descripción",
                required: true,
                ui: {
                  component: "textarea",
                  description: "Descripción que aparece en Google (máx. 160 caracteres)",
                },
              },
            ],
          },
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
                ui: {
                  description: "Ej: 'AUDITORÍA DE CONTENIDO'",
                },
              },
              {
                type: "string",
                name: "titlePart1",
                label: "Título - Parte 1 (Negro)",
                required: true,
                ui: {
                  description: "Primera parte del título que aparece en negro",
                },
              },
              {
                type: "string",
                name: "titlePart2",
                label: "Título - Parte 2 (Naranja)",
                required: true,
                ui: {
                  description: "Segunda parte del título que aparece en naranja",
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
              {
                type: "string",
                name: "ctaText",
                label: "Texto del botón CTA",
                required: true,
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
            name: "problemsSection",
            label: "2. Sección Problemas",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Título (H2)",
                required: true,
              },
              {
                type: "string",
                name: "subtitle",
                label: "Subtítulo",
                required: true,
              },
              {
                type: "object",
                name: "problems",
                label: "Problemas",
                list: true,
                fields: [
                  {
                    type: "string",
                    name: "problem",
                    label: "Problema (izquierda)",
                    required: true,
                  },
                  {
                    type: "string",
                    name: "consequence",
                    label: "Consecuencia (derecha)",
                    required: true,
                  },
                ],
              },
              {
                type: "string",
                name: "closingText",
                label: "Texto de cierre",
                required: true,
                ui: {
                  component: "textarea",
                },
              },
            ],
          },
          {
            type: "object",
            name: "approachSection",
            label: "3. Mi Enfoque",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Título (H2)",
                required: true,
              },
              {
                type: "object",
                name: "points",
                label: "Puntos del enfoque",
                list: true,
                fields: [
                  {
                    type: "string",
                    name: "title",
                    label: "Título del punto",
                    required: true,
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
                type: "string",
                name: "conclusion",
                label: "Texto de conclusión",
                required: true,
              },
            ],
          },
          {
            type: "object",
            name: "testimonialsSection",
            label: "4. Casos de Éxito",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Título (H2)",
                required: true,
              },
              {
                type: "object",
                name: "testimonials",
                label: "Testimonios",
                list: true,
                fields: [
                  {
                    type: "string",
                    name: "quote",
                    label: "Testimonio",
                    required: true,
                    ui: {
                      component: "textarea",
                    },
                  },
                  {
                    type: "string",
                    name: "author",
                    label: "Autor",
                    required: true,
                  },
                ],
              },
            ],
          },
          {
            type: "object",
            name: "pricingSection",
            label: "5. Precio y Qué Incluye",
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
                label: "Subtítulo explicativo",
                required: true,
              },
              {
                type: "string",
                name: "price",
                label: "Precio (solo número)",
                required: true,
              },
              {
                type: "string",
                name: "currency",
                label: "Moneda",
                required: true,
              },
              {
                type: "string",
                name: "priceDescription",
                label: "Descripción del precio",
                required: true,
              },
              {
                type: "string",
                name: "includes",
                label: "Qué incluye",
                list: true,
                required: true,
              },
              {
                type: "string",
                name: "delivery",
                label: "Información de entrega",
                required: true,
              },
              {
                type: "string",
                name: "format",
                label: "Información de formato",
                required: true,
              },
              {
                type: "string",
                name: "ctaText",
                label: "Texto del botón CTA",
                required: true,
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
            name: "faqSection",
            label: "6. Preguntas Frecuentes",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Título (H2)",
                required: true,
              },
              {
                type: "object",
                name: "questions",
                label: "Preguntas y Respuestas",
                list: true,
                fields: [
                  {
                    type: "string",
                    name: "question",
                    label: "Pregunta",
                    required: true,
                  },
                  {
                    type: "string",
                    name: "answer",
                    label: "Respuesta",
                    required: true,
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
            name: "finalCtaSection",
            label: "7. CTA Final + Garantía",
            fields: [
              {
                type: "string",
                name: "guaranteeEmoji",
                label: "Emoji de la garantía",
                required: true,
              },
              {
                type: "string",
                name: "guaranteeTitle",
                label: "Título de la garantía",
                required: true,
              },
              {
                type: "string",
                name: "guaranteeDescription",
                label: "Descripción de la garantía",
                required: true,
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "string",
                name: "title",
                label: "Título del resumen",
                required: true,
              },
              {
                type: "string",
                name: "features",
                label: "Características incluidas",
                list: true,
                required: true,
              },
              {
                type: "string",
                name: "price",
                label: "Precio final (solo número)",
                required: true,
              },
              {
                type: "string",
                name: "currency",
                label: "Moneda",
                required: true,
              },
              {
                type: "string",
                name: "priceNote",
                label: "Nota del precio",
                required: true,
              },
              {
                type: "string",
                name: "ctaText",
                label: "Texto del botón CTA final",
                required: true,
              },
              {
                type: "string",
                name: "ctaLink",
                label: "Enlace del botón CTA final",
                required: true,
              },
              {
                type: "string",
                name: "securityNote",
                label: "Nota de seguridad",
                required: true,
              },
            ],
          },
        ],
      },
      {
        name: "redaccion_web",
        nameOverride: "redaccion-web",
        label: "Redacción Web",
        path: "src/content/redaccion-web",
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
            name: "seo",
            label: "SEO",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Título SEO",
                required: true,
                ui: {
                  description: "Título que aparece en Google (máx. 60 caracteres)",
                },
              },
              {
                type: "string",
                name: "description",
                label: "Meta descripción",
                required: true,
                ui: {
                  component: "textarea",
                  description: "Descripción que aparece en Google (máx. 160 caracteres)",
                },
              },
            ],
          },
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
                ui: {
                  description: "Ej: 'REDACCIÓN WEB COMPLETA'",
                },
              },
              {
                type: "string",
                name: "titlePart1",
                label: "Título - Parte 1 (Negro)",
                required: true,
                ui: {
                  description: "Primera parte del título que aparece en negro",
                },
              },
              {
                type: "string",
                name: "titlePart2",
                label: "Título - Parte 2 (Naranja)",
                required: true,
                ui: {
                  description: "Segunda parte del título que aparece en naranja",
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
              {
                type: "string",
                name: "ctaText",
                label: "Texto del botón CTA",
                required: true,
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
            name: "problemsSection",
            label: "2. Sección Problemas",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Título (H2)",
                required: true,
              },
              {
                type: "string",
                name: "subtitle",
                label: "Subtítulo",
                required: true,
              },
              {
                type: "object",
                name: "problems",
                label: "Problemas",
                list: true,
                fields: [
                  {
                    type: "string",
                    name: "problem",
                    label: "Problema (izquierda)",
                    required: true,
                  },
                  {
                    type: "string",
                    name: "consequence",
                    label: "Consecuencia (derecha)",
                    required: true,
                  },
                ],
              },
              {
                type: "string",
                name: "closingText",
                label: "Texto de cierre",
                required: true,
                ui: {
                  component: "textarea",
                },
              },
            ],
          },
          {
            type: "object",
            name: "approachSection",
            label: "3. Mi Método",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Título (H2)",
                required: true,
              },
              {
                type: "object",
                name: "points",
                label: "Puntos del método",
                list: true,
                fields: [
                  {
                    type: "string",
                    name: "title",
                    label: "Título del punto",
                    required: true,
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
                type: "string",
                name: "conclusion",
                label: "Texto de conclusión",
                required: true,
              },
            ],
          },
          {
            type: "object",
            name: "testimonialsSection",
            label: "4. Casos de Éxito",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Título (H2)",
                required: true,
              },
              {
                type: "object",
                name: "testimonials",
                label: "Testimonios",
                list: true,
                fields: [
                  {
                    type: "string",
                    name: "quote",
                    label: "Testimonio",
                    required: true,
                    ui: {
                      component: "textarea",
                    },
                  },
                  {
                    type: "string",
                    name: "author",
                    label: "Autor",
                    required: true,
                  },
                ],
              },
            ],
          },
          {
            type: "object",
            name: "pricingSection",
            label: "5. Precio y Qué Incluye",
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
                label: "Subtítulo explicativo",
                required: true,
              },
              {
                type: "string",
                name: "price",
                label: "Precio (solo número)",
                required: true,
              },
              {
                type: "string",
                name: "currency",
                label: "Moneda",
                required: true,
              },
              {
                type: "string",
                name: "priceDescription",
                label: "Descripción del precio",
                required: true,
              },
              {
                type: "string",
                name: "includes",
                label: "Qué incluye",
                list: true,
                required: true,
              },
              {
                type: "string",
                name: "delivery",
                label: "Información de entrega",
                required: true,
              },
              {
                type: "string",
                name: "format",
                label: "Información de formato",
                required: true,
              },
              {
                type: "string",
                name: "ctaText",
                label: "Texto del botón CTA",
                required: true,
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
            name: "faqSection",
            label: "6. Preguntas Frecuentes",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Título (H2)",
                required: true,
              },
              {
                type: "object",
                name: "questions",
                label: "Preguntas y Respuestas",
                list: true,
                fields: [
                  {
                    type: "string",
                    name: "question",
                    label: "Pregunta",
                    required: true,
                  },
                  {
                    type: "string",
                    name: "answer",
                    label: "Respuesta",
                    required: true,
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
            name: "finalCtaSection",
            label: "7. CTA Final + Garantía",
            fields: [
              {
                type: "string",
                name: "guaranteeEmoji",
                label: "Emoji de la garantía",
                required: true,
              },
              {
                type: "string",
                name: "guaranteeTitle",
                label: "Título de la garantía",
                required: true,
              },
              {
                type: "string",
                name: "guaranteeDescription",
                label: "Descripción de la garantía",
                required: true,
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "string",
                name: "title",
                label: "Título del resumen",
                required: true,
              },
              {
                type: "string",
                name: "features",
                label: "Características incluidas",
                list: true,
                required: true,
              },
              {
                type: "string",
                name: "price",
                label: "Precio final (solo número)",
                required: true,
              },
              {
                type: "string",
                name: "currency",
                label: "Moneda",
                required: true,
              },
              {
                type: "string",
                name: "priceNote",
                label: "Nota del precio",
                required: true,
              },
              {
                type: "string",
                name: "ctaText",
                label: "Texto del botón CTA final",
                required: true,
              },
              {
                type: "string",
                name: "ctaLink",
                label: "Enlace del botón CTA final",
                required: true,
              },
              {
                type: "string",
                name: "securityNote",
                label: "Nota de seguridad",
                required: true,
              },
            ],
          },
        ],
      },
      {
        name: "redaccion_estrategica_blogs",
        nameOverride: "redaccion-estrategica-blogs",
        label: "Redacción Estratégica Blogs",
        path: "src/content/redaccion-estrategica-blogs",
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
            name: "seo",
            label: "SEO",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Título SEO",
                required: true,
                ui: {
                  description: "Título que aparece en Google (máx. 60 caracteres)",
                },
              },
              {
                type: "string",
                name: "description",
                label: "Meta descripción",
                required: true,
                ui: {
                  component: "textarea",
                  description: "Descripción que aparece en Google (máx. 160 caracteres)",
                },
              },
            ],
          },
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
                ui: {
                  description: "Ej: 'REDACCIÓN ESTRATÉGICA PARA BLOGS'",
                },
              },
              {
                type: "string",
                name: "titlePart1",
                label: "Título - Parte 1 (Negro)",
                required: true,
                ui: {
                  description: "Primera parte del título que aparece en negro",
                },
              },
              {
                type: "string",
                name: "titlePart2",
                label: "Título - Parte 2 (Naranja)",
                required: true,
                ui: {
                  description: "Segunda parte del título que aparece en naranja",
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
              {
                type: "string",
                name: "ctaText",
                label: "Texto del botón CTA",
                required: true,
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
            name: "problemsSection",
            label: "2. Sección Problemas",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Título (H2)",
                required: true,
              },
              {
                type: "string",
                name: "subtitle",
                label: "Subtítulo",
                required: true,
              },
              {
                type: "object",
                name: "problems",
                label: "Problemas",
                list: true,
                fields: [
                  {
                    type: "string",
                    name: "problem",
                    label: "Problema (izquierda)",
                    required: true,
                  },
                  {
                    type: "string",
                    name: "consequence",
                    label: "Consecuencia (derecha)",
                    required: true,
                  },
                ],
              },
              {
                type: "string",
                name: "closingText",
                label: "Texto de cierre",
                required: true,
                ui: {
                  component: "textarea",
                },
              },
            ],
          },
          {
            type: "object",
            name: "approachSection",
            label: "3. Mi Estrategia",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Título (H2)",
                required: true,
              },
              {
                type: "object",
                name: "points",
                label: "Puntos de la estrategia",
                list: true,
                fields: [
                  {
                    type: "string",
                    name: "title",
                    label: "Título del punto",
                    required: true,
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
                type: "string",
                name: "conclusion",
                label: "Texto de conclusión",
                required: true,
              },
            ],
          },
          {
            type: "object",
            name: "testimonialsSection",
            label: "4. Casos de Éxito",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Título (H2)",
                required: true,
              },
              {
                type: "object",
                name: "testimonials",
                label: "Testimonios",
                list: true,
                fields: [
                  {
                    type: "string",
                    name: "quote",
                    label: "Testimonio",
                    required: true,
                    ui: {
                      component: "textarea",
                    },
                  },
                  {
                    type: "string",
                    name: "author",
                    label: "Autor",
                    required: true,
                  },
                ],
              },
            ],
          },
          {
            type: "object",
            name: "pricingSection",
            label: "5. Precio y Qué Incluye",
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
                label: "Subtítulo explicativo",
                required: true,
              },
              {
                type: "string",
                name: "price",
                label: "Precio (solo número)",
                required: true,
              },
              {
                type: "string",
                name: "currency",
                label: "Moneda",
                required: true,
              },
              {
                type: "string",
                name: "priceDescription",
                label: "Descripción del precio",
                required: true,
              },
              {
                type: "string",
                name: "includes",
                label: "Qué incluye",
                list: true,
                required: true,
              },
              {
                type: "string",
                name: "delivery",
                label: "Información de entrega",
                required: true,
              },
              {
                type: "string",
                name: "format",
                label: "Información de formato",
                required: true,
              },
              {
                type: "string",
                name: "ctaText",
                label: "Texto del botón CTA",
                required: true,
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
            name: "faqSection",
            label: "6. Preguntas Frecuentes",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Título (H2)",
                required: true,
              },
              {
                type: "object",
                name: "questions",
                label: "Preguntas y Respuestas",
                list: true,
                fields: [
                  {
                    type: "string",
                    name: "question",
                    label: "Pregunta",
                    required: true,
                  },
                  {
                    type: "string",
                    name: "answer",
                    label: "Respuesta",
                    required: true,
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
            name: "finalCtaSection",
            label: "7. CTA Final + Garantía",
            fields: [
              {
                type: "string",
                name: "guaranteeEmoji",
                label: "Emoji de la garantía",
                required: true,
              },
              {
                type: "string",
                name: "guaranteeTitle",
                label: "Título de la garantía",
                required: true,
              },
              {
                type: "string",
                name: "guaranteeDescription",
                label: "Descripción de la garantía",
                required: true,
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "string",
                name: "title",
                label: "Título del resumen",
                required: true,
              },
              {
                type: "string",
                name: "features",
                label: "Características incluidas",
                list: true,
                required: true,
              },
              {
                type: "string",
                name: "price",
                label: "Precio final (solo número)",
                required: true,
              },
              {
                type: "string",
                name: "currency",
                label: "Moneda",
                required: true,
              },
              {
                type: "string",
                name: "priceNote",
                label: "Nota del precio",
                required: true,
              },
              {
                type: "string",
                name: "ctaText",
                label: "Texto del botón CTA final",
                required: true,
              },
              {
                type: "string",
                name: "ctaLink",
                label: "Enlace del botón CTA final",
                required: true,
              },
              {
                type: "string",
                name: "securityNote",
                label: "Nota de seguridad",
                required: true,
              },
            ],
          },
        ],
      },
      {
        name: "contact_page",
        label: "Página de Contacto",
        path: "src/content/contacto",
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
            name: "seo",
            label: "SEO",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Título SEO",
                required: true,
                ui: {
                  description: "Título que aparece en Google (máx. 60 caracteres)",
                },
              },
              {
                type: "string",
                name: "description",
                label: "Meta descripción",
                required: true,
                ui: {
                  component: "textarea",
                  description: "Descripción que aparece en Google (máx. 160 caracteres)",
                },
              },
            ],
          },
          {
            type: "object",
            name: "hero",
            label: "1. Sección Hero",
            fields: [
              {
                type: "string",
                name: "titlePart1",
                label: "Título - Parte 1 (Negro)",
                required: true,
                ui: {
                  description: "Primera parte del título que aparece en negro",
                },
              },
              {
                type: "string",
                name: "titlePart2",
                label: "Título - Parte 2 (Naranja)",
                required: true,
                ui: {
                  description: "Segunda parte del título que aparece en naranja",
                },
              },
              {
                type: "string",
                name: "description",
                label: "Descripción",
                required: true,
                ui: {
                  description: "Texto descriptivo que aparece debajo del título",
                },
              },
            ],
          },
          {
            type: "object",
            name: "form",
            label: "2. Formulario de Contacto",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Título del formulario",
                required: true,
              },
              {
                type: "object",
                name: "services",
                label: "Opciones de servicios",
                list: true,
                fields: [
                  {
                    type: "string",
                    name: "value",
                    label: "Valor (para el formulario)",
                    required: true,
                  },
                  {
                    type: "string",
                    name: "label",
                    label: "Texto mostrado",
                    required: true,
                  },
                ],
              },
              {
                type: "string",
                name: "submitButtonText",
                label: "Texto del botón de envío",
                required: true,
              },
              {
                type: "string",
                name: "privacyPolicyText",
                label: "Texto de política de privacidad",
                required: true,
                ui: {
                  component: "textarea",
                  description: "Usa [texto](url) para enlaces",
                },
              },
            ],
          },
          {
            type: "object",
            name: "contactInfo",
            label: "3. Información de Contacto",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Título de la sección",
                required: true,
              },
              {
                type: "string",
                name: "email",
                label: "Dirección de email",
                required: true,
              },
              {
                type: "string",
                name: "responseTime",
                label: "Tiempo de respuesta",
                required: true,
              },
            ],
          },
          {
            type: "object",
            name: "messages",
            label: "4. Mensajes del Sistema",
            fields: [
              {
                type: "string",
                name: "successMessage",
                label: "Mensaje de éxito",
                required: true,
              },
              {
                type: "string",
                name: "errorMessage",
                label: "Mensaje de error",
                required: true,
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "string",
                name: "loadingText",
                label: "Texto durante el envío",
                required: true,
              },
            ],
          },
        ],
      },
      {
        name: "sobre_mi",
        label: "Sobre Mí",
        path: "src/content/sobre-mi",
        format: "json",
        nameOverride: "sobre-mi",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            type: "object",
            name: "seo",
            label: "SEO",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Título SEO",
                required: true,
                ui: {
                  description: "Título que aparece en Google (máx. 60 caracteres)",
                },
              },
              {
                type: "string",
                name: "description",
                label: "Meta descripción",
                required: true,
                ui: {
                  component: "textarea",
                  description: "Descripción que aparece en Google (máx. 160 caracteres)",
                },
              },
            ],
          },
          {
            type: "object",
            name: "hero",
            label: "1. Sección Hero",
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
                label: "Subtítulo",
                required: true,
              },
              {
                type: "string",
                name: "introduction",
                label: "Introducción",
                required: true,
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "image",
                name: "profileImage",
                label: "Imagen de perfil",
                required: true,
              },
            ],
          },
          {
            type: "object",
            name: "experienceSection",
            label: "2. Sección de Experiencia",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Título de la sección",
                required: true,
              },
              {
                type: "string",
                name: "subtitle",
                label: "Subtítulo de la sección",
                required: true,
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
                    required: true,
                  },
                  {
                    type: "string",
                    name: "title",
                    label: "Título",
                    required: true,
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
            ],
          },
          {
            type: "object",
            name: "storySection",
            label: "3. Sección Historia - Título y Subtítulo",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Título de la sección",
                required: true,
                ui: {
                  description: "Ej: 'Mi historia con el SEO'",
                },
              },
              {
                type: "string",
                name: "subtitle",
                label: "Subtítulo de la sección",
                required: true,
                ui: {
                  description: "Ej: 'De marketer tradicional a especialista en contenido que convierte'",
                },
              },
            ],
          },
          {
            type: "string",
            name: "storyContent",
            label: "3.1. Historia - Contenido Principal",
            required: true,
            ui: {
              component: "textarea",
              description: "El contenido principal de la página (Mi historia, Mi enfoque, etc.)",
            },
          },
          {
            type: "object",
            name: "testimonial",
            label: "4. Testimonio Principal",
            fields: [
              {
                type: "string",
                name: "quote",
                label: "Cita del testimonio",
                required: true,
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "string",
                name: "author",
                label: "Autor del testimonio",
                required: true,
              },
              {
                type: "string",
                name: "role",
                label: "Cargo del autor",
                required: true,
              },
            ],
          },
          {
            type: "object",
            name: "ctaSection",
            label: "5. Sección CTA Final",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Título del CTA",
                required: true,
              },
              {
                type: "string",
                name: "description",
                label: "Descripción del CTA",
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
        name: "servicios_page",
        label: "Página de Servicios",
        path: "src/content/servicios",
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
            name: "seo",
            label: "SEO",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Título SEO",
                required: true,
                ui: {
                  description: "Título que aparece en Google (máx. 60 caracteres)",
                },
              },
              {
                type: "string",
                name: "description",
                label: "Meta descripción",
                required: true,
                ui: {
                  component: "textarea",
                  description: "Descripción que aparece en Google (máx. 160 caracteres)",
                },
              },
              {
                type: "string",
                name: "keywords",
                label: "Palabras clave",
                ui: {
                  description: "Palabras clave separadas por comas",
                },
              },
              {
                type: "string",
                name: "ogTitle",
                label: "Título Open Graph",
                ui: {
                  description: "Título para redes sociales (opcional, usa el título SEO si está vacío)",
                },
              },
              {
                type: "string",
                name: "ogDescription",
                label: "Descripción Open Graph",
                ui: {
                  component: "textarea",
                  description: "Descripción para redes sociales (opcional, usa la meta descripción si está vacía)",
                },
              },
              {
                type: "image",
                name: "ogImage",
                label: "Imagen Open Graph",
                ui: {
                  description: "Imagen para redes sociales (1200x630px recomendado)",
                },
              },
              {
                type: "string",
                name: "canonicalUrl",
                label: "URL Canónica",
                ui: {
                  description: "URL canónica (opcional, se genera automáticamente si está vacía)",
                },
              },
              {
                type: "boolean",
                name: "noindex",
                label: "No indexar página",
                ui: {
                  description: "Marcar para evitar que los motores de búsqueda indexen esta página",
                },
              },
            ],
          },
          {
            type: "object",
            name: "hero",
            label: "1. Sección Hero",
            fields: [
              {
                type: "string",
                name: "titlePart1",
                label: "Título - Parte 1 (Negro)",
                required: true,
                ui: {
                  description: "Ej: 'Tres formas de'",
                },
              },
              {
                type: "string",
                name: "titlePart2",
                label: "Título - Parte 2 (Naranja)",
                required: true,
                ui: {
                  description: "Ej: 'trabajar conmigo'",
                },
              },
              {
                type: "string",
                name: "description",
                label: "Descripción",
                required: true,
                ui: {
                  component: "textarea",
                  description: "Texto descriptivo bajo el título",
                },
              },
            ],
          },
          {
            type: "object",
            name: "servicePackages",
            label: "2. Paquetes de Servicios",
            fields: [
              {
                type: "object",
                name: "packages",
                label: "Servicios disponibles",
                list: true,
                fields: [
                  {
                    type: "string",
                    name: "title",
                    label: "Título del servicio",
                    required: true,
                    ui: {
                      description: "Ej: 'Auditoría', 'Redacción Web', 'Blog Estratégico'",
                    },
                  },
                  {
                    type: "string",
                    name: "subtitle",
                    label: "Subtítulo descriptivo",
                    required: true,
                    ui: {
                      description: "Pregunta o descripción breve",
                    },
                  },
                  {
                    type: "string",
                    name: "price",
                    label: "Precio",
                    required: true,
                    ui: {
                      description: "Solo el número, ej: '599'",
                    },
                  },
                  {
                    type: "string",
                    name: "currency",
                    label: "Moneda",
                    required: true,
                    ui: {
                      description: "Ej: '€'",
                    },
                  },
                  {
                    type: "string",
                    name: "priceNote",
                    label: "Nota del precio",
                    ui: {
                      description: "Ej: 'Una sola vez', '/mes durante 3 meses'",
                    },
                  },
                  {
                    type: "string",
                    name: "features",
                    label: "Características incluidas",
                    list: true,
                    required: true,
                    ui: {
                      description: "Lista de características o beneficios",
                    },
                  },
                  {
                    type: "string",
                    name: "ctaText",
                    label: "Texto del botón",
                    required: true,
                  },
                  {
                    type: "string",
                    name: "ctaLink",
                    label: "Enlace del botón",
                    required: true,
                  },
                  {
                    type: "boolean",
                    name: "isPopular",
                    label: "¿Es el más popular?",
                    ui: {
                      description: "Marcar para mostrar badge 'MÁS POPULAR'",
                    },
                  },
                ],
              },
              {
                type: "object",
                name: "customProjects",
                label: "Sección Proyectos Personalizados",
                fields: [
                  {
                    type: "string",
                    name: "description",
                    label: "Descripción",
                    required: true,
                    ui: {
                      component: "textarea",
                    },
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
            name: "faqSection",
            label: "3. Preguntas Frecuentes",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Título principal",
                required: true,
                ui: {
                  description: "Ej: '¿Cuál servicio necesito?'",
                },
              },
              {
                type: "string",
                name: "subtitle",
                label: "Subtítulo",
                required: true,
                ui: {
                  description: "Descripción bajo el título",
                },
              },
              {
                type: "object",
                name: "questions",
                label: "Preguntas y Respuestas",
                list: true,
                fields: [
                  {
                    type: "string",
                    name: "question",
                    label: "Pregunta",
                    required: true,
                  },
                  {
                    type: "string",
                    name: "answerTitle",
                    label: "Título de la respuesta",
                    required: true,
                    ui: {
                      description: "Texto en negrita, ej: 'Empieza con Audit (€1.495)'",
                    },
                  },
                  {
                    type: "string",
                    name: "answerText",
                    label: "Texto de la respuesta",
                    required: true,
                    ui: {
                      component: "textarea",
                      description: "Explicación detallada",
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
});