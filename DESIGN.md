# DESIGN.md — Portfolio Ahmadou Gueye

Référence visuelle du site. Inspiration : christophrauscher.de/projects. Minimaliste, éditorial, beaucoup d'air, aucune image de projet (missions sous NDA).

Traduire tout ce qui suit en classes Tailwind et en tokens `@theme` : jamais de `style="…"` inline.
Rendu visuel : `design/maquette/*.html`. En cas d'écart, ce fichier (DESIGN.md) fait foi.

## Tokens

### Couleurs

| Token | Valeur | Usage |
|---|---|---|
| `cadre` | `#e3dbcf` | Fond sable autour de la feuille, `body` |
| `creme` | `#f4efe6` | Feuille de contenu, texte sur blocs pleins |
| `encre` | `#1a1714` | Texte principal, blocs pleins, filet actif |
| `ocre` | `#c26a12` | Accent (survol des liens), blocs pleins |
| `gris` | `#8a847c` | 2e ligne des **grands titres uniquement** |
| `gris-fonce` | `#5f5a53` | Métas, sous-titres de projets, textes secondaires |

Filets : `encre` à 20 % d'opacité (`border-encre/20`). Filets pointillés : `encre` à 35 % (`border-dashed border-encre/35`). Exception : le pied de page a un filet plein à 35 % (`border-encre/35`).

⚠️ `gris` sur `creme` ne passe pas le contraste WCAG en petit corps : jamais sous 24px. `creme` sur `ocre` : uniquement en grand corps (noms de clients).

### Typographie

| Rôle | Police | Graisse | Taille |
|---|---|---|---|
| Titre de page (h1) | Fraunces | 300 | 40px, interligne 1.15, `tracking -0.01em` |
| Titre de section (h2) | Fraunces | 300 (accueil) / 400 (page projet) | 26px / 22px |
| Nom de client (bloc) | Fraunces | 300 | 48px (72px sur la page projet) |
| Corps | Inter | 400 | 15px, interligne 1.6 |
| Nav, métas, légendes | Inter | 400 | 14px |
| Lien « TOUT → » | Inter | 500 | 13px, majuscules, `tracking 0.04em` |

Polices via `@fontsource-variable/fraunces` et `@fontsource-variable/inter`.

### Espacements

- Cadre : 10px tout autour de la feuille
- Padding de la feuille : 8px en haut, 28px sur les côtés, 96px en bas
- h1 : 72px sous la nav
- Entre sections : 96px (accueil), 48–64px (page projet)
- Pied de page : 120px au-dessus
- Grille de projets : gouttière 16px horizontale, 40px verticale
- Légende sous un bloc : 12px au-dessus

### Largeurs

- Le contenu occupe toute la largeur de la feuille
- Paragraphe d'intro : `max-width` 540px
- Article de page projet : `max-width` 860px

## Layout global

```
┌ cadre (sable, 10px) ─────────────────────────────┐
│ ┌ feuille (crème, min-height 100vh - 20px) ────┐ │
│ │ Nav (sticky)                                 │ │
│ │ Contenu                                      │ │
│ │ Pied de page                                 │ │
│ └──────────────────────────────────────────────┘ │
└──────────────────────────────────────────────────┘
```

## Composants

### Nav

Sticky en haut, fond `creme`, padding 16px en haut et 12px en bas, texte 14px.

- **Desktop (≥ 640px)** : une seule ligne en grille `auto 1fr auto`, gap 32px, alignée en bas.
  `Ahmadou Gueye` | 4 liens en 4 colonnes égales | `@` (18px)
- **Mobile** : ligne 1 = nom à gauche, `@` à droite. Ligne 2 = les 4 liens en grille 2×2, gap 24px.
- Chaque lien : bloc, padding vertical 6px, **filet sous le lien** (`border-b border-encre/20`).
- Page active : `aria-current="page"` et filet plein `border-encre`.
- Liens : Projets, À propos, CV, Contact. Le `@` a `aria-label="Contact par email"`.

### TitreDeuxTons

h1 en deux lignes : la 1re en `encre`, la 2e en `gris`.

