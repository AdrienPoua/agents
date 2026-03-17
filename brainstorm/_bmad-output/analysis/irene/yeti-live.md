# YETI.live — Document de Reference Projet

**Date :** 2026-03-07
**Usage :** Document de reference pour tout agent/LLM travaillant sur le site vitrine YETI.live. Contient la comprehension complete du projet, sa science, son positionnement, et les decisions de design/contenu.
**Sources :** Pitch 21 slides, document KISS, 2 appels telephoniques avec le fondateur, recherche consolidee (150+ sources), slides Performer (presentation scientifique), fact-check/errata.

---

## Table des matieres

1. [Resume executif](#1-resume-executif)
2. [Le fondateur](#2-le-fondateur)
3. [Le produit — Ce que c'est VRAIMENT](#3-le-produit--ce-que-cest-vraiment)
4. [Le modele mathematique — Le coeur de l'IP](#4-le-modele-mathematique--le-coeur-de-lip)
5. [Les 6 lignes de commande et le pont somatopsychique](#5-les-6-lignes-de-commande-et-le-pont-somatopsychique)
6. [La forme caracteristique — Signature individuelle](#6-la-forme-caracteristique--signature-individuelle)
7. [Capacite de travail vs Charge de travail](#7-capacite-de-travail-vs-charge-de-travail)
8. [Positionnement concurrentiel](#8-positionnement-concurrentiel)
9. [Opportunite de marche](#9-opportunite-de-marche)
10. [Etat actuel du projet](#10-etat-actuel-du-projet)
11. [Ce que le site doit communiquer](#11-ce-que-le-site-doit-communiquer)
12. [Structure du site — 10 sections](#12-structure-du-site--10-sections)
13. [Direction artistique](#13-direction-artistique)
14. [Specifications techniques du site](#14-specifications-techniques-du-site)
15. [Ce qui est confirme vs ce qui reste a clarifier](#15-ce-qui-est-confirme-vs-ce-qui-reste-a-clarifier)
16. [Pieges a eviter](#16-pieges-a-eviter)
17. [Fichiers de reference](#17-fichiers-de-reference)

---

## 1. Resume executif

**YETI.live** est un projet de wearable connecte porte par **Yann Le Meur** (YLM Revolution). Le dispositif est une ceinture thoracique equipee de capteurs **standard** (centrale inertielle IMU + GPS + frequence cardiaque). Le hardware n'est pas l'innovation.

**L'innovation est 100% algorithmique.** Yann a developpe sur ~20 ans un modele mathematique algebrique et geometrique qui transforme les donnees brutes des capteurs standard en quelque chose que personne d'autre ne produit :

1. Une **signature individuelle du mouvement** (forme polaire unique par personne, reconnaissance jusqu'a 98%)
2. Un **referentiel absolu a l'individu** (pas de comparaison a une norme de population)
3. Une lecture **somatopsychique** (etat emotionnel deduit des memes capteurs physiques)

Le projet cherche un **partenaire industriel** pour passer du MVP a la production. Le site vitrine bilingue FR/EN est l'outil pour attirer ce partenaire.

**Implication cle pour le site :** On ne vend pas un capteur revolutionnaire. On vend une **intelligence algorithmique unique** qui tourne sur du hardware standard — ce qui est un argument encore plus fort pour un industriel (pas besoin d'inventer un capteur, juste de licencier le soft).

---

## 2. Le fondateur

**Yann Le Meur**
- Ancien international de rugby
- Doctorat en physiologie de l'exercice *(note : le pitch dit "sciences physiques" mais c'est physiologie de l'exercice — a confirmer avec Yann)*
- Master en psychologie *(a confirmer — source pitch uniquement)*
- Experience en recherche, management et coaching
- Structure : **YLM Revolution**
- ~20 ans de R&D sur ce projet

**Ce qui compte pour le site :** Son profil multidisciplinaire (sport de haut niveau + science + psychologie) EST l'histoire du projet. C'est exactement le croisement necessaire pour developper un outil qui lit le corps ET l'esprit. Les fondateurs de Catapult ou Kinexon sont des ingenieurs hardware — Yann est un scientifique du mouvement humain qui a joue au plus haut niveau.

---

## 3. Le produit — Ce que c'est VRAIMENT

### Ce que ce n'est PAS
- Ce n'est PAS un nouveau type de capteur revolutionnaire
- Ce n'est PAS un hardware proprietaire avec des specs uniques
- Le capteur utilise des composants standard que n'importe quel industriel sait produire

### Ce que c'est
Une **plateforme logicielle/algorithmique** qui transforme les donnees de capteurs inertiels standard en insights que personne d'autre ne produit.

### Le hardware (standard)
- **Centrale inertielle (IMU)** : gyrometre + accelerometre
- **GPS**
- **Frequence cardiaque (FC)**
- Positionne au niveau thoracique (ceinture sous les pectoraux)
- Le MVP actuel = **capteur du commerce** + logiciel custom developpe par un independant

### Le software (le moat)
- Modele algebrique/geometrique developpe sur ~20 ans
- Transformation polynomiale des donnees brutes : `a_0 + a_1*X^1 + a_2*X^2 + ... + a_n*X^n`
- Output : forme polaire (radar chart) = signature individuelle

### Le pipeline de traitement

```
CONCURRENT (Catapult, Kinexon, etc.)          YETI.live

Capteurs (souvent plus complexes)             Capteurs STANDARD (IMU + GPS + FC)
     |                                              |
     v                                              v
Statistiques (Gauss, moyennes,                Transformation algebrique/geometrique
percentiles populationnels)                   (polynomiale, lois physiques)
     |                                              |
     v                                              v
Metriques normalisees                         Forme polaire = signature individuelle
(comparees a la population)                   (absolue a la personne)
     |                                              |
     v                                              v
"Tu es dans le top 20% des joueurs"           "Ta charge d'effort a atteint TON seuil
                                               anaerobie et ton etat emotionnel montre
                                               du renoncement"
```

### Les 3 oppositions fondamentales avec la concurrence

| Axe | YETI.live | Concurrents |
|-----|-----------|-------------|
| **Scope** | Physique + somatopsychique (etat emotionnel) | Physique seul |
| **Methode** | Algebrique + geometrique (lois du mouvement) | Statistique (Gauss, moyennes) |
| **Referentiel** | Absolu a l'individu (sa propre "charge d'effort") | Relatif a une population (percentiles, normes globales) |

---

## 4. Le modele mathematique — Le coeur de l'IP

### Ce qu'on sait (sources : slides Performer + appels + KISS)

Yann a etudie les lois fondamentales du mouvement humain et developpe un modele qui repose sur :

**1. Les accelerations comme matiere premiere**
- Les concurrents prennent les accelerations brutes (AccelX, AccelY, AccelZ) et en font des statistiques (courbes de Gauss, ecarts-types, percentiles)
- Yann prend ces memes accelerations et les transforme via des formules algebriques en quelque chose de different : des **"accelerations internes"** (par opposition aux "accelerations externes" que mesurent les concurrents)

**2. La formule de travail**
- `W = produit scalaire (vecteur F ; vecteur d) = eta.m.a.d`
- Simplification : `Travail ~ eta.a` (proportionnel a l'efficience x acceleration)
- Concept cle : **"Travail efficace ~ acceleration efficace"**
- C'est une approche de physique fondamentale appliquee au corps humain

**3. La transformation polynomiale**
- `a_0 + a_1*X^1 + a_2*X^2 + ... + a_n*X^n`
- Cette transformation convertit les series temporelles d'acceleration en representations geometriques (formes polaires/radar)
- Chaque forme est propre a un individu, une activite, et une intensite

**4. La distinction accelerations externes vs internes**
- **Accelerations externes** = ce que les concurrents mesurent (mouvement brut dans l'espace)
- **Accelerations internes** = ce que YETI calcule via l'algebre/geometrie (comment le corps organise ses forces en interne)
- C'est un changement de referentiel fondamental — comme passer de la physique newtonienne a la relativite

### Ce qu'on ne sait pas encore (a clarifier avec Yann)
- Les formules exactes (la transformation polynomiale specifique)
- Les recherches scientifiques sur lesquelles il s'appuie
- Si le modele a ete valide en peer-review
- Le niveau de reproductibilite en conditions reelles (terrain vs labo)

---

## 5. Les 6 lignes de commande et le pont somatopsychique

### Les 6 directions fondamentales du mouvement

Le modele de Yann decompose tout mouvement humain en **6 directions** reparties sur les **3 plans anatomiques** :

| Plan anatomique | Direction 1 | Direction 2 |
|----------------|------------|------------|
| **Sagittal** (avant/arriere) | Devant | Derriere |
| **Frontal** (gauche/droite) | Droite | Gauche |
| **Transversal** (haut/bas, ouvert/ferme) | Deplie | Replie |

Ces 6 directions sont les "lignes de commande" du mouvement. Tout mouvement humain est une combinaison de ces 6 vecteurs.

### Le mapping emotions

Chaque ligne de commande est associee a **une ou plusieurs emotions** :

| Direction | Emotion associee |
|-----------|-----------------|
| Devant | Engagement |
| Derriere | ... |
| Droite | ... |
| Gauche | ... |
| Deplie | ... |
| Replie | ... |

*(Le mapping exact des 6 emotions est visible sur la slide Performer 3 : Surprise, Meprise, Confrontation, Confusion, Renoncement, Engagement — mais l'association exacte direction-emotion n'a pas ete detaillee par Yann. Le cycle complet est : Engagement -> Renoncement -> Confusion -> Confrontation -> Meprise -> Surprise -> [cycle])*

### Comment ca fonctionne concretement
1. Le capteur mesure les accelerations sur les 3 axes
2. Le modele algebrique decompose ces accelerations selon les 6 directions fondamentales
3. La charge de travail sur chaque direction revele l'etat emotionnel correspondant
4. Parce que la facon dont un individu distribue ses accelerations entre ces 6 directions est UNIQUE et change selon son etat psychologique

**Ce mapping s'appuie sur des recherches scientifiques existantes et verifiees** (dixit Yann). La relation entre posture/mouvement et emotion est documentee en litterature scientifique (ex: emotions positives = vitesse accrue, pas plus longs ; depression = posture voutee, mouvement vertical reduit — cf. recherche consolidee).

### Validation scientifique externe (issue de la recherche)
- EmoWear 2024 (Nature) : un accelerometre thoracique seul peut detecter l'etat emotionnel avec precision comparable a ECG+BVP
- Emotion Detection via ECG : 92-95% accuracy en deep learning monocanal (en labo)
- Correlation mouvement-emotion : classification emotion via biomecanique de marche 59% accuracy (vs 25% chance)
- ML convergence HRV + respiration + IMU : predictif a 73-83% de fatigue mentale, stress, etat de flow

**Nuance importante :** La litterature valide le PRINCIPE (on peut lire l'emotion depuis le mouvement/physiologie). Ce qui est unique a Yann, c'est le MODELE SPECIFIQUE (les 6 lignes de commande, la transformation algebrique). Ce modele specifique n'a pas (a notre connaissance) ete publie en peer-review.

---

## 6. La forme caracteristique — Signature individuelle

### Qu'est-ce que c'est
C'est une **representation polaire (radar chart)** generee par la transformation algebrique des donnees d'acceleration. Chaque personne en mouvement produit une forme unique — son empreinte.

### Proprietes demontrees (slides Performer)

**1. La forme change avec l'intensite** (slide Performer 4)
- 5 vitesses testees : 3, 5, 7, 9, 11 km/h
- A chaque vitesse, la forme polaire evolue de maniere coherente
- Transition visible de marche → course → sprint

**2. La forme est unique par individu** (slide Performer 4 + 5)
- Matrice de confusion sur 10 sujets (S1-S10) :
  - S1 : 0.98, S2 : 0.88, S3 : 0.75, S4 : 0.93, S5 : 0.71
  - S6 : 0.32, S7 : 0.81, S8 : 0.82, S9 : 0.82, S10 : 0.89
  - Meilleur : **0.98** (S1), Moyenne : ~0.79
  - La plupart des sujets sont identifies avec >80% de precision
- Dataset : 20 individus, 26 activites, 13 000 sequences de 20 secondes
- *(Note : le document KISS mentionne 35 individus — possible etude elargie ou protocole different)*

**3. Variation intra vs inter-individu** (slide Performer 5)
- La forme d'une meme personne varie legerement entre les sessions mais reste reconnaissable
- La forme entre deux personnes differentes est clairement distincte
- Cela permet l'**identification des seuils personnels actualises d'aerobie et d'anaerobie**

**4. Distinction repos vs effort** (slide Performer 6)
- La forme polaire au repos (sommeil) est radicalement differente de la forme en effort
- C'est la base de la mesure de la **capacite de travail**

### Ce que ca signifie pour un industriel
- C'est comme une **empreinte digitale du mouvement** — chaque personne a la sienne
- Pas besoin de calibration longue — la forme emerge des donnees
- Applications : identification biometrique, seuils personnalises, detection d'anomalies, suivi longitudinal

### Visuels cles pour le site
Les formes polaires (radar charts) sont **visuellement frappantes** et immediatement comprehensibles. Elles devraient etre un element central du site — elles montrent en un coup d'oeil que YETI.live produit quelque chose de fondamentalement different des graphiques en barres et des percentiles des concurrents.

---

## 7. Capacite de travail vs Charge de travail

Deux concepts centraux dans la vision YETI.live :

### Capacite de travail (ce que tu PEUX faire)
- Mesure l'etat de base de l'individu (repos vs effort)
- Visible par la difference de forme polaire entre repos et activite
- Change d'un jour a l'autre (fatigue, recuperation, sommeil, stress)
- C'est le "reservoir" disponible
- Slide Performer 6 : compare les formes repos (lit) vs effort (course)

### Charge de travail (ce que tu FAIS)
- W = eta.m.a.d → Travail efficace ~ acceleration efficace
- Mesure en temps reel l'effort fourni
- Propre a l'individu (pas compare a une norme)
- C'est la "depense" en cours

### L'output principal de YETI.live
Le croisement des deux en temps reel :
- **"Tu as utilise X% de ta capacite"** (pas "tu es a X% de la moyenne des joueurs de ton poste")
- Detection des seuils : quand la charge approche les limites de la capacite = **alerte de depassement personnalisee**
- Prevention des blessures : la surcharge est detectee par rapport a TON profil, pas par rapport a une norme

### Objectifs declares (slide Performer 6)
1. Collaborer avec une structure professionnelle
2. Elaborer un premier applicatif operationnel
3. Identifier et ajuster en temps reel la capacite de travail de l'athlete
4. Anticiper un outil destine in-fine au grand public

---

## 8. Positionnement concurrentiel

### Les leaders du marche

| Acteur | Revenue | Valorisation | Ce qu'il fait | Ce qu'il ne fait PAS |
|--------|---------|-------------|---------------|---------------------|
| **Catapult** | ~116,5M USD | 724M USD (ASX) | GPS+IMU+ECG dans des gilets, metriques physiques (vitesse, distance, collisions) | Somatopsychique, referentiel individuel absolu, signature mouvement |
| **Kinexon** | ~148M USD leves | Private | IMU 15g + UWB indoor (<10cm), tracking temps reel | Idem |
| **WHOOP** | ~260M USD | 3,6 Mds USD | PPG poignet, recovery/strain score, subscription-only | Idem |
| **Oura** | ~500M-1 Md USD | 11 Mds USD | Smart ring, sommeil, HRV, stress | Idem |

### Le quadrant vacant

```
               ALGEBRIQUE / INDIVIDUEL
               (referentiel absolu, signature)
                          |
                          |  [YETI.live]
                          |
                          |
   CONSUMER -------------|-------------- PRO/B2B
                          |
           Apple   WHOOP  |  Catapult
           Oura    Garmin |  Kinexon  STATSports
                          |
               STATISTIQUE / POPULATIONNEL
               (moyennes, percentiles, Gauss)
```

**Tous les acteurs** — de l'Apple Watch a 11 Mds$ d'Oura en passant par Catapult a 724M$ — utilisent une approche statistique comparant les individus a des normes de population. Personne ne propose :
- Un referentiel absolu a la personne
- Une signature geometrique du mouvement
- Un pont somatopsychique depuis des capteurs standard

### Pourquoi c'est un argument fort pour un industriel
L'IP est **purement logicielle**. Cela signifie :
- Pas de supply chain hardware complexe a developper
- Integrable dans des capteurs existants (Movesense, Polar H10, etc.)
- Modele de licensing viable (B2B2B)
- Barriere d'entree algorithmique (20 ans de R&D, 13K sequences)

### Fenetre d'opportunite : 2026-2028
- Les leaders n'ont pas encore ajoute de couche somatopsychique
- Consolidation M&A active (Sony achete STATSports, Catapult achete IMPECT pour 78M EUR)
- Les grands groupes cherchent activement des technologies a integrer
- Oura leve 900M$ avec expansion vers le sport pro
- Apres 2028, risque que les leaders developpent leur propre couche body-mind

---

## 9. Opportunite de marche

### Chiffres cles (verifies, sources multiples)

| Segment | Taille 2025 | Projection | CAGR |
|---------|------------|------------|------|
| Wearables global | 87-93 Mds USD | 230 Mds USD (2033) | 12-13% |
| Sport analytics/performance | 4,8-5,7 Mds USD | 23,1 Mds USD (2033) | 18,5% |
| Player tracking sport pro | 7-7,8 Mds USD | 20,4 Mds USD (2030) | 14-20% |
| Mental health tracking | 4,3 Mds USD | 17,9 Mds USD (2035) | 13,8% |
| E-textiles/smart clothing | 22 Mds USD | 275 Mds USD (2034) | **32%** |

### Investissements VC en sports tech
- 2025 = 2e meilleure annee jamais : **12,5 Mds USD**
- 28 nouveaux fonds annonces
- Pattern : les leaders achetent les innovants (consolidation)

### Valorisations des acteurs pour reference
- Oura : **11 Mds USD** (ring, sommeil, HRV)
- WHOOP : **3,6 Mds USD** (subscription-only, recovery)
- Catapult : **724M USD** (sport pro B2B)

**Le message implicite pour le site :** Si des entreprises qui font "juste" du physique valent des milliards, combien vaut la seule qui fait physique + corps-esprit ?

---

## 10. Etat actuel du projet

| Element | Statut | Detail |
|---------|--------|--------|
| R&D scientifique | OK | ~20 ans de recherche, base 13K sequences |
| Modele algorithmique | OK | Fonctionnel, teste sur 20+ individus, 26 activites |
| MVP | OK | Capteur du commerce + logiciel custom (dev par un independant) |
| Partenaire R&D | OK | HIPE Lab (hipehumanlab.eu) — photos labo dispo |
| Brevets | ? | A clarifier (critique pour credibilite industriel) |
| Publications scientifiques | ? | A clarifier (critique pour credibilite) |
| Partenaire industriel | RECHERCHE | C'est l'objectif du site |
| Production serie | NON | Pas demarre |
| Site web | A CREER | Objet de cette mission |
| Branding/charte graphique | A CREER | Tout est a faire |
| Nom de domaine | ? | Pas confirme si achete |
| Business model | NON DEFINI | Slides 18-19 du pitch sont des headers vides |
| Structure juridique | ? | YLM Revolution — statut a confirmer |
| Certifications | NON | Strategie reglementaire a definir (wellness vs medical) |

---

## 11. Ce que le site doit communiquer

### Cible : decideurs industriels
Le visiteur type est un **directeur innovation**, **VP partenariats**, ou **CTO** d'un groupe hardware/wearable/sport. Il ne cherche pas un produit a acheter mais une **opportunite de partenariat ou de licensing**.

### Les 5 messages cles (dans cet ordre)

**1. "Voici ce que personne d'autre ne fait"**
Le gap somatopsychique. Le referentiel individuel absolu. La signature de mouvement. Montrer le quadrant vacant — tous les milliards investis, et personne ne couvre ce segment.

**2. "La science est reelle"**
20 ans de R&D. 13 000 sequences. Reconnaissance individuelle jusqu'a 98%. Partenaire labo (HIPE Lab). Les formes polaires comme preuve visuelle. Ce n'est pas un concept — c'est demontre.

**3. "Le hardware existe deja"**
L'IP est algorithmique. Pas besoin d'inventer un capteur. Le logiciel tourne sur du standard. C'est integrable, licensable, scalable. Le risque industriel est reduit.

**4. "La fenetre est maintenant"**
Consolidation M&A 2026-2028. Les leaders achetent. Oura leve 900M$. La couche body-mind va arriver — la question est : qui la possede ? YETI.live a 20 ans d'avance.

**5. "Voici qui est derriere"**
Yann Le Meur. Rugby international + PhD physiologie + psychologie. Le profil exact que le probleme exige. HIPE Lab comme partenaire. C'est serieux.

### Ton du site
- **Pas "startup hype"** — pas de "we're disrupting" ou "revolutionary"
- **Scientifique mais accessible** — les formes polaires parlent d'elles-memes
- **Sobre et premium** — le site doit respirer la credibilite, pas l'urgence
- **Le site se deroule comme un pitch** — chaque scroll = un argument

### Ce qu'on ne dit PAS sur le site
- On ne dit pas que le hardware est revolutionnaire (il ne l'est pas)
- On ne donne pas les formules mathematiques (trop technique + protection IP)
- On n'affirme pas "diagnostic medical" (piege reglementaire)
- On ne detaille pas le business model (pas defini)
- On ne promet pas de dates de production (pas de partenaire industriel)
- On ne montre pas les limitations du monocanal (pas pertinent en premier contact)

---

## 12. Structure du site — 10 sections

Chaque section repond a une question que se pose un decideur industriel :

| # | Section | Question du visiteur | Contenu cle |
|---|---------|---------------------|-------------|
| 1 | **Hero / Accroche** | "C'est quoi ?" | Tagline differentielle + CTA immediat |
| 2 | **Le Constat** | "Quel probleme ?" | Tous les wearables mesurent le physique. Personne ne mesure le lien corps-esprit. Le quadrant vacant. |
| 3 | **L'Algorithme** | "Comment ca marche ?" | Pipeline : capteurs standard → transformation algebrique → forme polaire → seuils + emotions. Les formes polaires comme visuel central. PAS "le capteur", mais "l'intelligence". |
| 4 | **La Science** | "C'est credible ?" | 20 ans R&D, 13K sequences, reconnaissance 98%, HIPE Lab, validation ECG thoracique r=0.98. Chiffres precis, pas de promesses. |
| 5 | **Le Fondateur** | "Qui est derriere ?" | Rugby international + PhD + psycho. Le profil que le probleme exige. |
| 6 | **L'Opportunite** | "Ca vaut combien ?" | Marche 87-93 Mds$, Oura 11 Mds$, WHOOP 3,6 Mds$ — et AUCUN ne fait du body-mind. |
| 7 | **Les Cas d'Usage** | "C'est applicable ou ?" | Sport pro, sante/longevite, exosquelettes, defense, gaming. Multi-domaine = TAM elargi. |
| 8 | **Pourquoi Maintenant** | "Pourquoi ne pas attendre ?" | Consolidation M&A 2026-2028, fenetre qui se ferme, les leaders achetent. |
| 9 | **Le Partenariat** | "Qu'est-ce qu'on attend de moi ?" | Ce que YETI apporte (IP, science, 20 ans de data) vs ce que le partenaire apporte (production, distribution). Hardware standard = risque reduit. |
| 10 | **Contact** | "Comment on se parle ?" | Formulaire + coordonnees directes. CTA fort oriente partenariat. |

### Sections exclues (et pourquoi)
- **Pricing/business model** : pas defini
- **Detail reglementaire** : trop technique, discussion avancee
- **Roadmap detaillee** : trop granulaire
- **Comparatif technique** : risque d'attirer l'attention sur ce qui manque
- **FAQ** : pas assez de contenu confirme
- **Temoignages** : aucun client, aucune publication peer-reviewed confirmee
- **Blog** : pas de contenu regulier prevu

---

## 13. Direction artistique

### Philosophie
Le client a aime le portfolio adrienpoua.fr : **"propre, clean, doux, ca se deroule comme une histoire"**. Le design YETI.live est a mi-chemin entre la sophistication d'Oura et l'energie de Catapult, avec la douceur narrative du portfolio.

### La dualite corps-esprit comme principe visuel
- **YETI** = glace, precision, donnees → tons froids (ice blue `#5AB8D4`)
- **.live** = vivant, pouls, temps reel → tons chauds (amber `#D4885A`)
- Le gradient warm→cool = la connexion corps-esprit = l'innovation

### 7 regles de design
1. **Dark-first** — Fond `#09090B`, jamais de sections blanches
2. **Dual accent** — Warm (corps) + Cool (esprit). Le gradient = l'innovation
3. **Un sujet par ecran** — Chaque section occupe le viewport, se revele au scroll
4. **L'espace est le design** — Plus de vide que de contenu. Le "doux" vient du vide
5. **Label → Titre → Corps** — Le meme rythme typographique a chaque section
6. **La ligne ECG est le motif** — Present en subtilite, jamais en force
7. **Douceur des animations** — 600-800ms, ease-out, stagger. Rien de brusque

### Typographie
- **Display/Titres** : Satoshi (Bold, Black) — geometrique mais chaleureuse
- **Corps** : Inter (Regular, Medium) — standard de lisibilite
- **Mono/Data** : JetBrains Mono — pour les metriques et chiffres

### Visuels cles a integrer
- **Les formes polaires (radar charts)** — element visuel central et differentiant
- **Le quadrant de positionnement** — montrer le gap de marche en un coup d'oeil
- **La ligne ECG** — motif signature (hero, separateurs)
- **Photos du fondateur** — N&B ou desaturees, pro
- **Photos HIPE Lab** — si disponibles, desaturees avec overlay sombre

### Fichier de reference complet
Voir `design-system.md` pour les tokens, composants, animations, et specifications detaillees.

---

## 14. Specifications techniques du site

| | |
|---|---|
| **Stack** | Next.js, TypeScript, Tailwind CSS |
| **Bilingue** | FR/EN natif, integre dans l'architecture |
| **Responsive** | Desktop, tablette, mobile (mobile-first) |
| **Formulaire** | Contact fonctionnel, securise, conforme RGPD |
| **SEO** | Balisage meta, structure HTML semantique |
| **Performance** | Objectif Lighthouse 90+ |
| **Hebergement** | Vercel (CDN global, SSL inclus) |
| **Code source** | Propriete du client a la livraison |
| **Budget** | 4 400 EUR HT (1 400 DA + 3 000 dev) |
| **Paiement** | 50% acompte / 50% livraison |

---

## 15. Ce qui est confirme vs ce qui reste a clarifier

### CONFIRME (sources multiples ou directement par Yann)
- Le hardware est standard (IMU + GPS + FC)
- L'IP est dans l'algorithme (transformation algebrique/geometrique)
- 6 lignes de commande sur 3 plans anatomiques
- Mapping emotions sur les directions de mouvement
- Forme polaire = signature individuelle (visuels disponibles)
- Matrice de confusion : reconnaissance jusqu'a 0.98
- 13 000 sequences, 20+ individus, 26 activites
- Partenaire R&D : HIPE Lab
- MVP : capteur commerce + logiciel custom
- Objectif : trouver un partenaire industriel
- Le modele s'appuie sur des recherches existantes et verifiees (dixit Yann)

### A CLARIFIER au prochain RDV (priorite haute)
- **Brevets deposés ?** — Bloquant pour credibilite industrielle
- **Publications scientifiques peer-reviewed ?** — Levier #1 de credibilite
- **Marche prioritaire ?** — 6 cas d'usage mais aucun segment prioritaire defini
- **Business model ?** — Slides 18-19 vides, aucun pricing
- **Profil exact du partenaire industriel recherche ?** — Sous-traitant, co-developpeur, ou licensee ?
- **Visuels du MVP ?** — Photos/videos pour le site, sinon rendus 3D necessaires
- **Logo et branding ?** — Tout est a creer ?
- **Nom de domaine ?** — yeti.live reserve ?

### A CLARIFIER (priorite moyenne)
- **Doctorat exact** — "sciences physiques" (pitch) vs "physiologie de l'exercice" (probable)
- **Master en psychologie** — non confirme en dehors du pitch
- **Structure juridique** — YLM Revolution = SAS, SARL, autre ?
- **Financement** — Auto-finance ? Subventions ?
- **Nombre exact d'individus** — 20 (slides Performer) vs 35 (KISS)
- **Cadre collaboration HIPE Lab** — Contrat, partenariat, convention ?
- **Peut-on utiliser le logo HIPE Lab sur le site ?**
- **Strategie reglementaire** — Wellness vs medical (l'ECG est un piege reglementaire)

### ATTENTION — Points sensibles pour le messaging
- Le terme **"somatopsychique"** est scientifiquement ambitieux pour un monocanal sans EDA/temperature. La recherche recommande : **"psychophysiologie sportive + signature individuelle"** comme positionnement plus defensible.
- Les **92-95% accuracy** de detection emotionnelle via ECG sont des resultats **en labo** — degradation significative sur le terrain.
- **World Rugby interdit les moniteurs FC thoraciques en match** (uniquement entrainement/recovery).
- **NBA interdit les wearables en match officiel.**
- La revendication marketing determine la classification reglementaire : "suivi performance" = wellness (CE rapide). "Detection anomalie cardiaque" = medical (9-24 mois, 100-300K EUR).

---

## 16. Pieges a eviter

### Pour le site
1. **Ne PAS presenter le capteur comme l'innovation** — c'est standard. L'innovation est l'algorithme.
2. **Ne PAS utiliser le mot "diagnostic"** — piege reglementaire qui forcerait une classification medical device.
3. **Ne PAS surestimer les chiffres de marche** — utiliser 87-93 Mds$ (verifie), pas 180 Mds$ (melange de sources).
4. **Ne PAS montrer de comparatif technique detaille** — risque d'exposer ce que YETI n'a PAS encore (produit industrialise).
5. **Ne PAS promettre de dates** — pas de partenaire industriel, pas de production planifiee.
6. **Ne PAS donner les formules mathematiques** — protection IP + incomprehensible pour la cible.
7. **Ne PAS affirmer "unique au monde" sans nuance** — dire plutot "aucun acteur identifie ne combine ces 3 axes".
8. **FAIRE attention au CAGR smartwatch** — c'est ~10-12%, PAS 25% (source Straits Research moins fiable).
9. **FAIRE attention aux acquisitions** — Garmin a achete MYLAPS (pas Kinexon). Apple+iRhythm n'existe pas.

### Pour la relation client
1. Les questions de Yann sur le business model, les brevets, et la strategie reglementaire n'ont PAS encore de reponses — ne pas inventer.
2. Le budget est fixe a 4 400 EUR HT — ne pas depasser le scope sans discussion.
3. Le delai n'est pas rush (dixit Yann) — qualite > vitesse.

---

## 17. Fichiers de reference

### Documents d'analyse
| Fichier | Contenu |
|---------|---------|
| `contexte.md` | Brief projet detaille (fondateur, produit, science, concurrence, questions ouvertes) |
| `document-mise-en-relation.md` | Proposition commerciale pour Yann (strategie, DA, specs, budget) |
| `sections.md` | Justification detaillee de chaque section du site (methodologie 3 axes) |
| `design-system.md` | Identite visuelle complete (palette, typo, spacing, animations, composants) |
| `budget.md` | Decomposition budgetaire (4 400 EUR HT) |
| `questions.md` | 12 categories de questions pour le RDV client (prioritisees) |
| `plan-document-client.md` | Plan et strategie du document envoye a Yann |
| `justification_prix_2500.md` | Justification du prix (version precedente) |
| `ERRATA-fact-check-2026-02-27.md` | Corrections factuelles de la recherche (scores 6.5-7.5/10) |

### Recherche
| Fichier | Contenu |
|---------|---------|
| `research/research-consolidee-yeti-live.md` | Recherche domaine consolidee (~30K mots, 150+ sources, 5 sections) |

### Sources primaires
| Fichier | Contenu |
|---------|---------|
| `2026 02 27 Yann Le Meur YETI.live Adrien Poua Pitch.pptx` | Pitch original 21 slides |
| `2026 02 26 YETI.live Yann Le Meur YLM Revolution KISS.pdf` | Document technique 1 page |
| `converted/pitch-slides/slide-01.png` a `slide-21.png` | Slides du pitch en images |
| `converted/ylm-revolution-kiss/page-01.png` | Document KISS en image |

### Slides Performer (presentation scientifique, fournies par le client)
*(Non presentes dans le dossier converted/ mais fournis en conversation)*
- **Performer slide 2** — La charge de travail : W = eta.m.a.d, accelerations externes → statistiques (approche concurrente)
- **Performer slide 3** — Timeline 2008-2024 : 6 emotions (2008) → 6 directions (2012) → device (2016) → forme (2024). Algebre & geometrie → accelerations internes (approche YETI)
- **Performer slide 4** — Formes polaires a 5 vitesses (3-11 km/h) + matrice de confusion (reconnaissance 0.71-0.98). 20 individus, 26 activites, 13K sequences
- **Performer slide 5** — Forme = Empreinte = Signature. Variations intra/inter-individu. Seuils aerobie/anaerobie personnalises. "Outil temps reel d'aide au management de la forme a partir de l'organisation inertielle"
- **Performer slide 6** — La capacite de travail : repos vs effort. Objectifs : structure pro + applicatif + temps reel + grand public

---

*Document genere le 2026-03-07. Base sur toutes les sources disponibles dans le dossier `_bmad-output/analysis/irene/` + informations directes du client.*
