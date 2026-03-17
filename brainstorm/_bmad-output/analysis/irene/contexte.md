# YETI.live — Contexte Projet

## Vue d'ensemble

**YETI.live** est un projet de wearable connecté porté par **Yann Le Meur** via sa structure **YLM Revolution** *(slide 01)*. Le produit est un **capteur au niveau thoracique** *(slide 05)* — Yann le décrit comme une "ceinture thoracique" *(call)*. Le projet est en développement depuis **~20 ans** *(call)*. Un **MVP** (premier prototype fonctionnel) existe *(call)*. L'objectif immédiat est de trouver un **partenaire industriel** *(slides 07/09)* pour lancer la production.

**Livrable demandé** *(call)* : site vitrine bilingue FR/EN (landing page) ciblant les industriels et grands groupes, avec formulaire de contact. Pas de rush sur le délai.

**État de la relation client** : Seul un appel téléphonique a eu lieu pour l'instant. Le rendez-vous formel avec Yann Le Meur n'a pas encore été fait. De nombreuses questions restent à clarifier lors de ce RDV (voir section "Questions ouvertes" en fin de document).

**Sources primaires** : pitch 21 slides + document KISS 1 page (dans `converted/`) + un appel téléphonique de ~20 min. Les informations marquées *(call)* proviennent uniquement de l'appel et ne figurent pas dans les documents écrits.

---

## Le Fondateur — Yann Le Meur

- **Ancien international de rugby**
- **Doctorat en sciences physiques** *(slide 02 du pitch)*
- **Master en psychologie** *(slide 02 du pitch)*
- Expérience en recherche, management et coaching
- Profil LinkedIn : linkedin.com/in/yann-le-meur-91a24a45
- Contact : +33 6 85 75 30 05 / yann.le-meur@hotmail.fr

Son profil multidisciplinaire (sport de haut niveau + sciences physiques + psychologie) est la fondation même de YETI.live : il croise biométrie physique et dimension psychologique du mouvement.

---

## Le Produit

### Hardware — Standard, pas révolutionnaire
- **1 capteur thoracique** (ceinture sous les pectoraux) *(call)*
- **Centrale inertielle standard** : gyromètre + accéléromètre (IMU) + GPS + fréquence cardiaque *(call — précision post-call)*
- Le hardware n'est PAS le différenciateur. N'importe quel industriel sait produire ce type de capteur.
- **Le MVP actuel** est un **capteur du commerce** avec le logiciel de Yann par-dessus, développé par un indépendant *(call)*

### Software / Algorithme — Le vrai moat (IP)
- **L'innovation est 100% algorithmique** : un modèle mathématique algébrique/géométrique développé par Yann sur ~20 ans
- Transforme les accélérations brutes en une **représentation polaire** (forme radar) propre à chaque individu
- Pipeline : `Capteurs standard → Transformation polynomiale (a₀ + a₁X¹ + a₂X² + ... + aₙXⁿ) → Forme polaire = signature individuelle → Seuils personnels + état émotionnel`

### Les 6 "lignes de commande" du mouvement
Le modèle repose sur **6 directions fondamentales** réparties sur les **3 plans anatomiques** :
- **Plan sagittal** : Devant / Derrière
- **Plan frontal** : Droite / Gauche
- **Plan transversal** : Déplié / Replié

Chaque ligne de commande est associée à **une ou plusieurs émotions** (Engagement, Renoncement, Confusion, Confrontation, Méprise, Surprise) — c'est le pont somatopsychique. Ce mapping s'appuie sur des recherches scientifiques existantes et vérifiées *(call)*.

### Concept fondamental
> **Performance = Mouvement**

L'outil est un **assistant de mouvement en temps réel**. Sa différenciation clé repose sur 3 oppositions avec les concurrents :

| | YETI.live | Concurrents (Catapult, Kinexon...) |
|---|---|---|
| **Scope** | Physique + somatopsychique (état émotionnel) | Physique seul |
| **Méthode** | Algébrique + géométrique | Statistique (Gauss, moyennes) |
| **Référentiel** | Absolu à l'individu (sa propre "charge d'effort") | Relatif à une population (percentiles, normes) |

---

## La Science derrière YETI.live

### Base de données
- **13 000 séquences** de 20 secondes
- **20 individus** ayant réalisé **26 activités** différentes *(slide Performer 4 — corrigé : le KISS mentionne 35 individus, possible étude élargie)*
- Capteurs : IMU (accéléromètre + gyromètre), GPS, fréquence cardiaque

