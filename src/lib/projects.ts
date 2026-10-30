import { getCollection } from "astro:content";

export async function getSortedProjects() {
  const projects = await getCollection("projects");

  return projects.toSorted((a, b) => a.data.order - b.data.order);
}

export async function getFeaturedProjects() {
  const projects = await getSortedProjects();

  return projects.filter((project) => project.data.featured);
}
