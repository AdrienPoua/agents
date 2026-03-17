# Decision Finale - Run 002

**Date :** 2026-02-06
**Run :** 002
**Idees generees :** 12 (#13-#24)
**Survivantes Phase 1b :** 5
**Validees BMAD Phase 3 :** 3 (ConformGarage, ConformLoc, CopropCheck)
**En cours d'etude :** 2 (CertiControl, BorneFlow)

---

## 1. Synthese par projet

### ConformLoc (#16) - Score BMAD 4.5/5

SaaS de conformite reglementaire pour les 800K-1M+ loueurs meubles de tourisme face a la loi Le Meur. Deadline enregistrement national le 20 mai 2026 (dans 3.5 mois). Sanctions de 10K a 50K EUR. **Aucun SaaS dedie n'existe** -- JD2M fait la compta, Lodgify gere les reservations, les conciergeries font du service humain. Le creneau "conformite reglementaire globale loi Le Meur" est completement vierge. Cible 100% digitale, SEO naturel massif (chaque article de presse genere des recherches), API taxe de sejour disponible sur data.gouv.fr. MVP en 2-4 semaines (diagnostic par adresse). Timing parfait : pic d'angoisse reglementaire Q1 2026.

**Red flags :** Le teleservice national (mai 2026) pourrait simplifier l'enregistrement -- mais ne couvre PAS la conformite globale (DPE, taxe sejour, assurance, quotas locaux). La collecte de donnees par commune (36 000 mairies) est le vrai defi -- mais aussi la barriere a l'entree.

### ConformGarage (#13) - Score BMAD 4.5/5

SaaS de conformite reglementaire pour les 16 000-20 000 garages auto independants. 75% en anomalie DGCCRF (2024, verifie). Amendes 3K-64K EUR documentees. **Aucun SaaS specifique** conformite garage -- les DMS existants (EBP Meca, FIDUCIAL) font la gestion, pas la conformite. NathysLog/Conforlog est generaliste a 55 EUR/mois. Synergie technique massive avec ConformCHR : 70% du code reutilisable, MVP en 5 semaines (vs 8 sans synergie). API annuaire-entreprises.data.gouv.fr pour scraper 100% des prospects (code NAF 4520A).

**Red flags :** Cible peu digitale (mecaniciens 40-55 ans). Pas de deadline unique (controles DGCCRF permanents mais sans urgence calendaire). La FNA accompagne ses adherents (concurrent indirect).

### CopropCheck (#20) - Score BMAD 4.2/5

SaaS de pilotage DPE collectif + PPPT pour 52 839 syndics benevoles. Deadlines passees depuis 37 jours (DPE) et 1 an (PPPT). Responsabilite civile personnelle du syndic. **Aucun outil self-service dedie.** APIs open data exploitables (RNIC, DPE ADEME, annuaire diagnostiqueurs). Saisonnalite AG mars-juin = pic acquisition naturel.

**Red flags :** Pas de sanction penale directe (levier = perte subventions MaPrimeRenov' + RC civile). Recurrence limitee (DPE = 1x/10 ans). Willingness to pay a valider. MaPrimeRenov' suspendu temporairement. Scenario realiste : 132-264 clients = 1 650-4 400 EUR/mois.

### CertiControl (#22) - Score BMAD 3.6/5

SaaS de conformite pour 1 236 centres CT independants. Douleur maximale (perte agrement = mort economique). Creneau vierge. Mais **TAM ultra-limite** (1.48M EUR/an). ProTechnologies (62% du marche) pourrait ajouter un module conformite complet. Viable pour 2 500 EUR/mois (25 clients a 100 EUR/mois) mais sans marge d'erreur.

**Verdict :** Bon plan B, pas un choix principal.

### BorneFlow (#24) - Score BMAD 3.3/5

SaaS de gestion chantiers IRVE pour 5 400 installateurs. Gap reel sur la gestion du chantier (vs pre/post-installation). Marche en croissance explosive. Mais **preuve de douleur non validee** (marche jeune, peu de temoignages). IRVE Manager semble mort (site hors ligne). Revolt.eco pas sur IRVE avant 2027.

**Verdict :** Necessite validation terrain avant tout investissement.

---

## 2. Tableau comparatif /20

| Critere | ConformLoc #16 | ConformGarage #13 | CopropCheck #20 | CertiControl #22 | BorneFlow #24 |
|---------|:-:|:-:|:-:|:-:|:-:|
| **Intensite douleur** | 5 | 4 | 3.5 | 5 | 3 |
| **Facilite acquisition** | 5 | 4.5 | 5 | 3 | 3.5 |
| **Simplicite vente** | 5 | 4 | 3.5 | 4 | 3.5 |
| **Faisabilite solo** | 3.5 | 4.5 | 4 | 4 | 3.5 |
| **TOTAL /20** | **18.5** | **17** | **16** | **16** | **13.5** |
| Score BMAD /5 | 4.5 | 4.5 | 4.2 | 3.6 | 3.3 |
| TAM | 800K+ cibles | 20K cibles | 52K cibles | 1 236 cibles | 5 400 cibles |
| Deadline | 20 mai 2026 | Pas de deadline | Passee | 01/01/2026 | Pas de deadline |
| Concurrent 0 ? | OUI | OUI | OUI | OUI | ~OUI |

---

## 3. Analyse des ecarts

### Qui gagne sur chaque critere ?

| Critere | Gagnant | Explication |
|---------|---------|-------------|
| Douleur | ConformLoc / CertiControl (ex aequo 5/5) | ConformLoc : sanctions 10-50K EUR + annonce supprimee. CertiControl : mort economique. |
| Acquisition | ConformLoc / CopropCheck (ex aequo 5/5) | ConformLoc : SEO massif + cible digitale. CopropCheck : syndics Google tout. |
| Vente | **ConformLoc (5/5)** | Decideur unique, cible digitale, score gratuit, 9 EUR/mois |
| Faisabilite | **ConformGarage (4.5/5)** | Synergie ConformCHR = 70% code reutilisable |
| TAM | **ConformLoc** (800K+) | 40x plus grand que le #2 |
| Timing | **ConformLoc** | 3.5 mois avant deadline = urgence maximale |

### Le #1 (ConformLoc) a-t-il un point faible majeur ?

**La collecte de donnees par commune.** 36 000 communes avec chacune ses regles. Mitigation : commencer par les 50 plus grandes villes (60% du marche), utiliser l'API taxe de sejour (data.gouv.fr), elargir progressivement. C'est un defi editorial, pas technique -- et c'est aussi la barriere a l'entree (moat).

**La faisabilite solo (3.5/5)** est le score le plus bas. Mais un MVP "diagnostic par adresse" est faisable en 2-4 semaines avec les APIs disponibles (DPE ADEME, taxe sejour DELTA, Base Adresse Nationale).

### Le #2 (ConformGarage) a-t-il un avantage decisif ?

**La synergie ConformCHR.** Si ConformCHR est deja en cours, ConformGarage n'est qu'a 5 semaines de lancement supplementaires. C'est le "produit #2" parfait pour valider la these d'une plateforme ConformSuite multi-sectorielle. Mais il n'a PAS l'urgence calendaire de ConformLoc.

---

## 4. Verdict

### Projet gagnant du Run 2 : ConformLoc (#16)

**ConformLoc est la meilleure idee SaaS du Run 2, et potentiellement la plus forte de toutes les idees generees sur les 2 runs (24 idees au total).**

### Les 3 forces decisives

1. **Timing irreproductible.** La deadline du 20 mai 2026 est dans 3.5 mois. 800K+ loueurs DOIVENT s'enregistrer sous peine de voir leurs annonces supprimees. Ce type de "forcing function" n'existe pour AUCUNE autre idee du portefeuille. Apres mai 2026, l'urgence diminue -- c'est maintenant ou jamais.

2. **Marche 40x plus grand que le #2.** 800K-1M cibles vs 20K (ConformGarage) ou 52K (CopropCheck). Meme avec un taux de conversion infime (0.04%), l'objectif de 3K EUR/mois est atteint. La marge d'erreur est enorme.

3. **Ocean bleu absolu avec moat naturel.** Aucun concurrent sur la conformite reglementaire globale. La complexite locale (36 000 communes) est a la fois le defi et la barriere a l'entree. Le premier a compiler cette base gagne.

### Les risques principaux et mitigations

| Risque | Probabilite | Mitigation |
|--------|-------------|------------|
| Le teleservice national simplifie tout | Faible | Ne couvre que l'enregistrement, pas les 7 autres dimensions (DPE, taxe sejour, assurance, quotas, etc.) |
| JD2M ou Lodgify pivotent vers la conformite | Moyenne | JD2M = cabinet comptable (ADN fiscal). Lodgify = channel manager (36.9M$ mais pas RegTech). 3.5 mois d'avance sur la deadline. |
| La loi Le Meur decourage les loueurs (contraction) | Faible-Moyenne | Ceux qui restent ont ENCORE PLUS besoin de conformite. Le marche se professionnalise. |
| Difficulte collecte donnees communales | Haute | Commencer par 50 villes (60% du marche). API taxe sejour dispo. Elargir au fur et a mesure. |
| Risque de responsabilite (conseils errones) | Faible | Meme protection que ConformCHR : "outil d'orientation, verifiez aupres de votre mairie". |

### La premiere action concrete a faire demain matin

1. **Creer la landing page ConformLoc** avec un formulaire de diagnostic gratuit ("Votre location est-elle en regle ? Score en 3 min"). Deployer sur Vercel.
2. **Poster dans 3 groupes Facebook Airbnb** (dont "Toi Toi Mon Toit" 17K+ membres) : "A 3 mois de la deadline, faites votre diagnostic gratuit."
3. **Commencer la base de donnees** des 50 plus grandes villes (declarations, quotas, taxes de sejour, DPE).

---

## 5. Classement final Run 2

| Rang | Projet | Score /20 | BMAD /5 | Statut |
|:----:|--------|:---------:|:-------:|--------|
| 1 | **ConformLoc** | **18.5** | **4.5** | **GAGNANT RUN 2** |
| 2 | ConformGarage | 17 | 4.5 | Validee - Produit #2 apres ConformCHR |
| 3 | CopropCheck | 16 | 4.2 | Validee avec reserves |
| 4 | CertiControl | 16 | 3.6 | En cours d'etude - Plan B |
| 5 | BorneFlow | 13.5 | 3.3 | En cours d'etude - Validation terrain requise |

---

## 6. Mise en perspective avec le Run 1

Le Run 1 avait produit **ConformCHR** comme gagnant (18/20, BMAD 4.5/5). Le Run 2 produit **ConformLoc** (18.5/20, BMAD 4.5/5).

**ConformLoc vs ConformCHR :**

| Critere | ConformCHR (#6, Run 1) | ConformLoc (#16, Run 2) |
|---------|:-:|:-:|
| TAM | 246K restaurants/bars | 800K+ loueurs |
| Douleur | Fermeture admin + 450K EUR | 10-50K EUR + annonce supprimee |
| Deadline | Pas de deadline unique | 20 mai 2026 |
| Concurrent | 0 sur conformite globale | 0 sur conformite globale |
| BMAD | 4.5/5 | 4.5/5 |
| Cible digitale | Oui (78% numerises) | Oui (100% sur Airbnb/Booking) |
| Urgence timing | Permanente | MAXIMALE (3.5 mois) |

**Les deux sont d'excellentes idees.** ConformCHR a une douleur plus forte (fermeture admin) et un marche plus stable. ConformLoc a un timing irreproductible et un marche 3x plus grand. Ils ne sont pas en conflit -- ce sont deux verticales differentes d'une plateforme de conformite.

**Recommandation strategique :** Si ConformCHR est deja en cours de developpement, continuer. Si le fondateur cherche le meilleur "time-to-market" avec le plus grand impact, ConformLoc devrait etre priorise MAINTENANT (deadline mai 2026). Les deux peuvent coexister a terme.

---

*Decision generee le 2026-02-06 -- Run 002 du workflow SaaS v3.0*
