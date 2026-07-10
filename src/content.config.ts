import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    tag: z.string(),
    featured: z.boolean().optional().default(false),
    draft: z.boolean().optional().default(false),
    // Opcjonalne pola rozszerzone
    author: z.string().optional(),
    authorTitle: z.string().optional(),
    readingTime: z.string().optional(),
    heroSubtitle: z.string().optional(),
    heroImage: z.string().optional(),
  }),
});

export const collections = { articles };
