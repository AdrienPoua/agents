# Community Manager IA -- Spécification Technique pour Intégration

**Date :** 2026-02-03
**Projet cible :** Argenteuil Basketball (`C:\Users\adrie\Desktop\code\argenteuil_basketball`)
**Objectif :** Intégrer un Community Manager IA dans le dashboard admin existant

---

## 1. CONTEXTE

### Ce qu'on construit

Un module "Community Manager IA" intégré au dashboard admin du site club. Le bénévole ouvre `/admin/community-manager`, voit des posts déjà générés pour la semaine, les valide, et ils sont publiés automatiquement sur Instagram et Facebook. Temps total pour le bénévole : 5 minutes par semaine au lieu de 10-15 heures.

### Ce qui existe déjà dans le projet

Le projet Argenteuil Basketball est une app Next.js 14 (App Router) avec :

- **Supabase** pour la BDD et l'auth
- **Dashboard admin** complet sous `src/app/(dashboard)/admin/`
- **Sync FFBB** : scraping automatique des matchs/résultats via Puppeteer (`core/infrastructure/ffbb-extranet/client.ts`)
- **Instagram READ** : affichage des posts Instagram sur le site (`core/actions/instagram/getPosts.ts`)
- **Architecture Clean** : domain/application/infrastructure/presentation dans `core/`
- **Server Actions** pour les opérations CRUD
- **Supabase Repositories** pattern dans `core/infrastructure/supabase/repositories/`
- **Config club** centralisée dans `core/club.ts` et `config/club-config.ts`

### Ce qui n'existe PAS encore

- Génération de contenu IA
- Publication WRITE sur Instagram/Facebook (actuellement en lecture seule)
- Génération d'images/visuels automatiques
- Calendrier de contenu
- Gestion des sponsors en BDD

---

## 2. DÉCISIONS TECHNIQUES

| Choix | Décision |
|---|---|
| API IA | **Anthropic Claude** (Sonnet ou Haiku) |
| Génération d'images | **@vercel/og + Satori** (génération d'images serveur avec JSX) |
| Publication Instagram | **Meta Graph API** (Instagram Content Publishing) |
| Publication Facebook | **Meta Graph API** (Pages API) |
| Intégration | **Option A** : module intégré au dashboard admin existant (`/admin/community-manager`) |
| BDD | Nouvelles tables dans le **Supabase existant** |
| Patterns | Suivre l'architecture existante (Clean Architecture, Server Actions, Repositories) |

---

## 3. STRUCTURE DE FICHIERS À CRÉER

Suivre les conventions du projet existant :

