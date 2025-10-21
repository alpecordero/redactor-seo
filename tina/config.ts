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
                name: "aiStatistic",
                label: "Estadística sobre IA",
                ui: {
                  component: "textarea",
                  description: "Estadística que aparece después de los bullets. Soporta enlaces con formato markdown: [texto](url) y HTML básico como <strong> para negrita",
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
            ],
          },
          {
            type: "object",
            name: "bridgeSection",
            label: "5. Sección - Puente filosófico",
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
              {
                type: "string",
                name: "secondaryParagraph",
                label: "Párrafo secundario (opcional)",
                ui: {
                  component: "textarea",
                  description: "Texto adicional que aparecerá debajo del párrafo principal. Puedes usar enlaces con formato markdown: [texto](url)",
                },
              },
              {
                type: "string",
                name: "tertiaryParagraph",
                label: "Párrafo terciario (opcional)",
                ui: {
                  component: "textarea",
                  description: "Tercer párrafo opcional. Puedes usar enlaces con formato markdown: [texto](url)",
                },
              },
              {
                type: "string",
                name: "closingParagraph",
                label: "Párrafo de cierre (opcional)",
                ui: {
                  component: "textarea",
                  description: "Párrafo final de cierre. Puedes usar enlaces con formato markdown: [texto](url). Palabras como 'claridad y dos activos' aparecerán en negrita automáticamente.",
                },
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
            name: "featuredServiceSection",
            label: "7. Servicio Destacado",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Título principal (H2)",
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
                name: "benefit1",
                label: "Beneficio 1",
                required: true,
                ui: {
                  description: "Ej: 'Blog que genera autoridad'",
                },
              },
              {
                type: "string",
                name: "benefit2",
                label: "Beneficio 2",
                required: true,
                ui: {
                  description: "Ej: 'Web que cierra ventas'",
                },
              },
              {
                type: "string",
                name: "packLabel",
                label: "Etiqueta del pack",
                required: true,
                ui: {
                  description: "Ej: 'PACK LANZAMIENTO'",
                },
              },
              {
                type: "string",
                name: "packTitle",
                label: "Título del pack",
                required: true,
                ui: {
                  description: "Ej: 'Despegue digital completo'",
                },
              },
              {
                type: "string",
                name: "features",
                label: "Características incluidas (checks)",
                list: true,
                ui: {
                  description: "Lista de características que aparecerán con checks",
                },
              },
              {
                type: "string",
                name: "originalPrice",
                label: "Precio original",
                required: true,
                ui: {
                  description: "Ej: '1.798€'",
                },
              },
              {
                type: "string",
                name: "currentPrice",
                label: "Precio actual",
                required: true,
                ui: {
                  description: "Ej: '1.399€'",
                },
              },
              {
                type: "string",
                name: "savings",
                label: "Ahorro",
                required: true,
                ui: {
                  description: "Ej: '399€'",
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
              {
                type: "string",
                name: "alternativeServicesText",
                label: "Texto de servicios alternativos",
                ui: {
                  description: "Ej: 'Servicios individuales disponibles:'",
                },
              },
              {
                type: "object",
                name: "alternativeLinks",
                label: "Enlaces alternativos",
                list: true,
                fields: [
                  {
                    type: "string",
                    name: "text",
                    label: "Texto del enlace",
                    required: true,
                  },
                  {
                    type: "string",
                    name: "url",
                    label: "URL del enlace",
                    required: true,
                  },
                ],
              },
            ],
          },
          {
            type: "object",
            name: "testimonialsSection",
            label: "8. Testimonios de Clientes",
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
            label: "9. Sección - Call to Action Final",
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
                type: "string",
                name: "subtitle",
                label: "Subtítulo",
                required: false,
                ui: {
                  description: "Texto aclaratorio debajo del título (ej: '(tres pasos para conectar con tu audiencia)')",
                },
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
            label: "5. Precio y Qué Incluye - 3 Paquetes",
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
                type: "object",
                name: "commonFeatures",
                label: "Características comunes (debajo de los paquetes)",
                fields: [
                  {
                    type: "string",
                    name: "title",
                    label: "Título",
                    required: true,
                    ui: {
                      description: "Ej: 'Todos los paquetes incluyen:'",
                    },
                  },
                  {
                    type: "string",
                    name: "features",
                    label: "Características incluidas",
                    list: true,
                    required: true,
                    ui: {
                      description: "Lista de características comunes a todos los paquetes",
                    },
                  },
                  {
                    type: "string",
                    name: "additionalPage",
                    label: "Texto página adicional",
                    required: true,
                    ui: {
                      description: "Ej: 'Página adicional: +250€'",
                    },
                  },
                ],
              },
              {
                type: "object",
                name: "packages",
                label: "Paquetes de redacción web",
                list: true,
                ui: {
                  description: "Los 3 paquetes disponibles (Esencial, Completo, Premium)",
                },
                fields: [
                  {
                    type: "string",
                    name: "name",
                    label: "Nombre del paquete",
                    required: true,
                    ui: {
                      description: "Ej: 'Esencial', 'Completo', 'Premium'",
                    },
                  },
                  {
                    type: "string",
                    name: "pages",
                    label: "Número de páginas",
                    required: true,
                    ui: {
                      description: "Ej: '3 páginas', '5 páginas', '7 páginas'",
                    },
                  },
                  {
                    type: "string",
                    name: "price",
                    label: "Precio (solo número)",
                    required: true,
                    ui: {
                      description: "Ej: '899', '1399', '1799'",
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
                    name: "priceDescription",
                    label: "Descripción del precio",
                    required: true,
                    ui: {
                      description: "Ej: 'Para empezar con lo básico'",
                    },
                  },
                  {
                    type: "string",
                    name: "includes",
                    label: "Qué incluye",
                    list: true,
                    required: true,
                    ui: {
                      description: "Lista de características incluidas en el paquete",
                    },
                  },
                  {
                    type: "string",
                    name: "delivery",
                    label: "Información de entrega",
                    required: true,
                    ui: {
                      description: "Ej: '7 días laborables'",
                    },
                  },
                  {
                    type: "string",
                    name: "format",
                    label: "Información de formato",
                    required: true,
                    ui: {
                      description: "Ej: 'Textos listos para copiar y pegar'",
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
                  {
                    type: "boolean",
                    name: "isPopular",
                    label: "¿Es el más elegido?",
                    ui: {
                      description: "Marca esto para el paquete central (Completo) para destacarlo",
                    },
                  },
                ],
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
            label: "7. CTA Final",
            fields: [
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
        ],
      },
      {
        name: "redaccion_blog",
        nameOverride: "redaccion-blog",
        label: "Redacción Blog",
        path: "src/content/redaccion-blog",
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
                type: "string",
                name: "subtitle",
                label: "Subtítulo",
                required: false,
                ui: {
                  description: "Texto aclaratorio debajo del título (ej: '(y funciona mejor que el contenido genérico)')",
                },
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
            label: "5. Precio y Qué Incluye - 2 Paquetes",
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
                type: "object",
                name: "packages",
                label: "Paquetes de blog",
                list: true,
                ui: {
                  description: "Los 2 paquetes disponibles (Estándar, Intensivo)",
                },
                fields: [
                  {
                    type: "string",
                    name: "name",
                    label: "Nombre del paquete",
                    required: true,
                    ui: {
                      description: "Ej: 'Estándar', 'Intensivo'",
                    },
                  },
                  {
                    type: "string",
                    name: "articles",
                    label: "Número de artículos",
                    required: true,
                    ui: {
                      description: "Ej: '2 artículos', '4 artículos'",
                    },
                  },
                  {
                    type: "string",
                    name: "price",
                    label: "Precio (solo número)",
                    required: true,
                    ui: {
                      description: "Ej: '399', '599'",
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
                    name: "priceDescription",
                    label: "Descripción del precio",
                    required: true,
                    ui: {
                      description: "Ej: 'Para empezar con contenido estratégico'",
                    },
                  },
                  {
                    type: "string",
                    name: "includes",
                    label: "Qué incluye",
                    list: true,
                    required: true,
                    ui: {
                      description: "Lista de características incluidas en el paquete",
                    },
                  },
                  {
                    type: "string",
                    name: "delivery",
                    label: "Información de entrega",
                    required: true,
                    ui: {
                      description: "Ej: 'Entrega continua cada mes'",
                    },
                  },
                  {
                    type: "string",
                    name: "format",
                    label: "Información de formato",
                    required: true,
                    ui: {
                      description: "Ej: '2 artículos listos para publicar + calendario'",
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
                  {
                    type: "boolean",
                    name: "isPopular",
                    label: "¿Es el más elegido?",
                    ui: {
                      description: "Marca esto para el paquete Intensivo para destacarlo",
                    },
                  },
                ],
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
            label: "7. CTA Final",
            fields: [
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
            type: "string",
            name: "title",
            label: "Título principal",
            required: true,
            ui: {
              description: "Ej: 'Soy Álvaro'",
            },
          },
          {
            type: "string",
            name: "subtitle",
            label: "Subtítulo",
            ui: {
              description: "Ej: 'Redactor SEO' (opcional)",
            },
          },
          {
            type: "image",
            name: "profileImage",
            label: "Foto de perfil",
            required: true,
            ui: {
              description: "Tu foto de perfil que aparecerá debajo del subtítulo",
            },
          },
          {
            type: "string",
            name: "storyContent",
            label: "Historia - Contenido Principal",
            required: true,
            ui: {
              component: "textarea",
              description: "Tu historia completa. Separa los párrafos con dobles saltos de línea. Aproximadamente 600 palabras.",
            },
          },
          {
            type: "object",
            name: "cta",
            label: "Sección CTA (Llamada a la Acción)",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Título del CTA",
                required: true,
                ui: {
                  description: "Ej: '¿Listo para hacer crecer tu negocio?'",
                },
              },
              {
                type: "string",
                name: "description",
                label: "Descripción del CTA",
                required: true,
                ui: {
                  component: "textarea",
                  description: "Texto que aparece debajo del título",
                },
              },
              {
                type: "string",
                name: "buttonText",
                label: "Texto del botón",
                required: true,
                ui: {
                  description: "Ej: 'Empezar mi proyecto'",
                },
              },
              {
                type: "string",
                name: "buttonUrl",
                label: "URL del botón",
                required: true,
                ui: {
                  description: "Ruta a la que enlaza el botón (Ej: '/contacto')",
                },
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
                label: "Servicios principales (2 columnas)",
                list: true,
                ui: {
                  description: "Servicios que aparecen en dos columnas (Redacción Web y Redacción Blog)",
                },
                fields: [
                  {
                    type: "string",
                    name: "title",
                    label: "Título del servicio",
                    required: true,
                    ui: {
                      description: "Ej: 'Redacción Web', 'Redacción Blog'",
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
                      description: "Solo el número, ej: '399'",
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
                      description: "Ej: 'desde', 'desde / mes'",
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
                      description: "OBSOLETO - No se usa actualmente en el diseño",
                    },
                  },
                ],
              },
              {
                type: "object",
                name: "packInevitable",
                label: "Pack Inevitable (horizontal)",
                ui: {
                  description: "El pack especial que aparece primero en diseño horizontal",
                },
                fields: [
                  {
                    type: "string",
                    name: "packLabel",
                    label: "Etiqueta del pack",
                    required: true,
                    ui: {
                      description: "Ej: 'Blog + Web' - aparece en badge naranja",
                    },
                  },
                  {
                    type: "string",
                    name: "title",
                    label: "Título del pack",
                    required: true,
                    ui: {
                      description: "Ej: 'Pack Inevitable'",
                    },
                  },
                  {
                    type: "string",
                    name: "subtitle",
                    label: "Subtítulo",
                    required: true,
                    ui: {
                      description: "Ej: 'De invisible a inevitable'",
                    },
                  },
                  {
                    type: "string",
                    name: "benefits",
                    label: "Qué consigues (checks verdes)",
                    list: true,
                    required: true,
                    ui: {
                      description: "Beneficios principales del pack con checks verdes",
                    },
                  },
                  {
                    type: "string",
                    name: "features",
                    label: "Qué incluye (bullets grises)",
                    list: true,
                    required: true,
                    ui: {
                      description: "Características detalladas con bullets grises",
                    },
                  },
                  {
                    type: "string",
                    name: "currentPrice",
                    label: "Precio actual",
                    required: true,
                    ui: {
                      description: "Ej: '2.350€' - Se muestra PRIMERO",
                    },
                  },
                  {
                    type: "string",
                    name: "originalPrice",
                    label: "Valor separado (tachado)",
                    required: true,
                    ui: {
                      description: "Ej: '2.800€' - Se muestra como 'VALOR SEPARADO'",
                    },
                  },
                  {
                    type: "string",
                    name: "savings",
                    label: "Ahorro",
                    required: true,
                    ui: {
                      description: "Ej: '450€'",
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
                    name: "answer",
                    label: "Respuesta",
                    required: true,
                    ui: {
                      component: "textarea",
                      description: "Respuesta directa a la pregunta",
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "colaboraciones_agencias",
        nameOverride: "colaboraciones-agencias",
        label: "Colaboraciones Agencias",
        path: "src/content/colaboraciones-agencias",
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
                  description: "Ej: 'COLABORACIONES B2B'",
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
            name: "targetSection",
            label: "2. ¿Es para tu agencia?",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Título (H2)",
                required: true,
              },
              {
                type: "string",
                name: "intro",
                label: "Introducción",
                required: true,
                ui: {
                  component: "textarea",
                  description: "Texto introductorio bajo el título",
                },
              },
              {
                type: "object",
                name: "requirements",
                label: "Requisitos",
                list: true,
                fields: [
                  {
                    type: "string",
                    name: "title",
                    label: "Título del requisito",
                    required: true,
                    ui: {
                      description: "Ej: 'Mínimo 800€ por proyecto'",
                    },
                  },
                  {
                    type: "string",
                    name: "subtitle",
                    label: "Subtítulo (opcional)",
                    ui: {
                      description: "Ej: '(8 páginas)'",
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
                name: "disclaimer",
                label: "Disclaimer final",
                fields: [
                  {
                    type: "string",
                    name: "text1",
                    label: "Texto",
                    required: true,
                    ui: {
                      component: "textarea",
                    },
                  },
                ],
              },
              {
                type: "string",
                name: "ctaButtonText",
                label: "Texto del botón CTA",
                required: true,
              },
              {
                type: "string",
                name: "ctaLink",
                label: "Enlace del botón CTA",
                required: true,
                ui: {
                  description: "Ej: /contacto",
                },
              },
            ],
          },
          {
            type: "object",
            name: "workflowSection",
            label: "3. Cómo trabajamos",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Título (H2)",
                required: true,
              },
              {
                type: "string",
                name: "intro",
                label: "Introducción",
                required: true,
                ui: {
                  component: "textarea",
                  description: "Texto introductorio bajo el título",
                },
              },
              {
                type: "object",
                name: "steps",
                label: "Pasos del proceso",
                list: true,
                fields: [
                  {
                    type: "string",
                    name: "number",
                    label: "Número del paso",
                    required: true,
                    ui: {
                      description: "Ej: '1', '2', '3'...",
                    },
                  },
                  {
                    type: "string",
                    name: "title",
                    label: "Título del paso",
                    required: true,
                    ui: {
                      description: "Ej: 'Me envías brief del proyecto'",
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
            ],
          },
          {
            type: "object",
            name: "conditionsSection",
            label: "4. Precios para agencias",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Título (H2)",
                required: true,
              },
              {
                type: "string",
                name: "basePrice",
                label: "Precio base (número)",
                required: true,
                ui: {
                  description: "Ej: '125' (sin símbolo de moneda)",
                },
              },
              {
                type: "string",
                name: "currency",
                label: "Símbolo de moneda",
                required: true,
                ui: {
                  description: "Ej: '€'",
                },
              },
              {
                type: "string",
                name: "priceDescription",
                label: "Descripción del precio",
                required: true,
                ui: {
                  description: "Ej: 'por página'",
                },
              },
              {
                type: "string",
                name: "priceSubtext",
                label: "Subtexto del precio",
                required: true,
                ui: {
                  description: "Ej: 'máximo 1.000 palabras'",
                },
              },
              {
                type: "object",
                name: "conditions",
                label: "Condiciones (columnas)",
                list: true,
                fields: [
                  {
                    type: "string",
                    name: "title",
                    label: "Título",
                    required: true,
                    ui: {
                      description: "Ej: 'Páginas extensas'",
                    },
                  },
                  {
                    type: "string",
                    name: "description",
                    label: "Descripción",
                    required: true,
                    ui: {
                      description: "Ej: '+1.000 palabras: 185€'",
                    },
                  },
                ],
              },
              {
                type: "string",
                name: "ctaLink",
                label: "Enlace del botón CTA",
                required: true,
                ui: {
                  description: "Ej: '/contacto'",
                },
              },
              {
                type: "string",
                name: "ctaText",
                label: "Texto del botón CTA",
                required: true,
                ui: {
                  description: "Ej: 'Pide presupuesto'",
                },
              },
              {
                type: "string",
                name: "ctaSubtext",
                label: "Subtexto del CTA",
                required: true,
                ui: {
                  description: "Texto que aparece debajo del botón",
                },
              },
            ],
          },
          {
            type: "object",
            name: "includesSection",
            label: "5. Qué incluye",
            fields: [
              {
                type: "string",
                name: "heading",
                label: "Encabezado principal (H2)",
                required: true,
                ui: {
                  description: "Título grande de la sección, ej: 'Qué incluye el servicio'",
                },
              },
              {
                type: "string",
                name: "title",
                label: "Título columna izquierda (H3)",
                required: true,
                ui: {
                  description: "Ej: 'Qué incluyo'",
                },
              },
              {
                type: "string",
                name: "included",
                label: "Qué incluye (✓)",
                list: true,
                required: true,
              },
              {
                type: "string",
                name: "notIncludedTitle",
                label: "Título de lo que NO incluye",
                required: true,
              },
              {
                type: "string",
                name: "notIncluded",
                label: "Qué NO incluye (✗)",
                list: true,
                required: true,
              },
              {
                type: "string",
                name: "clarification",
                label: "Párrafo aclaratorio (opcional)",
                ui: {
                  component: "textarea",
                  description: "Texto que aparece debajo de las dos columnas",
                },
              },
            ],
          },
          {
            type: "object",
            name: "processSection",
            label: "6. Proceso (antiguo - puede eliminarse)",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Título (H2)",
                required: true,
              },
              {
                type: "object",
                name: "steps",
                label: "Pasos del proceso",
                list: true,
                fields: [
                  {
                    type: "string",
                    name: "number",
                    label: "Número del paso",
                    required: true,
                  },
                  {
                    type: "string",
                    name: "title",
                    label: "Título del paso",
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
            name: "faqSection",
            label: "7. Preguntas Frecuentes",
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
            label: "8. CTA Final",
            fields: [
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
        ],
      },
      {
        name: "pack_inevitable",
        nameOverride: "pack-inevitable",
        label: "Pack Inevitable",
        path: "src/content/pack-inevitable",
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
                label: "Título Principal (H1)",
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
            name: "problemSection",
            label: "2. Sección Problema",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Título (H2)",
                required: true,
              },
              {
                type: "string",
                name: "content",
                label: "Contenido",
                required: true,
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "string",
                name: "keywords",
                label: "Keywords SEO",
                list: true,
              },
            ],
          },
          {
            type: "object",
            name: "whatIncludesSection",
            label: "3. Qué Incluye Este Servicio",
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
                label: "Subtítulo explicativo",
                required: true,
                ui: {
                  component: "textarea",
                  description: "Texto que aparece debajo del título principal",
                },
              },
              {
                type: "object",
                name: "webRedaction",
                label: "Redacción Web",
                fields: [
                  {
                    type: "string",
                    name: "subtitle",
                    label: "Subtítulo (H3)",
                    required: true,
                  },
                  {
                    type: "string",
                    name: "description",
                    label: "Descripción",
                    required: true,
                    ui: {
                      component: "textarea",
                      description: "Párrafo explicativo que aparece debajo del subtítulo",
                    },
                  },
                  {
                    type: "string",
                    name: "items",
                    label: "Items incluidos",
                    list: true,
                    required: true,
                  },
                  {
                    type: "string",
                    name: "keywords",
                    label: "Keywords SEO",
                    list: true,
                  },
                ],
              },
              {
                type: "object",
                name: "strategicBlog",
                label: "Blog Estratégico",
                fields: [
                  {
                    type: "string",
                    name: "subtitle",
                    label: "Subtítulo (H3)",
                    required: true,
                  },
                  {
                    type: "string",
                    name: "description",
                    label: "Descripción",
                    required: true,
                    ui: {
                      component: "textarea",
                      description: "Párrafo explicativo que aparece debajo del subtítulo",
                    },
                  },
                  {
                    type: "string",
                    name: "items",
                    label: "Items incluidos",
                    list: true,
                    required: true,
                  },
                  {
                    type: "string",
                    name: "keywords",
                    label: "Keywords SEO",
                    list: true,
                  },
                ],
              },
            ],
          },
          {
            type: "object",
            name: "forWhomSection",
            label: "4. Para Quién es Este Servicio",
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
                label: "Subtítulo explicativo",
                required: true,
                ui: {
                  component: "textarea",
                  description: "Texto que aparece debajo del título",
                },
              },
              {
                type: "string",
                name: "items",
                label: "Lista de perfiles",
                list: true,
                required: true,
              },
              {
                type: "string",
                name: "keywords",
                label: "Keywords SEO",
                list: true,
              },
            ],
          },
          {
            type: "object",
            name: "investmentSection",
            label: "5. Inversión y Valor",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Título (H2)",
                required: true,
              },
              {
                type: "object",
                name: "comparison",
                label: "Tabla Comparativa",
                fields: [
                  {
                    type: "object",
                    name: "separate",
                    label: "Precios Por Separado",
                    fields: [
                      {
                        type: "object",
                        name: "webComplete",
                        label: "Web Completa",
                        fields: [
                          {
                            type: "string",
                            name: "label",
                            label: "Etiqueta",
                          },
                          {
                            type: "string",
                            name: "price",
                            label: "Precio",
                          },
                        ],
                      },
                      {
                        type: "object",
                        name: "blogFirst",
                        label: "Blog Primer Mes",
                        fields: [
                          {
                            type: "string",
                            name: "label",
                            label: "Etiqueta",
                          },
                          {
                            type: "string",
                            name: "price",
                            label: "Precio",
                          },
                        ],
                      },
                      {
                        type: "string",
                        name: "total",
                        label: "Total",
                      },
                    ],
                  },
                  {
                    type: "object",
                    name: "package",
                    label: "Precio del Paquete",
                    fields: [
                      {
                        type: "string",
                        name: "label",
                        label: "Etiqueta",
                      },
                      {
                        type: "string",
                        name: "price",
                        label: "Precio",
                      },
                    ],
                  },
                  {
                    type: "string",
                    name: "savings",
                    label: "Ahorro Total",
                  },
                ],
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
              {
                type: "string",
                name: "keywords",
                label: "Keywords SEO",
                list: true,
              },
            ],
          },
          {
            type: "object",
            name: "processSection",
            label: "6. Cómo Funciona el Proceso",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Título (H2)",
                required: true,
              },
              {
                type: "object",
                name: "steps",
                label: "Pasos del Proceso",
                list: true,
                fields: [
                  {
                    type: "string",
                    name: "number",
                    label: "Número del paso",
                    required: true,
                  },
                  {
                    type: "string",
                    name: "title",
                    label: "Título del paso",
                    required: true,
                  },
                  {
                    type: "string",
                    name: "duration",
                    label: "Duración",
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
                name: "keywords",
                label: "Keywords SEO",
                list: true,
              },
            ],
          },
          {
            type: "object",
            name: "faqSection",
            label: "7. Preguntas Frecuentes",
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
                label: "Preguntas",
                list: true,
                fields: [
                  {
                    type: "string",
                    name: "question",
                    label: "Pregunta (H3)",
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
              {
                type: "string",
                name: "keywords",
                label: "Keywords SEO",
                list: true,
              },
            ],
          },
          {
            type: "object",
            name: "testimonialsSection",
            label: "8. Testimonios",
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
                      description: "El texto del testimonio del cliente",
                    },
                  },
                  {
                    type: "string",
                    name: "author",
                    label: "Autor",
                    required: true,
                    ui: {
                      description: "Nombre y cargo del cliente (ej: María González, Consultora de marketing)",
                    },
                  },
                ],
              },
            ],
          },
          {
            type: "object",
            name: "finalCtaSection",
            label: "9. CTA Final",
            fields: [
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
        ],
      },
      {
        name: "error404",
        label: "Página 404",
        path: "src/content/404",
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
              },
              {
                type: "string",
                name: "description",
                label: "Meta descripción",
                required: true,
              },
              {
                type: "boolean",
                name: "noindex",
                label: "No indexar en buscadores",
                required: true,
              },
            ],
          },
          {
            type: "object",
            name: "hero",
            label: "Sección Principal",
            fields: [
              {
                type: "string",
                name: "errorCode",
                label: "Código de error",
                required: true,
                ui: {
                  description: "Ej: 404",
                },
              },
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
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "object",
                name: "primaryCta",
                label: "Botón principal",
                fields: [
                  {
                    type: "string",
                    name: "text",
                    label: "Texto del botón",
                    required: true,
                  },
                  {
                    type: "string",
                    name: "link",
                    label: "Enlace",
                    required: true,
                  },
                ],
              },
              {
                type: "object",
                name: "secondaryCta",
                label: "Botón secundario",
                fields: [
                  {
                    type: "string",
                    name: "text",
                    label: "Texto del botón",
                    required: true,
                  },
                  {
                    type: "string",
                    name: "link",
                    label: "Enlace",
                    required: true,
                  },
                ],
              },
            ],
          },
          {
            type: "object",
            name: "suggestions",
            label: "Sugerencias",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Título de la sección",
                required: true,
              },
              {
                type: "object",
                name: "links",
                label: "Enlaces sugeridos",
                list: true,
                fields: [
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
                  },
                  {
                    type: "string",
                    name: "link",
                    label: "Enlace",
                    required: true,
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