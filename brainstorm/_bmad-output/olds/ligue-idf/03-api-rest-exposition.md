# Donnees Exposees par l'API REST — basketidf.com

> Date : 16/02/2026
> Methode : Requetes GET publiques sur les endpoints REST WordPress
> Toutes ces informations sont accessibles par n'importe qui avec un navigateur

---

## Endpoint principal : /wp-json/

### Informations site
- **Nom** : Ligue Ile de France de Basketball
- **URL** : https://www.basketidf.com
- **Description** : (vide — probleme SEO)
- **Timezone** : Europe/Paris (GMT+1)
- **Front Page ID** : 39584
- **Posts Page ID** : 41789

### 20 namespaces exposes
Revelent exactement quels plugins sont actifs :
```
oembed/1.0          → oEmbed (WordPress core)
redirection/v1      → Plugin Redirection
wordfence/v1        → Wordfence Security
tribe/events/v1     → The Events Calendar
tribe/views/v2      → The Events Calendar (views)
tec/v2/onboarding   → The Events Calendar (onboarding)
complianz/v1        → Complianz RGPD
elementor/v1        → Elementor
uael/v1             → Ultimate Addons for Elementor
seopress/v1         → SEOPress Pro
wp-statistics/v2    → WP-Statistics
astra/v1            → Theme Astra
jet-blocks-api/v1   → JetBlocks (Crocoblock)
jet-blog-api/v1     → JetBlog (Crocoblock)
jet-elements-api/v1 → JetElements (Crocoblock)
jet-menu-api/v2     → JetMenu (Crocoblock)
jet-smart-filters-api/v1 → JetSmartFilters (Crocoblock)
jet-tabs-api/v1     → JetTabs (Crocoblock)
elementor-pro/v1    → Elementor Pro
bsf-core/v1        → Brainstorm Force (editeur Astra)
nps-survey/v1       → NPS Survey
```

---

## Endpoint : /wp-json/wp/v2/users

**Resultat** : 401 Unauthorized
Les utilisateurs ne sont PAS exposes publiquement — c'est un bon point (probablement une config Wordfence).

---

## Endpoint : /wp-json/wp/v2/posts

### Articles exposes (5 derniers au 16/02/2026)

| Date | Titre | Auteur ID | Slug |
|------|-------|-----------|------|
| 16/02/2026 | "Pas sans elles" : quand le basket feminin prend la parole | 236 | pas-sans-elles-quand-le-basket-feminin-prend-la-parole |
| 13/02/2026 | Performance du week-end pour nos espoirs franciliens | 233 | performance-du-week-end-pour-nos-espoirs-franciliens-7-8-fevrier |
| 13/02/2026 | La Coupe de France U18 s'invite a Brie-Comte-Robert | 236 | la-coupe-de-france-u18-sinvite-a-brie-comte-robert |
| 12/02/2026 | La Ligue Ile-de-France de Basketball recrute | 236 | la-ligue-ile-de-france-de-basketball-recrute |
| 09/02/2026 | De l'Espoir a l'Elite : nos anciens brillent a la Leaders Cup | 233 | de-lespoir-a-lelite-nos-anciens-brillent-a-la-leaders-cup-2026 |

**Informations exposees par article** : titre, contenu HTML complet, date, auteur ID, slug, categories, tags, extrait, lien permanent.

### Auteurs identifies
- **ID 236** : auteur principal (3/5 articles recents)
- **ID 233** : auteur secondaire (2/5 articles recents)
- Noms non exposes (endpoint users protege)

---

## Endpoint : /wp-json/wp/v2/pages

### Pages publiques via API (seulement 3)

| ID | Titre | Slug | Date |
|----|-------|------|------|
| 62136 | L'adhesion au club | ladhesion-au-club | 09/01/2026 |
| 62966 | Saison 2022-2023 | saison-2022-2023 | 11/10/2024 |
| 64864 | Elementor #64864 | elementor-64864 | 30/08/2024 |

**Observations** :
- La page "Elementor #64864" est un brouillon Elementor publie par erreur (nom auto-genere)
- La page "Saison 2022-2023" contient des proces-verbaux du comite directeur regional
- La majorite des pages (~50+) sont probablement en mode "prive" ou protegees

---

## Endpoint : /wp-json/wp/v2/categories

### 10+ categories (toutes au niveau racine — pas de hierarchie)

| Categorie | Posts | ID |
|-----------|-------|----|
| Actualites | 196 | 4 |
| Championnats regionaux | 90 | 387 |
| 3X3 | 37 | 395 |
| Clubs Pros | 35 | 389 |
| Camps et Tournois | 27 | 399 |
| Basket Amateur | 26 | 386 |
| Championnats Nationaux | 26 | 415 |
| Clubs & Departements | 14 | 383 |
| Coupe de France | 9 | 388 |
| Avenir en Grand | 8 | 547 |

