# Idee #23 - SolAdmin

**Date :** 2026-02-06
**Run :** 002
**Angle :** 11 - Fragmentation d'outils

---

## Resume

**Nom :** SolAdmin
**Pitch :** Tableau de bord administratif tout-en-un pour installateurs photovoltaiques TPE. Au lieu de jongler entre Enedis, Consuel, EDF OA, mairie et Excel -- un seul outil pour piloter chaque chantier de A a Z.

---

## La cible (qui paye)

Installateurs photovoltaiques independants et TPE qualifies **QualiPV** en France.

- **~4 800 entreprises** qualifiees QualiPV en 2025 (source : Qualit'EnR)
- **75% sont des TPE** de 1-10 salaries
- Croissance explosive : **+74% en 2023**, de ~2 000 a 4 800 en 3 ans
- Gerant ou responsable administratif = **decideur unique**
- Budget outils : 50-150 EUR/mois deja depense en logiciels divers

## La douleur (1 phrase)

Chaque chantier solaire oblige l'installateur a naviguer entre **5+ portails et outils differents** (Enedis Connect, Consuel, EDF OA, portail mairie, dossier Advenir, Excel interne), ce qui genere **3-5h de paperasse administrative par chantier** et des erreurs couteuses (rejet de dossier = retard de paiement de la prime).

## Le declencheur d'achat

- **Rejet d'un dossier Advenir ou Enedis** a cause d'une piece manquante ou d'une erreur de saisie (= prime bloquee, tresorerie impactee)
- **Scaling** : quand l'installateur passe de 5 a 15+ chantiers/mois et que l'Excel explose
- **Embauche d'un premier salarie** : le gerant a besoin d'un outil partage pour deleguer l'administratif

## Le parcours administratif (la fragmentation)

Pour **chaque** chantier PV residentiel en autoconsommation avec vente du surplus, l'installateur doit :

1. **Devis + contrat client** --> Excel / Word / logiciel devis generique
2. **Declaration prealable mairie** --> formulaire Cerfa 13703 papier ou portail mairie
3. **Demande de raccordement Enedis** --> portail Enedis Connect
4. **Attestation Consuel** --> portail Consuel en ligne
5. **Dossier prime Advenir** (si eligible) --> portail Advenir
6. **Contrat EDF OA** (obligation d'achat) --> portail EDF OA
7. **Facturation prime autoconsommation** --> suivi Excel

Soit **7 etapes** sur **5+ portails differents** + Excel + email. Aucun outil ne centralise ce parcours.

## Les concurrents probables

| Concurrent | Ce qu'il fait | Ce qu'il ne fait PAS |
|-----------|---------------|---------------------|
| **OpenFire** (700+ clients) | Devis, calepinage solaire, CRM | Pas de suivi Enedis/Consuel/Advenir/EDF OA |
| **Revolt** | Dimensionnement 3D, devis | Pas de suivi administratif post-devis |
| **Vertuoza** | Planning chantier, RH | Generique BTP, pas specifique PV |
| **Batappli / Obat** | Devis-facture BTP | Generique, aucune integration PV |
| **Excel** | Tout et rien | Pas de workflow, pas d'alertes, pas de statuts |

**Constat : AUCUN outil ne couvre le parcours administratif complet d'un chantier PV.** OpenFire et Revolt couvrent l'avant-chantier (devis, dimensionnement). Personne ne couvre l'apres-devis (Enedis, Consuel, EDF OA, Advenir, primes).

## La differentiation

- **Seul outil a couvrir le parcours complet** : du devis initial jusqu'au versement de la prime autoconsommation
- **Checklists intelligentes par type de chantier** : autoconsommation totale, vente surplus, vente totale, IRVE combo -- chaque parcours a ses propres etapes
- **Alertes et rappels automatiques** : "Dossier Consuel en attente depuis 15 jours", "Prime Advenir a facturer avant le 30/06"
- **Tableau de bord visuel** : tous les chantiers en cours avec leur statut par etape (devis > mairie > Enedis > Consuel > EDF OA > prime)
- **Templates de documents** pre-remplis adaptes au PV (devis type, attestation sur l'honneur, etc.)

## Score rapide /20

| Critere | Score | Justification |
|---------|-------|---------------|
| **Intensite douleur** | **4/5** | 3-5h de paperasse par chantier, erreurs = primes bloquees, tresorerie impactee. Douleur reelle mais pas de fermeture administrative ni d'amende personnelle. |
| **Facilite acquisition** | **4/5** | SEO fort : "logiciel installateur photovoltaique", "gestion chantier solaire". Communautes FB actives (groupes QualiPV). Liste Qualit'EnR publique et scrapable. Forums Photovoltaique.info. |
| **Simplicite vente** | **4/5** | Argument visuel immediat : "5 portails → 1 tableau de bord". Decideur unique (gerant TPE). Freemium possible (3 chantiers gratuits). |
| **Faisabilite solo** | **4/5** | MVP en 6-8 semaines : dashboard + checklists + alertes. Stack maitrisee (Next.js + Supabase). Pas d'integration API complexe au MVP (juste tracking manuel des etapes). Bon projet portfolio transition energetique. |
| **TOTAL** | **16/20** | |

## Modele economique envisage

- **Gratuit** : jusqu'a 3 chantiers actifs simultanes
- **Pro** : 29-39 EUR/mois -- chantiers illimites, alertes, templates, export comptable
- **Team** : 59-79 EUR/mois -- multi-utilisateurs, tableau de bord equipe

**Objectif 2 500 EUR/mois** : 65-85 clients Pro = 1.3-2.6% du marche cible (4 800 entreprises)

## Risques et mitigations

| Risque | Probabilite | Impact | Mitigation |
|--------|------------|--------|------------|
| OpenFire ajoute un module de suivi admin | Moyenne | Haut | Avantage premier entrant, aller plus profond dans le workflow PV que ce qu'un generique peut faire |
| Marche PV ralentit (fin des aides) | Faible | Haut | Diversifier vers IRVE (meme parcours admin), PAC, etc. |
| Installateurs ne veulent pas payer pour de l'admin | Moyenne | Moyen | Freemium + ROI calculable : "1 dossier rejete = X semaines de retard sur la prime" |
| Complexite reglementaire qui change | Haute | Moyen | Veille reglementaire = fonctionnalite premium, contenu SEO |

## Verdict

**RETENUE**

Score 16/20 = idee prioritaire. Ocean bleu confirme sur le suivi administratif post-devis. Marche en explosion (+74%/an). Cible identifiable (liste Qualit'EnR publique). Decideur unique. Argument de vente visuel en 10 secondes. MVP faisable en 6-8 semaines sur stack maitrisee.

---

*Generee le 2026-02-06 - Run 002, Angle 11*
