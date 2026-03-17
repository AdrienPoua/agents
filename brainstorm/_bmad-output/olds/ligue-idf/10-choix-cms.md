# Choix du CMS — Gestion des publications basketidf.com

> Date : 16/02/2026
> Contexte : La ligue publie ~196 articles via 2 redacteurs (ID 233, 236). Le CMS doit permettre a des non-devs de publier facilement.

---

## 1. Le besoin

La ligue utilise son site principalement pour **publier des actualites** :
- Resultats de matchs et competitions
- Annonces evenements (Coupe de France, finales regionales, trophees)
- Recrutement (formateurs, arbitres)
- Portraits de joueurs et anciens espoirs
- Infos institutionnelles (AG, PV comite directeur)

### Exigences fonctionnelles

| Besoin | Detail |
|--------|--------|
| Editeur visuel | Les redacteurs ne codent pas — il faut du WYSIWYG |
| Upload images | Glisser-deposer de photos (souvent prises au telephone) |
| Optimisation images | Automatique — les redacteurs uploadent des PNG de 2+ MB actuellement |
| Categories/tags | Classer les articles (Actualites, 3X3, Championnats, Coupe de France, etc.) |
| Brouillons | Pouvoir preparer un article et le publier plus tard |
| Multi-utilisateurs | Au moins 2 redacteurs simultanement |
| Interface en francais | Les redacteurs ne parlent pas forcement anglais |
| Cout | Le plus bas possible (association loi 1901) |

---

## 2. Options evaluees

### A. Sanity (RECOMMANDE)

**Qu'est-ce que c'est** : CMS headless SaaS — l'interface d'edition est hebergee par Sanity, le contenu est servi via API a Next.js.

**Free tier** :
- 10 000 documents (= 10 000 articles possibles — suffisant pour 27 ans a 1 article/jour)
- 200 000 requetes API/mois
- 10 GB stockage
- 10 GB bande passante/mois
- 20 utilisateurs
- 2 datasets

**Interface** :
- Editeur visuel riche (texte, images, embeds video, liens)
- Drag-and-drop pour les images
- Collaboration temps reel (comme Google Docs)
- Dashboard personnalisable
- Interface en francais (plugin `@sanity-io/locales`)

**Images** :
- CDN integre avec optimisation automatique
- Conversion WebP/AVIF a la volee
- Recadrage, redimensionnement, focal point
- Compatible `next/image` via loader custom
- Fini les PNG de 2.4 MB — Sanity les compresse automatiquement

**Integration Next.js** :
- Package officiel `next-sanity`
- Support React Server Components
- Requetes en GROQ (langage de requete Sanity) ou GraphQL
- Webhook pour revalidation automatique (on-demand ISR)
- Documentation excellente

**Cout** : **0 EUR/mois**

**Workflow redacteur** :
```
1. Aller sur studio.basketidf.com (ou app.sanity.io)
2. Cliquer "Nouvel article"
3. Remplir : titre, contenu, categorie, image
4. Cliquer "Publier"
5. Le site se met a jour automatiquement en ~5 secondes
```

**Score utilisateur non-technique** : 9/10

---

### B. WordPress headless (PLAN B)

**Qu'est-ce que c'est** : On garde WordPress comme back-office (les redacteurs y publient leurs articles), mais le front-end est remplace par Next.js. WordPress sert uniquement de base de donnees + editeur.

**Comment ca marche** :
- WordPress est heberge separement (ex: o2switch, OVH)
- Plugin WPGraphQL installe sur WordPress
- Next.js interroge l'API GraphQL pour recuperer les articles
- Le front-end affiche les donnees dans le design Next.js

**Avantages** :
- **Zero formation** — les redacteurs gardent l'interface WordPress qu'ils connaissent deja
- Interface 100% en francais (natif WordPress)
- Ecosysteme mature (Yoast SEO, ACF pour champs custom)
- Gutenberg ou Classic Editor au choix
- Migration des 196 articles existants : **zero effort** (ils restent dans WordPress)

