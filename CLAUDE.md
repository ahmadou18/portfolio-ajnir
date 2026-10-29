# CLAUDE.md — Portfolio Ahmadou Gueye

Portfolio de développeur front-end senior freelance (Paris). Site minimaliste : une liste de projets qui mène chacun vers une page de description.

## Contexte d'apprentissage

Ce projet sert aussi à **apprendre Astro** (formation guidée en modules). Ahmadou est senior en Vue/Nuxt, à l'aise en React, mais débutant en Astro.

- Explique les choix propres à Astro (îlots, directives `client:*`, Content Collections, routes dynamiques) en faisant le parallèle avec Vue/Nuxt quand c'est utile.
- Quand il demande de l'aide sur un exercice : corrige et explique, ne réécris pas tout à sa place.
- Réponses en **français**, concises et directes.

## Stack

- **Astro** (rendu statique)
- **React** uniquement pour les îlots interactifs
- **Tailwind CSS v4** (tokens dans `@theme`, pas de `tailwind.config`)
- **shadcn CLI** pour installer les composants **Fancy Components** (fancycomponents.dev), qui reposent sur `motion`
- Polices : `@fontsource-variable/fraunces` (serif) et `@fontsource-variable/inter` (sans)
- Alias `@/*` → `./src/*` (requis par shadcn)

## Commandes

```bash
npm run dev       # serveur de dev
npm run build     # build statique dans dist/
npm run preview   # prévisualiser le build
npx shadcn@latest add <url-registre-fancy>   # ajouter un composant Fancy
```

## Design

**Toute la direction artistique est dans `DESIGN.md`** : tokens, typo, espacements, composants et contenu de chaque page. Lis-le avant de créer ou modifier un composant ou une page, et respecte-le à la lettre. En cas de doute sur une valeur, demande plutôt que d'inventer.

@DESIGN.md

## Structure

```
DESIGN.md               # référence visuelle
src/
  components/
    SiteHeader.astro
    PageHeading.astro
    ProjectCard.astro
    fancy/              # composants Fancy installés via shadcn (React)
  content/
    projects/*.md       # un fichier par projet (module 3)
  layouts/
    BaseLayout.astro
  lib/utils.ts          # cn() généré par shadcn
  pages/
    index.astro
    projets/index.astro
    projets/[slug].astro
  styles/global.css
```

### Frontmatter d'un projet (cible)

```yaml
title: Accor
subtitle: Sites à grande échelle, Core Web Vitals
years: 2024–2026
stack: [Vue 3, AEM]
color: ink   # ink | ochre
```

## Conventions

- **`.astro` par défaut.** React (`.tsx`) uniquement si le composant a besoin de JS côté client.
- Toujours une directive explicite sur un îlot React : `client:load` (au-dessus de la ligne de flottaison), `client:idle` (survol, nav), `client:visible` (plus bas dans la page). Sans directive, aucune animation.
- **Jamais de classe Tailwind construite dynamiquement** (`` `bg-${color}` ``) : utiliser un objet de correspondance avec les classes complètes.
- Props typées avec `interface Props` dans le frontmatter.
- **Nommage du code en anglais**, toujours : composants, fonctions, props, variables, tokens, collections. Des noms qui décrivent clairement le rôle du composant ou ce que fait la fonction (`ProjectCard`, `SiteHeader`, `isCurrentPage`), jamais de noms vagues (`Block`, `Item`, `handle`, `data`).
- **Contenu du site en français** (textes, URL comme `/projets`, `alt`, `aria-label`).

## Qualité

- **Accessibilité** : respecter `prefers-reduced-motion` pour toute animation (`motion-safe:` / `motion-reduce:` côté Tailwind, `useReducedMotion` côté motion). Contrastes suffisants, liens explicites, `lang="fr"`.
- **Performance** : viser zéro JS sur les pages sans îlot. Vérifier le nombre de fichiers JS dans `dist/` après build.
- **SEO** : `title` et `description` uniques par page via les props du `Layout`.

## Programme de formation

1. ✅ Setup + premier îlot Fancy
2. ⏳ Structure : layout, nav, composants `.astro` vs `.tsx` (exercice en cours)
3. Content Collections + route dynamique `projets/[slug].astro`
4. Micro-interactions Fancy et stratégie d'hydratation
5. SEO/GEO : meta, Open Graph, sitemap, JSON-LD `Person`, `llms.txt`
6. Perf et accessibilité (Lighthouse, `prefers-reduced-motion`)
7. Déploiement