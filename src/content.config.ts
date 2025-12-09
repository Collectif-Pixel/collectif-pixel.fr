import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/data/blog" }),
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    author: z.string().default('COLLECTIF PIXEL'),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    image: image().optional(),
  })
});

export const collections = { blog };