### Découvertes clés — La forme caractéristique
- Chaque personne produit une **forme polaire (radar) unique** — sa signature de mouvement
- Cette forme varie avec l'intensité (3→11 km/h montre une progression claire) mais reste propre à l'individu
- **Matrice de confusion** sur 10 sujets : reconnaissance individuelle de **0.71 à 0.98** (S1=0.98, S4=0.93, S10=0.89) *(slide Performer 4)*
- **UNE FORME = UN MARQUEUR = UNE EMPREINTE = UNE SIGNATURE**
- La forme permet d'identifier en temps réel les **seuils personnels actualisés d'aérobie et d'anaérobie** *(slide Performer 5)*
- Distinction clé : **accélérations externes** (ce que mesurent les concurrents) vs **accélérations internes** (ce que calcule YETI via algèbre/géométrie) *(slide Performer 3)*

### Capacité de travail vs Charge de travail
- **Capacité de travail** = ce que l'individu PEUT faire (état de repos vs effort, visible par la forme polaire) *(slide Performer 6)*
- **Charge de travail** = ce que l'individu FAIT (W = η.m.a.d → Travail efficace # accélération efficace) *(slide Performer 2)*
- Le croisement des deux en temps réel = l'output principal de YETI.live

### Spectre de "rééquilibrage" proposé
Quand un déséquilibre est détecté, le système peut recommander :
- Entraînement (aérobie, anaérobie, hypoxie, hyperoxie)
- Musculation / relaxation
- Récupération (hydrothérapie)
- Nutrition (neurotransmetteurs)
- Relation (humaine, sociale)

C'est un **spectre complet** : physique, physiologique, psychologique, organique.

---

## Technologie & IA

Le coeur technologique actuel est le **modèle algébrique/géométrique** de Yann (transformation polynomiale des données inertielles). À terme, le projet ambitionne d'y ajouter :
- **Large Language Models (LLM)** pour le traitement de données
- **World Models (WM)** pour modéliser les dynamiques du mouvement et faire des prédictions/recommandations en temps réel
- Infrastructure compute GPU (type NVIDIA) pour le traitement

> **Note** : L'IA est une vision future. La valeur actuelle repose entièrement sur le modèle mathématique de Yann, qui fonctionne déjà sur le MVP.

---

## Cas d'usage / Marchés visés

Le pitch présente YETI.live comme applicable à de multiples domaines :

| Domaine | Description |
|---------|-------------|
| **Sports d'équipe** | Basketball, football, rugby — suivi des athlètes *(slide 11 montre une photo de gilet Catapult comme reference de marche existant)* |
| **Santé / Longévité** | Personnes âgées actives, maintien en forme, prévention |
| **Exosquelettes** | Robots d'assistance physique — données de mouvement pour piloter des exosquelettes |
| **Jeux vidéo** | Le corps comme contrôleur — évolution au-delà du gamepad |
| **Drones** | Contrôle par mouvement corporel ou suivi état cognitif/physique de l'opérateur |
| **Défense / Militaire** | Applications liées aux opérateurs de drones militaires |

---

## Partenaires actuels

| Type | Partenaire | Statut |
|------|-----------|--------|
| **R&D** | **HIPE Lab** (hipehumanlab.eu) | ✅ Actif — photos de labo visibles sur slide 08 (velo ergometre, tapis de course, monitoring) |
| **Industriel** | **?** | ❌ Recherché — c'est le besoin principal et la raison du site vitrine |

---

## Paysage concurrentiel

