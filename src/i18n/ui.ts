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
  
    "footer.city": "Paris",
    "copy.label": "Copier l'adresse email",
    "copy.done": "Email copié",
  
    "home.subtitle": "Développeur front-end à Paris",
    "home.intro":
      "Je suis Ahmadou Gueye, développeur front-end freelance basé à Paris, spécialisé en Vue.js, Nuxt et React. Depuis 2017, je conçois des interfaces rapides, accessibles et faciles à maintenir pour des entreprises comme Accor, Dalkia ou Maisons du Monde.",
    "home.introSecondary":
      "Du e-commerce à l'énergie, en passant par l'hôtellerie : Design Systems, performance et accessibilité.",
    "home.selectedProjects": "Projets sélectionnés",
    "home.seeAll": "Tout",
    "home.seeAllLabel": "Voir tous les projets",
  
    "projects.title": "Projets",
    "projects.subtitle": "Du e-commerce à l'énergie, en Vue et en React",
  
    "project.year": "Année",
    "project.role": "Rôle",
    "project.stack": "Stack",
    "project.navLabel": "Navigation entre projets",
    "project.previous": "Projet précédent",
    "project.all": "Tous les projets",
    "project.next": "Projet suivant",
  
    // CV
    "resume.title": "CV",
    "resume.subtitle": "Développeur front-end, freelance à Paris",
    "resume.download": "Télécharger le PDF",
    "resume.experience": "Expériences",
    "resume.skills": "Compétences",
    "resume.education": "Formation",
    "resume.languages": "Langues",
    "resume.seeProject": "Voir le projet",
  
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
  
    // Footer and copy button
    "footer.city": "Paris",
    "copy.label": "Copy email address",
    "copy.done": "Email copied",
  
    // Home
    "home.subtitle": "Front-end developer in Paris",
    "home.intro":
      "I'm Ahmadou Gueye, a freelance front-end developer based in Paris, specializing in Vue.js, Nuxt and React. Since 2017, I've been building fast, accessible and maintainable interfaces for companies such as Accor, Dalkia and Maisons du Monde.",
    "home.introSecondary":
      "From e-commerce to energy, by way of hospitality: Design Systems, performance and accessibility.",
    "home.selectedProjects": "Selected projects",
    "home.seeAll": "All",
    "home.seeAllLabel": "See all projects",
  
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
  
    // Resume
    "resume.title": "Resume",
    "resume.subtitle": "Front-end developer, freelance in Paris",
    "resume.download": "Download PDF",
    "resume.experience": "Experience",
    "resume.skills": "Skills",
    "resume.education": "Education",
    "resume.languages": "Languages",
    "resume.seeProject": "View project",
  
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
  };
  
  export const ui = { fr, en } as const;
  
  export type TranslationKey = keyof typeof fr;