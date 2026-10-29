import type { ImageMetadata } from "astro";
import accorImage from "../assets/projects/accor/accor.jpg";

export interface Project {
  title: string;
  subtitle: string;
  years: string;
  href: string;
  color: "ink" | "ochre";
  image?: ImageMetadata;
}

export const projects: Project[] = [
  {
    title: "Accor",
    subtitle: "Sites à grande échelle, Core Web Vitals",
    years: "2024–2026",
    href: "/projets/accor",
    image: accorImage,
    color: "ink",
  },
  {
    title: "Savelys",
    subtitle: "Design System, groupe Engie",
    years: "2026",
    href: "/projets/savelys",
    color: "ochre",
  },
  {
    title: "Dalkia",
    subtitle: "Dataviz Vue.js et cadrage produit",
    years: "2022-2024",
    href: "/projets/dalkia",
    color: "ochre",
  },
  {
    title: "Maisons du Monde",
    subtitle: "Vue, Nuxt et GraphQL",
    years: "2020-2021",
    href: "/projets/maisons-du-monde",
    color: "ink",
  },
  {
    title: "Nestlé Waters",
    subtitle: "React et lecteur vidéo YouTube sur mesure",
    years: "2019",
    href: "/projets/nestle-waters",
    color: "ink",
  },
  {
    title: "Clemenvilla",
    subtitle: "Vue.js et Drupal headless",
    years: "2017–2018",
    href: "/projets/clemenvilla",
    color: "ochre",
  },
];