| Page | Ligne 1 | Ligne 2 |
|---|---|---|
| Accueil | Ahmadou Gueye | Développeur front-end senior, freelance à Paris |
| Projets | Projets | Du e-commerce à l'énergie, en Vue et en React |
| Projet | Nom du client | Une phrase de résumé |

### BlocProjet

- Lien englobant tout le bloc
- Rectangle **4/5** (vertical), fond `encre` ou `ocre`, texte `creme`, coins 2px
- Nom du client centré, Fraunces 300, 48px, padding horizontal 20px
- Légende dessous, 14px, `gris-fonce`, en flex `justify-between` : sous-titre suivi de `→` à gauche, années à droite
- Survol : les liens passent en `ocre`

### GrilleProjets

`grid-template-columns: repeat(auto-fit, minmax(260px, 1fr))` : 2 colonnes sur desktop, 1 sur mobile. Couleurs **en damier** : encre / ocre, puis ocre / encre, et ainsi de suite.

### En-tête de section (accueil)

Filet au-dessus (`border-t border-encre/20`), padding-top 12px, flex `justify-between` aligné sur la ligne de base : h2 à gauche, `TOUT →` à droite. 32px sous l'en-tête.

### Pied de page

Filet plein `encre` à 35 % au-dessus (pas de pointillés), padding-top 16px, 14px. Liens Email, LinkedIn, GitHub à gauche, `Paris` en `gris-fonce` poussé à droite. Passe à la ligne sur mobile.

## Pages

### Accueil (`src/pages/index.astro`)

1. Nav
2. TitreDeuxTons
3. Intro (max 540px), 40px sous le titre :
   - « J'aide les équipes à construire des interfaces Vue et React rapides, accessibles et faciles à maintenir. »
   - En `gris-fonce` : « Du e-commerce à l'énergie : Accor, Maisons du Monde, Dalkia, Savelys. Vue 3, Nuxt, React, Astro. »
4. Section « Projets sélectionnés » : en-tête de section + grille de 4 projets (Accor, Dalkia, Savelys, Maisons du Monde)
5. Pied de page

### Liste des projets (`src/pages/projets/index.astro`)

1. Nav (Projets actif)
2. TitreDeuxTons
3. Grille de tous les projets, 72px sous le titre
4. Pied de page

| Client | Sous-titre | Années | Fond |
|---|---|---|---|
| Accor | Sites à grande échelle, Core Web Vitals | 2024–2026 | encre |
| Savelys | Design System, groupe Engie | [ANNÉE] | ocre |
| Dalkia | Dataviz Vue.js et cadrage produit | [ANNÉE] | ocre |
| Maisons du Monde | Vue, Nuxt et GraphQL | [ANNÉE] | encre |
| Nestlé Waters | React et lecteur vidéo YouTube sur mesure | 2019 | encre |
| Clemenvilla | Vue.js et Drupal headless | 2017–2018 | ocre |

### Page projet (`src/pages/projets/[slug].astro`)

1. Nav (Projets actif)
2. Dans `<main>`, un `<article>` limité à 860px :
   1. TitreDeuxTons (client + résumé)
   2. Bloc couleur **16/10**, nom du client en 72px, 48px sous le titre
   3. Métas en `<dl>`, grille de 3 colonnes, sous un filet pointillé, 24px au-dessus : Années, Rôle, Stack (libellés en `gris-fonce`)
   4. Sections h2 : **Contexte**, **Ce que j'ai fait** (liste à puces), **Résultat**
   5. Navigation bas de page sous un filet pointillé, 96px au-dessus : « ← Tous les projets » à gauche, « Projet suivant : X → » à droite

## Animations

Très discrètes. Fancy Components uniquement en touche (ex. Letter Swap au survol du nom de client). Toujours respecter `prefers-reduced-motion`.

## Placeholders

`[ANNÉE]`, `[TON EMAIL]`, `[LIEN CV]`, `[LIEN LINKEDIN]`, `[LIEN GITHUB]` : à compléter par Ahmadou, ne jamais inventer de valeur.