```
src/app/(dashboard)/admin/community-manager/
├── page.tsx                              # Dashboard principal CM
├── page.actions.ts                       # Server actions pour la page
├── components/
│   ├── post-list.tsx                     # Liste des posts avec actions
│   ├── post-card.tsx                     # Card d'un post (preview + actions)
│   ├── post-detail.tsx                   # Vue détail avec onglets FB/Insta/Story
│   ├── post-editor.tsx                   # Édition du texte avant validation
│   ├── calendar-view.tsx                 # Calendrier mensuel des posts
│   ├── new-post-dialog.tsx               # Dialog création manuelle
│   ├── match-input-form.tsx              # Formulaire saisie score
│   └── stats-overview.tsx                # Stats simples (posts générés/publiés)
├── calendar/
│   └── page.tsx                          # Page calendrier complète
├── settings/
│   └── page.tsx                          # Config CM (comptes sociaux, ton, etc.)
└── hooks/
    ├── use-posts.ts                      # React Query pour les posts
    └── use-calendar.ts                   # React Query pour le calendrier

core/
├── domain/
│   ├── entities/
│   │   ├── post.entity.ts                # Entité Post
│   │   ├── post-template.entity.ts       # Entité Template de prompt
│   │   ├── sponsor.entity.ts             # Entité Sponsor
│   │   └── calendar-event.entity.ts      # Entité événement calendrier
│   └── repositories/
│       ├── post.repository.ts            # Interface repo posts
│       ├── sponsor.repository.ts         # Interface repo sponsors
│       └── calendar.repository.ts        # Interface repo calendrier
│
├── infrastructure/
│   ├── anthropic/
│   │   └── client.ts                     # Client Anthropic Claude
│   ├── meta-graph/
│   │   ├── instagram-publisher.ts        # Publication Instagram (WRITE)
│   │   └── facebook-publisher.ts         # Publication Facebook (WRITE)
│   ├── image-generator/
│   │   └── templates/
│   │       ├── match-result.tsx          # Template visuel résultat de match
│   │       ├── match-announcement.tsx    # Template visuel annonce de match
│   │       ├── recruitment.tsx           # Template visuel recrutement
│   │       ├── sponsor-highlight.tsx     # Template visuel sponsor
│   │       ├── training-info.tsx         # Template visuel entraînement
│   │       ├── player-spotlight.tsx      # Template visuel joueur
│   │       └── generic.tsx              # Template visuel générique
│   └── supabase/
│       └── repositories/
│           ├── post.repository.ts        # Implémentation Supabase posts
│           ├── sponsor.repository.ts     # Implémentation Supabase sponsors
│           └── calendar.repository.ts    # Implémentation Supabase calendrier
│
├── application/
│   └── usecases/
│       ├── generate-post.usecase.ts      # Génération d'un post via IA
│       ├── publish-post.usecase.ts       # Publication sur Instagram/Facebook
│       ├── generate-image.usecase.ts     # Génération image via Satori
│       ├── schedule-posts.usecase.ts     # Planification automatique
│       └── sync-match-posts.usecase.ts   # Auto-génération post après sync matchs
│
└── actions/
    └── community-manager/
        ├── generatePost.ts               # Server action : générer un post
        ├── publishPost.ts                # Server action : publier un post
        ├── validatePost.ts               # Server action : valider un post
        ├── regeneratePost.ts             # Server action : régénérer un post
        ├── getCalendar.ts                # Server action : récupérer le calendrier
        ├── createManualPost.ts           # Server action : créer post manuel
        └── getStats.ts                   # Server action : stats CM

src/app/api/
├── community-manager/
│   ├── generate-image/route.ts           # API route : génération image (@vercel/og)
│   ├── auto-generate/route.ts            # Cron : auto-génération posts planifiés
│   └── auto-publish/route.ts             # Cron : auto-publication posts validés
```

---

## 4. SCHÉMA BASE DE DONNÉES -- Nouvelles tables

Ajouter ces tables au Supabase existant. Le fichier de setup actuel est dans `scripts/setup.sql`.

