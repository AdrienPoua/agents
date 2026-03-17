# Audit Technique — basketidf.com

> Date : 16/02/2026
> Methode : Analyse passive (code source public, API REST, sitemap)

## Stack technique identifiee

| Couche | Technologie |
|--------|------------|
| CMS | WordPress 6.x |
| Theme | Astra (freemium) |
| Page Builder | Elementor Pro |
| Plugins Jet (Crocoblock) | JetMenu, JetParallax, JetStickySection, JetBlocks, JetBlog, JetElements, JetTabs, JetSmartFilters |
| Calendrier | The Events Calendar (inactif — 0 evenements) |
| Addons Elementor | Essential Addons for Elementor (EAEL), Ultimate Addons (UAEL) |
| SEO | SEOPress (Pro) |
| Securite | Wordfence |
| Statistiques | WP-Statistics |
| Conformite | Complianz (gestion cookies/RGPD) |
| Redirections | Redirection (plugin) |

### Namespaces API detectes (20)

```
oembed/1.0, redirection/v1, wordfence/v1, tribe/event-aggregator/v1,
tribe/events/v1, tribe/views/v2, tec/v2/onboarding, complianz/v1,
elementor/v1, uael/v1, seopress/v1, wp-statistics/v2, astra/v1,
jet-blocks-api/v1, jet-blog-api/v1, jet-elements-api/v1, jet-menu-api/v2,
jet-smart-filters-api/v1, jet-tabs-api/v1, elementor-pro/v1, bsf-core/v1,
nps-survey/v1, wp/v2, wp-site-health/v1, wp-block-editor/v1
```

Cela represente **au minimum 15 plugins actifs** + WordPress core + theme.

---

## Problemes de performance

### CSS
- **~200 KB de CSS inline** injecte dans le `<head>` de chaque page par Elementor
- **40+ variables CSS custom** definies dans `:root` (couleurs, typographies)
- Regles CSS dupliquees 10+ fois (chaque widget Elementor genere son propre bloc)
- Aucune minification visible du CSS inline
- CSS de TOUS les plugins charge sur TOUTES les pages (meme si le plugin n'est pas utilise sur la page)

### JavaScript
- **jQuery** charge (dependance Elementor) — librairie obsolete pour un site moderne
- Scripts `wp-emoji` charges sur chaque page (detection SVG emoji inutile)
- Swiper.js pour les carousels
- JS de chaque plugin Jet charge globalement

### Fonts
- **5 familles Google Fonts** chargees : Antonio, Public Sans, Work Sans, Cuprum + 1 autre
- Chaque font = requete HTTP supplementaire + temps de rendu

### Images
- **Pas de lazy loading** (`loading="lazy"` absent)
- **Pas de format WebP** generalise (PNG 2.16 MB et 2.43 MB detectes via API media)
- Images hero pleine hauteur (77vh) chargees immediatement sans defer
- Images uploadees sans optimisation (photos WhatsApp brutes de 429 KB)

### Estimation de charge
- **40-60+ requetes HTTP** par page
- **Poids page estimee** : 2-4 MB+
- **Temps de chargement mobile estime** : 4-8 secondes (Google recommande < 2.5s)

---

## Problemes structurels

### HTML non semantique
- Elementor genere des cascades de `<div>` au lieu de balises semantiques
- Pas de `<header>`, `<nav>`, `<main>`, `<article>`, `<footer>` detectes
- Structure basee sur des classes CSS (`elementor-element-xxxx`) au lieu de la semantique

### Accessibilite (RGAA/WCAG)
- Images sans attribut `alt` (les backgrounds Elementor ne supportent pas les alt)
- Media exposes via API : **aucun alt text** sur les 10 derniers fichiers
- Pas d'ARIA labels detectes
- Contraste potentiellement insuffisant (orange `#F75009` sur certains fonds)
- Navigation clavier probablement deficiente (limitation connue d'Elementor)

### SEO
- **Pas d'Open Graph image** (partages sociaux sans preview)
- **Pas de Twitter Cards**
- Sitemap XML date de **2014** — completement obsolete
- Pas de schema `BreadcrumbList`
- Pas de schema `Event` pour les competitions
- SEOPress installe mais configuration complete exposee via API (voir `03-api-rest-exposition.md`)

### Pages mortes (404)
Pages presentes dans le sitemap mais retournant 404 :
- `/carte_des_clubs/`
- `/pole-formation/`
- `/membre/espace-membre-com-discipline/`
- `/membre/espace_membre_cd/`
- `/membre/espace_membre_bureau/`

### Plugin zombie
- **The Events Calendar** : installe, 3 post types enregistres (events, venues, organizers), mais **0 evenements publies**. Charge ses assets CSS/JS sur toutes les pages pour rien.

### Tags anarchiques
- **200+ tags** dont la majorite n'est utilisee que 1 fois
- Tags contenant des phrases entieres (ex: "C'est avec joie que nous vous annoncons que Thierry Dudit...")
- Tags avec des pipes `|` comme separateurs au lieu de tags distincts
- Tags avec 0 articles associes (ex: "basketball", "Arc de triomphe", "CIC")
- Aucune strategie taxonomique coherente

---

## Informations techniques supplementaires

| Info | Valeur |
|------|--------|
| Front Page ID | 39584 |
| Posts Page ID | 41789 |
| Timezone | Europe/Paris (GMT+1) |
| Description du site | (vide) |
| Nombre d'auteurs actifs | Au moins 2 (ID 233, ID 236) |
| Nombre de categories | 10+ (toutes au niveau racine, pas de hierarchie) |
| Nombre de tags | 200+ (anarchiques) |
| Pages via API publique | 3 seulement (la majorite semble protegee/privee) |
| Nombre de posts | 196+ (categorie "Actualites") |
