import { defineCollection, reference } from "astro:content";
import { file, glob } from "astro/loaders";
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
      image: z.union([image(), z.string().url()]).optional(),
      order: z.number(),
      featured: z.boolean().default(false),
    }),
});

const experiences = defineCollection({
  loader: file("./src/content/experiences.yaml"),
  schema: z.object({
    company: z.string(),
    years: z.coerce.string(),
    role: z.string(),
    description: z.string(),
    order: z.number(),
    projects: z.array(reference("projects")).default([]),
  }),
});

export const collections = { projects, experiences };