```sql
-- ============================================
-- COMMUNITY MANAGER IA -- Nouvelles tables
-- ============================================

-- Types de posts
CREATE TYPE post_type AS ENUM (
  'match_result',
  'match_announcement',
  'recruitment',
  'event',
  'sponsor_highlight',
  'training_info',
  'player_spotlight',
  'generic'
);

-- Statut des posts
CREATE TYPE post_status AS ENUM (
  'draft',
  'validated',
  'published',
  'failed'
);

-- Plateformes
CREATE TYPE social_platform AS ENUM (
  'facebook',
  'instagram',
  'instagram_story'
);

-- ============================================
-- Table : sponsors
-- ============================================
CREATE TABLE sponsors (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  logo_url TEXT,
  description TEXT,
  since_year INTEGER,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- ============================================
-- Table : post_templates (prompts système par type)
-- ============================================
CREATE TABLE post_templates (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  post_type post_type NOT NULL,
  platform social_platform NOT NULL,
  system_prompt TEXT NOT NULL,
  user_prompt_template TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now(),
  UNIQUE(post_type, platform)
);

-- ============================================
-- Table : cm_posts (posts générés par l'IA)
-- ============================================
CREATE TABLE cm_posts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,

  -- Type et lien
  post_type post_type NOT NULL,
  match_id UUID REFERENCES matchs(id) ON DELETE SET NULL,
  sponsor_id UUID REFERENCES sponsors(id) ON DELETE SET NULL,
  player_member_id UUID REFERENCES members(id) ON DELETE SET NULL,

  -- Contenu généré
  text_facebook TEXT,
  text_instagram TEXT,
  text_story TEXT,
  hashtags TEXT[],
  image_suggestion TEXT,

  -- Image générée
  generated_image_url TEXT,
  uploaded_image_url TEXT,

  -- Statut et publication
  status post_status DEFAULT 'draft',
  scheduled_date DATE,
  published_at TIMESTAMPTZ,
  published_platforms social_platform[],

  -- Input utilisateur (pour posts manuels)
  manual_input JSONB,
  -- Exemple pour match_result : { "opponent": "Cergy", "score_home": 78, "score_away": 65, "top_players": "Karim, Youssef", "notes": "match serré" }
  -- Exemple pour recruitment : { "positions": "U15, U17", "message": "saison prochaine" }
  -- Exemple pour generic : { "topic": "journée portes ouvertes" }

  -- Métadonnées
  tone_override TEXT,  -- Permet de changer le ton pour ce post spécifique
  regeneration_count INTEGER DEFAULT 0,

  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- ============================================
-- Table : cm_calendar (planification automatique)
-- ============================================
CREATE TABLE cm_calendar (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,

  post_type post_type NOT NULL,
  scheduled_date DATE NOT NULL,
  auto_generated BOOLEAN DEFAULT false,

  -- Lien vers le post généré (nullable, rempli quand le post est créé)
  post_id UUID REFERENCES cm_posts(id) ON DELETE SET NULL,

  -- Contexte pour la génération automatique
  context JSONB,
  -- Exemple pour sponsor : { "sponsor_id": "uuid" }
  -- Exemple pour match_announcement : { "match_id": "uuid" }

  created_at TIMESTAMPTZ DEFAULT now()
);

-- ============================================
-- Table : cm_settings (configuration CM par club)
-- ============================================
CREATE TABLE cm_settings (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,

  -- Ton de communication
  tone TEXT DEFAULT 'enthousiaste',  -- formel / décontracté / enthousiaste

  -- Comptes sociaux (tokens stockés dans app_secrets, pas ici)
  instagram_business_id TEXT,
  facebook_page_id TEXT,

  -- Préférences publication
  auto_publish_enabled BOOLEAN DEFAULT false,
  auto_publish_match_results BOOLEAN DEFAULT true,
  auto_publish_match_announcements BOOLEAN DEFAULT true,
  announcement_days_before INTEGER DEFAULT 2,

  -- Préférences contenu
  default_hashtags TEXT[],

  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- ============================================
-- Index
-- ============================================
CREATE INDEX idx_cm_posts_status ON cm_posts(status);
CREATE INDEX idx_cm_posts_scheduled ON cm_posts(scheduled_date);
CREATE INDEX idx_cm_posts_type ON cm_posts(post_type);
CREATE INDEX idx_cm_calendar_date ON cm_calendar(scheduled_date);

-- ============================================
-- RLS (Row Level Security) -- même pattern que les tables existantes
-- ============================================
ALTER TABLE sponsors ENABLE ROW LEVEL SECURITY;
ALTER TABLE post_templates ENABLE ROW LEVEL SECURITY;
ALTER TABLE cm_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE cm_calendar ENABLE ROW LEVEL SECURITY;
ALTER TABLE cm_settings ENABLE ROW LEVEL SECURITY;

-- Policies : accès authentifié uniquement (même pattern que le reste du projet)
CREATE POLICY "Authenticated users can manage sponsors" ON sponsors FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Authenticated users can manage post_templates" ON post_templates FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Authenticated users can manage cm_posts" ON cm_posts FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Authenticated users can manage cm_calendar" ON cm_calendar FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Authenticated users can manage cm_settings" ON cm_settings FOR ALL USING (auth.role() = 'authenticated');

-- Service role bypass pour les crons
CREATE POLICY "Service role full access sponsors" ON sponsors FOR ALL USING (auth.role() = 'service_role');
CREATE POLICY "Service role full access cm_posts" ON cm_posts FOR ALL USING (auth.role() = 'service_role');
CREATE POLICY "Service role full access cm_calendar" ON cm_calendar FOR ALL USING (auth.role() = 'service_role');
```

---

## 5. PROMPTS IA -- Seed data pour post_templates

