import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: ({ image }) =>
    z.object({
        title: z.string(),
        subtitle: z.string(),
        years: z.coerce.string(),
        role: z.string(),
        stack: z.array(z.string()),
        image: image().optional(),
        order: z.number()
    }),
});

export const collections = { projects };