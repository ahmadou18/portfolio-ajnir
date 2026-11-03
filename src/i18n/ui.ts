export const languages = {
    fr: "Français",
    en: "English",
  } as const;
  
  export type Lang = keyof typeof languages;
  
  export const defaultLang: Lang = "fr";
  
  const fr = {
    "skipLink": "Aller au contenu",
    "header.homeLabel": "Ahmadou Gueye, accueil",
    "header.emailLabel": "Contact par email",
    "nav.label": "Navigation principale",
    "nav.projects": "Projets",
    "nav.resume": "CV",
    "nav.contact": "Contact",
    "languageSwitcher.label": "Changer de langue",
    // Written in the target language: the link carries lang="en"
    "languageSwitcher.targetCode": "EN",
    "languageSwitcher.targetName": "English version",
  
    "footer.city": "Paris",
    "copy.label": "Copier l'adresse email",
    "copy.done": "Email copié",
  
    "home.subtitle": "Développeur front-end à Paris",
    "home.intro":
      "Je suis Ahmadou Gueye, développeur front-end freelance, spécialisé en Vue.js, Nuxt et React. Depuis 2019, je conçois des interfaces rapides, accessibles et faciles à maintenir pour des entreprises comme Accor, Dalkia ou Maisons du Monde.",
    "home.introSecondary":
      "Du e-commerce à l’énergie, en passant par l’hôtellerie : Design Systems, performance et accessibilité.",
    "home.selectedProjects": "Projets sélectionnés",
    "home.seeAll": "Tout",
    "home.seeAllLabel": "Voir tous les projets",
    "home.seeAllContext": " : voir tous les projets",
  
    "projects.title": "Projets",
    "projects.subtitle": "Du e-commerce à l’énergie, en Vue et en React",
  
    "project.year": "Année",
    "project.role": "Rôle",
    "project.stack": "Stack",
    "project.navLabel": "Navigation entre projets",
    "project.previous": "Projet précédent",
    "project.all": "Tous les projets",
    "project.next": "Projet suivant",
    // French puts a space before the colon
    "punctuation.colon": " :",
  
    // CV
    "resume.title": "CV",
    "resume.subtitle": "Développeur front-end à Paris",
    "resume.download": "Télécharger le PDF",
    "resume.experience": "Expériences",
    "resume.skills": "Compétences",
    "resume.education": "Formation",
    "resume.languages": "Langues",
    "resume.seeProject": "Voir le projet",
    "resume.skillGroupFrontEnd": "Front-end",
    "resume.skillGroupInterface": "Interface",
    "resume.skillGroupQuality": "Qualité",
    "resume.skillGroupCms": "CMS et back-end",
    "resume.skillGroupTools": "Outils",
    "resume.qualitySkills": "Vitest, Jest, accessibilité (WCAG), Core Web Vitals",
    "resume.degree": "Développeur logiciel, niveau II (Bac+3/4)",
    "resume.school": "Simplon.co, Paris · Formation en alternance",
    "resume.french": "Français",
    "resume.frenchLevel": "langue maternelle",
    "resume.english": "Anglais",
    "resume.englishLevel": "professionnel",
  
    // Contact
    "contact.title": "Contact",
    "contact.subtitle": "Une mission, un projet ? Écrivez-moi.",
    "contact.sectionLabel": "Me contacter",
    "contact.email": "E-mail",
    "contact.availability": "Disponibilité",
    "contact.availableFrom": "Disponible à partir de",
    "contact.status": "Freelance, basé à Paris",
    "contact.elsewhere": "Ailleurs",
    "contact.linkedin": "Parcours et recommandations",
    "contact.malt": "Profil freelance",
    "contact.collective": "Profil freelance",
    "contact.github": "Code et projets personnels",
  
    // 404 ({count} est remplacé par le nombre de projets)
    "notFound.title": "Page introuvable",
    "notFound.subtitle": "Cette page n'existe pas, ou plus.",
    "notFound.text":
      "Le lien est peut-être ancien, ou l'adresse a été mal copiée. Voici où reprendre la visite :",
    "notFound.navLabel": "Pages du site",
    "notFound.home": "Accueil",
    "notFound.homeDescription": "Qui je suis, et mes projets sélectionnés",
    "notFound.projectsDescription": "{count} missions, du e-commerce à l'énergie",
    "notFound.resumeDescription": "Mon parcours, téléchargeable en PDF",
    "notFound.contactDescription": "Écrivez-moi directement",

    // Meta (title and description of each page)
    "meta.homeTitle": "Ahmadou Gueye — Développeur front-end à Paris",
    "meta.homeDescription":
      "Ahmadou Gueye, développeur front-end freelance à Paris, spécialisé en Vue.js, Nuxt et React. Interfaces rapides et accessibles pour Accor et Dalkia.",
    "meta.projectsTitle": "Projets — Ahmadou Gueye",
    "meta.projectsDescription":
      "Missions front-end en Vue, Nuxt et React : Accor, Savelys, Dalkia, Maisons du Monde…",
    "meta.resumeTitle": "CV — Ahmadou Gueye, développeur front-end à Paris",
    "meta.resumeDescription":
      "Parcours d'Ahmadou Gueye, développeur front-end à Paris : Accor, Dalkia, Maisons du Monde, Savelys. Vue 3, Nuxt, React, Astro.",
    "meta.contactTitle": "Contact — Ahmadou Gueye, développeur front-end freelance à Paris",
    "meta.contactDescription":
      "Contacter Ahmadou Gueye, développeur front-end freelance à Paris (Vue.js, Nuxt, React) : email, disponibilité, profils LinkedIn, Malt et Collective.",
    "meta.notFoundTitle": "Page introuvable — Ahmadou Gueye",
  } as const;
  
  const en: Record<keyof typeof fr, string> = {
    // Accessibility and header
    "skipLink": "Skip to content",
    "header.homeLabel": "Ahmadou Gueye, home",
    "header.emailLabel": "Contact by email",
    "nav.label": "Main navigation",
    "nav.projects": "Projects",
    "nav.resume": "Resume",
    "nav.contact": "Contact",
    "languageSwitcher.label": "Change language",
    "languageSwitcher.targetCode": "FR",
    "languageSwitcher.targetName": "Version française",
  
    // Footer and copy button
    "footer.city": "Paris",
    "copy.label": "Copy email address",
    "copy.done": "Email copied",
  
    // Home
    "home.subtitle": "Front-end developer in Paris",
    "home.intro":
      "I'm Ahmadou Gueye, a freelance front-end developer specializing in Vue.js, Nuxt and React. Since 2019, I've been building fast, accessible and maintainable interfaces for companies such as Accor, Dalkia and Maisons du Monde.",
    "home.introSecondary":
      "From e-commerce to energy, by way of hospitality: Design Systems, performance and accessibility.",
    "home.selectedProjects": "Selected projects",
    "home.seeAll": "All",
    "home.seeAllLabel": "See all projects",
    "home.seeAllContext": ": see all projects",
  
    // Projects list
    "projects.title": "Projects",
    "projects.subtitle": "From e-commerce to energy, in Vue and React",
  
    // Project page
    "project.year": "Year",
    "project.role": "Role",
    "project.stack": "Stack",
    "project.navLabel": "Project navigation",
    "project.previous": "Previous project",
    "project.all": "All projects",
    "project.next": "Next project",
    "punctuation.colon": ":",
  
    // Resume
    "resume.title": "Resume",
    "resume.subtitle": "Front-end developer in Paris",
    "resume.download": "Download PDF",
    "resume.experience": "Experience",
    "resume.skills": "Skills",
    "resume.education": "Education",
    "resume.languages": "Languages",
    "resume.seeProject": "View project",
    "resume.skillGroupFrontEnd": "Front-end",
    "resume.skillGroupInterface": "Interface",
    "resume.skillGroupQuality": "Quality",
    "resume.skillGroupCms": "CMS and back-end",
    "resume.skillGroupTools": "Tools",
    "resume.qualitySkills": "Vitest, Jest, accessibility (WCAG), Core Web Vitals",
    "resume.degree": "Software developer (bachelor's level)",
    "resume.school": "Simplon.co, Paris · Work-study program",
    "resume.french": "French",
    "resume.frenchLevel": "native",
    "resume.english": "English",
    "resume.englishLevel": "professional",
  
    // Contact
    "contact.title": "Contact",
    "contact.subtitle": "A project in mind? Get in touch.",
    "contact.sectionLabel": "Get in touch",
    "contact.email": "Email",
    "contact.availability": "Availability",
    "contact.availableFrom": "Available from",
    "contact.status": "Freelance, based in Paris",
    "contact.elsewhere": "Elsewhere",
    "contact.linkedin": "Background and recommendations",
    "contact.malt": "Freelance profile",
    "contact.collective": "Freelance profile",
    "contact.github": "Code and side projects",
  
    // 404 ({count} is replaced with the number of projects)
    "notFound.title": "Page not found",
    "notFound.subtitle": "This page doesn't exist, or no longer does.",
    "notFound.text":
      "The link may be outdated, or the address was mistyped. Here's where to pick up:",
    "notFound.navLabel": "Site pages",
    "notFound.home": "Home",
    "notFound.homeDescription": "Who I am, and selected projects",
    "notFound.projectsDescription": "{count} projects, from e-commerce to energy",
    "notFound.resumeDescription": "My background, downloadable as a PDF",
    "notFound.contactDescription": "Write to me directly",

    // Meta (title and description of each page)
    "meta.homeTitle": "Ahmadou Gueye — Front-end developer in Paris",
    "meta.homeDescription":
      "Ahmadou Gueye, freelance front-end developer in Paris, specializing in Vue.js, Nuxt and React. Fast, accessible interfaces for Accor and Dalkia.",
    "meta.projectsTitle": "Projects — Ahmadou Gueye",
    "meta.projectsDescription":
      "Front-end projects in Vue, Nuxt and React: Accor, Savelys, Dalkia, Maisons du Monde…",
    "meta.resumeTitle": "Resume — Ahmadou Gueye, front-end developer in Paris",
    "meta.resumeDescription":
      "Ahmadou Gueye's background as a front-end developer in Paris: Accor, Dalkia, Maisons du Monde, Savelys. Vue 3, Nuxt, React, Astro.",
    "meta.contactTitle": "Contact — Ahmadou Gueye, freelance front-end developer in Paris",
    "meta.contactDescription":
      "Get in touch with Ahmadou Gueye, freelance front-end developer in Paris (Vue.js, Nuxt, React): email, availability, LinkedIn, Malt and Collective profiles.",
    "meta.notFoundTitle": "Page not found — Ahmadou Gueye",
  };
  
  export const ui = { fr, en } as const;
  
  export type TranslationKey = keyof typeof fr;