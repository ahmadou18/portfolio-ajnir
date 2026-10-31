# DESIGN.md — Portfolio Ahmadou Gueye

Référence visuelle du site. Inspiration : christophrauscher.de/projects. Minimaliste, éditorial, beaucoup d'air. Les projets sont illustrés par des photos d'ambiance libres de droits (Unsplash) qui évoquent l'univers de chaque entreprise, jamais par des captures de leurs sites ou outils (NDA).

Traduire tout ce qui suit en classes Tailwind et en tokens `@theme` : jamais de `style="…"` inline.

## Tokens

### Couleurs

| Token | Valeur | Usage |
|---|---|---|
| `frame` | `#e3dbcf` | Fond sable autour de la feuille, `body` |
| `paper` | `#f4efe6` | Feuille de contenu, texte sur blocs pleins |
| `ink` | `#1a1714` | Texte principal, blocs pleins, filet actif |
| `ochre` | `#c26a12` | Accent (survol des liens), blocs pleins |
| `muted` | `#8a847c` | 2e ligne des **grands titres uniquement** |
| `muted-strong` | `#5f5a53` | Métas, sous-titres de projets, textes secondaires |

Filets : toujours en trait plein (jamais en pointillés), `ink` à 20 % d'opacité (`border-ink/20`).

