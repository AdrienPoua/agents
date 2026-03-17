# Analyse Complète -- Prochaine Application Rentable

**Date :** 2026-02-03
**Session :** Brainstorming avec Carson (Elite Brainstorming Specialist)
**Objectif :** Trouver une application à coder et monétiser dans le mois

---

## Profil Adrien

- **Dev Full Stack** : React/Next.js/TypeScript/Node/NestJS/Supabase
- **7 ans basket** : entraîneur, dirigeant, arbitre
- **Licence STAPS**
- **Portfolio** : 5 projets en prod dont 2 apps clubs (Argenteuil, Sartrouville)
- **Site** : adrienpoua.fr
- **Budget** : 200€, full time dispo
- **Objectif** : faire des sous rapidement + enrichir le CV

---

## Recherche Exhaustive -- Résumé

5 axes de recherche menés en parallèle :

| Axe de recherche | Résultats clés |
|---|---|
| Micro-SaaS 2026 | Marché de $15B -> $60B en 2030. Les niches verticales explosent. |
| Apps clubs sportifs | Marché global apps sport = 14,7 milliards $. Petits clubs MAL servis. |
| Outils IA | Les wrappers IA spécialisés = le moyen le plus rapide de monétiser |
| Success stories | ShipFast: $528k en 4 mois. Sleek: $10k MRR en 6 semaines. |
| Marché français | 1,3M associations, 11% seulement digitalisées. GAP énorme. |

### Données marché clés

- **160 000 clubs sportifs amateurs en France**
- Marché global AI en sports : 1,4 milliard USD (2020) -> 19,2 milliards USD (2030)
- Sous-segment content creation : 1 milliard $ (2024) -> 2,6 milliards $ (2030)
- Les bénévoles passent 10-15h/semaine sur la comm des clubs
- Budget comm des clubs : seulement 1% du revenu (recommandé 5-15%)
- 1 seul concurrent IA dédié sport (Tookano, en beta, pas fini)
- Aucune solution française complète

---

## Idées Évaluées

### #1 Widget Embeddable Résultats & Calendrier -- ABANDONNÉ

Scorenco fait exactement ça, gratuitement, avec partenariat officiel FFBB :

| | Scorenco | Widget proposé |
|---|---|---|
| Prix | Gratuit | 9€/mois |
| Sports couverts | 9 sports | Basket seulement |
| Clubs référencés | 30 000 | 0 |
| Partenariat FFBB | Officiel | Non |
| Note utilisateurs | 4.5/5 (1100+ avis) | Rien |

**Verdict : MORT. Impossible de concurrencer un service gratuit bien établi.**

---

### #2 Template Site Club sur Lemon Squeezy -- ABANDONNÉ

| Problème | Analyse |
|---|---|
| Marché trop petit | Combien de devs veulent spécifiquement servir des clubs sportifs ? Niche dans la niche |
| Vente directe plus rentable | 1 client direct = 1 200€ vs template à 149€ qui nécessite 10 ventes |
| Le modèle ShipFast ne s'applique pas | ShipFast marche car TOUS les devs construisent des SaaS. Template club = marché trop restreint |

**Verdict : MORT en tant que produit vendu. MAIS le template reste utile en interne.**

---

### #2bis Vente Directe Sites Clubs (template privé + config) -- VALIDÉ

Adrien garde le template pour lui, le duplique en 1h par club avec Claude Code, et vend directement à 1 200€.

**Verdict : VALIDÉ comme service, combiné avec le #3.**

---

### #3 IA Community Manager pour Clubs -- LA PÉPITE

**Verdict : RETENU. C'est le produit à construire.**

---

## Le Modèle Retenu

```
TEMPLATE SITE CLUB (privé, jamais vendu)
    = Code Next.js + fichier config.json
    = Duplication en 1h par club avec Claude Code

         +

IA COMMUNITY MANAGER (SaaS récurrent)
    = Inclus dans le package
    = Le club paie un abonnement mensuel

         =

OFFRE :
"Site moderne + réseaux sociaux automatisés"
-> 1 200€ setup + 29-49€/mois
```

