# IDEE SaaS - Angle 7 : AvisPilot

## Pattern qui marche ailleurs

**Pattern US identifie** : Birdeye (valorisation $1B+), Podium ($3.3B), NiceJob, GatherUp -- ces SaaS automatisent la collecte et la gestion des avis Google pour les entreprises locales (artisans, restaurants, professions liberales). Envoi automatique de SMS/email post-prestation, reponse IA aux avis, tableau de bord reputation.

**Situation en France** : Les equivalents francais existent (Guest Suite, LocalRanker, Malou) MAIS ils ciblent les reseaux multi-etablissements et les PME moyennes. Leurs tarifs (190 EUR+/an/etablissement chez LocalRanker, tarifs sur devis chez Guest Suite pour 10 000+ points de vente) et leur complexite les rendent inaccessibles aux artisans solo et TPE de 1-5 salaries.

**Le gap** : Aucun outil francais ultra-simple et abordable (<15 EUR/mois) ne cible specifiquement l'artisan solo ou la TPE locale qui a 0-20 avis Google et perd des chantiers face a des concurrents mieux notes. Le pattern Birdeye/Podium simplifie pour le segment TPE n'existe pas en France.

---

## Fiche projet

### Nom du projet
**AvisPilot**

### Angle utilise
Angle 7 -- Pattern qui marche ailleurs (US -> France, segment TPE)

### La cible (qui paye)
Artisans du BTP (plombiers, electriciens, peintres, menuisiers, couvreurs), soit **365 000 entreprises artisanales** dans le batiment en France. Cible secondaire : professions liberales locales (kines, osteos, dentistes) et commercants de proximite.

**Decideur unique** : le patron artisan lui-meme. Pas de comite d'achat, pas de DSI.

### La douleur (1 phrase)
L'artisan perd des demandes de devis parce que sa fiche Google affiche 3 avis (dont 1 negatif) alors que son concurrent en a 47 avec 4.8 etoiles -- et il ne sait ni comment demander des avis, ni comment repondre aux negatifs.

### Le declencheur d'achat
- Un avis 1 etoile injuste qui apparait en premier sur Google
- Un prospect qui dit "j'ai choisi quelqu'un d'autre, vous aviez peu d'avis"
- La saison haute qui approche (mars-juin pour le BTP) et le besoin de remplir le planning
- Un concurrent local qui monte en visibilite Google Maps

### Les concurrents (recherche web)

| Concurrent | Cible | Prix | Faiblesse vs TPE solo |
|---|---|---|---|
| **Guest Suite** (Nantes, 2013) | Reseaux, hotels, multi-sites | Sur devis, >200 EUR/mois | Trop cher, trop complexe pour un artisan seul |
| **LocalRanker** (France) | Agences SEO, reseaux | 190 EUR+/an/etablissement | Interface pro/agence, pas pensee artisan |
| **Malou** (Paris) | Restaurants | Sur devis | Hyper-niche restauration |
| **Avis Verifies** (Marseille) | E-commerce | Variable | Avis produits, pas avis Google local |
| **Trustpilot** (Danemark) | E-commerce | Freemium | Pas adapte au local/artisanat |
| **Artisan Hub** (startup) | Artisans | Inconnu | Tres early, peu de traction visible |

### La differentiation
1. **Prix agressif** : 9-15 EUR/mois (vs 200+ EUR chez les concurrents). Pas de devis sur mesure, pas d'appel commercial. Self-service total.
2. **Onboarding en 2 minutes** : Connexion fiche Google, scan QR code a donner au client, c'est parti. Zero config.
3. **SMS automatique post-chantier** : L'artisan clique "chantier termine" -> le client recoit un SMS avec lien direct vers la page avis Google.
4. **Reponses IA aux avis** : Suggestion de reponse en 1 clic (ton pro, pas robotique). L'artisan valide et publie.
5. **Dashboard minimaliste** : Note moyenne, nombre d'avis ce mois, avis en attente de reponse. Rien de plus.
6. **100% francais, 100% RGPD** : Hebergement France, pas de transfert US.