Insérer ces prompts en seed dans la table `post_templates` :

### 5.1 Résultat de match

**system_prompt :**
```
Tu es le community manager du club {club_name}, club de basketball à {city}.
Tu écris dans un ton {tone}.
Tu ne mets JAMAIS d'emojis sauf si le ton est "enthousiaste".
Tu écris toujours en français.
```

**user_prompt_template (facebook) :**
```
Génère un post Facebook (150-250 mots) pour annoncer le résultat du match :
- Équipe : {team_name}
- Adversaire : {opponent}
- Score domicile : {score_home}
- Score extérieur : {score_away}
- Lieu : {location}
- Joueurs remarquables : {top_players}
- Notes : {notes}

Règles :
- Mentionne le score clairement
- Félicite l'équipe si victoire, encourage si défaite, souligne le combat si match serré
- Mentionne les joueurs remarquables si fournis
- Termine par une phrase engageante (question ou call-to-action)
- Ne mets PAS de hashtags dans le texte Facebook
```

**user_prompt_template (instagram) :**
```
Génère un post Instagram (100-150 mots) pour annoncer le résultat du match :
- Équipe : {team_name}
- Adversaire : {opponent}
- Score domicile : {score_home}
- Score extérieur : {score_away}
- Joueurs remarquables : {top_players}
- Notes : {notes}

Règles :
- Format court et percutant
- Mentionne le score clairement
- Termine par 15-20 hashtags pertinents (basketball, ville, club, sport amateur)
```

**user_prompt_template (instagram_story) :**
```
Génère un texte de Story Instagram (maximum 2 phrases percutantes) pour le résultat :
- {team_name} vs {opponent} : {score_home} - {score_away}

Règles :
- Ultra court, percutant, émotionnel
- Pas de hashtags
```

### 5.2 Annonce de match

**user_prompt_template (facebook) :**
```
Génère un post Facebook (100-200 mots) pour annoncer le prochain match :
- Équipe : {team_name}
- Adversaire : {opponent}
- Date : {date}
- Heure : {time}
- Lieu : {location}

Règles :
- Donne envie de venir supporter
- Mentionne clairement date, heure, lieu
- Invite les supporters à venir
```

**user_prompt_template (instagram) :**
```
Génère un post Instagram (80-120 mots) pour annoncer le prochain match :
- Équipe : {team_name}
- Adversaire : {opponent}
- Date : {date}
- Heure : {time}
- Lieu : {location}

Règles :
- Format court et engageant
- Termine par 15-20 hashtags
```

### 5.3 Recrutement

**user_prompt_template (facebook) :**
```
Génère un post Facebook (150-250 mots) pour recruter de nouveaux joueurs :
- Club : {club_name} à {city}
- Postes recherchés : {positions}
- Message complémentaire : {message}

Règles :
- Donne envie de rejoindre le club
- Mentionne les avantages (ambiance, progression, compétition)
- Indique comment s'inscrire ou contacter le club
- Ton accueillant et motivant
```

### 5.4 Sponsor

**user_prompt_template (facebook) :**
```
Génère un post Facebook (100-200 mots) pour mettre en avant un sponsor :
- Nom du sponsor : {sponsor_name}
- Description : {sponsor_description}
- Partenaire depuis : {since_year}

Règles :
- Remercie chaleureusement le sponsor
- Mentionne la durée du partenariat si disponible
- Montre l'impact du soutien pour le club
- Invite la communauté à soutenir le sponsor en retour
```

### 5.5 Entraînement / Info pratique

**user_prompt_template (facebook) :**
```
Génère un post Facebook court (50-100 mots) pour une info pratique :
- Sujet : {topic}
- Détails : {details}

Règles :
- Clair, direct, informatif
- Les informations pratiques (date, heure, lieu) doivent être immédiatement visibles
```

### 5.6 Joueur de la semaine

**user_prompt_template (facebook) :**
```
Génère un post Facebook (150-200 mots) pour mettre en avant un joueur :
- Nom : {player_name}
- Poste : {position}
- Équipe : {team_name}
- Bio/infos : {bio}

Règles :
- Ton chaleureux et valorisant
- Mets en avant les qualités humaines et sportives
- Fais ressentir l'esprit d'équipe et de club
```

