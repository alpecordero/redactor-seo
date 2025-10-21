import { defineCollection, z } from 'astro:content'

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    heroImage: z.string().optional(),
    tags: z.array(z.string()).optional(),
    metaTitle: z.string().optional(),
  })
})

const pages = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
  })
})

const sobreMi = defineCollection({
  type: 'data',
  schema: z.object({
    seo: z.object({
      title: z.string(),
      description: z.string(),
    }),
    title: z.string(),
    subtitle: z.string().optional(),
    profileImage: z.string(),
    storyContent: z.string(),
  })
})

export const collections = {
  blog,
  pages,
  'sobre-mi': sobreMi,
}