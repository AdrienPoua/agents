# Arborescence du Site — basketidf.com

> Date : 16/02/2026
> Sources : Sitemap XML (date de 2014), API REST, navigation visible

---

## Vue d'ensemble

| Metrique | Valeur |
|----------|--------|
| URLs dans le sitemap | 206 |
| Date du sitemap | 2014 (obsolete) |
| Pages en 404 confirmees | 5+ |
| Categories | 10+ (toutes racine) |
| Tags | 200+ (anarchiques) |
| Articles (posts) | 196+ |
| Pages via API publique | 3 |
| Auteurs actifs | 2 (ID 233, 236) |
| Post types enregistres | 23 |

---

## Arborescence par section (depuis sitemap)

### Accueil et pages principales (9 URLs)
```
/                          → Homepage (priority 1.0)
/accueil/
/la-ligue/
/la-ligue/presentation/
/actualites/
/membre/                   → Page login basique
/membre/espace-membre-com-discipline/  → 404
/membre/espace_membre_cd/             → 404
/membre/espace_membre_bureau/          → 404
```

### Pole Formation (16 URLs)
```
/pole-formation/           → 404
/entraineurs/
/dirigeants/
/clubs/
/detection/
/poles-espoirs/
  /poles-espoirs-masculin/
  /poles-espoirs-feminin/
  (+ sous-pages coaches et prospects)
```

### Pole Pratique Sportive (13 URLs)
```
/competitions/
/discipline/
/cramc/
/sportive/
/medicale-2/
  (+ commissions qualification, installations)
```

### Pole Developpement des Pratiques (6 URLs)
```
/3x3/
/mini-basket/
/summer-camp/
/gb-camps/
```

### Pole Evenements (13 URLs)
```
/finales-regionales/
/trophee-cator/
/trophee-michel-rat/
/open-idf-feminin/
/scolaire/
/assemblee-generale/
/all-star-game-masculin/
/all-star-game-feminin/
```

### Pages informatives (8 URLs)
```
/pdd/
/plaquette/
/patrimoine/
/centre-des-ressources/
/joueurs-en-championnat-pro/
/carte_des_clubs/          → 404
/championnat/
/offre-de-formation/
```

### Articles/Actualites (~150 URLs)
Derniers articles publies (via API) :
- 16/02/2026 : "Pas sans elles" — basket feminin
- 13/02/2026 : Performance espoirs franciliens
- 13/02/2026 : Coupe de France U18
- 12/02/2026 : Recrutement formateur IRFBB
- 09/02/2026 : Anciens espoirs a la Leaders Cup

---

## Categories (10+)

| Categorie | Articles | Slug |
|-----------|----------|------|
| Actualites | 196 | actualites |
| Championnats regionaux | 90 | championnats-regionaux |
| 3X3 | 37 | 3x3 |
| Clubs Pros | 35 | clubs-pros |
| Camps et Tournois | 27 | camps-et-tournois |
| Basket Amateur | 26 | basket-amateur |
| Championnats Nationaux | 26 | championnats-nationaux |
| Clubs & Departements | 14 | clubs-et-departements |
| Coupe de France | 9 | coupe-de-france |
| Avenir en Grand | 8 | avenir-en-grand |

**Probleme** : Toutes les categories sont au meme niveau (pas de hierarchie parent/enfant).

---

## Post Types enregistres (23)

### Types WordPress core (9)
- post, page, attachment, nav_menu_item, wp_block, wp_template, wp_template_part, wp_global_styles, wp_navigation, wp_font_family, wp_font_face

### Types plugins (12)
- `jet-menu` — Mega Menu Items (Crocoblock)
- `e-floating-buttons` — Elements flottants (Elementor)
- `elementor_library` — Templates Elementor
- `tribe_venue` — Lieux (The Events Calendar)
- `tribe_organizer` — Organisateurs (The Events Calendar)
- `tribe_events` — Evenements (The Events Calendar) — **0 evenements publies**
- `tec_calendar_embed` — Calendar Embeds (The Events Calendar)

**Probleme** : 7 post types de plugins pour des fonctionnalites non utilisees (0 evenements, templates Elementor). Chacun charge ses assets et alourdit la base de donnees.

---

## Pages 404 confirmees

| URL | Contexte |
|-----|----------|
| `/carte_des_clubs/` | Fonctionnalite majeure disparue (carte interactive des clubs) |
| `/pole-formation/` | Section entiere inaccessible |
| `/membre/espace-membre-com-discipline/` | Espace membre mort |
| `/membre/espace_membre_cd/` | Espace membre mort |
| `/membre/espace_membre_bureau/` | Espace membre mort |

---

## Pages "fantome" dans l'API

La page **"Elementor #64864"** est publiee avec un nom auto-genere par Elementor. Elle contient des PV de comite directeur. C'est typique d'un brouillon publie par erreur — probleme de workflow editorial.
