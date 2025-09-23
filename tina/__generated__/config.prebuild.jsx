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
                  description: "Texto explicativo que conecta la filosof\xEDa con la propuesta"
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
      }
    ]
  }
});
export {
  config_default as default
};