### Pourquoi c'est puissant

| Avant (freelance classique) | Maintenant (ce modèle) |
|---|---|
| 2-3 semaines par site | 1h par site |
| 1-2 clients/mois max | 10-20 clients/mois possible |
| 1 200€ one-shot, terminé | 1 200€ + récurrent chaque mois |
| Le client te rappelle jamais | Le client reste abonné des années |
| Tu vends du temps | Tu vends un système |

### Projections financières

| Scénario | Clubs/mois | Setup (one-shot) | Récurrent mensuel | CA Mois 6 |
|---|---|---|---|---|
| Pessimiste | 2 | 2 400€/mois | +58€/mois cumulés | 2 400€ + 348€ récurrent |
| Réaliste | 4 | 4 800€/mois | +116€/mois cumulés | 4 800€ + 696€ récurrent |
| Optimiste | 8 | 9 600€/mois | +232€/mois cumulés | 9 600€ + 1 392€ récurrent |

---

## Analyse Concurrentielle -- Community Manager IA

### Le seul concurrent : Tookano

| | Tookano | Ce projet |
|---|---|---|
| Statut | Beta, pas prêt | Peut shipper en 2 semaines |
| Langue | Anglais d'abord | Français natif |
| Intégration fédérations | Non | OUI (code existant) |
| Connaissance du terrain | Généraliste | 7 ans dans le sport amateur |
| Pricing | Flou | Clair : 9-29€/mois |
| Stack | Inconnu | Next.js/React/TS |

### Le constat marché

| Fait | Chiffre |
|---|---|
| Clubs sportifs amateurs en France | 160 000 |
| Qui gère les réseaux sociaux | Un bénévole sans compétences marketing |
| Budget comm des clubs | 1% du revenu |
| Temps bénévole pour les RS | 10-15h/semaine |
| Outils IA dédiés qui existent | 1 seul (Tookano, en beta) |
| Solution française complète | AUCUNE |

---

## MVP COMMUNITY MANAGER IA -- SCOPE COMPLET

### Vision Produit

Le bénévole du club ouvre son dashboard, voit des posts déjà écrits pour la semaine, les valide en 1 clic, et les copie-colle sur Facebook/Instagram. Temps total : 5 minutes par semaine au lieu de 10-15 heures.

---

### Fonctionnalité 1 -- Onboarding Club (config initiale)

Le club renseigne une seule fois ses infos. L'IA s'en sert pour tout personnaliser.

**Champs :**
- Nom du club, sport, ville
- Couleurs, logo
- Ton de communication (formel / décontracté / enthousiaste)
- Liens réseaux sociaux (Facebook, Instagram)
- Équipes (Seniors M, Seniors F, U15, U13, etc.)
- Noms des coachs
- Noms des sponsors
- Horaires d'entraînement habituels
- Lien fédération / identifiant fédéral (optionnel, pour auto-sync)

---

### Fonctionnalité 2 -- Générateur de Posts IA (le coeur)

**8 types de posts, chacun avec son prompt IA dédié :**

| # | Type de post | Déclencheur | Exemple de sortie |
|---|---|---|---|
| 1 | Résultat de match | Après un match (auto ou manuel) | "Victoire 78-65 ! Nos seniors s'imposent face à Cergy. Bravo les gars !" |
| 2 | Annonce de match | 2 jours avant un match | "Samedi 14h, vos seniors reçoivent Nanterre au gymnase Rolland. Venez les encourager !" |
| 3 | Recrutement | Manuel ou calendrier (sept/juin) | "La saison approche ! Le BC recherche des joueurs U15 et U17. Inscriptions ouvertes..." |
| 4 | Événement | Manuel | "Tournoi annuel du club le 15 mars ! 12 équipes, buvette, animations..." |
| 5 | Sponsor | Calendrier (1x/mois par sponsor) | "Merci à Boulangerie Martin pour son soutien ! Partenaire fidèle depuis 3 ans..." |
| 6 | Entraînement / info pratique | Manuel ou changement horaire | "Attention : l'entraînement U13 est décalé à 18h30 ce mercredi." |
| 7 | Joueur de la semaine | Manuel (choix du joueur) | "Focus sur Karim, pivot des seniors. 3 saisons au club, toujours le premier..." |
| 8 | Post générique / actu | Manuel (sujet libre) | L'IA génère à partir d'un sujet en 2 mots |

