import { getCollection, getEntries, type CollectionEntry } from "astro:content";
import type { Lang } from "@/i18n/ui";

const projectCollectionByLang = {
  fr: "projectsFr",
  en: "projectsEn",
} as const;

const experienceCollectionByLang = {
  fr: "experiencesFr",
  en: "experiencesEn",
} as const;

export type Project = CollectionEntry<(typeof projectCollectionByLang)[Lang]>;

export async function getSortedProjects(lang: Lang) {
  const projects = await getCollection(projectCollectionByLang[lang]);

  return projects.toSorted((a, b) => a.data.order - b.data.order);
}

/** Static paths of the project pages, with previous and next projects (the list loops). */
export async function getProjectPaths(lang: Lang) {
  const projects = await getSortedProjects(lang);

  return projects.map((project, index) => ({
    params: { slug: project.id },
    props: {
      project,
      previousProject:
        projects[(index - 1 + projects.length) % projects.length],
      nextProject: projects[(index + 1) % projects.length],
    },
  }));
}

export async function getFeaturedProjects(lang: Lang) {
  const projects = await getSortedProjects(lang);

  return projects.filter((project) => project.data.featured);
}

/** Resume experiences, most recent first, with their linked project pages. */
export async function getSortedExperiences(lang: Lang) {
  const experiences = await getCollection(experienceCollectionByLang[lang]);

  return Promise.all(
    experiences
      .toSorted((a, b) => a.data.order - b.data.order)
      .map(async (experience) => ({
        ...experience.data,
        linkedProjects: await getEntries(experience.data.projects),
      })),
  );
}