> **Note** : Cette section provient entièrement de **recherche externe** (voir `research/`). Aucune de ces informations ne figure dans les documents de Yann. Le pitch mentionne Catapult visuellement (slide 11, photo d'un gilet) mais sans données chiffrées.

### Catapult Sports (concurrent direct n°1)
- **Siège** : Melbourne, Australie (coté ASX: CAT)
- **Valorisation** : ~724M USD (market cap)
- **Revenus** : 116,5M USD (FY2025), croissance ~16,5%/an *(corrigé : 126M était surestimé)*
- **Clients** : 3 878 équipes pro / 5 000+ total, 40+ sports, 100+ pays *(corrigé : 4 600+ était incohérent entre sources)*
- **Produits** : Capteurs portés dans des gilets (vests), GPS/GNSS + accéléromètre + gyroscope + magnétomètre + ECG
- **Modèle dernier** : Vector T7 (53mm x 35mm x 8.2mm, 17.5g)
- **Business model** : B2B, SaaS + hardware (>70% revenus récurrents SaaS)
- **Métriques** : vitesse, distance, accélérations, changements de direction, collisions, hauteur de saut, charge de travail
- **Limites vs YETI.live** : Catapult mesure uniquement le **physique** — pas de dimension somatopsychique/psychologique

### Kinexon (concurrent direct n°2)
- **Siège** : Munich, Allemagne
- **Levée de fonds** : ~148M USD total (PitchBook/CB Insights) *(corrigé : 276M était une incohérence interne des docs de recherche)*
- **Employés** : ~250-300
- **Clients** : 500+ équipes pro, 70%+ des franchises NBA
- **Produits** : IMU (15g), GPS Pro (51g), LPS indoor (UWB, précision <10cm)
- **Certifications** : FIFA Preferred Provider
- **Business model** : B2B hybride SaaS + hardware
- **Aussi présent en** : industrie (manufacturing, logistics — division KINEXON Industries)
- **Limites vs YETI.live** : Même limite — tracking physique uniquement, pas de couche psychométrique

### Positionnement différenciant de YETI.live
YETI.live se distingue des deux leaders mondiaux **non pas par le hardware** (qui est standard) mais par **l'intelligence algorithmique** :
1. **La dimension somatopsychique** — déduit l'état émotionnel à partir des mêmes capteurs standard, via le mapping 6 directions → 6 émotions
2. **L'approche algébrique/géométrique** — vs approche statistique des concurrents. Transforme les accélérations en forme polaire individuelle, pas en percentiles populationnels
3. **Le référentiel absolu** — la "charge d'effort" est propre à l'individu (son corps, ses stats), pas comparée à une norme globale
4. **La signature individuelle** — chaque personne a une forme caractéristique unique (reconnaissance jusqu'à 0.98)
5. **Le spectre complet de rééquilibrage** — recommandations allant au-delà du sport (nutrition, relations, relaxation)
6. **Vision multi-domaine** — pas limité au sport (santé, exosquelettes, gaming, drones, défense)

### Risques concurrentiels
- Catapult et Kinexon sont des **acteurs établis** avec des moyens financiers considérables
- Les deux ont des **écosystèmes intégrés** (hardware + software + analytics) et des contrats avec des ligues majeures (NBA, FIFA, etc.)
- La **barrière à l'entrée** sur le marché pro sports est élevée (relations existantes, certifications, intégrations)
- La dimension somatopsychique est un différenciateur fort mais devra être **scientifiquement validée** et publiée pour convaincre les industriels

---

## Stade actuel du projet

| Élément | Statut |
|---------|--------|
| R&D scientifique | ✅ ~20 ans de recherche *(call)*, base de données de 13K séquences *(KISS)* |
| Modèle algorithmique | ✅ Modèle algébrique/géométrique fonctionnel — le coeur de l'IP |
| Prototype/MVP | ✅ Capteur du commerce + logiciel custom (développé par un indépendant) *(call)* |
| Partenaire R&D | ✅ HIPE Lab *(slides 07/08)* |
| Partenaire industriel | ❌ À trouver *(slides 07/09)* |
| Production série | ❌ Non démarré *(déduit)* |
| Site web | ❌ À créer — objet de cette mission *(call)* |
| Branding/charte graphique | ❌ À créer de zéro *(call)* |
| Nom de domaine | ❌ Pas encore acheté *(call)* |

---

## Fichiers de référence

Pour du contexte visuel et technique supplémentaire, consulter les fichiers suivants :

### Pitch complet (21 slides)
Chemin : `_bmad-output/analysis/irene/converted/pitch-slides/`
- `slide-01.png` — Page de titre (YETI.live, Yann Le Meur, YLM Revolution, Février 2026)
- `slide-02.png` — Présentation du fondateur (parcours, photo rugby)
- `slide-03.png` — Postulat (Performance = Mouvement) et finalité
- `slide-04.png` — Moyen (métriques physiques + somatopsychiques)
- `slide-05.png` — Produit (1 capteur thoracique) et service (temps réel)
- `slide-06.png` — Rééquilibrage (spectre complet d'interventions)
- `slide-07.png` — Collaborations (HIPE = R&D, industriel = ?)
- `slide-08.png` — HIPE Lab (photos du labo, URL)
- `slide-09.png` — Partenaire industriel recherché (?)
- `slide-10.png` — Biométrie (transition, mascotte Yeti)
- `slide-11.png` — Sports d'équipe (photo Catapult, marché existant)
- `slide-12.png` — Robot d'assistance physique / exosquelette
- `slide-13.png` — Psychométrie (dimension différenciante)
- `slide-14.png` — Intelligence artificielle (LLM vs World Model)
- `slide-15.png` — Jeux vidéo (évolution des contrôleurs → corps humain)
- `slide-16.png` — Drones (opérateur militaire)
- `slide-17.png` — Semi-conducteurs (infrastructure GPU NVIDIA)
- `slide-18.png` — Marketing
- `slide-19.png` — Économie / modèle business
- `slide-20.png` — Santé (marathon personnes âgées, longévité)
- `slide-21.png` — Page de fermeture (= slide 01)

### Document technique KISS (1 page)
Chemin : `_bmad-output/analysis/irene/converted/ylm-revolution-kiss/`
- `page-01.png` — "Keep It Small and Simple" : objectif, données, capacité de travail, charge de travail

### Fichiers sources originaux
Chemin : `_bmad-output/analysis/irene/`
- `2026 02 26 YETI.live Yann Le Meur YLM Revolution KISS.pdf`
- `2026 02 27 Yann Le Meur YETI.live Adrien Poua Pitch.pptx`

---

## Questions ouvertes — À clarifier lors du RDV client

> Ces questions n'ont pas encore été posées à Yann Le Meur. Les informations ci-dessus proviennent uniquement d'un premier appel téléphonique et des documents fournis (pitch + PDF KISS). Un RDV formel est à planifier pour obtenir les réponses.

### 1. Propriété intellectuelle / Brevets
- Y a-t-il des brevets déposés après 20 ans de R&D ?
- Si oui, dans quels pays ? Quel périmètre couvrent-ils ?
- Y a-t-il des brevets en cours de dépôt ?
- C'est un élément critique pour rassurer un partenaire industriel.

### 2. Publications scientifiques
- Yann a-t-il publié des articles scientifiques sur ses recherches (forme caractéristique du mouvement, signature individuelle, etc.) ?
- Dans quelles revues ? Peer-reviewed ?
- Des publications crédibiliseraient fortement le projet auprès des industriels.

### 3. Business model
- Comment YETI.live compte monétiser sa solution ?
  - Vente du hardware (ceinture) ?
  - Abonnement SaaS (plateforme analytics) ?
  - Licensing de la technologie à des industriels existants ?
  - Combinaison hardware + SaaS (comme Catapult/Kinexon) ?
- Quel pricing envisagé ?
- Les slides Marketing (18) et Économie (19) du pitch sont des headers sans contenu détaillé.

### 4. Persona / Cible utilisateur final
- Qui est l'utilisateur final de la ceinture ?
  - Sportifs professionnels ? Amateurs ?
  - Patients en rééducation ?
  - Personnes âgées (prévention) ?
  - Opérateurs industriels/militaires ?
- Y a-t-il un marché prioritaire ou c'est volontairement large à ce stade ?
- Le pitch montre 6+ cas d'usage mais aucun persona prioritaire n'est défini.

### 5. Structure juridique
- YLM Revolution est sous quel statut ? (SAS, SARL, auto-entrepreneur, association ?)
- Y a-t-il d'autres associés/actionnaires ?
- Quel est le capital social ?

### 6. Financement
- Le projet est auto-financé jusqu'ici ?
- Y a-t-il eu des subventions ? (BPI, régions, Europe, CIR/CII ?)
- Recherche-t-il des investisseurs en plus d'un partenaire industriel ?
- Budget disponible pour le développement du site ?

### 7. Réglementation / Certifications
- Un wearable avec ECG touche potentiellement au domaine médical.
- Quelles certifications sont visées ou déjà obtenues ? (marquage CE, FDA, normes sportives type FIFA EPTS ?)
- Y a-t-il une stratégie réglementaire définie ?
- Le positionnement "bien-être" vs "dispositif médical" change radicalement les contraintes.

### 8. Taille de marché (TAM/SAM/SOM)
- Yann a-t-il des estimations du marché adressable ?
- On sait que Catapult fait ~116,5M USD/an et Kinexon a levé ~148M USD, mais quelle est l'ambition de YETI.live en termes de marché ?

### 9. Roadmap / Prochaines étapes
- Après le site vitrine, quel est le calendrier envisagé ?
- Quand vise-t-il l'industrialisation ?
- Y a-t-il des jalons prévus (prototypes suivants, certifications, premiers clients) ?

### 10. Détails sur HIPE Lab
- Quel est le cadre de la collaboration ? (contrat de recherche, partenariat, convention CIFRE ?)
- Que fournit HIPE concrètement ? (validation scientifique, tests, co-développement ?)
- Y a-t-il des résultats de tests déjà exploitables pour le site ?

### 11. Visuels produit
- Y a-t-il desotos/vidéos du MVP (la ceinture prototype) ?
- Sinon, faudra-t-il créer des rendus 3D / mockups pour le site ?
- Des vidéos de démonstration existent-elles ?