**Pour CHAQUE post généré, l'IA produit :**
- Texte Facebook (150-250 mots, ton adapté au club)
- Texte Instagram (plus court, 100-150 mots + 15-20 hashtags pertinents)
- Texte Story Instagram (1-2 phrases d'accroche)
- Suggestion de visuel (description de l'image à utiliser ou à créer sur Canva)

**Le bénévole peut :**
- Valider tel quel
- Modifier le texte avant de copier
- Régénérer (demander une autre version)
- Changer le ton (plus formel / plus fun)

---

### Fonctionnalité 3 -- Input des données de match

**Option A -- Saisie manuelle (MVP jour 1) :**

Formulaire simple :
- Équipe (dropdown)
- Adversaire
- Score domicile / extérieur
- Lieu
- Meilleurs joueurs (optionnel)
- Commentaire libre (optionnel, ex : "match serré", "grosse défense")

L'IA génère immédiatement le post résultat + le post d'annonce du prochain match.

**Option B -- Sync fédération (si le club a connecté son identifiant) :**

- Le code existant scrape/récupère les résultats
- Le post est généré AUTOMATIQUEMENT après chaque match
- Le bénévole reçoit une notification "Votre post résultat est prêt, validez-le"

---

### Fonctionnalité 4 -- Calendrier de contenu

**Vue mensuelle avec posts pré-planifiés :**

```
Lundi    Mardi    Mercredi  Jeudi    Vendredi  Samedi   Dimanche
                                               [MATCH]
                                               -> Annonce (auto J-2)
                                               -> Résultat (auto après match)
         [POST]                     [POST]
         Sponsor                    Entraînement
         du mois                    rappel
```

**Pré-remplissage intelligent :**
- Le calendrier se remplit automatiquement avec :
  - Les matchs connus (sync fédé ou saisis manuellement)
  - Les posts récurrents (1 sponsor/mois, 1 recrutement en sept/juin)
  - Les suggestions de l'IA ("Ca fait 2 semaines sans post joueur de la semaine")
- Le bénévole peut ajouter/supprimer/déplacer

---

### Fonctionnalité 5 -- Publication (copier-coller assisté)

**MVP = Copier-coller, PAS d'auto-publish**

Pourquoi pas d'auto-publish au MVP :
- Les API Facebook/Instagram sont complexes à setup (review process Meta)
- Le bénévole veut garder le contrôle au début
- Ca ajoute des semaines de dev pour un gain marginal

**Comment ça marche :**
- Le bénévole clique sur un post validé
- Il voit 3 onglets : Facebook / Instagram / Story
- Bouton "Copier le texte" pour chaque plateforme
- Preview visuelle de ce que ça donnera
- Le bénévole colle dans Facebook/Instagram (2 clics)

**V2 (plus tard) :** Auto-publish via API Meta + scheduling

---

### Fonctionnalité 6 -- Dashboard / Stats simples

**MVP minimal :**
- Nombre de posts générés ce mois
- Nombre de posts publiés (marqués manuellement comme "publié")
- Rappels : "3 posts en attente de validation"
- Streak : "12 semaines consécutives de publication"

---

### Ce qu'on NE build PAS au MVP

| Fonctionnalité | Pourquoi pas maintenant |
|---|---|
| Auto-publish Facebook/Instagram | API Meta complexe, review process long |
| Génération d'images IA | Coûteux, qualité pas assez pro pour un club |
| Analytics réseaux sociaux | Nécessite connexion API Meta |
| Multi-utilisateurs par club | Un seul admin suffit au début |
| App mobile | Le dashboard web responsive suffit |
| Gestion des commentaires | Hors scope, trop complexe |
| Support vidéo / Reels | V2, le texte + image suffisent au début |

---

## Architecture Technique

### Stack

```
FRONTEND          BACKEND            DATABASE         IA
Next.js 14+       Next.js API        Supabase         API Claude ou
React/TypeScript   Routes             (PostgreSQL)     OpenAI
TailwindCSS       Server Actions
```

### Architecture globale -- connexion Site + CM

```
+-------------------------------------+
|         SUPABASE (partagé)          |
|                                     |
|  clubs          -> config club      |
|  teams          -> équipes          |
|  matches        -> matchs/résultats |
|  posts          -> posts générés    |
|  post_templates -> prompts par type |
|  sponsors       -> sponsors du club |
|  players        -> joueurs          |
|  calendar       -> planning posts   |
|  subscriptions  -> abonnements      |
+----------+--------------+----------+
           |              |
     +-----+-----+  +----+--------------+
     | SITE CLUB  |  |  CM DASHBOARD     |
     | (public)   |  |  (admin privé)    |
     |            |  |                   |
     | Next.js    |  |  /admin/cm        |
     | Template   |  |  ou app séparée   |
     | configurable| |                   |
     |            |  |  Générateur IA    |
     | Lit les    |  |  Calendrier       |
     | données    |  |  Écrit les        |
     | matchs,    |  |  données matchs,  |
     | résultats  |  |  posts, etc.      |
     +------------+  +------+------------+
                            |
                     +------+------+
                     |  API IA     |
                     |  (Claude /  |
                     |   OpenAI)   |
                     +-------------+
```

### Options d'intégration

**Option A -- CM intégré dans le site club (recommandé pour MVP) :**
- Le CM est une section /admin/community-manager du site club
- Même déploiement, même base de données
- Plus simple à maintenir
- Le bénévole a UN seul URL

**Option B -- CM comme app séparée (V2) :**
- App à part (cm.tondomaine.fr)
- Peut servir des clubs qui n'ont PAS acheté le site
- Plus flexible mais plus complexe
- Nécessite un système d'auth partagé

**Recommandation : Option A pour le MVP, migrer vers Option B quand le CM sera vendu indépendamment du site.**

---

### Schéma base de données (tables clés)

```sql
-- Config club (partagé avec le site)
clubs: id, name, sport, city, colors, logo, tone, social_links, federation_id

-- Équipes
teams: id, club_id, name, category, coach_name

-- Joueurs
players: id, team_id, name, position, photo_url, bio

-- Matchs (partagé avec le site)
matches: id, team_id, opponent, date, location,
         score_home, score_away, status (upcoming/played),
         top_players, notes

-- Sponsors
sponsors: id, club_id, name, logo, description, since_year

-- Posts générés par l'IA
posts: id, club_id, match_id (nullable), type (result/announcement/recruit/...),
       text_facebook, text_instagram, text_story,
       image_suggestion, hashtags,
       status (draft/validated/published),
       scheduled_date, created_at

-- Prompts système par type de post
post_templates: id, post_type, platform, system_prompt, user_prompt_template

-- Calendrier
calendar_events: id, club_id, post_type, scheduled_date,
                 auto_generated (bool), post_id (nullable)
```

---

### Flow de génération d'un post

```
1. DÉCLENCHEUR
   -> Match joué (auto ou manuel)
   -> Bénévole clique "Nouveau post"
   -> Calendrier déclenche un post planifié

2. CONSTRUCTION DU PROMPT
   -> Charger le system prompt du type de post (post_templates)
   -> Injecter le contexte club (nom, ton, couleurs, ville)
   -> Injecter les données spécifiques (score, joueurs, adversaire)
   -> Injecter la plateforme cible

3. APPEL API IA
   -> Envoyer le prompt à Claude/OpenAI
   -> Recevoir texte Facebook + Instagram + Story + hashtags

4. STOCKAGE
   -> Sauvegarder dans table posts (status = draft)

5. VALIDATION BÉNÉVOLE
   -> Le bénévole voit le post dans son dashboard
   -> Il valide, modifie ou régénère
   -> Il copie-colle sur ses réseaux

6. MARQUAGE
   -> Le bénévole marque comme "publié"
```

---

### Exemple de prompt système (post résultat)

```
Tu es le community manager du {club_name}, club de {sport} à {city}.

Ton de communication : {tone}

Génère un post {platform} pour annoncer le résultat du match :
- Équipe : {team_name}
- Adversaire : {opponent}
- Score : {score_home} - {score_away}
- Lieu : {location}
- Joueurs remarquables : {top_players}
- Notes : {notes}

Règles :
- Écris en français
- Sois {tone}
- Mentionne le score clairement
- Félicite l'équipe si victoire, encourage si défaite
- Mentionne les joueurs remarquables si fournis
- {if platform == instagram: "Ajoute 15-20 hashtags pertinents"}
- {if platform == facebook: "Format 150-250 mots"}
- {if platform == story: "Maximum 2 phrases d'accroche percutantes"}
```

---

### Pricing CM seul (si vendu indépendamment)

| Plan | Prix | Pour qui |
|---|---|---|
| Gratuit | 0€ | 2 posts/semaine auto, 1 plateforme, branding "Propulsé par..." |
| Club | 9€/mois | Posts illimités, 2 plateformes, sans branding |
| Pro | 29€/mois | Multi-plateformes, analytics, calendrier, sync fédération |

---

## Pricing Package Complet (Site + CM IA)

### Analyse du marché

| Facteur | Données |
|---|---|
| Budget moyen club amateur | ~65 000€/an |
| Seuil décision président seul | En dessous de 500€ |
| Seuil vote comité directeur | Au-dessus de 1 000€ |
| Scorenco MonSiteClub | 600€ + 12€/mois |
| AssoConnect | Jusqu'à 104€/mois |
| Pep's Up | 10-35€/mois |
| CM freelance humain | 500-1 000€/mois |
| Temps bénévole économisé | 10-15h/semaine |

### Coûts réels par club (pour Adrien)

| Poste | Coût |
|---|---|
| Temps de dev par site | ~1h (template configurable) |
| API IA par club | ~2-5€/mois |
| Hébergement Vercel | Gratuit (hobby) ou 20$/mois (pro) |
| Domaine par club | ~10-15€/an (payé par le club) |

### Trois stratégies évaluées

**Stratégie A -- "Premium accessible" (RECOMMANDÉE)**

| | Prix |
|---|---|
| Setup (site + config CM) | **990€** |
| Mensuel (CM IA + hébergement + maintenance) | **49€/mois** |
| CA par club an 1 | **1 578€** |
| CA par club an 2+ | **588€** (pur récurrent) |

**Stratégie B -- "Entrée facile, récurrent fort"**

| | Prix |
|---|---|
| Setup | **490€** |
| Mensuel | **79€/mois** |
| CA par club an 1 | **1 438€** |
| CA par club an 2+ | **948€** (pur récurrent) |

**Stratégie C -- "Abonnement tout inclus"**

| | Prix |
|---|---|
| Setup | **0€** |
| Mensuel (engagement 12 mois) | **119€/mois** |
| CA par club an 1 | **1 428€** |
| CA par club an 2+ | **1 428€** |

### Stratégie retenue : A avec offre de lancement

| | Prix normal | Offre lancement (10 premiers clubs) |
|---|---|---|
| Setup | 990€ | **690€** |
| Mensuel | 49€/mois | 49€/mois |

**Pourquoi 690€ de lancement :**
- Reste sous le seuil décisionnel du président seul dans beaucoup de clubs
- L'urgence ("10 premiers clubs") pousse à décider vite
- Permet de signer rapidement et d'obtenir des témoignages
- Remonter à 990€ dès que 10 clients signés

**Pourquoi 49€/mois :**
- Assez bas pour que personne ne résilie
- Assez haut pour que ça s'accumule
- Comparé à un CM freelance (500-1000€/mois), c'est imbattable
- Comparé à Pep's Up (35€/mois), c'est justifié par l'IA générative

**Pourquoi pas moins cher en setup :**
- En dessous de 500€ de setup, le produit est dévalorisé
- Les clubs qui paient 200€ sont ceux qui demandent 47 modifications gratuites
- Un prix à 690-990€ filtre les clients sérieux

### Projections financières

| Scénario | Clubs/mois | Setup (one-shot) | Récurrent mensuel cumulé | CA Mois 6 |
|---|---|---|---|---|
| Pessimiste | 2 | 1 380€/mois | +98€/mois | 1 380€ + 588€ récurrent |
| Réaliste | 4 | 2 760€/mois | +196€/mois | 2 760€ + 1 176€ récurrent |
| Optimiste | 8 | 5 520€/mois | +392€/mois | 5 520€ + 2 352€ récurrent |

Au bout d'un an (scénario réaliste, 4 clubs/mois) :
- 48 clubs signés
- Setup encaissé : 33 120€
- Récurrent : 48 x 49€ = **2 352€/mois en pilote automatique**

### Le pitch de vente

> "Je crée le site internet de votre club avec un design moderne, les résultats
> automatiques de la fédération, et un community manager IA qui vous prépare tous
> vos posts réseaux sociaux chaque semaine. Vous validez en 1 clic, vous
> copiez-collez, c'est fait.
>
> 690€ pour le site (offre de lancement) + 49€/mois pour le community manager.
>
> Pour comparaison, un community manager freelance c'est 500 à 1 000€ par mois.
> Là c'est 49€."

---

### UI -- Ce que le bénévole voit

```
+------------------------------------------+
|  Dashboard Community Manager        [CM] |
+------------------------------------------+
|                                          |
|  Cette semaine : 4 posts prêts           |
|                                          |
|  +-------------------------------------+ |
|  | SAM 15 FEV - Résultat match         | |
|  | Seniors vs Cergy : 78-65            | |
|  | [Voir] [Valider] [Régénérer]        | |
|  +-------------------------------------+ |
|  +-------------------------------------+ |
|  | MAR 18 FEV - Sponsor du mois        | |
|  | Remerciement Boulangerie Martin     | |
|  | [Voir] [Valider] [Régénérer]        | |
|  +-------------------------------------+ |
|  +-------------------------------------+ |
|  | JEU 20 FEV - Annonce match          | |
|  | Seniors vs Poissy - Samedi 14h      | |
|  | [Voir] [Valider] [Régénérer]        | |
|  +-------------------------------------+ |
|                                          |
|  [+ Nouveau post]  [Calendrier]          |
|                                          |
+------------------------------------------+
```

---

### Plan d'exécution détaillé

#### Semaine 1 -- Fondations

| Jour | Tâche | Livrable |
|---|---|---|
| J1 | Setup projet : repo Next.js, Supabase, TailwindCSS | Projet initialisé, DB créée |
| J1 | Créer les tables Supabase (clubs, teams, matches, posts, etc.) | Schéma DB complet |
| J2 | Onboarding club : formulaire config initiale | Page /admin/setup fonctionnelle |
| J2 | Seed data : créer un club de test avec données réalistes | Données de test en DB |
| J3 | Générateur IA : intégration API Claude/OpenAI | Appel API fonctionnel, premier post généré |
| J3 | Créer les 8 prompt templates (résultat, annonce, recrutement, etc.) | Prompts stockés en DB |
| J4 | Dashboard CM : liste des posts générés avec actions (voir/valider/régénérer) | Dashboard fonctionnel |
| J4 | Vue détail post : onglets Facebook/Instagram/Story + bouton copier | Copier-coller fonctionnel |
| J5 | Input match manuel : formulaire score + génération auto du post | Flow complet match -> post |

#### Semaine 2 -- Complétion MVP + Template Site

| Jour | Tâche | Livrable |
|---|---|---|
| J6 | Calendrier de contenu : vue mensuelle avec posts planifiés | Calendrier interactif |
| J6 | Pré-remplissage intelligent du calendrier (matchs connus + récurrents) | Auto-suggestions |
| J7 | Dashboard stats : posts générés/publiés ce mois, streak, rappels | Stats MVP |
| J7 | Template site club configurable (fait en parallèle par autre IA) | Template prêt |
| J8 | Connecter site + CM : partage DB, navigation /admin/cm | Intégration complète |
| J8 | Sync fédération (réutiliser code Argenteuil) : option B auto-résultats | Sync FFBB fonctionnelle |
| J9 | Tests end-to-end : créer un club, générer posts, valider, copier | Tout fonctionne |
| J9 | Landing page de vente : présentation offre + formulaire contact | Page prête |
| J10 | Déploiement Vercel + config domaine | Prod en ligne |

#### Semaine 3 -- Lancement commercial

| Jour | Tâche | Livrable |
|---|---|---|
| J11 | Créer le premier site club de démo (club fictif ou Argenteuil) | Démo en ligne |
| J11 | Préparer vidéo démo 2 min (Loom) montrant le CM en action | Vidéo prête |
| J12 | Post LinkedIn #1 : annonce du produit | Post publié |
| J12 | Contacter les 5 dirigeants basket du réseau direct | 5 messages envoyés |
| J13 | Contacter 20 clubs de la liste (multi-sports) | 20 messages envoyés |
| J13 | Proposer l'audit gratuit + démo du CM IA en 15 min | RDV pris |
| J14 | Relances + 15 nouveaux contacts | 35 clubs contactés total |
| J15 | Post LinkedIn #2 + premiers audits/démos | Démos réalisées |

#### Semaine 4 -- Conversion

| Jour | Tâche | Livrable |
|---|---|---|
| J16-J17 | Démos + envoi devis aux clubs intéressés | Devis envoyés |
| J18 | Relances devis + 15 nouveaux contacts | Pipeline rempli |
| J19 | OBJECTIF : signer le premier client | Premier setup facturé |
| J20 | Dupliquer template, configurer, déployer pour client #1 | Site #1 en prod |
| J21 | Post LinkedIn #3 : "Premier client signé" + continuer la chasse | Social proof |

### KPIs Objectifs -- 30 jours

| Métrique | Objectif |
|---|---|
| Clubs contactés | 50+ |
| Démos réalisées | 10+ |
| Devis envoyés | 5+ |
| **Clients signés** | **2-3** |
| **CA setup encaissé** | **1 380 - 2 070€** |
| **MRR lancé** | **98 - 147€/mois** |
| Posts LinkedIn publiés | 4+ |

### Checklist avant le premier client

- [ ] Produit fonctionnel (site template + CM IA)
- [ ] Démo en ligne (club fictif ou existant)
- [ ] Vidéo démo 2 min (Loom)
- [ ] Landing page de vente
- [ ] Template devis adapté au nouveau package
- [ ] CGV mises à jour (ajout abonnement mensuel)
- [ ] Système de paiement récurrent (Stripe)
- [ ] Statut micro-entrepreneur actif + SIRET
- [ ] Compte bancaire dédié

### Risques et mitigations

| Risque | Mitigation |
|---|---|
| Les clubs trouvent 49€/mois trop cher | Offrir 1 mois gratuit pour démontrer la valeur |
| L'IA génère du contenu pas assez bon | Affiner les prompts, permettre l'édition manuelle |
| Les bénévoles ne valident pas les posts | Notification email/SMS hebdomadaire de rappel |
| Problème de scraping fédération | Toujours proposer l'input manuel en fallback |
| Résiliation rapide des abonnements | Engagement 3 mois minimum au lancement |

---

**Fichier créé le :** 2026-02-03
**Dernière mise à jour :** 2026-02-03
**Session de brainstorming avec Carson (Brainstorming Coach)**