⚠️ `muted` sur `paper` ne passe pas le contraste WCAG en petit corps : jamais sous 24px. `paper` sur `ochre` : uniquement en grand corps (noms de clients).

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
- Page projet : le bloc image, les métas et la navigation occupent toute la largeur de la feuille ; seul le texte (Contexte, Ce que j'ai fait, Résultat) est limité à `max-width` 860px

## Layout global

```
┌ frame (sable, 10px) ─────────────────────────────┐
│ ┌ paper (crème, min-height 100vh - 20px) ──────┐ │
│ │ SiteHeader (sticky)                          │ │
│ │ Contenu                                      │ │
│ │ SiteFooter                                   │ │
│ └──────────────────────────────────────────────┘ │
└──────────────────────────────────────────────────┘
```

## Composants

### SiteHeader

Sticky en haut, fond `paper`, padding 16px en haut et 12px en bas, texte 14px.

- **Desktop (≥ 640px)** : une seule ligne en grille `auto 1fr auto`, gap 32px, alignée en bas.
  Logo seul (sans le nom) | 4 liens en 4 colonnes égales | `@` (18px)
- **Mobile** : ligne 1 = logo à gauche, `@` à droite. Ligne 2 = les 4 liens en grille 2×2, gap 24px.
- Chaque lien : bloc, padding vertical 6px, **filet sous le lien** (`border-b border-ink/20`).
- Page active : `aria-current="page"` et filet plein `border-ink`.
- Liens : Projets (`/projects`), À propos (`/#a-propos`), CV (`/resume`), Contact (`#contact`, ancre vers le footer de la page en cours). Le `@` reste un `mailto:` avec `aria-label="Contact par email"`.
- **Logo** (`src/assets/logo.svg`, version en traits) : 22px de haut, `stroke-[12]`, toujours en `ink` (ne change pas de couleur au survol), `aria-hidden="true"`. Le nom n'est pas affiché : le lien vers l'accueil porte `aria-label="Ahmadou Gueye, accueil"`. Au survol ou au focus du lien, il se redessine en CSS (A, puis barre et boucle du G, puis haut du G, 700ms, décalage 200ms). Aucune animation en `prefers-reduced-motion`.

### PageHeading

h1 en deux lignes : la 1re en `ink`, la 2e en `muted`.

| Page | Ligne 1 | Ligne 2 |
|---|---|---|
| Accueil | Ahmadou Gueye | Développeur front-end à Paris |
| Projets | Projets | Du e-commerce à l'énergie, en Vue et en React |
| Projet | Nom du client | Une phrase de résumé |

### ProjectCard

- Lien englobant tout le bloc
- Carré **1/1**, coins 2px
- **Sans image** (repli si un projet n'a pas de photo) : fond `ink` ou `ochre` (reçu de `ProjectGrid`), nom du client centré en `paper`, Fraunces 300, 48px, padding horizontal 20px
- **Avec image** (cas normal) : photo d'ambiance Unsplash (URL distante, optimisée par Astro au build), sans logo ni enseigne visible ; elle remplit le rectangle (`object-cover`) avec `alt=""` (le nom du client est déjà dans le lien), posée sur un fond `ink` (repli si l'image ne charge pas) et recouverte d'un voile `ink` à 55 % pour le contraste (3,4:1 minimum sur une zone blanche). Le nom du client reste centré par-dessus, identique au cas sans image
- Légende dessous, 14px, `muted-strong`, en flex `justify-between` : sous-titre suivi de `→` à gauche, années à droite
- Survol et focus clavier : la légende passe en `ochre`, l'image zoome légèrement (voir Animations)

### ProjectGrid

`grid-template-columns: repeat(auto-fit, minmax(260px, 1fr))` : 2 colonnes sur desktop, 1 sur mobile. **La couleur de fond est calculée par la grille selon la position**, pas stockée dans les données : damier `ink` / `ochre`, puis `ochre` / `ink`, et ainsi de suite (calculé pour 2 colonnes). Les cartes avec image ignorent la couleur.

### SectionHeader (accueil)

Filet au-dessus (`border-t border-ink/20`), padding-top 12px, flex `justify-between` aligné sur la ligne de base : h2 à gauche, `TOUT →` à droite. 32px sous l'en-tête.

### SiteFooter

`id="contact"` (cible du lien Contact), avec `scroll-mt` pour ne pas passer sous la nav sticky. Filet au-dessus, padding-top 16px, 14px. À gauche : l'adresse email affichée en clair (lien `mailto:`) suivie d'une icône de copie, puis LinkedIn et GitHub. `Paris` en `muted-strong` poussé à droite. Passe à la ligne sur mobile.

- **Bouton de copie** (`CopyEmailButton`) : icône seule 14px en `muted-strong`, `ochre` au survol, zone cliquable de 24px minimum, `aria-label="Copier l'adresse email"`. Après le clic, l'icône devient une coche pendant 2 secondes et « Email copié » est annoncé via une zone `role="status"`. Masqué sans JS (`hidden`), le lien `mailto:` suffit alors.

## Pages

### Accueil (`src/pages/index.astro`)

1. SiteHeader
2. PageHeading
3. Intro (max 540px), 40px sous le titre :
   - « Je suis Ahmadou Gueye, développeur front-end freelance basé à Paris, spécialisé en Vue.js, Nuxt et React. Depuis 2017, je conçois des interfaces rapides, accessibles et faciles à maintenir pour des entreprises comme Accor, Dalkia ou Maisons du Monde. »
   - En `muted-strong` : « Du e-commerce à l'énergie, en passant par l'hôtellerie : Design Systems, performance et accessibilité. »
4. Section « Projets sélectionnés » : SectionHeader + grille de 4 projets (Accor, Dalkia, Savelys, Maisons du Monde)
5. SiteFooter

### Liste des projets (`src/pages/projects/index.astro`)

1. SiteHeader (Projets actif)
2. PageHeading
3. ProjectGrid avec tous les projets, 72px sous le titre
4. SiteFooter

| title | subtitle | years |
|---|---|---|
| Accor | Sites à grande échelle, Core Web Vitals | 2024–2026 |
| Savelys | Design System, groupe Engie | [ANNÉE] |
| Dalkia | Dataviz Vue.js et cadrage produit | [ANNÉE] |
| Maisons du Monde | Vue, Nuxt et GraphQL | [ANNÉE] |
| Nestlé Waters | React et lecteur vidéo YouTube sur mesure | 2019 |
| Clemenvilla | Vue.js et Drupal headless | 2017–2018 |

### Page projet (`src/pages/projects/[slug].astro`)

Dans un `<article>` pleine largeur (seul le contenu texte, point 5, est limité à 860px) :

1. SiteHeader (Projets actif)
2. PageHeading (client + résumé)
3. Bloc couleur en bandeau : **3/1 sur desktop** (≥ 640px), **16/10 sur mobile** ; nom du client en 72px (48px sur mobile), 48px sous le titre
4. Métas en `<dl>`, grille de 3 colonnes, sous un filet, 24px au-dessus : Année, Rôle, Stack (libellés en `muted-strong`)
5. Sections h2, dans un conteneur `max-width` 860px : **Contexte**, **Ce que j'ai fait** (liste à puces), **Résultat**
6. Navigation bas de page sous un filet, 96px au-dessus, en 3 liens : « ← Projet précédent : X » à gauche, « Tous les projets » au centre, « Projet suivant : Y → » à droite (grille `1fr auto 1fr` dès 640px, liens empilés sur mobile). La liste boucle : avant le premier projet vient le dernier

### CV (`src/pages/resume.astro`)

1. SiteHeader (CV actif)
2. PageHeading : « CV » / « Développeur front-end à Paris »
3. Lien « Télécharger le PDF ↓ », 40px sous le titre : 13px, 500, majuscules, `tracking 0.04em`, filet `ink` dessous. Le PDF est dans `public/` (`/CV_Gueye_Ahmadou.pdf`), lien avec l'attribut `download`
4. Section **Expériences** (72px sous le lien) : h2 26px sous un filet `ink/20`, puis une liste ordonnée, du plus récent au plus ancien. Chaque ligne, séparée par un filet `ink/20`, padding vertical 20px, en grille `160px 1fr` dès 640px (empilée sur mobile) :
   - à gauche : années, 14px, `muted-strong`
   - à droite : entreprise (h3, Fraunces 400, 22px), rôle (14px, `muted-strong`), une phrase de description (max 620px), puis le ou les liens « Voir le projet → » vers les pages projet concernées
5. Section **Compétences** (96px au-dessus) : groupes en grille 2 colonnes dès 640px (Front-end, Interface, Qualité, CMS et back-end, Outils), titre 14px 500, valeurs en `muted-strong`
6. Sections **Formation** (même ligne que les expériences : 2018 | « Développeur logiciel, niveau II (Bac+3/4) », puis « Simplon.co, Paris · Formation en alternance » en `muted-strong`) et **Langues** : Français, langue maternelle ; Anglais, professionnel (langue en `ink`, niveau en `muted-strong`)
7. SiteFooter

| Années | Entreprise | Rôle | Projets liés |
|---|---|---|---|
| 2026 | Savelys | Développeur front-end | savelys |
| 2026 | Ebru Eroksuz | Développeur front-end | ebru-eroksuz |
| 2024–2026 | Accor | Développeur front-end | accor |
| 2022–2024 | Dalkia | Responsable front-end | dalkia |
| 2021–2022 | OpenClassrooms | Mentor développement front-end | — |
| 2020–2021 | Maisons du Monde | Développeur front-end | maisons-du-monde |
| 2019 | Mazarine | Développeur front-end | nestle-waters, opera-de-paris |
| 2017–2018 | Clemenvilla | Développeur web | clemenvilla |

## Animations

Très discrètes et **en CSS uniquement** : le site n'envoie pas de JS pour de la décoration.

- Survol d'une carte : léger zoom de l'image (`scale-105`, ~500ms) et légende en `ochre`. Les cartes sans image ne bougent pas, seule la légende change.
- Chaque effet de survol a son équivalent au clavier (`group-focus-visible`), et un contour de focus visible sur les liens.
- Toujours respecter `prefers-reduced-motion` (`motion-reduce:`).
- **Transitions entre pages** : View Transitions natives du navigateur (`@view-transition { navigation: auto; }`), sans `ClientRouter` d'Astro. Fondu par défaut ; entre projets, fondu avec un décalage de 24px vers la gauche pour « Projet suivant », vers la droite pour « Projet précédent » (sortie 200ms, entrée 300ms décalée de 100ms). Le header reste immobile. Les navigateurs non compatibles changent simplement de page, sans animation. Désactivées en `prefers-reduced-motion`.
- JS uniquement pour une fonctionnalité utile (ex. bouton « Copier l'email ») ou pour indiquer le sens d'une transition, jamais pour un effet visuel en soi.

## Placeholders

`[ANNÉE]`, `[TON EMAIL]`, `[LIEN LINKEDIN]`, `[LIEN GITHUB]` : à compléter par Ahmadou, ne jamais inventer de valeur.