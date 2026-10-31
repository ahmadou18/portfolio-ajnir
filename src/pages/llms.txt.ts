import type { APIRoute } from "astro";
import { getSortedProjects } from "@/lib/projects";

const profileLinks = [
  { label: "LinkedIn", url: "https://www.linkedin.com/in/ahmadou-gueye" },
  { label: "GitHub", url: "https://github.com/ahmadou18" },
  { label: "Malt", url: "https://www.malt.fr/profile/ahmadougueye" },
  { label: "Collective", url: "https://www.collective.work/profile/ahmadou-gueye" },
];

const skills = [
  "Vue.js, Nuxt, React, Next.js, Astro",
  "TypeScript, JavaScript, Node.js, Python",
  "Tailwind CSS, Design Systems, Storybook",
  "Accessibilité web (WCAG), Core Web Vitals",
  "AEM, Strapi, Sanity, Prismic, Drupal",
];

export const GET: APIRoute = async ({ site }) => {
  if (!site) throw new Error("L'URL du site n'est pas configurée.");

  const projects = await getSortedProjects();
  const toAbsoluteUrl = (path: string) => new URL(path, site).href;

  const projectLines = projects.map(
    (project) =>
      `- [${project.data.title}](${toAbsoluteUrl(`/projects/${project.id}/`)}) : ${project.data.subtitle} (${project.data.years})`,
  );

  const content = [
    "# Ahmadou Gueye",
    "",
    "> Développeur front-end freelance basé à Paris, spécialisé en Vue.js, Nuxt et React, avec une expertise en Design Systems, accessibilité et performance web.",
    "",
    "Ahmadou Gueye conçoit et développe des interfaces web rapides, accessibles et faciles à maintenir. Il a travaillé pour des acteurs du e-commerce, de l'hôtellerie et de l'énergie, notamment Accor (Design System multi-marques), Savelys (Design System et nouvelle identité de marque), Dalkia (application de cartographie des réseaux de chaleur) et Maisons du Monde (refonte de la marketplace).",
    "",
    "## Projets",
    "",
    ...projectLines,
    "",
    "## Compétences",
    "",
    ...skills.map((skill) => `- ${skill}`),
    "",
    "## Pages",
    "",
    `- [CV](${toAbsoluteUrl("/resume/")}) : parcours complet, compétences, CV téléchargeable en PDF`,
    `- [Tous les projets](${toAbsoluteUrl("/projects/")})`,
    "",
    "## Contact",
    "",
    "- Email : ahmadou.gue@gmail.com",
    ...profileLinks.map(({ label, url }) => `- [${label}](${url})`),
    "",
  ].join("\n");

  return new Response(content, {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  });
};