# Filtrage #22 - CertiControl

## Idee initiale
Conformite centres de controle technique automobile. Risque personnel agrement. 1.5-2.5K cibles.
**Score initial : 16/20**

---

## 1. CONCURRENCE (Score : 4/5)

### Concurrents identifies

| Concurrent | Type | Focus | Position |
|---|---|---|---|
| **ProTechnologies (CTonline, AutoSoft Explorer)** | Logiciel de controle technique | Gestion planning, realisation des controles | **62% des centres independants** utilisent leurs logiciels. MAIS : c'est un outil de production (saisie des controles), PAS de conformite reglementaire. |
| **Conforlog (NathysLog)** | SaaS obligations reglementaires | Multi-secteurs (BTP, logistique, hotellerie) | Generique, pas specifique au controle technique automobile. |
| **Reseaux (Dekra, Securitest, Autovision)** | Support reseau | Centres affilies | Fournissent des outils de conformite a leurs affilies. Les independants n'y ont pas acces. |

### Analyse

**Bonne nouvelle majeure** : Il n'existe PAS d'outil SaaS dedie a la conformite reglementaire des centres de controle technique independants.

- ProTechnologies est le leader software du secteur (62% des independants), mais leur logiciel sert a **realiser** les controles techniques, pas a **gerer la conformite reglementaire du centre** (formation des controleurs, validite de l'agrement, conformite des equipements, mise a jour des procedures qualite, etc.).
- Les reseaux (Dekra, SGS, Autovision) fournissent un cadre de conformite a leurs centres affilies. Les **1 236 centres independants** n'ont pas cet accompagnement.
- Conforlog est generique et ne connait pas les specificites reglementaires du controle technique auto.

**Le creneau est vierge.**

---

## 2. PREUVE DE DOULEUR (Score : 4/5)

### Sources de douleur identifiees

**Sanctions reelles et documentees** :
- Arretes du 8 et 19 decembre 2025 : **nouvelles obligations a partir du 01/01/2026** pour les centres (collecte donnees personnelles, rappels vehicules, delai minimum 1 minute entre validation et remise, renforcement du cadre disciplinaire).
- Statistiques sanctions : En 2024, dans la seule region Centre-Val de Loire / Loir-et-Cher : **17 avertissements + 10 suspensions d'agrement** (7 centres + 3 controleurs). Suspensions de 1 semaine a 1 mois.
- Amendes administratives : jusqu'a **1 500 EUR par infraction** (3 000 EUR en recidive).
- Retrait d'agrement = **5 ans d'interdiction** de demander un nouvel agrement.
- La procedure prefectorale est lourde (courrier, delai 1 mois, reunion contradictoire) = le risque est reel mais le processus est lent.

**Temoignages indirects** :
- Le site echoavocats.com publie un article "Anticiper et preparer le retrait d'agrement" = preuve que c'est un sujet reel pour les centres.
- L'article de l'Officiel des Metiers alerte sur "encore de nouvelles obligations et sanctions a partir du 1er janvier 2026".

**La douleur est reelle : les centres independants font face a un alourdissement constant de la reglementation sans support de reseau.**

---

## 3. TAILLE DE MARCHE (Score : 2/5)

### Chiffres verifies
- **6 790 centres de controle technique** agrees en France (2024).
- **~1 236 centres independants** (non affilies a un reseau) = 18% du marche.
- Part de marche independants en croissance : de 9.9% a 16.7% en 2021, puis ~18% en 2023-2024.

### Analyse CRITIQUE

Le chiffre initial de "1.5-2.5K cibles" correspondait aux independants. Le chiffre reel est **1 236 centres**.

**ALERTE** : On frole le seuil d'elimination de 500 cibles, mais on le depasse.

Cependant :
- A 100 EUR/mois (1 200 EUR/an) : TAM = 1 236 x 1 200 = **1.48M EUR/an**
- A 200 EUR/mois : TAM = 1 236 x 2 400 = **2.97M EUR/an**
- Si on inclut les centres affilies qui voudraient un outil complementaire : TAM potentiel plus large, mais incertain.

**TAM de 1.5-3M EUR/an = viable pour un solo dev mais tres limite.** Pas de marge d'erreur. Il faut capturer 20%+ du marche pour vivre.

### Expansion possible ?
- Centres de controle PL (poids lourds) : ~600 centres supplementaires
- Controle technique moto (nouveau depuis 2024) : centres existants ajoutent cette activite
- Extension a d'autres metiers reglementes ? Possible mais dilue le focus.

---

## 4. DECLENCHEUR VERIFIABLE (Score : 4/5)

### Verification Legifrance

**Arrete du 8 decembre 2025** (JORFTEXT000053000977) :
- Modifie l'arrete du 18 juin 1991 sur le controle technique VL.
- Nouvelles obligations au 01/01/2026 : verification des rappels vehicules, transmission coordonnees proprietaires a l'UTAC, cadre disciplinaire renforce.
- **C'est un declencheur REEL et RECENT** (en vigueur depuis 37 jours).

**Arrete du 19 decembre 2025** (JORFTEXT000053166436) :
- Controle technique deux-roues.
- Delai minimum 1 minute, allongement delai reparation sonometre, renforcement cadre disciplinaire.

**Code de la route (Articles R323-6 a R323-21)** :
- Procedure de suspension/retrait d'agrement par le prefet.
- Amendes administratives de 1 500 EUR (3 000 EUR en recidive).
- Interdiction de 5 ans apres retrait.

**Le declencheur est solide** : nouvelles obligations au 01/01/2026, sanctions reelles (suspensions documentees), risque personnel de perte d'agrement.

---

## SYNTHESE

| Critere | Score |
|---|---|
| Concurrence | 4/5 |
| Preuve de douleur | 4/5 |
| Taille de marche | 2/5 |
| Declencheur | 4/5 |
| **TOTAL REVISE** | **14/20** |

---

## VERDICT : SURVIT (avec reserve)

### Points forts
1. **Creneau totalement vierge** : Aucun outil SaaS dedie a la conformite reglementaire des centres de CT independants.
2. **Declencheur reel** : Nouvelles obligations 01/01/2026, sanctions documentees (17 avertissements + 10 suspensions en 1 region en 1 an).
3. **Risque personnel elevee** : Perte d'agrement = 5 ans d'interdiction = mort economique du centre. Motivation d'achat maximale.
4. **Cible ultra-niche** : Facile a atteindre (1 236 centres, base UTAC accessible, salons professionnels dedies).
5. **Absence totale de support pour les independants** : Les centres affilies ont leur reseau, les independants n'ont rien.

### Risques majeurs
1. **Marche TRES petit** : 1 236 cibles verifiees. TAM = 1.5-3M EUR/an. Il faut capturer 20%+ pour atteindre la viabilite.
2. **Willingness to pay** : Les centres independants sont des TPE (souvent 1-3 employes). Budget logiciel = probablement 50-100 EUR/mois max, pas 200 EUR.
3. **Risque de commoditisation** : ProTechnologies (62% du marche independant) pourrait ajouter un module conformite a CTonline et tuer le marche du jour au lendemain.
4. **Scalabilite quasi nulle** : 1 236 cibles, meme a 100% de penetration, c'est un micro-business.

### Recommandation
Idee techniquement viable mais economiquement fragile. Le marche est trop petit pour une erreur d'execution. **Survit uniquement si** :
- Le pricing est agressif (50-100 EUR/mois)
- L'acquisition se fait par canal direct (partenariat UTAC, salons)
- L'expansion vers PL et moto est planifiee des le depart
- Le developpeur accepte un plafond de ~300K EUR ARR dans le meilleur cas realiste

---

## Sources web

- [Legifrance - Agrement controleurs R323-6 a R323-21](https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006074228/LEGISCTA000006177154/)
- [Arrete 8 decembre 2025 - Legifrance](https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000053000977)
- [Arrete 19 decembre 2025 - Legifrance](https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000053166436)
- [Nouvelles obligations CT 2026 - L'Officiel des Metiers](https://www.lofficieldesmetiers.fr/centres-de-controle-technique-encore-de-nouvelles-obligations-et-sanctions-a-partir-du-1er-janvier-2026/)
- [Reforme CT 01/01/2026 - DREAL Centre-Val de Loire](https://www.centre-val-de-loire.developpement-durable.gouv.fr/controle-technique-la-reforme-du-1er-janvier-2026-a5036.html)
- [Bilan surveillance CT 2024 - Prefecture Loir-et-Cher](https://www.loir-et-cher.gouv.fr/Publications/Communiques-de-presse/Annee-2025/Bilan-2024-de-la-surveillance-des-controles-techniques-des-vehicules)
- [Retrait agrement blog avocat](https://blogavocat.fr/space/remy.philippot/content/retrait-et-suspension-d-agrement-de-controle-technique-par-le-prefet-et-controle-du-juge_4c4c4fce-f49c-445e-9306-ece552c0dc2a)
- [Anticiper retrait agrement - echoavocats.com](https://www.echoavocats.com/post/anticiper-et-pr%C3%A9parer-le-retrait-d-agr%C3%A9ment-une-strat%C3%A9gie-gagnante-pour-les-soci%C3%A9t%C3%A9s-de-contr%C3%B4le-t)
- [ProTechnologies - 62% des independants](https://www.protechnologies.fr/controle-technique-independant)
- [CTonline - ProTechnologies](https://www.protechnologies.fr/ctonline)
- [Part de marche independants](https://madeinfr.fr/etudes-de-marche/industrie/le-marche-du-controle-technique-en-france/)
- [Annuaire centres CT - data.economie.gouv.fr](https://data.economie.gouv.fr/explore/dataset/annuaire-centres-controle-technique/)
- [ANFA - Controle technique automobile](https://www.anfa-auto.fr/sites/default/files/2024-07/Autofocus%20108%20-%20Contr%C3%B4le%20technique%20automobile.pdf)
- [Etude marche CT - propulsebyca.fr](https://propulsebyca.fr/idees-business/controle-technique/etude-marche)
- [Bpifrance Creation - Centre CT](https://bpifrance-creation.fr/activites-reglementees/centre-controle-technique-automobile)
