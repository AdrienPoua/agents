# Decision Finale - Run 003

**Date :** 10 fevrier 2026
**Idees generees :** 12 (#25-36)
**Survivantes Phase 1b :** 4
**Recherche BMAD :** 4 projets analyses

---

## 1. Synthese par projet

### #32 - ContratInfluo (BMAD 4.25/5)

SaaS de conformite contractuelle pour le marketing d'influence. La loi du 9 juin 2023, renforcee par le decret n2025-1137 du 28 novembre 2025, impose un contrat ecrit obligatoire pour toute collaboration > 1 000 EUR HT depuis le 1er janvier 2026.

**Forces confirmees par BMAD :**
- Zero concurrent dedie (Reech a un module compliance mais a 500+ EUR/mois)
- Marche en croissance explosive (519M EUR, +12.8%, CAGR mondial 33%)
- 33 000 marques cibles, 100% digitales = acquisition SEO/inbound naturelle
- Decret confirme sur Legifrance, 260+ controles DGCCRF en 2024 (40% anomalies)
- Fenetre d'opportunite unique : loi en vigueur depuis 6 semaines seulement

**Red flags decouverts :**
- La sanction pour absence de contrat = **nullite du contrat** (pas amende 300K EUR). Les 300K sont pour pratiques trompeuses.
- Fenetre estimee a 6-12 mois avant que Kolsquare (acquis par team.blue, 3.3M clients SMB) ou Reech n'ajoutent un module accessible
- Tension "responsabilite metier" : generer des contrats juridiques = potentiel engagement
- Cout MVP : e-signature API (Universign 1.96 EUR/signature vs Yousign 106 EUR/mois)

---

### #25 - AccessiBoard (BMAD 4.07/5)

SaaS de pilotage de conformite accessibilite pour ERP de categorie 5 (petits commerces, cabinets, restaurants, salons). 900 000 ERP non conformes, triple declencheur legal en 2025-2026.

**Forces confirmees par BMAD :**
- Marche massif (900K-1.8M ERP cat 5, TAM theorique 162M EUR/an)
- Triple declencheur legal verifie (circulaire 25/06/2025, arrete 01/12/2025, fin FTA 07/01/2026)
- Concurrence mal positionnee (Lootibox = registre simple a 4 EUR/mois, pas de pilotage)
- API open data Acceslibre (500K+ lieux) = acquisition + fonctionnalite
- Marche long-terme (pas de fenetre temporelle limitee)

**Red flags decouverts :**
- **Seulement 433 ERP sur 900K ont utilise le FTA gratuit** (aide a 50% des travaux). Si une aide GRATUITE n'est pas adoptee, un SaaS PAYANT le sera-t-il ?
- **Zero sanction reellement appliquee** a un petit ERP cat 5. Le Collectif Handicaps qualifie la circulaire d'"ambition sur papier"
- Tension "responsabilite metier" : evaluer la conformite d'un ERP touche au diagnostic/interpretation
- Lootibox a 4 EUR/mois pose une pression prix (meme si positionnement different)

---

### #29 - ConformInk (BMAD 3.6/5)

SaaS de conformite hygiene/ARS pour studios de tatouage et piercing. Registre de sterilisation, tracabilite REACH, preparation controles ARS.

**Forces :** Ocean bleu absolu (zero concurrent sur conformite ARS tatouage). Arrete du 5 mars 2024 cree une vague de certification. Modele Traqfood (HACCP) prouve le concept dans un secteur similaire.

**Faiblesses :** Marche etroit (~5 000 studios). Sanctions faibles (1 500 EUR contravention 5e classe, pas 75K). Controles ARS rares (1 tous les 3-10 ans). Lifestyle SaaS plafonne (3M EUR TAM). 50 clients a 50 EUR = objectif, mais penetration de 1% requise.

---

### #26 - ConformSecure (BMAD 3.25/5)

SaaS de conformite CNAPS pour TPE de securite privee. Suivi cartes pro, formations MAC, agrements.

**Forces :** Douleur reelle (3.9M EUR sanctions CNAPS 2024, +58%). Aucun concurrent direct sur le creneau "conformite CNAPS light pour TPE". 668 centres de formation = canal de distribution.

**Faiblesses :** Marche tres etroit (3 000-5 000 TPE). 29% des entreprises a rentabilite negative. Sekur propose deja un module RH avec alertes a 69.99 EUR/mois. Dracar Ultimate (portail CNAPS 2026) pourrait evoluer. Defensabilite quasi nulle.

---

## 2. Tableau comparatif - Grille /20 (donnees BMAD)

| Critere | #32 ContratInfluo | #25 AccessiBoard | #29 ConformInk | #26 ConformSecure |
|---------|:-:|:-:|:-:|:-:|
| **Douleur /5** | **4** | 3.5 | 3 | **4** |
| *Justification* | *Nullite contrat + astreintes DGCCRF 3K/j, 40% anomalies* | *45K EUR theorique, 0 sanction appliquee, FTA deserte* | *1.5K EUR, controles rares 1/3-10 ans* | *3.9M EUR sanctions, 30K+prison* |
| **Acquisition /5** | **4** | **4** | 3 | 3 |
| *Justification* | *SEO "contrat influenceur", LinkedIn, PR/media* | *SEO reglementaire, API Acceslibre, CCI prescripteurs* | *Instagram, conventions, SNAT 1000 mbr* | *NAF scrapable, SEO CNAPS niche* |
| **Vente /5** | **4** | **4** | **4** | 3.5 |
| *Justification* | *"Conforme en 10 min vs 1500 EUR avocat"* | *"Etes-vous conforme? Testez en 2 min"* | *Decideur unique, valeur claire* | *Decideur unique mais marges faibles* |
| **Faisabilite /5** | 4 | 4.5 | **4.5** | **4.5** |
| *Justification* | *MVP 7 sem, dependance e-signature API* | *MVP 8 sem, stack maitrisee* | *MVP 2-3 sem, CRUD simple* | *MVP 2 sem, CRUD simple* |
| **TOTAL /20** | **16** | **16** | **14.5** | **15** |
| **Score BMAD /5** | **4.25** | 4.07 | 3.6 | 3.25 |

---

## 3. Analyse des ecarts

### Qui gagne sur chaque critere ?

| Critere | Gagnant | Commentaire |
|---------|---------|-------------|
| Douleur | #32 = #26 (4/5) | ContratInfluo : obligation EN VIGUEUR. ConformSecure : sanctions lourdes mais marche fragile |
| Acquisition | #32 = #25 (4/5) | ContratInfluo : PR/media naturel. AccessiBoard : volume SEO massif |
| Vente | #32 = #25 = #29 (4/5) | Trois projets a vente evidente, decideur unique |
| Faisabilite | #29 = #26 (4.5/5) | MVP les plus rapides (2-3 sem) |
| **Score global** | **#32 = #25 (16/20)** | Egalite, tranchee par le BMAD |
| **Score BMAD** | **#32 (4.25/5)** | Meilleur alignement timing/marche/profil |

### Le #1 (ContratInfluo) a-t-il un point faible majeur ?

**OUI** : la fenetre d'opportunite est courte (6-12 mois). Si Kolsquare ou Reech ajoutent un module contrat accessible, le produit perd son avantage. C'est un sprint, pas un marathon.

### Le #2 (AccessiBoard) a-t-il un avantage decisif ?

**OUI** : le marche est 27x plus grand (900K vs 33K cibles) et la fenetre est longue (pas de date de peremption). Mais l'adoption du FTA (0.05%) revele une apathie du marche qui est un red flag serieux.

---

## 4. Verdict

### Projet gagnant du Run 3 : **#32 - ContratInfluo**

**Score final : 16/20 | BMAD 4.25/5**

#### Pourquoi ContratInfluo et pas les autres

1. **Timing irreproductible** : La loi est en vigueur depuis le 1er janvier 2026. Le decret a ete publie il y a 2.5 mois. Les premieres sanctions DGCCRF sont imminentes. C'est le meilleur moment pour lancer, et dans 12 mois il sera trop tard.

2. **Cible 100% digitale** : Les responsables marketing d'influence sont sur LinkedIn, Instagram, et cherchent activement des solutions. L'acquisition inbound/SEO est le canal naturel. Aucun cold call necessaire.

3. **Zero concurrent dedie** : Reech a un module compliance mais a 500+ EUR/mois (hors segment PME). Aucun outil self-service a 29-99 EUR/mois n'existe pour la conformite contractuelle influenceurs.

#### Les 3 forces decisives

1. **Obligation legale EN VIGUEUR** (pas "a venir" comme AccessiBoard) avec controles actifs (260+ en 2024)
2. **Ocean bleu absolu** sur le segment PME (29-99 EUR/mois vs 500+ EUR/mois des plateformes)
3. **Viralite naturelle** : chaque contrat envoye expose le SaaS a l'influenceur qui le recommande a d'autres marques

#### Risques principaux et mitigations

| Risque | Severite | Mitigation |
|--------|----------|-----------|
| Fenetre courte 6-12 mois | HAUTE | Sprinter : MVP en 7 sem, landing page en 1 sem, capturer des clients AVANT la commoditisation |
| Sanction = nullite (pas amende) | MOYENNE | Marketing sur astreintes DGCCRF 3K/jour + risque penal 300K pour pratiques trompeuses associees |
| Responsabilite metier (contrats) | MOYENNE | Templates valides par avocat + disclaimer "outil, pas conseil juridique" + mention "faites valider par votre avocat" |
| Kolsquare ajoute un module | HAUTE | Se positionner comme specialiste compliance (pas campagne), prix imbattable, UX superieure, network effect |

#### La premiere action concrete a faire demain matin

**Creer une landing page "ContratInfluo" avec :**
1. Headline : "Contrats influenceurs conformes a la loi de 2023 - En 5 minutes"
2. Formulaire d'inscription waitlist
3. SEO cible : "contrat influenceur obligatoire 2026", "decret influenceur contrat ecrit"
4. Lancer des campagnes LinkedIn ciblees sur les responsables marketing/communication

**Objectif : 50 inscriptions waitlist en 30 jours pour valider le willingness to pay.**

---

## 5. Classement cumule (3 runs, 36 idees)

| Rang | Projet | Run | Score /20 | BMAD /5 | Statut |
|------|--------|-----|-----------|---------|--------|
| 1 | **ConformLoc** | 2 | 18.5 | 4.5 | Gagnant Run 2 - deadline mai 2026 |
| 2 | **ConformCHR** | 1 | 18 | 4.5 | Gagnant Run 1 |
| 3 | **ContratInfluo** | 3 | 16 | 4.25 | **Gagnant Run 3** |
| 4 | ConformGarage | 2 | 15 | 4.5 | Valide - produit #2 ConformSuite |
| 5 | AccessiBoard | 3 | 16 | 4.07 | Valide - potentiel long terme |
| 6 | CopropCheck | 2 | 17 | 4.2 | Valide avec reserves |
| 7 | AccessCheck | 1 | 17 | - | Valide - deadline 2030 |
| 8 | RenovFlow | 1 | 16 | - | Valide - marche etroit |

**Observation** : Le Run 3 n'a pas produit de candidat au niveau des gagnants des Runs 1-2 (ConformLoc 18.5/20, ConformCHR 18/20). ContratInfluo (16/20) est solide mais en dessous. Cela confirme le rendement decroissant du processus d'ideation : les meilleures idees emergent tot, les runs suivants trouvent des niches plus petites ou des fenetres plus courtes.

---

## 6. Recommandation strategique globale

Apres 3 runs et 36 idees analysees :

1. **Priorite #1 : ConformLoc** (Run 2) - La deadline du 20 mai 2026 est dans 3.5 mois. C'est le timing le plus urgent et le marche le plus large (800K+ cibles). Si ce n'est pas deja en cours, c'est maintenant ou jamais.

2. **Priorite #2 : ConformCHR** (Run 1) - Le marche permanent le plus solide. Pas de deadline mais controles DDPP en hausse constante.

3. **Priorite #3 : ContratInfluo** (Run 3) - Si ConformLoc et ConformCHR sont deja en cours/lances, ContratInfluo est le meilleur "plan B" avec un timing court (6-12 mois). Peut etre lance en parallele avec une simple landing page pour valider.

4. **Reserve : AccessiBoard** (Run 3) - Potentiel massif a long terme mais willingness-to-pay a valider. A garder pour un run futur ou quand les sanctions commenceront a tomber.

---

*Run 003 - Decision finale - 10 fevrier 2026*
*Workflow SaaS v3.0*
