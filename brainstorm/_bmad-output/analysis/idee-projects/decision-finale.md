# Decision Finale - Projet SaaS Adrien Poua

**Date :** 2026-02-06
**Phase :** 4 - Decision Finale
**Input :** Fiches enrichies Phase 2 + Dossiers BMAD Phase 3

---

## 1. Synthese par projet

### ConformCHR - Conformite globale restaurants/bars

**L'ocean bleu confirme.** La recherche BMAD a valide que **AUCUN concurrent** ne couvre les 6 dimensions de conformite CHR (hygiene, affichage, securite incendie, accessibilite, social, licences). Le marche est plus large qu'estime initialement : **246 000 gerants independants** (vs 161K). Les controles DDPP ont augmente de **+80% en 2024**, creant une urgence croissante. 78% des gerants sont deja numerises avec un budget outils de 30-100 EUR/mois. Le profil type (50 ans, 78% numerises, decideur unique) est ideal pour un SaaS simple. Le risque de responsabilite metier est maitrise : c'est un **outil de checklist**, pas un certificat de conformite.

**Signaux positifs :** Ocean bleu valide, marche massif, urgence reelle, pas de concurrent dominant, MVP sur stack maitrisee.
**Red flags :** MVP plus long (10 sem), recherche reglementaire initiale chronophage, 6 dimensions = complexite du contenu.

---

### AccessCheck - Conformite RGAA (accessibilite web)

**Le timing est bon mais l'urgence est plus faible que prevu.** La directive UE 2019/882 est reelle, le creneau RGAA francais est naissant. MAIS la recherche BMAD a revele deux corrections majeures : les amendes pour PME sont de **1 500-7 500 EUR** (pas 50K EUR), et la deadline pour les sites existants est **juin 2030** (pas immediate). Le taux de detection automatique est limite a 30-40% (axe-core), ce qui reduit la valeur percue d'un scan automatise. Le marche mondial de l'accessibilite web croit a 13.8% CAGR, mais la fenetre d'urgence pour les PME francaises est a **4 ans**, pas immediate.

**Signaux positifs :** Creneau naissant, marche en croissance, overlays disqualifies (opportunite), jurisprudence en cours (Auchan, Carrefour).
**Red flags :** Amendes PME faibles (1.5-7.5K), deadline 2030, detection limitee a 30-40%, complexite technique 3.5/5.

---

### RenovFlow - Gestion dossiers MAR

**Viable pour l'objectif de 2 500 EUR/mois mais marche etroit et fragile.** 50-87 clients suffisent pour l'objectif, et le pricing agressif (29-49 vs 150 EUR Marius) est un differenciateur brutal. Mais le marche ne compte que **1 035 structures** (pas 5 000), Marius controle la communaute MAR, et **MaPrimeRenov' a ete suspendu 2 fois** (jan 2025, jan 2026). L'existence meme du marche MAR depend d'une decision politique qui peut changer.

**Signaux positifs :** Concurrent battable sur le prix, 80% encore sur Excel, objectif 2.5K/mois realiste.
**Red flags :** Marche de 1 035 structures seulement, dependance reglementaire forte, concurrent avec avantage communautaire.

---

### DUERP Express - Generateur DUERP pour TPE

**Niche strategy invalidee par la recherche BMAD.** Le RED FLAG majeur : l'OPPBTP propose **MonDocUnique**, un outil gratuit specialement concu pour le BTP avec 35+ risques, 200 situations de travail. Le "trou" de 365K entreprises BTP non couvertes par OiRA etait une illusion -- elles sont couvertes par un AUTRE outil gratuit. Le SEO est sature par les sites institutionnels. Les arnaques DUERP documentees alimentent la mefiance des TPE.

**Signaux positifs :** Marche massif (908K TPE), obligation legale reelle, MVP rapide (4 sem).
**Red flags :** Outil gratuit BTP (OPPBTP), 13+ concurrents, SEO sature, mefiance TPE, score BMAD 3.1/5.

---

