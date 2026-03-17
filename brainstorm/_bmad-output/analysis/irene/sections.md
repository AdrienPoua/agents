# YETI.live — Justification des Sections du Site Vitrine

**Date :** 2026-02-27
**Objectif :** Expliquer le raisonnement derrière chaque section proposée pour le site vitrine YETI.live

---

## Méthodologie de décision

Les sections ont été déterminées en croisant **3 axes** :

### Axe 1 — La cible (qui visite le site ?)
Source : `contexte.md` — "Livrable demandé : site vitrine bilingue FR/EN ciblant les **industriels et grands groupes**, avec formulaire de contact."

Le visiteur type est un **décideur industriel** (directeur innovation, VP partenariats, CTO d'un groupe hardware/wearable). Il ne cherche pas un produit à acheter mais une **opportunité de partenariat**. Il a besoin de :
- Comprendre le projet en 30 secondes (Hero)
- Être convaincu qu'il y a un vrai marché (Opportunité)
- Voir que la techno est crédible (Science + Produit)
- Comprendre ce qu'on attend de lui (Partenariat recherché)

### Axe 2 — Les données de recherche consolidée
Source : `research-consolidee-yeti-live.md` — 150+ sources, 17+ acteurs analysés

La recherche a mis en évidence des éléments à fort impact persuasif :
- Le **quadrant Body-Mind x Pro Sports est vacant** (aucun des 17+ concurrents ne le couvre)
- Des **chiffres de marché massifs** et vérifiés (87-93 Mds USD, CAGR 12-14%)
- Une **validation scientifique solide** (ECG thoracique r=0.98-1.0, détection émotion 92-95%)
- Une **fenêtre temporelle** 2026-2028 avant que les leaders n'ajoutent une couche body-mind
- Des **messages clés recommandés** par la recherche elle-même (section "Messages clés pour le site vitrine")

### Axe 3 — Structure narrative B2B classique
Pattern éprouvé pour les landing pages de partenariat/investissement :

```
Attention → Problème → Solution → Preuve → Crédibilité → Opportunité → Action
```

Ce pattern est utilisé par la majorité des sites vitrine deep-tech cherchant des partenaires industriels.

---

## Justification section par section

### 1. Hero / Accroche

**Pourquoi :** Un décideur industriel accorde 5-10 secondes à une page. Le Hero doit capturer l'essence du projet en une phrase.

**Source :** La recherche recommande explicitement le message : *"Le seul wearable au monde qui mesure le lien corps-esprit"* — basé sur la confirmation du gap de marché (17+ acteurs, zéro dans le quadrant body-mind).

**Ce qu'on y met :**
- Tagline différenciante (gap somatopsychique = USP confirmée)
- Sous-titre produit (capteur thoracique, temps réel)
- CTA immédiat (le visiteur industriel ne doit pas scroller pour trouver comment nous contacter)

---

### 2. Le Problème / Le Constat

**Pourquoi :** Avant de présenter la solution, il faut que le visiteur reconnaisse le problème. C'est le "aha moment" qui crée l'engagement.

**Source :** La cartographie concurrentielle de la recherche (section "Paysage Concurrentiel") montre visuellement que :
- Tous les acteurs B2B pro (Catapult, STATSports, Kinexon) mesurent uniquement le physique
- Tous les acteurs wellness (WHOOP, Oura, Polar) aussi
- Le quadrant "Body-Mind" est littéralement vide dans le schéma à 2 axes

**Élément clé :** Le schéma de positionnement (axes Psychophysiologique vs Physique / Consumer vs Pro) est un outil visuel puissant pour le site — il montre le gap en un coup d'oeil.

```
                    PSYCHOPHYSIOLOGIQUE
                          |
           Lief     WHOOP |  [YETI.live ?]
           Oura    Garmin |
                          |
   CONSUMER -------------|-------------- PRO/B2B
                          |
           Apple   Fitbit |  Catapult
           Xiaomi Samsung |  Kinexon  STATSports
                          |
                    PHYSIQUE SEUL
```

---

### 3. La Solution — L'Algorithme (pas le capteur)

**Pourquoi :** Après le problème, on présente la réponse. L'industriel doit comprendre ce qu'il va **licencier/intégrer** — et c'est un algorithme, pas un hardware.

**Source :** `contexte.md` — section "Le Produit" + concept "Performance = Mouvement" + slides Performer 2-6

**Choix éditoriaux :**
- On met en avant que le **hardware est standard** (IMU + GPS + FC) — c'est un avantage industriel majeur : pas de R&D capteur, pas de supply chain complexe, intégration possible dans des devices existants
- On explique le **pipeline algorithmique** : capteurs standard → transformation algébrique/géométrique → forme polaire individuelle → seuils personnels + état émotionnel
- On montre les **formes polaires** (radar charts des slides) car c'est visuellement frappant et immédiatement compréhensible
- On insiste sur la **signature individuelle** et les 95-98% de reconnaissance comme preuve concrète
- On ne détaille PAS les formules mathématiques (polynômes, etc.) — trop technique pour une landing page
- Le message clé pour l'industriel : "Vous savez déjà fabriquer le capteur. Ce que vous n'avez pas, c'est l'intelligence qui le rend unique."

---

### 4. La Science

**Pourquoi :** Pour un partenaire industriel, la crédibilité scientifique est le critère n°1 de go/no-go. 20 ans de R&D + données = moat défensif.

**Sources :**
- `contexte.md` : 13 000 séquences, 35 individus, 26 activités
- `research-consolidee-yeti-live.md` : validation ECG thoracique (Movesense, r=0.98-1.0), détection émotion ECG (92-95%), EmoWear 2024 (Nature), workload monitoring (98.6%)

**Choix éditoriaux :**
- On cite des **chiffres précis** (13K séquences, r=0.98, 92-95%) car les industriels répondent aux données, pas aux promesses
- On mentionne le **HIPE Lab** comme caution institutionnelle
- On ne cite PAS les limitations du monocanal (pas d'EDA, pas de température) — ce sont des points de discussion technique avancée, pas de landing page
- La recherche note que *"Claims conservatifs avec science publiée > claims ambitieux sans validation"* — on suit cette recommandation

---

### 5. Le Fondateur

**Pourquoi :** En deep-tech early-stage, l'investisseur/partenaire mise autant sur la personne que sur la techno. Le profil atypique de Yann (rugby international + PhD physiologie) EST l'histoire du projet.

**Source :** `contexte.md` — section "Le Fondateur"

**Choix éditoriaux :**
- Placé APRÈS la science et le produit (pas en premier) car le visiteur industriel cherche d'abord la proposition de valeur, puis le fondateur comme réassurance
- Le fait que Yann soit un ancien international de rugby donne une légitimité immédiate dans le sport pro
- Le PhD en physiologie de l'exercice donne la crédibilité scientifique
- La combinaison des deux est exactement ce qui manque aux concurrents (des ingénieurs hardware sans background sport+science)

---

### 6. L'Opportunité de Marché

**Pourquoi :** Un industriel ne s'engage que s'il voit un **retour potentiel**. Les chiffres de marché répondent à "combien ça vaut ?".

**Source :** `research-consolidee-yeti-live.md` — section "Analyse du Marché" (données Grand View Research, Fortune Business Insights, Mordor Intelligence, etc.)

**Choix éditoriaux :**
- On ne cite que 3-4 chiffres maximum (surcharge = perte d'attention)
- On nomme les concurrents et leurs valorisations (Catapult 724M, WHOOP 3,6 Mds, Oura 11 Mds) pour montrer que le marché génère de la valeur
- On insiste sur le fait qu'**aucun** de ces acteurs valorisés à des milliards ne couvre le segment body-mind
- Le message implicite : "Si WHOOP vaut 3,6 Mds sans body-mind, combien vaut un acteur AVEC body-mind ?"

---

### 7. Les Cas d'Usage

**Pourquoi :** Un industriel veut voir l'étendue du marché adressable. Multi-domaine = TAM élargi = risque réduit.

**Source :** `contexte.md` — section "Cas d'usage / Marchés visés" (6 domaines listés dans le pitch de Yann)

**Choix éditoriaux :**
- On garde les 5 domaines du pitch (sport, santé, exosquelettes, défense, gaming) car c'est la vision du fondateur
- La recherche confirme la pertinence de cette approche multi-domaine : "Le même capteur thoracique adresse sport pro ($9,4B 2035), santé ($5,8B ECG wearable), exosquelettes, gaming/drones"
- On ne priorise PAS un domaine sur le site (la priorisation se fait en discussion post-contact)
- **Note :** La matrice d'attractivité de la recherche score "Santé mentale sport" à 5/5 et "Sport pro B2B" à 4/5 — cela pourrait influencer l'ordre de présentation

---

### 8. Pourquoi Maintenant — L'Avantage Temporel

**Pourquoi :** L'urgence est un levier de décision. "Pourquoi maintenant et pas dans 3 ans ?" est la question implicite de tout industriel.

**Sources :** `research-consolidee-yeti-live.md` — multiples sections convergent :
- Fenêtre 2026-2028 avant que les leaders n'ajoutent du body-mind
- Chip ST1VAFE3BX disponible à 1,50$/unité (enabling hardware)
- Consolidation M&A active dans le secteur
- Oura lève 900M$ en Series E (oct 2025) avec expansion vers team sports
- Health-LLMs matures (PHIA 84% accuracy, Google PH-LLM)
- E-textiles en explosion (CAGR 32%)

**Le message :** La vague de consolidation montre que les grands groupes cherchent ACTIVEMENT des technologies à acquérir/intégrer. YETI.live est sur le radar potentiel. Mais la fenêtre se ferme.

---

### 9. Le Partenariat Recherché

**Pourquoi :** C'est l'objectif même du site. Le visiteur doit comprendre exactement ce qu'on cherche et ce qu'il y gagne.

**Source :** `contexte.md` — "L'objectif immédiat est de trouver un partenaire industriel pour lancer la production à grande échelle"

**Choix éditoriaux :**
- On est **explicite** sur ce que YETI.live apporte vs ce que le partenaire apporte
- On montre que le projet n'est pas une idée : il y a un MVP, un labo partenaire, 20 ans de données
- On évite le mot "investisseur" (le contexte dit "partenaire industriel", pas levée de fonds)
- La recherche identifie des **plateformes accélératrices** (Movesense déjà certifié MDR Class IIa) qui montrent que l'industrialisation est réaliste, pas théorique

---

### 10. Contact / CTA

**Pourquoi :** Toute landing page sans CTA clair est un échec. Le formulaire de contact est explicitement demandé dans le brief.

**Source :** `contexte.md` — "site vitrine bilingue FR/EN (landing page) ciblant les industriels et grands groupes, **avec formulaire de contact**"

**Choix éditoriaux :**
- CTA fort et orienté partenariat (pas "contactez-nous" générique mais "Devenez le partenaire industriel...")
- Coordonnées directes en plus du formulaire (les décideurs industriels préfèrent souvent l'email/téléphone direct)
- Bilingue FR/EN natif (pas de traduction automatique)

---

## Sections volontairement exclues

| Section potentielle | Raison de l'exclusion |
|---------------------|----------------------|
| **Détail réglementaire** (MDR, FDA, RGPD) | Trop technique pour un premier contact. La recherche documente 285K-795K EUR de coûts de certification — c'est une discussion avancée, pas un argument de landing page |
| **Pricing / Business model** | `contexte.md` note que le business model n'est "pas défini". Les slides Marketing (18) et Économie (19) du pitch sont des headers sans contenu. Impossible de mettre en avant ce qui n'existe pas encore |
| **Roadmap tech détaillée** | La roadmap 2026-2030 (Movesense → Health-LLM → Consumer → World Models) est trop granulaire. Un résumé pourrait être intégré dans la section "Pourquoi Maintenant" si nécessaire |
| **Comparatif technique détaillé** | Le tableau WHOOP vs Oura vs Polar vs Catapult vs YETI.live est un outil de vente avancé, pas de premier contact. Risque : attirer l'attention sur ce que YETI.live n'a PAS encore (produit industrialisé) |
| **FAQ** | Pas assez de contenu confirmé (beaucoup de "questions ouvertes" dans contexte.md). Pourrait être ajouté après le RDV avec Yann |
| **Témoignages / Social proof** | Aucun client, aucune publication peer-reviewed confirmée. Éviter de montrer un vide |
| **Blog / Actualités** | Pas de contenu régulier à alimenter. Un blog vide fait plus de mal que pas de blog |

---

## Sources de la réflexion

1. **`contexte.md`** — Brief projet, profil fondateur, produit, cas d'usage, questions ouvertes
2. **`research-consolidee-yeti-live.md`** — Recherche marché consolidée (150+ sources), dont :
   - Section "Messages clés pour le site vitrine" (5 messages recommandés par la recherche)
   - Section "Positionnement YETI.live" (gap confirmé, SWOT, scénarios)
   - Section "Paysage Concurrentiel" (cartographie 5 tiers, schéma vacant)
   - Section "Analyse du Marché" (chiffres vérifiés)
   - Section "État de l'Art Technologique" (validation scientifique)
3. **Pattern B2B landing page deep-tech** — Structure narrative Attention → Problème → Solution → Preuve → Crédibilité → Opportunité → Action, couramment utilisée dans les sites vitrine de startups hardware/deep-tech cherchant des partenaires industriels
4. **Structure du pitch de Yann (21 slides)** — L'ordre des slides du pitch a influencé l'ordre des sections : le fondateur → le postulat → le produit → le rééquilibrage → les collaborations → les marchés. On a réordonné pour le web (le fondateur passe après le produit/science car le web est "product-first" vs un pitch qui est "human-first")