### 5.7 Événement

**user_prompt_template (facebook) :**
```
Génère un post Facebook (150-250 mots) pour annoncer un événement du club :
- Événement : {event_name}
- Date : {date}
- Lieu : {location}
- Détails : {details}

Règles :
- Donne envie de participer
- Mentionne clairement date, heure, lieu
- Crée de l'excitation et de l'anticipation
```

### 5.8 Post libre

**user_prompt_template (facebook) :**
```
Génère un post Facebook (100-250 mots) sur le sujet suivant :
- Sujet : {topic}
- Contexte club : {club_name}, club de basketball à {city}

Règles :
- Adapte le ton au sujet
- Reste cohérent avec l'image du club
- Engage la communauté
```

---

## 6. GÉNÉRATION D'IMAGES (@vercel/og + Satori)

### API Route pour la génération

Créer une route API Next.js qui génère des images PNG via `@vercel/og` :

**Route :** `src/app/api/community-manager/generate-image/route.tsx`

L'image est générée côté serveur avec du JSX. Les templates utilisent les couleurs du club depuis la config.

### Templates visuels (7 templates)

Chaque template est un composant React qui reçoit des props et retourne du JSX pour Satori.

**Template résultat de match :**
```
┌──────────────────────────────┐
│  [LOGO]  {CLUB_NAME}        │
│          {couleur primaire}  │
│                              │
│     {TEAM_NAME}              │
│                              │
│      {SCORE_HOME}            │
│         VS                   │
│      {SCORE_AWAY}            │
│                              │
│     {OPPONENT}               │
│                              │
│  {date} - {lieu}             │
│                              │
│  {couleur secondaire barre}  │
└──────────────────────────────┘
```

Format : 1080x1080px (carré Instagram)

**Template annonce de match :**
```
┌──────────────────────────────┐
│  [LOGO]  PROCHAIN MATCH      │
│                              │
│     {TEAM_NAME}              │
│         VS                   │
│     {OPPONENT}               │
│                              │
│  {JOUR} {DATE}               │
│  {HEURE}                     │
│  {LIEU}                      │
│                              │
│  VENEZ NOUS SUPPORTER !      │
└──────────────────────────────┘
```

Les autres templates suivent le même principe : fond aux couleurs du club, infos clés lisibles, logo du club, format 1080x1080.

