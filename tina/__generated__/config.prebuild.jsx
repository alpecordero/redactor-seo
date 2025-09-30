// tina/config.ts
import { defineConfig } from "tinacms";
var config_default = defineConfig({
  branch: "main",
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
        name: "homepage",
        label: "Homepage",
        path: "src/content/homepage",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false
          }
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
                label: "T\xEDtulo SEO",
                required: true,
                ui: {
                  description: "T\xEDtulo que aparece en Google (m\xE1x. 60 caracteres)"
                }
              },
              {
                type: "string",
                name: "description",
                label: "Meta descripci\xF3n",
                required: true,
                ui: {
                  component: "textarea",
                  description: "Descripci\xF3n que aparece en Google (m\xE1x. 160 caracteres)"
                }
              }
            ]
          },
          {
            type: "object",
            name: "hero",
            label: "1. Secci\xF3n Hero",
            fields: [
              {
                type: "string",
                name: "subtitle",
                label: "Subt\xEDtulo",
                required: true
              },
              {
                type: "string",
                name: "title",
                label: "T\xEDtulo Principal",
                required: true,
                ui: {
                  component: "textarea"
                }
              },
              {
                type: "string",
                name: "description",
                label: "Descripci\xF3n",
                required: true
              },
              {
                type: "string",
                name: "candleMessages",
                label: "Mensajes de las velas",
                list: true,
                required: true,
                ui: {
                  description: "Mensajes que aparecen al hacer clic en 'Enciende una vela'"
                }
              }
            ]
          },
          {
            type: "object",
            name: "googleDeathSection",
            label: "2. Secci\xF3n - El buscador de Google ha muerto",
            fields: [
              {
                type: "string",
                name: "title",
                label: "T\xEDtulo (H2)",
                required: true
              },
              {
                type: "string",
                name: "paragraph",
                label: "P\xE1rrafo principal",
                required: true,
                ui: {
                  component: "textarea"
                }
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
                      component: "textarea"
                    }
                  }
                ]
              },
              {
                type: "string",
                name: "closingPhrase",
                label: "Frase de cierre",
                required: true,
                ui: {
                  component: "textarea",
                  description: "Frase que aparecer\xE1 al final de la secci\xF3n, despu\xE9s de los elementos con checkbox"
                }
              }
            ]
          },
          {
            type: "object",
            name: "painPointsSection",
            label: "3. Secci\xF3n - Dolores del cliente",
            fields: [
              {
                type: "string",
                name: "title",
                label: "T\xEDtulo (H2)",
                required: true
              },
              {
                type: "string",
                name: "subtitleFirstPart",
                label: "Subt\xEDtulo",
                required: true,
                ui: {
                  component: "textarea",
                  description: "Subt\xEDtulo que aparecer\xE1 debajo del t\xEDtulo"
                }
              },
              {
                type: "object",
                name: "phrases",
                label: "Frases divididas",
                list: true,
                required: true,
                ui: {
                  description: "Frases con parte izquierda y derecha separadas por flecha"
                },
                fields: [
                  {
                    type: "string",
                    name: "leftPart",
                    label: "Parte izquierda",
                    required: true,
                    ui: {
                      description: "Texto que aparecer\xE1 a la izquierda de la flecha"
                    }
                  },
                  {
                    type: "string",
                    name: "rightPart",
                    label: "Parte derecha",
                    required: true,
                    ui: {
                      description: "Texto que aparecer\xE1 a la derecha de la flecha"
                    }
                  }
                ]
              },
              {
                type: "string",
                name: "closingPhrase",
                label: "Frase final de introducci\xF3n a productos",
                required: true,
                ui: {
                  component: "textarea"
                }
              }
            ]
          },
          {
            type: "object",
            name: "transitionMessageSection",
            label: "4. Secci\xF3n - Cita inspiracional",
            fields: [
              {
                type: "string",
                name: "mainText",
                label: "Primera parte de la cita",
                required: true,
                ui: {
                  description: "Ej: 'Loco es el que, haciendo siempre lo mismo, espera', aparecer\xE1 en blanco"
                }
              },
              {
                type: "string",
                name: "highlightedText",
                label: "Parte destacada de la cita",
                required: true,
                ui: {
                  description: "Ej: 'resultados diferentes', aparecer\xE1 en naranja"
                }
              },
              {
                type: "string",
                name: "continuationText",
                label: "Autor de la cita",
                required: true,
                ui: {
                  description: "Nombre del autor de la cita (ej: 'Albert Einstein')"
                }
              },
              {
                type: "string",
                name: "secondaryText",
                label: "Texto secundario",
                required: true,
                ui: {
                  description: "Aparecer\xE1 debajo en tama\xF1o m\xE1s peque\xF1o",
                  component: "textarea"
                }
              }
            ]
          },
          {
            type: "object",
            name: "bridgeSection",
            label: "4.5. Secci\xF3n - Puente filos\xF3fico",
            fields: [
              {
                type: "string",
                name: "title",
                label: "T\xEDtulo (H2)",
                required: true,
                ui: {
                  description: "T\xEDtulo principal de la secci\xF3n puente"
                }
              },
              {
                type: "string",
                name: "paragraph",
                label: "P\xE1rrafo principal",
                required: true,
                ui: {
                  component: "textarea",
                  description: "Texto explicativo que conecta la filosof\xEDa con la propuesta. Puedes usar enlaces con formato markdown: [texto](url)"
                }
              }
            ]
          },
          {
            type: "object",
            name: "servicesPackagesSection",
            label: "5. Secci\xF3n - Paquetes de servicios",
            fields: [
              {
                type: "string",
                name: "title",
                label: "T\xEDtulo principal",
                required: true
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
                    required: true
                  },
                  {
                    type: "string",
                    name: "heading",
                    label: "T\xEDtulo del servicio",
                    required: true,
                    ui: {
                      description: "Ej: 'Audito tu mensaje', 'Reescribo tu web'"
                    }
                  },
                  {
                    type: "string",
                    name: "description",
                    label: "Descripci\xF3n del servicio",
                    required: true,
                    ui: {
                      component: "textarea",
                      description: "Descripci\xF3n principal que aparece debajo del t\xEDtulo (texto de 20px)"
                    }
                  },
                  {
                    type: "string",
                    name: "deliverables",
                    label: "Bullets/Entregables",
                    list: true,
                    required: true,
                    ui: {
                      description: "Lista de entregables separados por bullets (\u2022). Ej: 'Reporte completo', 'An\xE1lisis competencia'"
                    }
                  },
                  {
                    type: "string",
                    name: "ctaText",
                    label: "Texto del bot\xF3n",
                    required: true,
                    ui: {
                      description: "Texto que aparece en el bot\xF3n CTA"
                    }
                  },
                  {
                    type: "string",
                    name: "ctaLink",
                    label: "Enlace del bot\xF3n CTA",
                    required: true
                  }
                ]
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
                    required: true
                  },
                  {
                    type: "string",
                    name: "linkText",
                    label: "Texto del enlace",
                    required: true
                  },
                  {
                    type: "string",
                    name: "linkUrl",
                    label: "URL del enlace",
                    required: true
                  }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "statsSection",
            label: "6. Secci\xF3n - Resultados que hablan por s\xED solos",
            fields: [
              {
                type: "string",
                name: "title",
                label: "T\xEDtulo principal",
                required: true
              },
              {
                type: "string",
                name: "subtitle",
                label: "Subt\xEDtulo/Descripci\xF3n",
                required: true,
                ui: {
                  component: "textarea"
                }
              },
              {
                type: "object",
                name: "stats",
                label: "Estad\xEDsticas",
                list: true,
                fields: [
                  {
                    type: "number",
                    name: "value",
                    label: "Valor num\xE9rico",
                    required: true
                  },
                  {
                    type: "string",
                    name: "suffix",
                    label: "Sufijo (%, +, etc.)",
                    required: true
                  },
                  {
                    type: "string",
                    name: "description",
                    label: "Descripci\xF3n",
                    required: true
                  }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "testimonialsSection",
            label: "6.5. Testimonios de Clientes",
            fields: [
              {
                type: "string",
                name: "title",
                label: "T\xEDtulo de la secci\xF3n",
                required: true
              },
              {
                type: "string",
                name: "subtitle",
                label: "Subt\xEDtulo",
                required: true,
                ui: {
                  component: "textarea"
                }
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
                    required: true
                  },
                  {
                    type: "string",
                    name: "company",
                    label: "Empresa/Posici\xF3n",
                    required: true
                  },
                  {
                    type: "string",
                    name: "testimonial",
                    label: "Testimonio",
                    required: true,
                    ui: {
                      component: "textarea"
                    }
                  },
                  {
                    type: "image",
                    name: "image",
                    label: "Foto del cliente",
                    required: true
                  },
                  {
                    type: "string",
                    name: "link",
                    label: "Enlace web/perfil",
                    ui: {
                      description: "URL a su web, LinkedIn o perfil profesional"
                    }
                  }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "ctaSection",
            label: "7. Secci\xF3n - Call to Action Final",
            fields: [
              {
                type: "string",
                name: "title",
                label: "T\xEDtulo principal",
                required: true
              },
              {
                type: "string",
                name: "description",
                label: "Descripci\xF3n",
                required: true
              },
              {
                type: "string",
                name: "buttonText",
                label: "Texto del bot\xF3n",
                required: true
              },
              {
                type: "string",
                name: "buttonLink",
                label: "Enlace del bot\xF3n",
                required: true
              }
            ]
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
            type: "string",
            name: "subtitle",
            label: "Subt\xEDtulo",
            description: "Solo para p\xE1gina Sobre M\xED"
          },
          {
            type: "string",
            name: "introduction",
            label: "Introducci\xF3n",
            description: "Solo para p\xE1gina Sobre M\xED",
            ui: {
              component: "textarea"
            }
          },
          {
            type: "image",
            name: "profileImage",
            label: "Imagen de perfil",
            description: "Solo para p\xE1gina Sobre M\xED"
          },
          {
            type: "object",
            name: "experienceSection",
            label: "Secci\xF3n de Experiencia",
            description: "Solo para p\xE1gina Sobre M\xED",
            fields: [
              {
                type: "string",
                name: "title",
                label: "T\xEDtulo de la secci\xF3n"
              },
              {
                type: "string",
                name: "subtitle",
                label: "Subt\xEDtulo de la secci\xF3n"
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
                    label: "Icono (emoji)"
                  },
                  {
                    type: "string",
                    name: "title",
                    label: "T\xEDtulo"
                  },
                  {
                    type: "string",
                    name: "description",
                    label: "Descripci\xF3n",
                    ui: {
                      component: "textarea"
                    }
                  }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "valuesSection",
            label: "Secci\xF3n de Valores",
            description: "Solo para p\xE1gina Sobre M\xED",
            fields: [
              {
                type: "string",
                name: "title",
                label: "T\xEDtulo de la secci\xF3n"
              },
              {
                type: "string",
                name: "subtitle",
                label: "Subt\xEDtulo de la secci\xF3n"
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
                    label: "T\xEDtulo del valor"
                  },
                  {
                    type: "string",
                    name: "description",
                    label: "Descripci\xF3n",
                    ui: {
                      component: "textarea"
                    }
                  }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "testimonial",
            label: "Testimonio",
            description: "Solo para p\xE1gina Sobre M\xED",
            fields: [
              {
                type: "string",
                name: "quote",
                label: "Cita del testimonio",
                ui: {
                  component: "textarea"
                }
              },
              {
                type: "string",
                name: "author",
                label: "Autor del testimonio"
              },
              {
                type: "string",
                name: "role",
                label: "Cargo del autor"
              }
            ]
          },
          {
            type: "object",
            name: "ctaSection",
            label: "Secci\xF3n CTA",
            description: "Solo para p\xE1gina Sobre M\xED",
            fields: [
              {
                type: "string",
                name: "title",
                label: "T\xEDtulo del CTA"
              },
              {
                type: "string",
                name: "description",
                label: "Descripci\xF3n del CTA"
              },
              {
                type: "string",
                name: "buttonText",
                label: "Texto del bot\xF3n"
              }
            ]
          },
          {
            type: "rich-text",
            name: "body",
            label: "Contenido principal",
            isBody: true
          }
        ]
      },
      {
        name: "auditoria",
        label: "Auditor\xEDa de Contenido",
        path: "src/content/auditoria",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false
          }
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
                label: "T\xEDtulo SEO",
                required: true,
                ui: {
                  description: "T\xEDtulo que aparece en Google (m\xE1x. 60 caracteres)"
                }
              },
              {
                type: "string",
                name: "description",
                label: "Meta descripci\xF3n",
                required: true,
                ui: {
                  component: "textarea",
                  description: "Descripci\xF3n que aparece en Google (m\xE1x. 160 caracteres)"
                }
              }
            ]
          },
          {
            type: "object",
            name: "hero",
            label: "1. Secci\xF3n Hero",
            fields: [
              {
                type: "string",
                name: "subtitle",
                label: "Subt\xEDtulo",
                required: true,
                ui: {
                  description: "Ej: 'AUDITOR\xCDA DE CONTENIDO'"
                }
              },
              {
                type: "string",
                name: "titlePart1",
                label: "T\xEDtulo - Parte 1 (Negro)",
                required: true,
                ui: {
                  description: "Primera parte del t\xEDtulo que aparece en negro"
                }
              },
              {
                type: "string",
                name: "titlePart2",
                label: "T\xEDtulo - Parte 2 (Naranja)",
                required: true,
                ui: {
                  description: "Segunda parte del t\xEDtulo que aparece en naranja"
                }
              },
              {
                type: "string",
                name: "description",
                label: "Descripci\xF3n",
                required: true,
                ui: {
                  component: "textarea"
                }
              },
              {
                type: "string",
                name: "ctaText",
                label: "Texto del bot\xF3n CTA",
                required: true
              },
              {
                type: "string",
                name: "ctaLink",
                label: "Enlace del bot\xF3n CTA",
                required: true
              }
            ]
          },
          {
            type: "object",
            name: "problemsSection",
            label: "2. Secci\xF3n Problemas",
            fields: [
              {
                type: "string",
                name: "title",
                label: "T\xEDtulo (H2)",
                required: true
              },
              {
                type: "string",
                name: "subtitle",
                label: "Subt\xEDtulo",
                required: true
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
                    required: true
                  },
                  {
                    type: "string",
                    name: "consequence",
                    label: "Consecuencia (derecha)",
                    required: true
                  }
                ]
              },
              {
                type: "string",
                name: "closingText",
                label: "Texto de cierre",
                required: true,
                ui: {
                  component: "textarea"
                }
              }
            ]
          },
          {
            type: "object",
            name: "approachSection",
            label: "3. Mi Enfoque",
            fields: [
              {
                type: "string",
                name: "title",
                label: "T\xEDtulo (H2)",
                required: true
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
                    label: "T\xEDtulo del punto",
                    required: true
                  },
                  {
                    type: "string",
                    name: "description",
                    label: "Descripci\xF3n",
                    required: true,
                    ui: {
                      component: "textarea"
                    }
                  }
                ]
              },
              {
                type: "string",
                name: "conclusion",
                label: "Texto de conclusi\xF3n",
                required: true
              }
            ]
          },
          {
            type: "object",
            name: "testimonialsSection",
            label: "4. Casos de \xC9xito",
            fields: [
              {
                type: "string",
                name: "title",
                label: "T\xEDtulo (H2)",
                required: true
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
                      component: "textarea"
                    }
                  },
                  {
                    type: "string",
                    name: "author",
                    label: "Autor",
                    required: true
                  }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "pricingSection",
            label: "5. Precio y Qu\xE9 Incluye",
            fields: [
              {
                type: "string",
                name: "title",
                label: "T\xEDtulo principal",
                required: true
              },
              {
                type: "string",
                name: "subtitle",
                label: "Subt\xEDtulo explicativo",
                required: true
              },
              {
                type: "string",
                name: "price",
                label: "Precio (solo n\xFAmero)",
                required: true
              },
              {
                type: "string",
                name: "currency",
                label: "Moneda",
                required: true
              },
              {
                type: "string",
                name: "priceDescription",
                label: "Descripci\xF3n del precio",
                required: true
              },
              {
                type: "string",
                name: "includes",
                label: "Qu\xE9 incluye",
                list: true,
                required: true
              },
              {
                type: "string",
                name: "delivery",
                label: "Informaci\xF3n de entrega",
                required: true
              },
              {
                type: "string",
                name: "format",
                label: "Informaci\xF3n de formato",
                required: true
              },
              {
                type: "string",
                name: "ctaText",
                label: "Texto del bot\xF3n CTA",
                required: true
              },
              {
                type: "string",
                name: "ctaLink",
                label: "Enlace del bot\xF3n CTA",
                required: true
              }
            ]
          },
          {
            type: "object",
            name: "faqSection",
            label: "6. Preguntas Frecuentes",
            fields: [
              {
                type: "string",
                name: "title",
                label: "T\xEDtulo (H2)",
                required: true
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
                    required: true
                  },
                  {
                    type: "string",
                    name: "answer",
                    label: "Respuesta",
                    required: true,
                    ui: {
                      component: "textarea"
                    }
                  }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "finalCtaSection",
            label: "7. CTA Final + Garant\xEDa",
            fields: [
              {
                type: "string",
                name: "guaranteeEmoji",
                label: "Emoji de la garant\xEDa",
                required: true
              },
              {
                type: "string",
                name: "guaranteeTitle",
                label: "T\xEDtulo de la garant\xEDa",
                required: true
              },
              {
                type: "string",
                name: "guaranteeDescription",
                label: "Descripci\xF3n de la garant\xEDa",
                required: true,
                ui: {
                  component: "textarea"
                }
              },
              {
                type: "string",
                name: "title",
                label: "T\xEDtulo del resumen",
                required: true
              },
              {
                type: "string",
                name: "features",
                label: "Caracter\xEDsticas incluidas",
                list: true,
                required: true
              },
              {
                type: "string",
                name: "price",
                label: "Precio final (solo n\xFAmero)",
                required: true
              },
              {
                type: "string",
                name: "currency",
                label: "Moneda",
                required: true
              },
              {
                type: "string",
                name: "priceNote",
                label: "Nota del precio",
                required: true
              },
              {
                type: "string",
                name: "ctaText",
                label: "Texto del bot\xF3n CTA final",
                required: true
              },
              {
                type: "string",
                name: "ctaLink",
                label: "Enlace del bot\xF3n CTA final",
                required: true
              },
              {
                type: "string",
                name: "securityNote",
                label: "Nota de seguridad",
                required: true
              }
            ]
          }
        ]
      },
      {
        name: "redaccion_web",
        nameOverride: "redaccion-web",
        label: "Redacci\xF3n Web",
        path: "src/content/redaccion-web",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false
          }
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
                label: "T\xEDtulo SEO",
                required: true,
                ui: {
                  description: "T\xEDtulo que aparece en Google (m\xE1x. 60 caracteres)"
                }
              },
              {
                type: "string",
                name: "description",
                label: "Meta descripci\xF3n",
                required: true,
                ui: {
                  component: "textarea",
                  description: "Descripci\xF3n que aparece en Google (m\xE1x. 160 caracteres)"
                }
              }
            ]
          },
          {
            type: "object",
            name: "hero",
            label: "1. Secci\xF3n Hero",
            fields: [
              {
                type: "string",
                name: "subtitle",
                label: "Subt\xEDtulo",
                required: true,
                ui: {
                  description: "Ej: 'REDACCI\xD3N WEB COMPLETA'"
                }
              },
              {
                type: "string",
                name: "titlePart1",
                label: "T\xEDtulo - Parte 1 (Negro)",
                required: true,
                ui: {
                  description: "Primera parte del t\xEDtulo que aparece en negro"
                }
              },
              {
                type: "string",
                name: "titlePart2",
                label: "T\xEDtulo - Parte 2 (Naranja)",
                required: true,
                ui: {
                  description: "Segunda parte del t\xEDtulo que aparece en naranja"
                }
              },
              {
                type: "string",
                name: "description",
                label: "Descripci\xF3n",
                required: true,
                ui: {
                  component: "textarea"
                }
              },
              {
                type: "string",
                name: "ctaText",
                label: "Texto del bot\xF3n CTA",
                required: true
              },
              {
                type: "string",
                name: "ctaLink",
                label: "Enlace del bot\xF3n CTA",
                required: true
              }
            ]
          },
          {
            type: "object",
            name: "problemsSection",
            label: "2. Secci\xF3n Problemas",
            fields: [
              {
                type: "string",
                name: "title",
                label: "T\xEDtulo (H2)",
                required: true
              },
              {
                type: "string",
                name: "subtitle",
                label: "Subt\xEDtulo",
                required: true
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
                    required: true
                  },
                  {
                    type: "string",
                    name: "consequence",
                    label: "Consecuencia (derecha)",
                    required: true
                  }
                ]
              },
              {
                type: "string",
                name: "closingText",
                label: "Texto de cierre",
                required: true,
                ui: {
                  component: "textarea"
                }
              }
            ]
          },
          {
            type: "object",
            name: "approachSection",
            label: "3. Mi M\xE9todo",
            fields: [
              {
                type: "string",
                name: "title",
                label: "T\xEDtulo (H2)",
                required: true
              },
              {
                type: "object",
                name: "points",
                label: "Puntos del m\xE9todo",
                list: true,
                fields: [
                  {
                    type: "string",
                    name: "title",
                    label: "T\xEDtulo del punto",
                    required: true
                  },
                  {
                    type: "string",
                    name: "description",
                    label: "Descripci\xF3n",
                    required: true,
                    ui: {
                      component: "textarea"
                    }
                  }
                ]
              },
              {
                type: "string",
                name: "conclusion",
                label: "Texto de conclusi\xF3n",
                required: true
              }
            ]
          },
          {
            type: "object",
            name: "testimonialsSection",
            label: "4. Casos de \xC9xito",
            fields: [
              {
                type: "string",
                name: "title",
                label: "T\xEDtulo (H2)",
                required: true
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
                      component: "textarea"
                    }
                  },
                  {
                    type: "string",
                    name: "author",
                    label: "Autor",
                    required: true
                  }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "pricingSection",
            label: "5. Precio y Qu\xE9 Incluye",
            fields: [
              {
                type: "string",
                name: "title",
                label: "T\xEDtulo principal",
                required: true
              },
              {
                type: "string",
                name: "subtitle",
                label: "Subt\xEDtulo explicativo",
                required: true
              },
              {
                type: "string",
                name: "price",
                label: "Precio (solo n\xFAmero)",
                required: true
              },
              {
                type: "string",
                name: "currency",
                label: "Moneda",
                required: true
              },
              {
                type: "string",
                name: "priceDescription",
                label: "Descripci\xF3n del precio",
                required: true
              },
              {
                type: "string",
                name: "includes",
                label: "Qu\xE9 incluye",
                list: true,
                required: true
              },
              {
                type: "string",
                name: "delivery",
                label: "Informaci\xF3n de entrega",
                required: true
              },
              {
                type: "string",
                name: "format",
                label: "Informaci\xF3n de formato",
                required: true
              },
              {
                type: "string",
                name: "ctaText",
                label: "Texto del bot\xF3n CTA",
                required: true
              },
              {
                type: "string",
                name: "ctaLink",
                label: "Enlace del bot\xF3n CTA",
                required: true
              }
            ]
          },
          {
            type: "object",
            name: "faqSection",
            label: "6. Preguntas Frecuentes",
            fields: [
              {
                type: "string",
                name: "title",
                label: "T\xEDtulo (H2)",
                required: true
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
                    required: true
                  },
                  {
                    type: "string",
                    name: "answer",
                    label: "Respuesta",
                    required: true,
                    ui: {
                      component: "textarea"
                    }
                  }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "finalCtaSection",
            label: "7. CTA Final + Garant\xEDa",
            fields: [
              {
                type: "string",
                name: "guaranteeEmoji",
                label: "Emoji de la garant\xEDa",
                required: true
              },
              {
                type: "string",
                name: "guaranteeTitle",
                label: "T\xEDtulo de la garant\xEDa",
                required: true
              },
              {
                type: "string",
                name: "guaranteeDescription",
                label: "Descripci\xF3n de la garant\xEDa",
                required: true,
                ui: {
                  component: "textarea"
                }
              },
              {
                type: "string",
                name: "title",
                label: "T\xEDtulo del resumen",
                required: true
              },
              {
                type: "string",
                name: "features",
                label: "Caracter\xEDsticas incluidas",
                list: true,
                required: true
              },
              {
                type: "string",
                name: "price",
                label: "Precio final (solo n\xFAmero)",
                required: true
              },
              {
                type: "string",
                name: "currency",
                label: "Moneda",
                required: true
              },
              {
                type: "string",
                name: "priceNote",
                label: "Nota del precio",
                required: true
              },
              {
                type: "string",
                name: "ctaText",
                label: "Texto del bot\xF3n CTA final",
                required: true
              },
              {
                type: "string",
                name: "ctaLink",
                label: "Enlace del bot\xF3n CTA final",
                required: true
              },
              {
                type: "string",
                name: "securityNote",
                label: "Nota de seguridad",
                required: true
              }
            ]
          }
        ]
      },
      {
        name: "redaccion_estrategica_blogs",
        nameOverride: "redaccion-estrategica-blogs",
        label: "Redacci\xF3n Estrat\xE9gica Blogs",
        path: "src/content/redaccion-estrategica-blogs",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false
          }
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
                label: "T\xEDtulo SEO",
                required: true,
                ui: {
                  description: "T\xEDtulo que aparece en Google (m\xE1x. 60 caracteres)"
                }
              },
              {
                type: "string",
                name: "description",
                label: "Meta descripci\xF3n",
                required: true,
                ui: {
                  component: "textarea",
                  description: "Descripci\xF3n que aparece en Google (m\xE1x. 160 caracteres)"
                }
              }
            ]
          },
          {
            type: "object",
            name: "hero",
            label: "1. Secci\xF3n Hero",
            fields: [
              {
                type: "string",
                name: "subtitle",
                label: "Subt\xEDtulo",
                required: true,
                ui: {
                  description: "Ej: 'REDACCI\xD3N ESTRAT\xC9GICA PARA BLOGS'"
                }
              },
              {
                type: "string",
                name: "titlePart1",
                label: "T\xEDtulo - Parte 1 (Negro)",
                required: true,
                ui: {
                  description: "Primera parte del t\xEDtulo que aparece en negro"
                }
              },
              {
                type: "string",
                name: "titlePart2",
                label: "T\xEDtulo - Parte 2 (Naranja)",
                required: true,
                ui: {
                  description: "Segunda parte del t\xEDtulo que aparece en naranja"
                }
              },
              {
                type: "string",
                name: "description",
                label: "Descripci\xF3n",
                required: true,
                ui: {
                  component: "textarea"
                }
              },
              {
                type: "string",
                name: "ctaText",
                label: "Texto del bot\xF3n CTA",
                required: true
              },
              {
                type: "string",
                name: "ctaLink",
                label: "Enlace del bot\xF3n CTA",
                required: true
              }
            ]
          },
          {
            type: "object",
            name: "problemsSection",
            label: "2. Secci\xF3n Problemas",
            fields: [
              {
                type: "string",
                name: "title",
                label: "T\xEDtulo (H2)",
                required: true
              },
              {
                type: "string",
                name: "subtitle",
                label: "Subt\xEDtulo",
                required: true
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
                    required: true
                  },
                  {
                    type: "string",
                    name: "consequence",
                    label: "Consecuencia (derecha)",
                    required: true
                  }
                ]
              },
              {
                type: "string",
                name: "closingText",
                label: "Texto de cierre",
                required: true,
                ui: {
                  component: "textarea"
                }
              }
            ]
          },
          {
            type: "object",
            name: "approachSection",
            label: "3. Mi Estrategia",
            fields: [
              {
                type: "string",
                name: "title",
                label: "T\xEDtulo (H2)",
                required: true
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
                    label: "T\xEDtulo del punto",
                    required: true
                  },
                  {
                    type: "string",
                    name: "description",
                    label: "Descripci\xF3n",
                    required: true,
                    ui: {
                      component: "textarea"
                    }
                  }
                ]
              },
              {
                type: "string",
                name: "conclusion",
                label: "Texto de conclusi\xF3n",
                required: true
              }
            ]
          },
          {
            type: "object",
            name: "testimonialsSection",
            label: "4. Casos de \xC9xito",
            fields: [
              {
                type: "string",
                name: "title",
                label: "T\xEDtulo (H2)",
                required: true
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
                      component: "textarea"
                    }
                  },
                  {
                    type: "string",
                    name: "author",
                    label: "Autor",
                    required: true
                  }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "pricingSection",
            label: "5. Precio y Qu\xE9 Incluye",
            fields: [
              {
                type: "string",
                name: "title",
                label: "T\xEDtulo principal",
                required: true
              },
              {
                type: "string",
                name: "subtitle",
                label: "Subt\xEDtulo explicativo",
                required: true
              },
              {
                type: "string",
                name: "price",
                label: "Precio (solo n\xFAmero)",
                required: true
              },
              {
                type: "string",
                name: "currency",
                label: "Moneda",
                required: true
              },
              {
                type: "string",
                name: "priceDescription",
                label: "Descripci\xF3n del precio",
                required: true
              },
              {
                type: "string",
                name: "includes",
                label: "Qu\xE9 incluye",
                list: true,
                required: true
              },
              {
                type: "string",
                name: "delivery",
                label: "Informaci\xF3n de entrega",
                required: true
              },
              {
                type: "string",
                name: "format",
                label: "Informaci\xF3n de formato",
                required: true
              },
              {
                type: "string",
                name: "ctaText",
                label: "Texto del bot\xF3n CTA",
                required: true
              },
              {
                type: "string",
                name: "ctaLink",
                label: "Enlace del bot\xF3n CTA",
                required: true
              }
            ]
          },
          {
            type: "object",
            name: "faqSection",
            label: "6. Preguntas Frecuentes",
            fields: [
              {
                type: "string",
                name: "title",
                label: "T\xEDtulo (H2)",
                required: true
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
                    required: true
                  },
                  {
                    type: "string",
                    name: "answer",
                    label: "Respuesta",
                    required: true,
                    ui: {
                      component: "textarea"
                    }
                  }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "finalCtaSection",
            label: "7. CTA Final + Garant\xEDa",
            fields: [
              {
                type: "string",
                name: "guaranteeEmoji",
                label: "Emoji de la garant\xEDa",
                required: true
              },
              {
                type: "string",
                name: "guaranteeTitle",
                label: "T\xEDtulo de la garant\xEDa",
                required: true
              },
              {
                type: "string",
                name: "guaranteeDescription",
                label: "Descripci\xF3n de la garant\xEDa",
                required: true,
                ui: {
                  component: "textarea"
                }
              },
              {
                type: "string",
                name: "title",
                label: "T\xEDtulo del resumen",
                required: true
              },
              {
                type: "string",
                name: "features",
                label: "Caracter\xEDsticas incluidas",
                list: true,
                required: true
              },
              {
                type: "string",
                name: "price",
                label: "Precio final (solo n\xFAmero)",
                required: true
              },
              {
                type: "string",
                name: "currency",
                label: "Moneda",
                required: true
              },
              {
                type: "string",
                name: "priceNote",
                label: "Nota del precio",
                required: true
              },
              {
                type: "string",
                name: "ctaText",
                label: "Texto del bot\xF3n CTA final",
                required: true
              },
              {
                type: "string",
                name: "ctaLink",
                label: "Enlace del bot\xF3n CTA final",
                required: true
              },
              {
                type: "string",
                name: "securityNote",
                label: "Nota de seguridad",
                required: true
              }
            ]
          }
        ]
      },
      {
        name: "contact_page",
        label: "P\xE1gina de Contacto",
        path: "src/content/contacto",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false
          }
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
                label: "T\xEDtulo SEO",
                required: true,
                ui: {
                  description: "T\xEDtulo que aparece en Google (m\xE1x. 60 caracteres)"
                }
              },
              {
                type: "string",
                name: "description",
                label: "Meta descripci\xF3n",
                required: true,
                ui: {
                  component: "textarea",
                  description: "Descripci\xF3n que aparece en Google (m\xE1x. 160 caracteres)"
                }
              }
            ]
          },
          {
            type: "object",
            name: "hero",
            label: "1. Secci\xF3n Hero",
            fields: [
              {
                type: "string",
                name: "titlePart1",
                label: "T\xEDtulo - Parte 1 (Negro)",
                required: true,
                ui: {
                  description: "Primera parte del t\xEDtulo que aparece en negro"
                }
              },
              {
                type: "string",
                name: "titlePart2",
                label: "T\xEDtulo - Parte 2 (Naranja)",
                required: true,
                ui: {
                  description: "Segunda parte del t\xEDtulo que aparece en naranja"
                }
              },
              {
                type: "string",
                name: "description",
                label: "Descripci\xF3n",
                required: true,
                ui: {
                  description: "Texto descriptivo que aparece debajo del t\xEDtulo"
                }
              }
            ]
          },
          {
            type: "object",
            name: "form",
            label: "2. Formulario de Contacto",
            fields: [
              {
                type: "string",
                name: "title",
                label: "T\xEDtulo del formulario",
                required: true
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
                    required: true
                  },
                  {
                    type: "string",
                    name: "label",
                    label: "Texto mostrado",
                    required: true
                  }
                ]
              },
              {
                type: "string",
                name: "submitButtonText",
                label: "Texto del bot\xF3n de env\xEDo",
                required: true
              },
              {
                type: "string",
                name: "privacyPolicyText",
                label: "Texto de pol\xEDtica de privacidad",
                required: true,
                ui: {
                  component: "textarea",
                  description: "Usa [texto](url) para enlaces"
                }
              }
            ]
          },
          {
            type: "object",
            name: "contactInfo",
            label: "3. Informaci\xF3n de Contacto",
            fields: [
              {
                type: "string",
                name: "title",
                label: "T\xEDtulo de la secci\xF3n",
                required: true
              },
              {
                type: "string",
                name: "email",
                label: "Direcci\xF3n de email",
                required: true
              },
              {
                type: "string",
                name: "responseTime",
                label: "Tiempo de respuesta",
                required: true
              }
            ]
          },
          {
            type: "object",
            name: "messages",
            label: "4. Mensajes del Sistema",
            fields: [
              {
                type: "string",
                name: "successMessage",
                label: "Mensaje de \xE9xito",
                required: true
              },
              {
                type: "string",
                name: "errorMessage",
                label: "Mensaje de error",
                required: true,
                ui: {
                  component: "textarea"
                }
              },
              {
                type: "string",
                name: "loadingText",
                label: "Texto durante el env\xEDo",
                required: true
              }
            ]
          }
        ]
      },
      {
        name: "sobre_mi",
        label: "Sobre M\xED",
        path: "src/content/sobre-mi",
        format: "json",
        nameOverride: "sobre-mi",
        ui: {
          allowedActions: {
            create: false,
            delete: false
          }
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
                label: "T\xEDtulo SEO",
                required: true,
                ui: {
                  description: "T\xEDtulo que aparece en Google (m\xE1x. 60 caracteres)"
                }
              },
              {
                type: "string",
                name: "description",
                label: "Meta descripci\xF3n",
                required: true,
                ui: {
                  component: "textarea",
                  description: "Descripci\xF3n que aparece en Google (m\xE1x. 160 caracteres)"
                }
              }
            ]
          },
          {
            type: "object",
            name: "hero",
            label: "1. Secci\xF3n Hero",
            fields: [
              {
                type: "string",
                name: "title",
                label: "T\xEDtulo principal",
                required: true
              },
              {
                type: "string",
                name: "subtitle",
                label: "Subt\xEDtulo",
                required: true
              },
              {
                type: "string",
                name: "introduction",
                label: "Introducci\xF3n",
                required: true,
                ui: {
                  component: "textarea"
                }
              },
              {
                type: "image",
                name: "profileImage",
                label: "Imagen de perfil",
                required: true
              }
            ]
          },
          {
            type: "object",
            name: "experienceSection",
            label: "2. Secci\xF3n de Experiencia",
            fields: [
              {
                type: "string",
                name: "title",
                label: "T\xEDtulo de la secci\xF3n",
                required: true
              },
              {
                type: "string",
                name: "subtitle",
                label: "Subt\xEDtulo de la secci\xF3n",
                required: true
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
                    required: true
                  },
                  {
                    type: "string",
                    name: "title",
                    label: "T\xEDtulo",
                    required: true
                  },
                  {
                    type: "string",
                    name: "description",
                    label: "Descripci\xF3n",
                    required: true,
                    ui: {
                      component: "textarea"
                    }
                  }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "storySection",
            label: "3. Secci\xF3n Historia - T\xEDtulo y Subt\xEDtulo",
            fields: [
              {
                type: "string",
                name: "title",
                label: "T\xEDtulo de la secci\xF3n",
                required: true,
                ui: {
                  description: "Ej: 'Mi historia con el SEO'"
                }
              },
              {
                type: "string",
                name: "subtitle",
                label: "Subt\xEDtulo de la secci\xF3n",
                required: true,
                ui: {
                  description: "Ej: 'De marketer tradicional a especialista en contenido que convierte'"
                }
              }
            ]
          },
          {
            type: "string",
            name: "storyContent",
            label: "3.1. Historia - Contenido Principal",
            required: true,
            ui: {
              component: "textarea",
              description: "El contenido principal de la p\xE1gina (Mi historia, Mi enfoque, etc.)"
            }
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
                  component: "textarea"
                }
              },
              {
                type: "string",
                name: "author",
                label: "Autor del testimonio",
                required: true
              },
              {
                type: "string",
                name: "role",
                label: "Cargo del autor",
                required: true
              }
            ]
          },
          {
            type: "object",
            name: "ctaSection",
            label: "5. Secci\xF3n CTA Final",
            fields: [
              {
                type: "string",
                name: "title",
                label: "T\xEDtulo del CTA",
                required: true
              },
              {
                type: "string",
                name: "description",
                label: "Descripci\xF3n del CTA",
                required: true
              },
              {
                type: "string",
                name: "buttonText",
                label: "Texto del bot\xF3n",
                required: true
              },
              {
                type: "string",
                name: "buttonLink",
                label: "Enlace del bot\xF3n",
                required: true
              }
            ]
          }
        ]
      },
      {
        name: "servicios_page",
        label: "P\xE1gina de Servicios",
        path: "src/content/servicios",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false
          }
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
                label: "T\xEDtulo SEO",
                required: true,
                ui: {
                  description: "T\xEDtulo que aparece en Google (m\xE1x. 60 caracteres)"
                }
              },
              {
                type: "string",
                name: "description",
                label: "Meta descripci\xF3n",
                required: true,
                ui: {
                  component: "textarea",
                  description: "Descripci\xF3n que aparece en Google (m\xE1x. 160 caracteres)"
                }
              },
              {
                type: "string",
                name: "keywords",
                label: "Palabras clave",
                ui: {
                  description: "Palabras clave separadas por comas"
                }
              },
              {
                type: "string",
                name: "ogTitle",
                label: "T\xEDtulo Open Graph",
                ui: {
                  description: "T\xEDtulo para redes sociales (opcional, usa el t\xEDtulo SEO si est\xE1 vac\xEDo)"
                }
              },
              {
                type: "string",
                name: "ogDescription",
                label: "Descripci\xF3n Open Graph",
                ui: {
                  component: "textarea",
                  description: "Descripci\xF3n para redes sociales (opcional, usa la meta descripci\xF3n si est\xE1 vac\xEDa)"
                }
              },
              {
                type: "image",
                name: "ogImage",
                label: "Imagen Open Graph",
                ui: {
                  description: "Imagen para redes sociales (1200x630px recomendado)"
                }
              },
              {
                type: "string",
                name: "canonicalUrl",
                label: "URL Can\xF3nica",
                ui: {
                  description: "URL can\xF3nica (opcional, se genera autom\xE1ticamente si est\xE1 vac\xEDa)"
                }
              },
              {
                type: "boolean",
                name: "noindex",
                label: "No indexar p\xE1gina",
                ui: {
                  description: "Marcar para evitar que los motores de b\xFAsqueda indexen esta p\xE1gina"
                }
              }
            ]
          },
          {
            type: "object",
            name: "hero",
            label: "1. Secci\xF3n Hero",
            fields: [
              {
                type: "string",
                name: "titlePart1",
                label: "T\xEDtulo - Parte 1 (Negro)",
                required: true,
                ui: {
                  description: "Ej: 'Tres formas de'"
                }
              },
              {
                type: "string",
                name: "titlePart2",
                label: "T\xEDtulo - Parte 2 (Naranja)",
                required: true,
                ui: {
                  description: "Ej: 'trabajar conmigo'"
                }
              },
              {
                type: "string",
                name: "description",
                label: "Descripci\xF3n",
                required: true,
                ui: {
                  component: "textarea",
                  description: "Texto descriptivo bajo el t\xEDtulo"
                }
              }
            ]
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
                    label: "T\xEDtulo del servicio",
                    required: true,
                    ui: {
                      description: "Ej: 'Auditor\xEDa', 'Redacci\xF3n Web', 'Blog Estrat\xE9gico'"
                    }
                  },
                  {
                    type: "string",
                    name: "subtitle",
                    label: "Subt\xEDtulo descriptivo",
                    required: true,
                    ui: {
                      description: "Pregunta o descripci\xF3n breve"
                    }
                  },
                  {
                    type: "string",
                    name: "price",
                    label: "Precio",
                    required: true,
                    ui: {
                      description: "Solo el n\xFAmero, ej: '599'"
                    }
                  },
                  {
                    type: "string",
                    name: "currency",
                    label: "Moneda",
                    required: true,
                    ui: {
                      description: "Ej: '\u20AC'"
                    }
                  },
                  {
                    type: "string",
                    name: "priceNote",
                    label: "Nota del precio",
                    ui: {
                      description: "Ej: 'Una sola vez', '/mes durante 3 meses'"
                    }
                  },
                  {
                    type: "string",
                    name: "features",
                    label: "Caracter\xEDsticas incluidas",
                    list: true,
                    required: true,
                    ui: {
                      description: "Lista de caracter\xEDsticas o beneficios"
                    }
                  },
                  {
                    type: "string",
                    name: "ctaText",
                    label: "Texto del bot\xF3n",
                    required: true
                  },
                  {
                    type: "string",
                    name: "ctaLink",
                    label: "Enlace del bot\xF3n",
                    required: true
                  },
                  {
                    type: "boolean",
                    name: "isPopular",
                    label: "\xBFEs el m\xE1s popular?",
                    ui: {
                      description: "Marcar para mostrar badge 'M\xC1S POPULAR'"
                    }
                  }
                ]
              },
              {
                type: "object",
                name: "customProjects",
                label: "Secci\xF3n Proyectos Personalizados",
                fields: [
                  {
                    type: "string",
                    name: "description",
                    label: "Descripci\xF3n",
                    required: true,
                    ui: {
                      component: "textarea"
                    }
                  },
                  {
                    type: "string",
                    name: "linkText",
                    label: "Texto del enlace",
                    required: true
                  },
                  {
                    type: "string",
                    name: "linkUrl",
                    label: "URL del enlace",
                    required: true
                  }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "faqSection",
            label: "3. Preguntas Frecuentes",
            fields: [
              {
                type: "string",
                name: "title",
                label: "T\xEDtulo principal",
                required: true,
                ui: {
                  description: "Ej: '\xBFCu\xE1l servicio necesito?'"
                }
              },
              {
                type: "string",
                name: "subtitle",
                label: "Subt\xEDtulo",
                required: true,
                ui: {
                  description: "Descripci\xF3n bajo el t\xEDtulo"
                }
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
                    required: true
                  },
                  {
                    type: "string",
                    name: "answerTitle",
                    label: "T\xEDtulo de la respuesta",
                    required: true,
                    ui: {
                      description: "Texto en negrita, ej: 'Empieza con Audit (\u20AC1.495)'"
                    }
                  },
                  {
                    type: "string",
                    name: "answerText",
                    label: "Texto de la respuesta",
                    required: true,
                    ui: {
                      component: "textarea",
                      description: "Explicaci\xF3n detallada"
                    }
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
});
export {
  config_default as default
};
