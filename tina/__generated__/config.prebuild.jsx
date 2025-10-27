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
                name: "aiStatistic",
                label: "Estad\xEDstica sobre IA",
                ui: {
                  component: "textarea",
                  description: "Estad\xEDstica que aparece despu\xE9s de los bullets. Soporta enlaces con formato markdown: [texto](url) y HTML b\xE1sico como <strong> para negrita"
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
              }
            ]
          },
          {
            type: "object",
            name: "bridgeSection",
            label: "5. Secci\xF3n - Puente filos\xF3fico",
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
              },
              {
                type: "string",
                name: "secondaryParagraph",
                label: "P\xE1rrafo secundario (opcional)",
                ui: {
                  component: "textarea",
                  description: "Texto adicional que aparecer\xE1 debajo del p\xE1rrafo principal. Puedes usar enlaces con formato markdown: [texto](url)"
                }
              },
              {
                type: "string",
                name: "tertiaryParagraph",
                label: "P\xE1rrafo terciario (opcional)",
                ui: {
                  component: "textarea",
                  description: "Tercer p\xE1rrafo opcional. Puedes usar enlaces con formato markdown: [texto](url)"
                }
              },
              {
                type: "string",
                name: "closingParagraph",
                label: "P\xE1rrafo de cierre (opcional)",
                ui: {
                  component: "textarea",
                  description: "P\xE1rrafo final de cierre. Puedes usar enlaces con formato markdown: [texto](url). Palabras como 'claridad y dos activos' aparecer\xE1n en negrita autom\xE1ticamente."
                }
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
            name: "featuredServiceSection",
            label: "7. Servicio Destacado",
            fields: [
              {
                type: "string",
                name: "title",
                label: "T\xEDtulo principal (H2)",
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
                name: "benefit1",
                label: "Beneficio 1",
                required: true,
                ui: {
                  description: "Ej: 'Blog que genera autoridad'"
                }
              },
              {
                type: "string",
                name: "benefit2",
                label: "Beneficio 2",
                required: true,
                ui: {
                  description: "Ej: 'Web que cierra ventas'"
                }
              },
              {
                type: "string",
                name: "packLabel",
                label: "Etiqueta del pack",
                required: true,
                ui: {
                  description: "Ej: 'PACK LANZAMIENTO'"
                }
              },
              {
                type: "string",
                name: "packTitle",
                label: "T\xEDtulo del pack",
                required: true,
                ui: {
                  description: "Ej: 'Despegue digital completo'"
                }
              },
              {
                type: "string",
                name: "features",
                label: "Caracter\xEDsticas incluidas (checks)",
                list: true,
                ui: {
                  description: "Lista de caracter\xEDsticas que aparecer\xE1n con checks"
                }
              },
              {
                type: "string",
                name: "originalPrice",
                label: "Precio original",
                required: true,
                ui: {
                  description: "Ej: '1.798\u20AC'"
                }
              },
              {
                type: "string",
                name: "currentPrice",
                label: "Precio actual",
                required: true,
                ui: {
                  description: "Ej: '1.399\u20AC'"
                }
              },
              {
                type: "string",
                name: "savings",
                label: "Ahorro",
                required: true,
                ui: {
                  description: "Ej: '399\u20AC'"
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
              },
              {
                type: "string",
                name: "alternativeServicesText",
                label: "Texto de servicios alternativos",
                ui: {
                  description: "Ej: 'Servicios individuales disponibles:'"
                }
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
                    required: true
                  },
                  {
                    type: "string",
                    name: "url",
                    label: "URL del enlace",
                    required: true
                  }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "testimonialsSection",
            label: "8. Testimonios de Clientes",
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
            label: "9. Secci\xF3n - Call to Action Final",
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
                label: "Descripci\xF3n - Primera frase",
                required: true,
                ui: {
                  description: "Primera frase que aparece antes del texto secundario"
                }
              },
              {
                type: "string",
                name: "secondaryDescription",
                label: "Descripci\xF3n - Segunda frase",
                required: true,
                ui: {
                  description: "Segunda frase que aparece justo encima del bot\xF3n (ej: 'Para que te recomiende la IA pincha aqu\xED:')"
                }
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
                type: "string",
                name: "subtitle",
                label: "Subt\xEDtulo",
                required: false,
                ui: {
                  description: "Texto aclaratorio debajo del t\xEDtulo (ej: '(tres pasos para conectar con tu audiencia)')"
                }
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
            label: "5. Precio y Qu\xE9 Incluye - 3 Paquetes",
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
                type: "object",
                name: "commonFeatures",
                label: "Caracter\xEDsticas comunes (debajo de los paquetes)",
                fields: [
                  {
                    type: "string",
                    name: "title",
                    label: "T\xEDtulo",
                    required: true,
                    ui: {
                      description: "Ej: 'Todos los paquetes incluyen:'"
                    }
                  },
                  {
                    type: "string",
                    name: "features",
                    label: "Caracter\xEDsticas incluidas",
                    list: true,
                    required: true,
                    ui: {
                      description: "Lista de caracter\xEDsticas comunes a todos los paquetes"
                    }
                  },
                  {
                    type: "string",
                    name: "additionalPage",
                    label: "Texto p\xE1gina adicional",
                    required: true,
                    ui: {
                      description: "Ej: 'P\xE1gina adicional: +250\u20AC'"
                    }
                  }
                ]
              },
              {
                type: "object",
                name: "packages",
                label: "Paquetes de redacci\xF3n web",
                list: true,
                ui: {
                  description: "Los 3 paquetes disponibles (Esencial, Completo, Premium)"
                },
                fields: [
                  {
                    type: "string",
                    name: "name",
                    label: "Nombre del paquete",
                    required: true,
                    ui: {
                      description: "Ej: 'Esencial', 'Completo', 'Premium'"
                    }
                  },
                  {
                    type: "string",
                    name: "pages",
                    label: "N\xFAmero de p\xE1ginas",
                    required: true,
                    ui: {
                      description: "Ej: '3 p\xE1ginas', '5 p\xE1ginas', '7 p\xE1ginas'"
                    }
                  },
                  {
                    type: "string",
                    name: "price",
                    label: "Precio (solo n\xFAmero)",
                    required: true,
                    ui: {
                      description: "Ej: '899', '1399', '1799'"
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
                    name: "priceDescription",
                    label: "Descripci\xF3n del precio",
                    required: true,
                    ui: {
                      description: "Ej: 'Para empezar con lo b\xE1sico'"
                    }
                  },
                  {
                    type: "string",
                    name: "includes",
                    label: "Qu\xE9 incluye",
                    list: true,
                    required: true,
                    ui: {
                      description: "Lista de caracter\xEDsticas incluidas en el paquete"
                    }
                  },
                  {
                    type: "string",
                    name: "delivery",
                    label: "Informaci\xF3n de entrega",
                    required: true,
                    ui: {
                      description: "Ej: '7 d\xEDas laborables'"
                    }
                  },
                  {
                    type: "string",
                    name: "format",
                    label: "Informaci\xF3n de formato",
                    required: true,
                    ui: {
                      description: "Ej: 'Textos listos para copiar y pegar'"
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
                  },
                  {
                    type: "boolean",
                    name: "isPopular",
                    label: "\xBFEs el m\xE1s elegido?",
                    ui: {
                      description: "Marca esto para el paquete central (Completo) para destacarlo"
                    }
                  }
                ]
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
            label: "7. CTA Final",
            fields: [
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
          }
        ]
      },
      {
        name: "redaccion_blog",
        nameOverride: "redaccion-blog",
        label: "Redacci\xF3n Blog",
        path: "src/content/redaccion-blog",
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
                type: "string",
                name: "subtitle",
                label: "Subt\xEDtulo",
                required: false,
                ui: {
                  description: "Texto aclaratorio debajo del t\xEDtulo (ej: '(y funciona mejor que el contenido gen\xE9rico)')"
                }
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
            label: "5. Precio y Qu\xE9 Incluye - 2 Paquetes",
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
                type: "object",
                name: "packages",
                label: "Paquetes de blog",
                list: true,
                ui: {
                  description: "Los 2 paquetes disponibles (Est\xE1ndar, Intensivo)"
                },
                fields: [
                  {
                    type: "string",
                    name: "name",
                    label: "Nombre del paquete",
                    required: true,
                    ui: {
                      description: "Ej: 'Est\xE1ndar', 'Intensivo'"
                    }
                  },
                  {
                    type: "string",
                    name: "articles",
                    label: "N\xFAmero de art\xEDculos",
                    required: true,
                    ui: {
                      description: "Ej: '2 art\xEDculos', '4 art\xEDculos'"
                    }
                  },
                  {
                    type: "string",
                    name: "price",
                    label: "Precio (solo n\xFAmero)",
                    required: true,
                    ui: {
                      description: "Ej: '399', '599'"
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
                    name: "priceDescription",
                    label: "Descripci\xF3n del precio",
                    required: true,
                    ui: {
                      description: "Ej: 'Para empezar con contenido estrat\xE9gico'"
                    }
                  },
                  {
                    type: "string",
                    name: "includes",
                    label: "Qu\xE9 incluye",
                    list: true,
                    required: true,
                    ui: {
                      description: "Lista de caracter\xEDsticas incluidas en el paquete"
                    }
                  },
                  {
                    type: "string",
                    name: "delivery",
                    label: "Informaci\xF3n de entrega",
                    required: true,
                    ui: {
                      description: "Ej: 'Entrega continua cada mes'"
                    }
                  },
                  {
                    type: "string",
                    name: "format",
                    label: "Informaci\xF3n de formato",
                    required: true,
                    ui: {
                      description: "Ej: '2 art\xEDculos listos para publicar + calendario'"
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
                  },
                  {
                    type: "boolean",
                    name: "isPopular",
                    label: "\xBFEs el m\xE1s elegido?",
                    ui: {
                      description: "Marca esto para el paquete Intensivo para destacarlo"
                    }
                  }
                ]
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
            label: "7. CTA Final",
            fields: [
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
            type: "string",
            name: "title",
            label: "T\xEDtulo principal",
            required: true,
            ui: {
              description: "Ej: 'Soy \xC1lvaro'"
            }
          },
          {
            type: "string",
            name: "subtitle",
            label: "Subt\xEDtulo",
            ui: {
              description: "Ej: 'Redactor SEO' (opcional)"
            }
          },
          {
            type: "image",
            name: "profileImage",
            label: "Foto de perfil",
            required: true,
            ui: {
              description: "Tu foto de perfil que aparecer\xE1 debajo del subt\xEDtulo"
            }
          },
          {
            type: "string",
            name: "storyContent",
            label: "Historia - Contenido Principal",
            required: true,
            ui: {
              component: "textarea",
              description: "Tu historia completa. Separa los p\xE1rrafos con dobles saltos de l\xEDnea. Aproximadamente 600 palabras."
            }
          },
          {
            type: "object",
            name: "cta",
            label: "Secci\xF3n CTA (Llamada a la Acci\xF3n)",
            fields: [
              {
                type: "string",
                name: "title",
                label: "T\xEDtulo del CTA",
                required: true,
                ui: {
                  description: "Ej: '\xBFListo para hacer crecer tu negocio?'"
                }
              },
              {
                type: "string",
                name: "description",
                label: "Descripci\xF3n del CTA",
                required: true,
                ui: {
                  component: "textarea",
                  description: "Texto que aparece debajo del t\xEDtulo"
                }
              },
              {
                type: "string",
                name: "buttonText",
                label: "Texto del bot\xF3n",
                required: true,
                ui: {
                  description: "Ej: 'Empezar mi proyecto'"
                }
              },
              {
                type: "string",
                name: "buttonUrl",
                label: "URL del bot\xF3n",
                required: true,
                ui: {
                  description: "Ruta a la que enlaza el bot\xF3n (Ej: '/contacto')"
                }
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
                label: "Servicios principales (2 columnas)",
                list: true,
                ui: {
                  description: "Servicios que aparecen en dos columnas (Redacci\xF3n Web y Redacci\xF3n Blog)"
                },
                fields: [
                  {
                    type: "string",
                    name: "title",
                    label: "T\xEDtulo del servicio",
                    required: true,
                    ui: {
                      description: "Ej: 'Redacci\xF3n Web', 'Redacci\xF3n Blog'"
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
                      description: "Solo el n\xFAmero, ej: '399'"
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
                      description: "Ej: 'desde', 'desde / mes'"
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
                      description: "OBSOLETO - No se usa actualmente en el dise\xF1o"
                    }
                  }
                ]
              },
              {
                type: "object",
                name: "packInevitable",
                label: "Pack Inevitable (horizontal)",
                ui: {
                  description: "El pack especial que aparece primero en dise\xF1o horizontal"
                },
                fields: [
                  {
                    type: "string",
                    name: "packLabel",
                    label: "Etiqueta del pack",
                    required: true,
                    ui: {
                      description: "Ej: 'Blog + Web' - aparece en badge naranja"
                    }
                  },
                  {
                    type: "string",
                    name: "title",
                    label: "T\xEDtulo del pack",
                    required: true,
                    ui: {
                      description: "Ej: 'Pack Inevitable'"
                    }
                  },
                  {
                    type: "string",
                    name: "subtitle",
                    label: "Subt\xEDtulo",
                    required: true,
                    ui: {
                      description: "Ej: 'De invisible a inevitable'"
                    }
                  },
                  {
                    type: "string",
                    name: "benefits",
                    label: "Qu\xE9 consigues (checks verdes)",
                    list: true,
                    required: true,
                    ui: {
                      description: "Beneficios principales del pack con checks verdes"
                    }
                  },
                  {
                    type: "string",
                    name: "features",
                    label: "Qu\xE9 incluye (bullets grises)",
                    list: true,
                    required: true,
                    ui: {
                      description: "Caracter\xEDsticas detalladas con bullets grises"
                    }
                  },
                  {
                    type: "string",
                    name: "currentPrice",
                    label: "Precio actual",
                    required: true,
                    ui: {
                      description: "Ej: '2.350\u20AC' - Se muestra PRIMERO"
                    }
                  },
                  {
                    type: "string",
                    name: "originalPrice",
                    label: "Valor separado (tachado)",
                    required: true,
                    ui: {
                      description: "Ej: '2.800\u20AC' - Se muestra como 'VALOR SEPARADO'"
                    }
                  },
                  {
                    type: "string",
                    name: "savings",
                    label: "Ahorro",
                    required: true,
                    ui: {
                      description: "Ej: '450\u20AC'"
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
                    name: "answer",
                    label: "Respuesta",
                    required: true,
                    ui: {
                      component: "textarea",
                      description: "Respuesta directa a la pregunta"
                    }
                  }
                ]
              }
            ]
          }
        ]
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
                  description: "Ej: 'COLABORACIONES B2B'"
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
            name: "targetSection",
            label: "2. \xBFEs para tu agencia?",
            fields: [
              {
                type: "string",
                name: "title",
                label: "T\xEDtulo (H2)",
                required: true
              },
              {
                type: "string",
                name: "intro",
                label: "Introducci\xF3n",
                required: true,
                ui: {
                  component: "textarea",
                  description: "Texto introductorio bajo el t\xEDtulo"
                }
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
                    label: "T\xEDtulo del requisito",
                    required: true,
                    ui: {
                      description: "Ej: 'M\xEDnimo 800\u20AC por proyecto'"
                    }
                  },
                  {
                    type: "string",
                    name: "subtitle",
                    label: "Subt\xEDtulo (opcional)",
                    ui: {
                      description: "Ej: '(8 p\xE1ginas)'"
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
                  }
                ]
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
                      component: "textarea"
                    }
                  }
                ]
              },
              {
                type: "string",
                name: "ctaButtonText",
                label: "Texto del bot\xF3n CTA",
                required: true
              },
              {
                type: "string",
                name: "ctaLink",
                label: "Enlace del bot\xF3n CTA",
                required: true,
                ui: {
                  description: "Ej: /contacto"
                }
              }
            ]
          },
          {
            type: "object",
            name: "workflowSection",
            label: "3. C\xF3mo trabajamos",
            fields: [
              {
                type: "string",
                name: "title",
                label: "T\xEDtulo (H2)",
                required: true
              },
              {
                type: "string",
                name: "intro",
                label: "Introducci\xF3n",
                required: true,
                ui: {
                  component: "textarea",
                  description: "Texto introductorio bajo el t\xEDtulo"
                }
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
                    label: "N\xFAmero del paso",
                    required: true,
                    ui: {
                      description: "Ej: '1', '2', '3'..."
                    }
                  },
                  {
                    type: "string",
                    name: "title",
                    label: "T\xEDtulo del paso",
                    required: true,
                    ui: {
                      description: "Ej: 'Me env\xEDas brief del proyecto'"
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
                  }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "conditionsSection",
            label: "4. Precios para agencias",
            fields: [
              {
                type: "string",
                name: "title",
                label: "T\xEDtulo (H2)",
                required: true
              },
              {
                type: "string",
                name: "basePrice",
                label: "Precio base (n\xFAmero)",
                required: true,
                ui: {
                  description: "Ej: '125' (sin s\xEDmbolo de moneda)"
                }
              },
              {
                type: "string",
                name: "currency",
                label: "S\xEDmbolo de moneda",
                required: true,
                ui: {
                  description: "Ej: '\u20AC'"
                }
              },
              {
                type: "string",
                name: "priceDescription",
                label: "Descripci\xF3n del precio",
                required: true,
                ui: {
                  description: "Ej: 'por p\xE1gina'"
                }
              },
              {
                type: "string",
                name: "priceSubtext",
                label: "Subtexto del precio",
                required: true,
                ui: {
                  description: "Ej: 'm\xE1ximo 1.000 palabras'"
                }
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
                    label: "T\xEDtulo",
                    required: true,
                    ui: {
                      description: "Ej: 'P\xE1ginas extensas'"
                    }
                  },
                  {
                    type: "string",
                    name: "description",
                    label: "Descripci\xF3n",
                    required: true,
                    ui: {
                      description: "Ej: '+1.000 palabras: 185\u20AC'"
                    }
                  }
                ]
              },
              {
                type: "string",
                name: "ctaLink",
                label: "Enlace del bot\xF3n CTA",
                required: true,
                ui: {
                  description: "Ej: '/contacto'"
                }
              },
              {
                type: "string",
                name: "ctaText",
                label: "Texto del bot\xF3n CTA",
                required: true,
                ui: {
                  description: "Ej: 'Pide presupuesto'"
                }
              },
              {
                type: "string",
                name: "ctaSubtext",
                label: "Subtexto del CTA",
                required: true,
                ui: {
                  description: "Texto que aparece debajo del bot\xF3n"
                }
              }
            ]
          },
          {
            type: "object",
            name: "includesSection",
            label: "5. Qu\xE9 incluye",
            fields: [
              {
                type: "string",
                name: "heading",
                label: "Encabezado principal (H2)",
                required: true,
                ui: {
                  description: "T\xEDtulo grande de la secci\xF3n, ej: 'Qu\xE9 incluye el servicio'"
                }
              },
              {
                type: "string",
                name: "title",
                label: "T\xEDtulo columna izquierda (H3)",
                required: true,
                ui: {
                  description: "Ej: 'Qu\xE9 incluyo'"
                }
              },
              {
                type: "string",
                name: "included",
                label: "Qu\xE9 incluye (\u2713)",
                list: true,
                required: true
              },
              {
                type: "string",
                name: "notIncludedTitle",
                label: "T\xEDtulo de lo que NO incluye",
                required: true
              },
              {
                type: "string",
                name: "notIncluded",
                label: "Qu\xE9 NO incluye (\u2717)",
                list: true,
                required: true
              },
              {
                type: "string",
                name: "clarification",
                label: "P\xE1rrafo aclaratorio (opcional)",
                ui: {
                  component: "textarea",
                  description: "Texto que aparece debajo de las dos columnas"
                }
              }
            ]
          },
          {
            type: "object",
            name: "processSection",
            label: "6. Proceso (antiguo - puede eliminarse)",
            fields: [
              {
                type: "string",
                name: "title",
                label: "T\xEDtulo (H2)",
                required: true
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
                    label: "N\xFAmero del paso",
                    required: true
                  },
                  {
                    type: "string",
                    name: "title",
                    label: "T\xEDtulo del paso",
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
            name: "faqSection",
            label: "7. Preguntas Frecuentes",
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
            label: "8. CTA Final",
            fields: [
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
          }
        ]
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
                label: "T\xEDtulo Principal (H1)",
                required: true,
                ui: {
                  component: "textarea"
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
            name: "problemSection",
            label: "2. Secci\xF3n Problema",
            fields: [
              {
                type: "string",
                name: "title",
                label: "T\xEDtulo (H2)",
                required: true
              },
              {
                type: "string",
                name: "content",
                label: "Contenido",
                required: true,
                ui: {
                  component: "textarea"
                }
              },
              {
                type: "string",
                name: "keywords",
                label: "Keywords SEO",
                list: true
              }
            ]
          },
          {
            type: "object",
            name: "whatIncludesSection",
            label: "3. Qu\xE9 Incluye Este Servicio",
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
                label: "Subt\xEDtulo explicativo",
                required: true,
                ui: {
                  component: "textarea",
                  description: "Texto que aparece debajo del t\xEDtulo principal"
                }
              },
              {
                type: "object",
                name: "webRedaction",
                label: "Redacci\xF3n Web",
                fields: [
                  {
                    type: "string",
                    name: "subtitle",
                    label: "Subt\xEDtulo (H3)",
                    required: true
                  },
                  {
                    type: "string",
                    name: "description",
                    label: "Descripci\xF3n",
                    required: true,
                    ui: {
                      component: "textarea",
                      description: "P\xE1rrafo explicativo que aparece debajo del subt\xEDtulo"
                    }
                  },
                  {
                    type: "string",
                    name: "items",
                    label: "Items incluidos",
                    list: true,
                    required: true
                  },
                  {
                    type: "string",
                    name: "keywords",
                    label: "Keywords SEO",
                    list: true
                  }
                ]
              },
              {
                type: "object",
                name: "strategicBlog",
                label: "Blog Estrat\xE9gico",
                fields: [
                  {
                    type: "string",
                    name: "subtitle",
                    label: "Subt\xEDtulo (H3)",
                    required: true
                  },
                  {
                    type: "string",
                    name: "description",
                    label: "Descripci\xF3n",
                    required: true,
                    ui: {
                      component: "textarea",
                      description: "P\xE1rrafo explicativo que aparece debajo del subt\xEDtulo"
                    }
                  },
                  {
                    type: "string",
                    name: "items",
                    label: "Items incluidos",
                    list: true,
                    required: true
                  },
                  {
                    type: "string",
                    name: "keywords",
                    label: "Keywords SEO",
                    list: true
                  }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "forWhomSection",
            label: "4. Para Qui\xE9n es Este Servicio",
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
                label: "Subt\xEDtulo explicativo",
                required: true,
                ui: {
                  component: "textarea",
                  description: "Texto que aparece debajo del t\xEDtulo"
                }
              },
              {
                type: "string",
                name: "items",
                label: "Lista de perfiles",
                list: true,
                required: true
              },
              {
                type: "string",
                name: "keywords",
                label: "Keywords SEO",
                list: true
              }
            ]
          },
          {
            type: "object",
            name: "investmentSection",
            label: "5. Inversi\xF3n y Valor",
            fields: [
              {
                type: "string",
                name: "title",
                label: "T\xEDtulo (H2)",
                required: true
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
                            label: "Etiqueta"
                          },
                          {
                            type: "string",
                            name: "price",
                            label: "Precio"
                          }
                        ]
                      },
                      {
                        type: "object",
                        name: "blogFirst",
                        label: "Blog Primer Mes",
                        fields: [
                          {
                            type: "string",
                            name: "label",
                            label: "Etiqueta"
                          },
                          {
                            type: "string",
                            name: "price",
                            label: "Precio"
                          }
                        ]
                      },
                      {
                        type: "string",
                        name: "total",
                        label: "Total"
                      }
                    ]
                  },
                  {
                    type: "object",
                    name: "package",
                    label: "Precio del Paquete",
                    fields: [
                      {
                        type: "string",
                        name: "label",
                        label: "Etiqueta"
                      },
                      {
                        type: "string",
                        name: "price",
                        label: "Precio"
                      }
                    ]
                  },
                  {
                    type: "string",
                    name: "savings",
                    label: "Ahorro Total"
                  }
                ]
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
              },
              {
                type: "string",
                name: "keywords",
                label: "Keywords SEO",
                list: true
              }
            ]
          },
          {
            type: "object",
            name: "processSection",
            label: "6. C\xF3mo Funciona el Proceso",
            fields: [
              {
                type: "string",
                name: "title",
                label: "T\xEDtulo (H2)",
                required: true
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
                    label: "N\xFAmero del paso",
                    required: true
                  },
                  {
                    type: "string",
                    name: "title",
                    label: "T\xEDtulo del paso",
                    required: true
                  },
                  {
                    type: "string",
                    name: "duration",
                    label: "Duraci\xF3n",
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
                name: "keywords",
                label: "Keywords SEO",
                list: true
              }
            ]
          },
          {
            type: "object",
            name: "faqSection",
            label: "7. Preguntas Frecuentes",
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
                label: "Preguntas",
                list: true,
                fields: [
                  {
                    type: "string",
                    name: "question",
                    label: "Pregunta (H3)",
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
              },
              {
                type: "string",
                name: "keywords",
                label: "Keywords SEO",
                list: true
              }
            ]
          },
          {
            type: "object",
            name: "testimonialsSection",
            label: "8. Testimonios",
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
                      component: "textarea",
                      description: "El texto del testimonio del cliente"
                    }
                  },
                  {
                    type: "string",
                    name: "author",
                    label: "Autor",
                    required: true,
                    ui: {
                      description: "Nombre y cargo del cliente (ej: Mar\xEDa Gonz\xE1lez, Consultora de marketing)"
                    }
                  }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "finalCtaSection",
            label: "9. CTA Final",
            fields: [
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
          }
        ]
      },
      {
        name: "error404",
        label: "P\xE1gina 404",
        path: "src/content/404",
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
                required: true
              },
              {
                type: "string",
                name: "description",
                label: "Meta descripci\xF3n",
                required: true
              },
              {
                type: "boolean",
                name: "noindex",
                label: "No indexar en buscadores",
                required: true
              }
            ]
          },
          {
            type: "object",
            name: "hero",
            label: "Secci\xF3n Principal",
            fields: [
              {
                type: "string",
                name: "errorCode",
                label: "C\xF3digo de error",
                required: true,
                ui: {
                  description: "Ej: 404"
                }
              },
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
                required: true,
                ui: {
                  component: "textarea"
                }
              },
              {
                type: "object",
                name: "primaryCta",
                label: "Bot\xF3n principal",
                fields: [
                  {
                    type: "string",
                    name: "text",
                    label: "Texto del bot\xF3n",
                    required: true
                  },
                  {
                    type: "string",
                    name: "link",
                    label: "Enlace",
                    required: true
                  }
                ]
              },
              {
                type: "object",
                name: "secondaryCta",
                label: "Bot\xF3n secundario",
                fields: [
                  {
                    type: "string",
                    name: "text",
                    label: "Texto del bot\xF3n",
                    required: true
                  },
                  {
                    type: "string",
                    name: "link",
                    label: "Enlace",
                    required: true
                  }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "suggestions",
            label: "Sugerencias",
            fields: [
              {
                type: "string",
                name: "title",
                label: "T\xEDtulo de la secci\xF3n",
                required: true
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
                    label: "T\xEDtulo",
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
                    name: "link",
                    label: "Enlace",
                    required: true
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