Pour le template sponsor : afficher le logo du sponsor (fourni à l'onboarding, stocké dans `sponsors.logo_url`).

Pour le template joueur : utiliser `uploaded_image_url` (photo uploadée par le bénévole).

---

## 7. PUBLICATION META GRAPH API

### Nouvelles variables d'environnement

Ajouter dans `.env` :
```
# Anthropic Claude
ANTHROPIC_API_KEY=sk-ant-...

# Meta Graph API (publication)
META_APP_ID=...
META_APP_SECRET=...
FACEBOOK_PAGE_ACCESS_TOKEN=...
INSTAGRAM_BUSINESS_ACCOUNT_ID=...

# Les tokens Instagram existants (INSTAGRAM_ACCESS_TOKEN, INSTAGRAM_USER_ID)
# sont déjà dans app_secrets (Supabase), continuer à les utiliser
```

### Flow publication Instagram

```
1. Uploader l'image sur Supabase Storage (bucket public)
   → Obtenir URL publique

2. POST https://graph.facebook.com/v21.0/{instagram_business_id}/media
   Body: {
     image_url: "{url_publique_image}",
     caption: "{texte_instagram_avec_hashtags}",
     access_token: "{token}"
   }
   → Obtenir creation_id

3. POST https://graph.facebook.com/v21.0/{instagram_business_id}/media_publish
   Body: {
     creation_id: "{creation_id}",
     access_token: "{token}"
   }
   → Post publié

4. Mettre à jour cm_posts :
   status = 'published'
   published_at = now()
   published_platforms = array_append(published_platforms, 'instagram')
```

### Flow publication Facebook

```
1. POST https://graph.facebook.com/v21.0/{page_id}/photos
   Body: {
     url: "{url_publique_image}",
     message: "{texte_facebook}",
     access_token: "{page_access_token}"
   }
   → Post publié

2. Mettre à jour cm_posts :
   published_platforms = array_append(published_platforms, 'facebook')
```

### Prérequis Meta

- Compte Instagram **Business** lié à une Page Facebook
- App Meta créée sur developers.facebook.com
- Permissions : `instagram_basic`, `instagram_content_publish`, `pages_manage_posts`, `pages_read_engagement`
- **Meta App Review** nécessaire avant publication sur comptes clients
- En mode développement : publication possible uniquement sur son propre compte (suffisant pour le dev/test)

---

## 8. CRON JOBS

### Cron 1 : Auto-génération des posts planifiés

**Route :** `GET /api/community-manager/auto-generate`
**Fréquence :** Quotidien à 6h du matin
**Sécurité :** Bearer token (CRON_SECRET, même pattern que le sync matchs)

**Logique :**
1. Lire `cm_calendar` pour les événements du jour sans `post_id`
2. Pour chaque événement : générer le post IA + image
3. Sauvegarder dans `cm_posts` (status = 'draft' ou 'validated' selon `cm_settings.auto_publish_enabled`)
4. Mettre à jour `cm_calendar.post_id`

### Cron 2 : Auto-publication

**Route :** `GET /api/community-manager/auto-publish`
**Fréquence :** Toutes les heures (entre 8h et 20h)
**Sécurité :** Bearer token (CRON_SECRET)

**Logique :**
1. Lire `cm_posts` avec `status = 'validated'` et `scheduled_date <= today`
2. Pour chaque post : publier sur les plateformes activées
3. Mettre à jour le statut

### Cron 3 : Pré-remplissage calendrier

**Route :** `GET /api/community-manager/schedule`
**Fréquence :** Hebdomadaire (lundi à 5h)

**Logique :**
1. Lire les matchs de la semaine à venir dans `matchs`
2. Créer des événements `match_announcement` (J-2) et `match_result` (jour du match) dans `cm_calendar`
3. Rotation des sponsors : un sponsor par semaine
4. Suggestions (joueur de la semaine tous les mercredis, etc.)

---

## 9. HOOK SUR LE SYNC MATCHS EXISTANT

Quand le sync FFBB détecte un nouveau résultat (match joué avec score), déclencher automatiquement la génération du post résultat.

**Fichier à modifier :** `core/actions/matchs/synchronizeExtranetToDatabase.ts`

**Ajout :** Après l'upsert d'un match avec `joue = true` et `resultat_equipe1 IS NOT NULL` :
1. Vérifier si un `cm_post` existe déjà pour ce match_id + type 'match_result'
2. Si non : générer le post IA + image template résultat
3. Sauvegarder avec status selon les settings (draft ou auto-publish)

---

## 10. NAVIGATION ADMIN

Ajouter dans le sidebar existant (`src/app/(dashboard)/admin/layout.sidebar.tsx`) :

```
Section "COMMUNITY MANAGER" avec les items :
- Dashboard CM (/admin/community-manager)
- Calendrier (/admin/community-manager/calendar)
- Paramètres (/admin/community-manager/settings)
```

Icône suggérée : `Megaphone` ou `Share2` de Lucide React (déjà dans les dépendances).

---

## 11. PACKAGES À INSTALLER

```bash
bun add @anthropic-ai/sdk    # Client Anthropic Claude
bun add @vercel/og            # Génération d'images (utilise Satori en interne)
```

Note : `@vercel/og` est peut-être déjà disponible via Next.js. Vérifier avant d'installer.

Les autres dépendances (Supabase, React Query, Radix UI, etc.) sont déjà dans le projet.

---

## 12. TYPES DE POSTS -- Récapitulatif

| # | Type | Déclencheur | Auto/Manuel | Source image |
|---|---|---|---|---|
| 1 | match_result | Sync FFBB détecte score OU saisie manuelle | AUTO | Template Satori (score, équipes, couleurs) |
| 2 | match_announcement | Calendrier J-2 avant match | AUTO | Template Satori (date, heure, lieu) |
| 3 | recruitment | Le bénévole tape le besoin | MANUEL | Template Satori + photo uploadée optionnelle |
| 4 | event | Le bénévole crée l'événement | MANUEL | Photo uploadée OU template Satori |
| 5 | sponsor_highlight | Rotation automatique (1/semaine) | AUTO | Logo sponsor + template Satori |
| 6 | training_info | Le bénévole saisit l'info | MANUEL | Template Satori |
| 7 | player_spotlight | Le bénévole choisit le joueur | MANUEL | Photo uploadée OBLIGATOIRE |
| 8 | generic | Le bénévole tape un sujet libre | MANUEL | Photo uploadée OU template Satori |

5 sur 8 fonctionnent en full automatique sans action du bénévole.

---

## 13. FLUX UTILISATEUR PRINCIPAL

```
Le bénévole ouvre /admin/community-manager

    → Voit la liste des posts de la semaine
       (déjà générés automatiquement par les crons)

    → Pour chaque post :
       [Voir]       → Preview avec onglets Facebook / Instagram / Story
       [Valider]    → Passe en status "validated" → publication auto
       [Modifier]   → Éditer le texte avant validation
       [Régénérer]  → Demander une nouvelle version à l'IA
       [Supprimer]  → Annuler ce post

    → Bouton [+ Nouveau post]
       → Choisir le type (recrutement, événement, info, joueur, libre)
       → Remplir le formulaire minimal (2-3 champs)
       → L'IA génère le post → preview → valider

    → Onglet [Calendrier]
       → Vue mensuelle avec tous les posts planifiés
       → Drag & drop pour déplacer
       → Clic pour créer un nouveau post à une date

    → Onglet [Paramètres]
       → Ton de communication
       → Comptes sociaux (connecter Instagram/Facebook)
       → Activer/désactiver l'auto-publication
       → Gérer les sponsors
       → Hashtags par défaut
```

---

## 14. PRIORITÉS D'IMPLÉMENTATION

| Priorité | Fonctionnalité | Pourquoi |
|---|---|---|
| P0 | Tables Supabase + seed prompts | Base de tout |
| P0 | Client Anthropic + génération post texte | Le coeur du produit |
| P0 | Dashboard CM : liste posts + preview + copier-coller | Utilisable immédiatement même sans auto-publish |
| P1 | Génération images Satori (templates résultat + annonce) | Instagram nécessite une image |
| P1 | Formulaire saisie match manuelle → génération auto | Flow principal |
| P1 | Hook sync FFBB → génération auto post résultat | Automatisation clé |
| P2 | Calendrier de contenu | Nice to have, pas bloquant |
| P2 | Publication auto Instagram/Facebook (Meta Graph API) | Nécessite Meta Review, faire après le MVP copier-coller |
| P2 | Crons (auto-generate, auto-publish, schedule) | Automatisation complète |
| P3 | Page paramètres CM | Config initiale en dur suffit pour le MVP |
| P3 | Analytics / stats CM | V2 |

---

## 15. FICHIERS EXISTANTS À CONNAÎTRE

| Fichier | Rôle | Pertinence |
|---|---|---|
| `core/club.ts` | Config club (nom, couleurs, social, contact) | Injecter dans les prompts IA |
| `core/infrastructure/ffbb-extranet/client.ts` | Client scraping FFBB | Comprendre le format des données matchs |
| `core/actions/matchs/synchronizeExtranetToDatabase.ts` | Sync matchs | Ajouter le hook post-sync |
| `core/actions/instagram/getPosts.ts` | Instagram READ actuel | Référence pour les tokens/auth |
| `core/infrastructure/supabase/repositories/` | Pattern repos existant | Suivre le même pattern |
| `src/app/(dashboard)/admin/layout.sidebar.tsx` | Navigation admin | Ajouter les liens CM |
| `src/app/api/matchs/sync/route.ts` | Cron sync matchs | Pattern pour les nouveaux crons |
| `scripts/setup.sql` | Schéma BDD complet | Ajouter les nouvelles tables |
| `.env.example` | Variables d'env template | Ajouter les nouvelles variables |

---

**Fichier créé le :** 2026-02-03
