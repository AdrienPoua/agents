# Benchmark — Sites des Ligues Sportives IDF

> Date : 16/02/2026
> Comparatif des sites web des principales ligues sportives regionales Ile-de-France

---

## Tableau comparatif

| Ligue | URL | Techno | Etat | Note |
|-------|-----|--------|------|------|
| **Basketball IDF** | basketidf.com | WordPress + Elementor + 15 plugins | Lourd, pages 404, plugins zombies | 4/10 |
| **Rugby IDF** | ligueidf.ffr.fr | SPA JavaScript (React/Vue/Angular) | Page blanche sans JS — SEO = 0 | 2/10 |
| **Handball IDF** | handball-idf.com | Joomla + jQuery + FullCalendar | Date, code non minifie | 3/10 |
| **Football IDF** | paris-idf.fff.fr | WordPress + Gutenberg | Bloat publicitaire, scripts tiers | 4/10 |
| **Sport Universitaire IDF** | sport-u-iledefrance.com | Inconnu | **Hors ligne** (en maintenance) | 0/10 |

---

## Analyse detaillee

### Rugby IDF — ligueidf.ffr.fr

**Probleme critique** : Le site est une Single Page Application (SPA) en JavaScript pur. Sans JavaScript active, il affiche **uniquement** :
> "You need to enable JavaScript to run this app"

**Consequences** :
- **SEO catastrophique** : Google peut avoir du mal a indexer le contenu
- **Accessibilite** : inutilisable pour les personnes utilisant des lecteurs d'ecran sans JS
- **Pas de degradation gracieuse** : aucun contenu fallback

**Lecon** : Un site sportif ne devrait jamais dependre a 100% du JavaScript client. Next.js avec SSG/SSR resout ce probleme.

---

### Handball IDF — handball-idf.com

**Stack** : Joomla CMS + jQuery + RokSprocket + FullCalendar

**Problemes** :
- Architecture Joomla datee (CMS moins maintenu que WordPress)
- jQuery non optimise
- Code JavaScript inline non minifie
- Design responsive mais vieillissant

**Points positifs** :
- Calendrier interactif (FullCalendar)
- Navigation multi-departements
- Videotheque
- Systeme de licences en ligne

---

### Football IDF — paris-idf.fff.fr

**Stack** : WordPress + theme custom "fff" + Gutenberg + New Relic + Google Tag Manager

**Problemes** :
- Scripts tiers charges avant le contenu (Smart AdServer, Google AdSense)
- Styles inline excessifs
- Pas de lazy loading apparent
- Publicites intrusives

**Points positifs** :
- Monitoring (New Relic)
- Theme custom adapte a la charte FFF

---

### Sport Universitaire IDF — sport-u-iledefrance.com

**Etat** : Site en maintenance. Page blanche avec "Site en maintenance". Aucune info, aucun calendrier, aucun contact.

---

## Conclusions pour le pitch

### Le constat
**TOUS les sites de ligues sportives IDF sont techniquement mediocres.** Aucun n'utilise une stack moderne (React, Next.js, Nuxt, etc.). C'est un marche ou le standard est tres bas.

### L'opportunite
Proposer un site Next.js moderne pour la Ligue Basketball IDF ferait d'eux **la reference technologique parmi les ligues sportives regionales**. C'est un argument de prestige.

### Le risque concurrent
Aucune ligue IDF ne semble avoir investi dans une refonte recente. Le premier a le faire prendra l'avantage. Si une autre ligue modernise son site avant le basket, l'argument de "pionniers" disparait.

### Argument
> "Regardez les sites de vos homologues : Rugby IDF n'a pas de SEO, Handball IDF est sur Joomla, Football IDF est noye sous les pubs, et Sport U est en maintenance. En adoptant Next.js, vous deviendriez la ligue sportive IDF la plus moderne numeriquement. C'est un avantage de communication et de credibilite."
