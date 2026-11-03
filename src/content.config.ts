import { defineCollection, reference } from "astro:content";
import { file, glob } from "astro/loaders";
import { z } from "astro/zod";
import type { Lang } from "@/i18n/ui";

// One collection per language: ids must be unique within a collection,
// and `accor` exists in both languages.
function createProjectCollection(lang: Lang) {
  return defineCollection({
    loader: glob({ pattern: "*.md", base: `./src/content/projects/${lang}` }),
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
}

function createExperienceCollection(
  lang: Lang,
  projectCollection: "projectsFr" | "projectsEn",
) {
  return defineCollection({
    loader: file(`./src/content/experiences/${lang}.yaml`),
    schema: z.object({
      company: z.string(),
      years: z.coerce.string(),
      role: z.string(),
      description: z.string(),
      order: z.number(),
      projects: z.array(reference(projectCollection)).default([]),
    }),
  });
}

export const collections = {
  projectsFr: createProjectCollection("fr"),
  projectsEn: createProjectCollection("en"),
  experiencesFr: createExperienceCollection("fr", "projectsFr"),
  experiencesEn: createExperienceCollection("en", "projectsEn"),
};