**Probleme** : Taxonomie plate, aucune hierarchie parent/enfant. Mauvais pour le SEO et la navigation.

---

## Endpoint : /wp-json/wp/v2/tags

### 200+ tags — chaos total

**Exemples de tags problematiques** :
- `"C'est avec joie que nous vous annoncons que Thierry Dudit..."` (une phrase entiere comme tag)
- `"3X3|Basket 3X3|Caisse d'Epargne FIBA 3X3 Europe Cup 2021"` (multiples concepts dans 1 tag)
- `"Championnats Régionaux Jeunes|Division 1|Division 2|Elite|Final Four|Super Elite"` (6 concepts en 1)
- `"bonne annee 2025"` (tag ephemere inutile)
- Tags avec 0 articles : `basketball`, `Arc de triomphe`, `CIC`, `clubs`, `challenge`
- Doublons : `Arbitrage` (10 posts) vs `ARBITRE` (2) vs `Arbitres` (3) vs sous-tags arbitrage

**Impact** : Aucune valeur SEO, navigation impossible par tags, maintenance ingerable.

---

## Endpoint : /wp-json/wp/v2/media

### 10 derniers fichiers uploades

| Fichier | Type | Taille | Date |
|---------|------|--------|------|
| livret-des-officiels-2025-2026.pdf | PDF | 2.89 MB | 16/02/2026 |
| pas-sans-elles-equipe-mgen-(...).webp | WebP | 190 KB | 16/02/2026 |
| exau.png | PNG | **2.16 MB** | 13/02/2026 |
| sheri.png | PNG | **2.43 MB** | 13/02/2026 |
| img-20260206-wa0001.jpg | JPEG | 429 KB | 13/02/2026 |
| post-instagram-octobre-rose-(...)-2.png | PNG | 771 KB | 12/02/2026 |
| post-instagram-octobre-rose-(...).png | PNG | 823 KB | 12/02/2026 |
| crd-idf-janvier-49-(...)-biffe-ok.pdf | PDF | 281 KB | 12/02/2026 |
| crd-idf-janvier-51-(...)-biffe-ok.pdf | PDF | 278 KB | 12/02/2026 |
| crd-idf-janvier-52-(...)-biffe-ok.pdf | PDF | 345 KB | 12/02/2026 |

**Observations critiques** :
- **Images PNG non optimisees** : 2.16 MB et 2.43 MB pour des photos (devrait etre < 200 KB en WebP)
- **Documents disciplinaires (CRD)** accessibles publiquement via API
- **Aucun alt text** sur aucun fichier media
- Nommage de fichiers non structure (ex: `img-20260206-wa0001.jpg` = photo WhatsApp brute)
- 1 seul fichier WebP sur 10 = pas de strategie d'optimisation images

---

## Endpoint : /wp-json/seopress/v1

### Configuration SEO exposee

Endpoints accessibles :
- `/posts/{id}/content-analysis` — analyses de contenu SEO
- `/posts/{id}/target-keywords` — mots-cles cibles (lecture ET ecriture)
- `/posts/{id}/title-description-metas` — meta titres/descriptions
- `/posts/{id}/redirection-settings` — redirections
- `/posts/{id}/meta-robot-settings` — directives robots
- `/posts/{id}/social-settings` — parametres partage social
- `/options/analytics-settings` — config analytics
- `/options/sitemaps-settings` — config sitemap
- `/options/social-settings` — config reseaux sociaux
- `/options/titles-settings` — config titres SEO
- `/roles` — configuration des roles utilisateur

**Risque** : La strategie SEO complete est potentiellement lisible. Les endpoints PUT permettent theoriquement la modification (si pas protege correctement).

---

## Endpoint : /wp-json/wordfence/v1

### Securite exposee

Endpoints detectes :
- `/authenticate` — authentification Wordfence
- `/config` — configuration firewall (GET/POST/PUT/PATCH)
- `/scan` — lancement de scans
- `/scan/issues` — resultats de scans (vulnerabilites trouvees)

**Note** : Ces endpoints necessitent probablement une authentification, mais leur simple existence revele :
1. Wordfence est installe (un attaquant sait qu'il y a un WAF)
2. La version et la configuration sont potentiellement accessibles
3. Les resultats de scan (= liste des vulnerabilites connues) pourraient etre exposes

---

## Resume pour le pitch

> "En tapant simplement `/wp-json/` dans votre URL, n'importe qui peut voir exactement quels plugins vous utilisez, acceder a vos articles complets, telecharger vos documents internes, et connaitre votre configuration SEO. C'est comme laisser le plan de votre maison avec la liste des serrures affiche sur la porte d'entree."