**Inconvenients** :
- **Double infrastructure** : il faut maintenir WordPress (mises a jour, securite, hebergement) + Next.js
- Hebergement WordPress : ~15-20 EUR/mois
- Les failles securite WordPress restent (meme si le front n'est plus WordPress, le back-office l'est)
- Perte du WYSIWYG "live preview" (le redacteur voit l'article dans WordPress, pas sur le vrai site)
- Latence API : les requetes GraphQL ajoutent de la latence vs Sanity CDN

**Cout** : **~15-20 EUR/mois** (hebergement WP)

**Score utilisateur non-technique** : 10/10 (interface familiere)

---

### C. Payload CMS

**Qu'est-ce que c'est** : CMS open-source (MIT) qui s'integre nativement dans une app Next.js. Tout est dans le meme projet.

**Avantages** :
- 100% gratuit, aucune limite
- Integration Next.js la meilleure du marche (c'est construit pour)
- TypeScript-first, schema en code
- Admin panel moderne et propre
- Self-hosted = controle total des donnees

**Inconvenients** :
- Interface admin moins intuitive pour les non-devs (6.5/10)
- Necessite une base de donnees (PostgreSQL, MongoDB ou SQLite)
- Hebergement necessaire si pas SQLite local
- Plus de setup initial pour le developpeur
- Communaute plus petite que Sanity/Strapi

**Cout** : **0 EUR** (SQLite + Vercel) a **25-50 EUR/mois** (PostgreSQL heberge)

**Score utilisateur non-technique** : 6.5/10

---

### D. Strapi

**Qu'est-ce que c'est** : CMS headless open-source self-hosted. Interface admin classique avec constructeur de types de contenu visuel.

**Avantages** :
- Interface admin propre et intuitive
- Constructeur de contenu visuel (pas de code pour definir les champs)
- API REST + GraphQL
- Ecosysteme de plugins
- Interface en francais (configurable)

**Inconvenients** :
- **Necessite un serveur Node.js** (pas deployable sur Vercel free tier)
- Hebergement : 18-50 EUR/mois (Railway, Render, DigitalOcean)
- Pas de CDN images integre
- Setup plus complexe que Sanity
- Mises a jour Strapi parfois cassantes (migration v4 → v5)

**Cout** : **18-50 EUR/mois** (hebergement serveur)

**Score utilisateur non-technique** : 7.5/10

---

### E. Notion comme CMS

**Qu'est-ce que c'est** : Utiliser une base de donnees Notion comme source de contenu pour Next.js via l'API Notion.

**Avantages** :
- Tout le monde connait Notion (10/10 facilite)
- Gratuit
- Interface en francais

**Inconvenients CRITIQUES** :
- **API extremement lente** (0.2-0.5s par requete, limite 3 req/s)
- **URLs d'images expirent apres 1 heure** — il faut un proxy ou re-telecharger
- Pas concu pour etre un CMS
- Rendu du contenu Notion en HTML = complexe (format proprietaire)
- Pas de webhook natif fiable

**Verdict** : **NON RECOMMANDE** pour la production. Acceptable pour un blog perso, pas pour un site de ligue sportive.

**Cout** : 0 EUR mais dette technique enorme

**Score utilisateur non-technique** : 10/10 (mais les limites techniques annulent cet avantage)

---

### F. MDX / Markdown dans Git

**Qu'est-ce que c'est** : Les articles sont des fichiers Markdown dans le repo Git. Pas de CMS, pas de base de donnees.

**Verdict** : **NON ADAPTE**. Les redacteurs de la ligue ne vont pas apprendre Git et Markdown. Solution de developpeur uniquement.

**Score utilisateur non-technique** : 2/10

---

### G. Keystatic / TinaCMS (CMS Git-based)

**Qu'est-ce que c'est** : CMS qui stocke le contenu en Markdown/YAML dans le repo Git, mais avec une interface visuelle dans le navigateur.

**Keystatic** :
- Interface correcte (7/10)
- Gratuit et open-source
- Necessite de comprendre Git en arriere-plan
- Pas de CDN images

**TinaCMS** :
- Meilleure UX que Keystatic (8/10) — edition visuelle en live sur le site
- Free tier disponible
- Commits automatiques vers Git
- Pricing opaque sur les plans payes

**Verdict** : Mieux que du MDX brut, mais les concepts Git sous-jacents restent un obstacle pour des benevoles sportifs.

---

## 3. Tableau comparatif final

| Critere | Sanity | WP Headless | Payload | Strapi | Notion |
|---------|--------|-------------|---------|--------|--------|
| **Facilite non-dev** | 9/10 | 10/10 | 6.5/10 | 7.5/10 | 10/10 |
| **Cout/mois** | 0 EUR | 15-20 EUR | 0-50 EUR | 18-50 EUR | 0 EUR |
| **CDN images** | Integre | Via plugin | Non | Non | Non (expire) |
| **Francais** | Plugin | Natif | i18n | Config | Natif |
| **Integration Next.js** | 8/10 | 6/10 | 9/10 | 6/10 | 5/10 |
| **Migration 196 articles** | Import script | Zero effort | Import script | Import script | Manuel |
| **Fiabilite prod** | Excellente | Excellente | Bonne | Bonne | Mauvaise |
| **Marge sur forfait 100 EUR** | ~100% | ~80% (-20 EUR hebergement) | ~100% si SQLite | ~50-80% | ~100% |

---

## 4. Recommandation

### Choix principal : SANITY

**Pourquoi** :
1. **0 EUR/mois** = marge maximale sur le forfait maintenance
2. **9/10 en facilite** = les redacteurs de la ligue peuvent publier sans formation lourde
3. **CDN images integre** = plus jamais de PNG de 2.4 MB sur le site
4. **10 000 documents gratuits** = largement suffisant (196 articles actuels + croissance)
5. **Webhook + ISR** = publication instantanee sans rebuild complet
6. **Collaboration temps reel** = 2 redacteurs peuvent travailler en meme temps

### Plan B : WORDPRESS HEADLESS

**Quand le choisir** :
- Si la ligue refuse categoriquement de changer d'interface d'edition
- Si les redacteurs sont trop resistants au changement
- Si la migration des 196 articles doit etre transparente (zero effort)

**Compromis** : tu perds ~20 EUR/mois de marge et tu gardes la maintenance WordPress cote serveur.

---

## 5. Architecture technique recommandee (Sanity)

```
                    REDACTEURS
                        |
                        v
              ┌──────────────────┐
              │   Sanity Studio   │  ← Interface d'edition (studio.basketidf.com)
              │   (heberge SaaS)  │     Gratuit, francais, WYSIWYG
              └────────┬─────────┘
                       |
                       v
              ┌──────────────────┐
              │  Sanity Content   │  ← Base de donnees + CDN images
              │     Lake (API)    │     10K docs, 200K req/mois gratuit
              └────────┬─────────┘
                       |
                  Webhook (on publish)
                       |
                       v
              ┌──────────────────┐
              │    Next.js App    │  ← Frontend (basketidf.com)
              │  (Vercel free)    │     SSG + ISR, < 1s chargement
              └────────┬─────────┘
                       |
                       v
                   VISITEURS
                  (73 000+ licencies)
```

### Schema de contenu Sanity (exemple)

```
Article
├── titre (string, requis)
├── slug (auto-genere depuis titre)
├── image principale (image avec focal point)
├── contenu (rich text : paragraphes, images, videos, liens)
├── categorie (reference → Categorie)
├── tags (array de references → Tag)
├── auteur (reference → Auteur)
├── date de publication (datetime)
├── statut (brouillon / publie)
└── extrait (text, auto-genere ou manuel)

Categorie
├── nom (string)
├── slug (string)
└── description (text)

Auteur
├── nom (string)
├── photo (image)
└── role (string)
```

### Migration des 196 articles existants

1. Script Node.js qui interroge `/wp-json/wp/v2/posts?per_page=100` (paginé)
2. Pour chaque article : extraire titre, contenu HTML, date, categorie, image
3. Convertir le HTML en format Sanity Portable Text (librairie `@sanity/block-tools`)
4. Telecharger les images et les re-uploader sur Sanity
5. Importer via `@sanity/client` en batch

Estimation : **2-4 heures de dev** pour le script de migration.

---

## 6. Impact sur le forfait maintenance 100 EUR/mois

| Avec Sanity | Avec WP Headless |
|-------------|-----------------|
| Hebergement Vercel : 0 EUR | Hebergement Vercel : 0 EUR |
| Sanity : 0 EUR | WordPress hosting : 15-20 EUR |
| Domaine : 1 EUR | Domaine : 1 EUR |
| **Cout reel : ~1 EUR/mois** | **Cout reel : ~20 EUR/mois** |
| **Marge : ~99 EUR/mois** | **Marge : ~80 EUR/mois** |
| Temps maintenance : ~1-2h/mois | Temps maintenance : ~3-4h/mois (MAJ WP) |