## 2. Tableau comparatif - Grille /20 mise a jour avec donnees verifiees

| Critere | ConformCHR | AccessCheck | RenovFlow | DUERP Express |
|---------|-----------|-------------|-----------|---------------|
| **Douleur /5** | **5** - 450K EUR amende + fermeture admin + responsabilite perso du gerant, +80% controles | 3 - Amendes PME 1.5-7.5K EUR seulement, deadline 2030 | 4 - 4h/semaine perdues, tresorerie bloquee, dossiers rejetes | 3 - 62% non conformes mais s'accommodent, outil gratuit existe |
| **Acquisition /5** | **4** - SEO fort ("conformite restaurant"), groupes FB restaurateurs, prescripteurs UMIH, 246K cibles | 4 - SEO accessibilite web, scan gratuit comme hook, 110K PME | 3 - 1035 structures identifiables, communaute FB controlee par Marius | 2 - SEO sature par institutionnels, arnaques DUERP, mefiance |
| **Vente /5** | **4** - Score de conformite gratuit = hook evident, decideur unique (gerant) | 4 - Scan gratuit → score → panique, decideur unique | 4 - Comparaison prix directe (29 vs 150 EUR), decideur unique | 3 - Mefiance TPE, concurrent gratuit, education necessaire |
| **Faisabilite /5** | **4** - MVP 10 sem, complexite 2.5/5, stack maitrisee, bon projet CV | 3 - MVP 6 sem, complexite 3.5/5, mapping axe-core→RGAA, infra 76 EUR | 4 - MVP 6 sem, complexite 2/5, stack maitrisee | 4 - MVP 4 sem, complexite 2/5, stack maitrisee |
| **TOTAL /20** | **17** | **14** | **15** | **12** |

---

## 3. Analyse des ecarts

### Qui gagne sur chaque critere ?

| Critere | Gagnant | Ecart |
|---------|---------|-------|
| Douleur | **ConformCHR** (5) | +1 vs RenovFlow, +2 vs AccessCheck/DUERP |
| Acquisition | **ConformCHR** = **AccessCheck** (4) | +1 vs RenovFlow, +2 vs DUERP |
| Vente | **ConformCHR** = **AccessCheck** = **RenovFlow** (4) | +1 vs DUERP |
| Faisabilite | **ConformCHR** = **RenovFlow** = **DUERP** (4) | +1 vs AccessCheck |

### ConformCHR (#1) a-t-il un point faible majeur ?

**Oui : le MVP est le plus long (10 semaines).** C'est 4 semaines de plus que RenovFlow/AccessCheck et 6 de plus que DUERP. Pour un fondateur avec urgence psychologique, c'est un facteur. **Mitigation :** la Phase 1 du plan BMAD propose un MVP Audit gratuit en 4-6 semaines seulement (checklist 1 dimension = hygiene), puis elargissement progressif.

### AccessCheck (#2 par ecart) a-t-il un avantage decisif ?

**Non.** Son principal atout (timing reglementaire) est affaibli par les corrections BMAD : amendes PME faibles et deadline 2030. Le marche va se developper, mais sur 4 ans, pas 4 mois. Ca ne matche pas l'urgence psychologique d'Adrien.

### RenovFlow (#2 par score) a-t-il un avantage decisif ?

**Oui sur le prix** (3-5x moins cher que Marius). Mais le marche de 1 035 structures est un plafond dur a court terme. Meme a 100% de penetration, le TAM est de ~50K EUR/an. C'est un side project viable, pas un SaaS principal.

---

## 4. Verdict

### Projet gagnant : ConformCHR

**ConformCHR est le projet a lancer.**

### Pourquoi celui-la et pas les autres

| Vs. | Raison |
|-----|--------|
| vs AccessCheck | Douleur 2x plus forte (450K EUR vs 1.5-7.5K), urgence immediate vs deadline 2030, cible non-tech plus facile a convaincre |
| vs RenovFlow | Marche 237x plus large (246K vs 1K), pas de dependance reglementaire unique, pas de concurrent avec avantage communautaire |
| vs DUERP Express | Pas de concurrent gratuit gouvernemental, pas de SEO sature, ocean bleu vs marche encombre |

