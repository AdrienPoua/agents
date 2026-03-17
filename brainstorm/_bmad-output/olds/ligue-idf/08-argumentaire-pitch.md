# Argumentaire de Pitch — Refonte basketidf.com

> Date : 16/02/2026
> Pour : Demarchage Ligue Ile-de-France de Basketball
> Proposition : Refonte complete en Next.js + CMS headless

---

## Les 7 arguments cles

---

### 1. SECURITE — "Votre site est une cible"

**Le contexte** :
- En janvier 2025, **19 federations sportives francaises** ont ete hackees. 4.5 millions de donnees volees et vendues sur le dark web.
- La **FFBB elle-meme** a subi un ransomware en 2019, touchant 700 000 licencies.
- Votre site expose publiquement **20 namespaces d'API** qui revelent exactement quels plugins sont installes.

**Les failles** :
- The Events Calendar : **CVE-2025-9807** (injection SQL, 150K+ sites cibles activement)
- Essential Addons : **CVE-2025-24752** (XSS critique, 2M sites affectes)
- JetMenu : **CVE-2025-26953** (contournement d'acces sans authentification)
- WordPress REST API : **CVE-2024-13346** (CVSS 9.2 CRITIQUE)

**La solution Next.js** :
- Pas de base de donnees exposee (site statique)
- Pas de plugins tiers avec des CVE
- Pas d'API publique par defaut
- Surface d'attaque quasi nulle

**La phrase** :
> "Votre site utilise 15+ plugins dont plusieurs ont des failles de securite critiques activement exploitees. La federation nationale a deja ete hackee. Avec Next.js, la surface d'attaque est reduite a quasi zero."

---

### 2. PERFORMANCE — "Votre site met trop longtemps a charger"

**Le constat** :
- ~200 KB de CSS inline par page
- 5 familles Google Fonts chargees
- jQuery + scripts emoji inutiles
- Images PNG non optimisees (2+ MB chacune)
- Pas de lazy loading
- Estimation : **4-8 secondes** de chargement mobile

**L'impact** :
- Google penalise les sites lents dans son classement
- Chaque seconde supplementaire = ~7% de visiteurs perdus
- Les licencies et parents consultent le site sur **mobile** (terrain, gymnase)

**La solution Next.js** :
- Pages statiques pre-generees = chargement < 1 seconde
- Images auto-optimisees (next/image, WebP auto, lazy loading natif)
- Zero CSS superflu (Tailwind = uniquement le CSS utilise)
- Score Lighthouse 95-100

**La phrase** :
> "Votre site charge en 4-8 secondes sur mobile. Un site Next.js charge en moins d'une seconde. Quand un parent cherche le planning du match de son enfant dans le gymnase, chaque seconde compte."

---

### 3. MAINTENANCE — "Chaque mise a jour est un risque"

**Le constat** :
- **15+ plugins actifs** = 15 fournisseurs differents a maintenir
- Chaque mise a jour Elementor/WordPress/plugin peut casser le site
- The Events Calendar installe avec 0 evenements (plugin zombie)
- Page "Elementor #64864" publiee par erreur (brouillon visible)
- 5+ pages en 404 dans le sitemap
- 200+ tags anarchiques (phrases entieres, doublons, 0 articles)
- Sitemap date de **2014**

**Le cout cache** :
- Licences annuelles : Elementor Pro (~60 EUR) + Astra Pro (~50 EUR) + Crocoblock (~150 EUR) + SEOPress Pro (~50 EUR) = **~310 EUR/an** minimum
- Temps de maintenance : mises a jour, conflits, debug = **ingerable sans dev dedie**

**La solution Next.js** :
- Code versionne dans Git = chaque modification est tracable et reversible
- Zero plugin tiers = zero risque de conflit
- Hebergement Vercel = 0 EUR (free tier)
- Deployement automatique a chaque modification

**La phrase** :
> "Vous payez 300+ EUR/an de licences pour des plugins dont certains ne servent meme pas. Votre sitemap date de 2014. Des pages renvoient des erreurs 404. Avec Next.js, pas de licence, pas de plugin, et chaque modification est testee avant publication."

---

### 4. DONNEES EXPOSEES — "N'importe qui peut voir vos coulisses"

**Le constat** (100% public, visible dans un navigateur) :
- `/wp-json/` → 20 namespaces, architecture complete exposee
- `/wp-json/wp/v2/media` → Fichiers telechargeables (PDFs internes, decisions disciplinaires CRD)
- `/wp-json/seopress/v1` → Configuration SEO complete
- `/wp-json/wp/v2/tags` → 200+ tags revelant la structure interne
- Page "Elementor #64864" = PV de comite directeur dans une page brouillon publiee

**La phrase** :
> "En ajoutant /wp-json/ a votre URL, n'importe qui peut voir la liste de vos plugins, telecharger vos documents internes, et connaitre votre strategie SEO. C'est comme afficher le plan de votre maison avec la liste des serrures sur la porte d'entree."

---

### 5. RGPD — "Vous n'etes pas conforme"

**Le constat** :
- Complianz (plugin RGPD) est installe mais **aucune banniere cookies visible** lors de l'audit
- Scripts de tracking (WP-Statistics) charges sans consentement
- Media uploades sans alt text (accessibilite)
- Documents internes accessibles via API sans restriction

**Le risque** :
- Obligation RGPD article 32 : securite des donnees
- Obligation RGPD article 33 : notification CNIL sous 72h en cas de fuite
- Sanctions : mise en demeure, amende jusqu'a 20M EUR ou 4% du CA

**La phrase** :
> "Votre plugin de consentement cookies semble inactif. En cas de controle CNIL, c'est un probleme. La refonte integre la conformite RGPD des le depart."

---

### 6. BENCHMARK — "Vous pouvez devenir la reference"

**Le constat** :
- Rugby IDF : page blanche sans JavaScript, SEO inexistant
- Handball IDF : Joomla date, code non optimise
- Football IDF : WordPress noye sous les publicites
- Sport U IDF : site en maintenance (hors ligne)

**L'opportunite** :
Aucune ligue sportive IDF n'a de site moderne. Le premier a se moderniser prend l'avantage.

**La phrase** :
> "Regardez les sites de vos homologues : aucun n'est a la hauteur. En adoptant une technologie moderne, la Ligue Basketball IDF deviendrait la reference numerique du sport francilien. C'est un avantage de communication et de credibilite aupres de vos licencies, partenaires et sponsors."

---

### 7. FINANCEMENT — "Des aides existent"

**Les opportunites** :
- **Region IDF** : jusqu'a 200K EUR (30% du projet), candidatures en continu
- **ANS Transformation Numerique** : 37-50K EUR (si projet mutualise multi-federations)
- **FDVA** : prochaine edition probablement 2027

**La phrase** :
> "La Region Ile-de-France finance la structuration des disciplines sportives a hauteur de 30% du projet, avec un plafond de 200 000 EUR. Les candidatures sont ouvertes en permanence. Je peux vous accompagner dans le montage du dossier."

---

## Structure du pitch (15 minutes)

### Introduction (2 min)
- Se presenter
- Expliquer qu'on a analyse leur site publiquement (aucune intrusion)
- Poser la question : "Quand avez-vous mis a jour vos plugins pour la derniere fois ?"

### Le probleme (5 min)
- Montrer l'API REST ouverte EN LIVE dans le navigateur
- Montrer les pages 404
- Mentionner les cyberattaques sur les federations (FFBB 2019, 19 feds 2025)
- Montrer les CVE publiques des plugins installes

### La solution (5 min)
- Demo d'un site Next.js rapide (< 1 seconde)
- Comparatif visuel : Lighthouse score actuel vs Next.js
- Expliquer le modele : CMS headless = les redacteurs gardent une interface simple
- Montrer le benchmark des autres ligues IDF

### L'offre (3 min)
- Proposition de refonte
- Mention des financements Region IDF
- Proposition d'accompagnement au dossier de subvention
- Timeline et prochaines etapes

---

## Objections anticipees

| Objection | Reponse |
|-----------|---------|
| "Ca coute trop cher" | La Region IDF finance 30%. Vous payez deja 300+/an en plugins. Le cout total sur 3 ans est inferieur au maintien WordPress. |
| "On n'a pas le temps" | La refonte est transparente — votre site actuel reste en ligne jusqu'a la bascule. |
| "Nos benevoles ne pourront pas publier" | Le CMS headless (Sanity/Notion) est aussi simple que WordPress — interface visuelle, pas de code. |
| "WordPress marche bien" | Il marche jusqu'au jour ou il casse. 15 plugins = 15 points de rupture. Et votre sitemap date de 2014. |
| "On a deja un prestataire" | Est-ce qu'il vous a signale les 5 pages en 404 ? Les CVE critiques ? Le sitemap obsolete ? |
| "On n'est pas une cible pour les hackers" | Les bots ne choisissent pas leurs cibles. Ils scannent TOUS les WordPress. 150K+ sites cibles pour The Events Calendar seul. |

---

## Documents a preparer pour le RDV

- [ ] Capture d'ecran de `/wp-json/` dans le navigateur
- [ ] Capture d'ecran des pages 404
- [ ] Tableau des CVE imprime (avec sources)
- [ ] Articles de presse sur les hacks des federations (ZATAZ, Le Monde Informatique)
- [ ] Demo locale d'un site Next.js rapide (template sportif)
- [ ] Devis detaille avec option financement Region IDF
- [ ] Fiche programme Region IDF "Structuration disciplines sportives"