### Stack technique MVP
- **Frontend** : Next.js (landing + dashboard)
- **Backend** : Supabase (auth, DB, edge functions)
- **SMS** : API OVH SMS ou Twilio (env. 0.05 EUR/SMS)
- **Google** : Google Business Profile API (gratuite)
- **IA reponses** : OpenAI API (cout negligeable par reponse)
- **Hebergement** : Vercel
- **Cout infra MVP** : <50 EUR/mois

### Canal d'acquisition
- **SEO** : "comment avoir plus d'avis Google artisan", "repondre avis negatif plombier", "ameliorer note Google electricien" -- mots-cles longue traine a faible competition
- **Content marketing** : Guides pratiques pour artisans (blog + YouTube court)
- **QR code viral** : Chaque QR code distribue par un artisan a ses clients porte la marque AvisPilot
- **Partenariats** : Federations artisanales (CAPEB, FFB), chambres des metiers
- **Pas de telephone requis** : L'artisan s'inscrit seul en 2 min

---

## Score /20

| Critere | Note /5 | Justification |
|---|---|---|
| **Intensite douleur** | 4/5 | Douleur reelle (perte de clients mesurable) mais pas "insupportable" au sens legal/amende. L'artisan vit sans, meme si ca lui coute. |
| **Facilite acquisition** | 4/5 | SEO longue traine tres favorable, contenu educatif naturel, viralite QR code. Pas de gatekeeper. Mais cycle d'education necessaire (beaucoup d'artisans ne savent pas que c'est un probleme). |
| **Simplicite vente** | 5/5 | "Obtenez plus d'avis Google en 2 minutes. 9 EUR/mois." Valeur comprise instantanement. Le prospect voit sa note Google, comprend le probleme. |
| **Faisabilite solo** | 4/5 | MVP faisable en 3-4 semaines. Stack maitrisee (Next.js, Supabase). Seul point d'attention : Google Business Profile API (process de validation). |

### **Score total : 17/20**

---

## Verification criteres eliminatoires

| Critere eliminatoire | Passe ? | Commentaire |
|---|---|---|
| Marketplace two-sided | OUI | Outil B2B pur, pas de mise en relation |
| Demarchage tel permanent | OUI | Acquisition 100% inbound/SEO |
| Cycle vente > 1 mois | OUI | Self-service, achat impulsif <5 min |
| Marche < 500 cibles France | OUI | 365 000 artisans BTP + des centaines de milliers de commercants locaux |
| Concurrent dominant 100M$+ | OUI | Guest Suite et LocalRanker sont des PME francaises. Birdeye/Podium n'operent pas en France sur ce segment. |
| Aucun canal acquisition en ligne | OUI | SEO + content naturel |
| Architecture complexe requise pour MVP | OUI | Stack classique Next.js + Supabase + API tierces |
| Responsabilite metier | OUI | Outil de collecte d'avis, zero responsabilite legale/medicale/financiere |

---

## Verdict : RETENUE

**Forces** : Marche enorme, douleur tangible, MVP rapide, acquisition scalable, prix disruptif vs concurrents. Le QR code cree une boucle virale naturelle. Excellent projet CV (API Google, IA, SMS, SaaS complet).

**Risques** :
- Google peut changer ses API/CGU a tout moment
- Education du marche necessaire (beaucoup d'artisans ne sont pas "digital-first")
- Le churn peut etre eleve si l'artisan ne voit pas de resultats rapides (les avis prennent du temps)

**Mitigation** : Offrir un essai gratuit 30 jours avec "premier avis garanti ou rembourse". Montrer des stats avant/apres dans le dashboard.

---

*Recherche realisee le 06/02/2026. Sources : Birdeye.com, Podium.com, Guest-Suite.com, LocalRanker.fr, CAPEB.fr, INSEE, Appvizer.fr.*