### Les 3 forces decisives

1. **Ocean bleu confirme** -- Aucun SaaS ne couvre la conformite globale CHR. Les concurrents couvrent 1/6 des dimensions. Le premier a unifier gagne.

2. **Marche massif avec urgence croissante** -- 246 000 gerants independants, controles DDPP +80% en 2024, sanctions cumulatives jusqu'a 450K EUR + fermeture. Le gerant risque PERSONNELLEMENT. Quand c'est personnel, le portefeuille s'ouvre.

3. **Acquisition naturelle sans telephone** -- SEO fort (requetes "conformite restaurant", "controle DDPP", "affichage obligatoire restaurant"), groupes Facebook restaurateurs tres actifs, prescripteurs naturels (experts-comptables, UMIH, formations obligatoires). Le canal principal scale sans appels.

### Risques principaux et mitigations

| Risque | Probabilite | Impact | Mitigation |
|--------|------------|--------|------------|
| **MVP trop long** | Moyenne | Haut | Phase 1 : audit gratuit 1 dimension (hygiene) en 4-6 sem, puis elargissement |
| **Complexite reglementaire** | Haute | Moyen | Commencer par les obligations les plus simples/binaires (affichage, licences), utiliser sources officielles uniquement |
| **Responsabilite metier** | Faible | Haut | Disclaimers clairs, jamais "vous etes conforme", toujours "voici votre checklist". Outil = miroir, pas juge. |
| **Concurrent lance un tout-en-un** | Faible | Moyen | Avantage premier entrant, communaute, contenu SEO. Les concurrents HACCP sont bloques dans leur silo. |
| **Gerants pas prets a payer** | Moyenne | Haut | Freemium avec audit gratuit, conversion vers premium pour rappels + documents. Valider willingness-to-pay avec 20 gerants avant de coder. |

### La premiere action concrete a faire demain matin

**Valider le willingness-to-pay en 48h :**

1. Rejoindre 3-5 groupes Facebook de restaurateurs/gerants independants
2. Poster un message : *"Je developpe un outil gratuit qui vous dit en 5 minutes si votre restaurant est conforme aux 47+ obligations reglementaires (hygiene, affichage, securite, accessibilite...). Ca vous interesse ? Je cherche 20 beta-testeurs."*
3. Objectif : 20 reponses en 48h = signal de marche fort
4. Si <5 reponses : pivoter l'angle (ex: cibler les formations obligatoires comme canal d'entree)

---

## Plan d'action resume

```
Semaine 1-2 : Validation marche (groupes FB, 20 interviews gerants)
Semaine 3-6 : MVP Phase 1 (audit gratuit hygiene + affichage)
Semaine 7-8 : Beta test 50 gerants, iteration
Semaine 9-10 : Lancement version payante (19-29 EUR/mois)
Mois 3-4 : Elargissement (securite, accessibilite, social)
Mois 5-6 : Objectif 100 clients = ~2 500 EUR MRR

Budget : ~50-70 EUR/mois (Vercel + Supabase + Stripe + Resend)
Stack : Next.js + Supabase + Tailwind + Shadcn (100% maitrisee)
```

---

## Classement final

| Rang | Projet | Score /20 | Verdict |
|------|--------|-----------|---------|
| **#1** | **ConformCHR** | **17** | **LANCER** - Ocean bleu, marche massif, urgence croissante |
| #2 | RenovFlow | 15 | GARDER EN RESERVE - Viable mais marche etroit, dependance reglementaire |
| #3 | AccessCheck | 14 | GARDER EN RESERVE - Bon timing mais urgence a 4 ans, pas 4 mois |
| #4 | DUERP Express | 12 | ABANDONNER - Concurrent gratuit gouvernemental, niche strategy invalidee |

---

*Decision finale generee le 2026-02-06 - Phase 4 du workflow SaaS*
