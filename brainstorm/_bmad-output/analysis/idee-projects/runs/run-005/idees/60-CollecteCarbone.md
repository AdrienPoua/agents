# Idee #60 - CollecteCarbone

## Angle : MARCHES EN CROISSANCE RAPIDE

---

## Nom du projet
**CollecteCarbone** - Portail de collecte de donnees pour consultants bilan carbone independants

## Cible
Consultants bilan carbone / RSE independants et petits cabinets (1-5 personnes) qui realisent des bilans carbone (methode Bilan Carbone, GHG Protocol, BEGES) pour le compte de PME/ETI clientes.

**Taille du marche :**
- 30 000+ personnes formees a la methode Bilan Carbone en France (source : ABC - Association pour la Transition Bas Carbone)
- 1 300+ organisations membres de l'ABC, dont une part significative de consultants independants et petits bureaux d'etudes
- Annuaire public des prestataires Bilan Carbone sur abc-transitionbascarbone.fr (scrapable)
- Annuaire APCC (Association des Professionnels en Conseil Climat) sur annuaire.apc-climat.fr (scrapable)
- Croissance explosive du marche : obligation BEGES elargie, CSRD pour les ETI (transposition progressive), loi Climat & Resilience, plans de transition
- TJM consultant bilan carbone : 500-1 000 EUR/jour (source : RH Solutions 2025) - public qui a le budget pour un outil a 30-50 EUR/mois
- Le paquet Omnibus (report CSRD pour les PME < 1 000 salaries) a AUGMENTE la demande pour les consultants externes : les entreprises qui ne sont plus obligees de faire un reporting CSRD complet veulent quand meme un bilan carbone volontaire, mais via un prestataire plutot qu'en interne

## Douleur
Le consultant bilan carbone passe 40-60% de son temps de mission a COLLECTER les donnees de son client, pas a les analyser. Il envoie des fichiers Excel avec des colonnes a remplir (consommations energetiques, km parcourus, achats, dechets...), relance par email 3-4 fois, recoit des donnees incompletes dans des formats differents (PDF de factures EDF, captures d'ecran de compteurs, tableaux Excel mal remplis), et doit tout consolider manuellement avant de pouvoir commencer le calcul. S'il gere 5-10 clients en parallele, il perd la vision d'ensemble : qui a envoye quoi, quelle donnee manque, quel client bloque la mission depuis 3 semaines. Les plateformes de comptabilite carbone (Take[air] a 150 EUR/mois/client + 950 EUR onboarding, Sami, Carbo, Greenly) sont concues pour l'ENTREPRISE cliente, pas pour le CONSULTANT multi-client. Et elles incluent le moteur de calcul, ce qui les rend cheres et redondantes si le consultant a deja sa propre methode.

## Declencheur d'achat
- **Premiere mission multi-client** : quand le consultant passe de 1-2 a 5+ missions simultanees, le systeme "Excel + email + relance manuelle" s'effondre. C'est le moment ou il cherche un outil.
- **Client qui bloque** : une mission en retard de 3 semaines parce que le DAF du client n'a pas envoye les factures d'electricite. Le consultant a relance 4 fois par email, le message s'est perdu dans la boite. Il veut un portail ou le client voit clairement ce qu'on attend de lui.
- **Periode haute de bilan (Q1-Q2)** : les bilans carbone sont souvent realises sur l'exercice N-1, donc concentres sur janvier-juin. Le consultant qui gere 8-10 bilans simultanes en Q1 vit un enfer de collecte.
- **Obligation BEGES elargie** : de plus en plus d'entreprises sont soumises au bilan d'emissions de GES reglementaire (entreprises de 250+ salaries dans le secteur prive depuis 2023), ce qui genere un afflux de missions pour les consultants.

## Concurrents connus

| Concurrent | Positionnement | Forces | Faiblesses |
|---|---|---|---|
| **Take[air]** | Plateforme SaaS Bilan Carbone + accompagnement pour consultants | Complete (calcul + collecte + livrables reglementaires), base facteurs ADEME integree | 150 EUR/mois PAR CLIENT + 950 EUR onboarding. Sur 8 clients = 1 200 EUR/mois. Pas economiquement viable pour un freelance. Le client n'a pas acces direct a la plateforme (seul le consultant saisit). |
| **Sami** | Plateforme SaaS decarbonation pour entreprises | UX moderne, automatisation, bonne collecte collaborative | Positionnee pour l'ENTREPRISE, pas le consultant multi-client. Pas de vue "portefeuille de missions". Prix entreprise (non public, generalement 500+ EUR/mois). |
| **Carbo (HelloCarbo)** | Solution Bilan Carbone pour PME | Simple, bonne UX, integrations comptables | Meme probleme : cible l'entreprise, pas le consultant. Le consultant ne peut pas gerer 10 clients depuis un seul dashboard. |
| **Greenly** | Plateforme carbone tout-en-un, bien financee (50M+ leves) | Automatisation via APIs bancaires/comptables, forte notoriete | Cible les ETI/grandes entreprises. Prix 500-2000+ EUR/mois. Surdimensionnee et trop chere pour un consultant freelance. |
| **Excel + email** | Le statu quo de 80%+ des consultants independants | Gratuit, flexible | Relances manuelles, pas de visibilite client, donnees dans 15 formats differents, aucune traçabilite, aucun suivi multi-client |

**Analyse concurrentielle :** Toutes les plateformes carbone existantes sont concues pour l'ENTREPRISE qui fait son propre bilan (ou se fait accompagner). Aucune n'est concue pour le CONSULTANT qui gere un portefeuille de missions. Le consultant a besoin d'un outil de collecte + suivi de projet, PAS d'un moteur de calcul (il a deja sa methode/ses outils de calcul). C'est un CRM de collecte de donnees, pas un logiciel de comptabilite carbone.

## Differentiation
1. **Portail client de collecte** : pour chaque mission, le consultant cree un espace client ou le client (DAF, office manager, responsable RSE) voit exactement les donnees a fournir, avec des champs pre-structures (kWh elec, litres carburant, km avion, tonnes dechets...) et peut uploader des fichiers (factures, releves). Pas besoin que le client comprenne le bilan carbone - il repond a des questions simples.
2. **Auto-relance intelligente** : si le client n'a pas rempli une section apres 5 jours, il recoit un rappel automatique personnalise. Le consultant parametre la frequence. Fini les 4 emails de relance manuels.
3. **Dashboard multi-missions** : vue d'ensemble de toutes les missions en cours. Pour chaque client : % de donnees collectees, donnees manquantes, date de derniere activite, statut de la mission. Le consultant voit en un coup d'oeil ou ca bloque.
4. **Templates par secteur** : modeles de questionnaires de collecte pre-configures par secteur (bureau/tertiaire, industrie, commerce, transport, agriculture). Le consultant gagne 2h de preparation par mission.
5. **Export structuree** : une fois les donnees collectees, export CSV/Excel propre et structure, pret a etre injecte dans n'importe quel outil de calcul (Base Carbone ADEME, tableur consultant, Take[air], etc.). Pas d'enfermement.
6. **Prix consultant** : 39-49 EUR/mois pour un nombre illimite de missions actives (ou freemium : 3 missions gratuites, illimite en payant). Le consultant paye, pas le client.
7. **Pas de moteur de calcul** : volontairement pas de calcul d'empreinte integre. CollecteCarbone est un OUTIL DE COLLECTE, pas un logiciel de comptabilite carbone. Ca evite la responsabilite metier et la concurrence frontale avec Greenly/Sami/Carbo.

## Score rapide /20

| Critere | Note | Justification |
|---|---|---|
| **Intensite douleur** | 4/5 | La collecte de donnees est le goulot d'etranglement #1 cite par les consultants bilan carbone. C'est ce qui fait deraper les missions de 2 semaines a 2 mois. Ca ne coute pas une amende, mais ca coute directement du CA (missions en retard = moins de missions realisees par an = moins de revenu). Pour un consultant a 700 EUR/jour, chaque semaine de retard de collecte = 3 500 EUR de CA perdu potentiel. |
| **Facilite acquisition** | 4/5 | Annuaire ABC public et scrapable (prestataires Bilan Carbone). Annuaire APCC. Profils LinkedIn taggues "consultant bilan carbone" ou "consultant RSE". SEO sur "collecte donnees bilan carbone", "questionnaire bilan carbone client", "template collecte BEGES". Presence sur les formations ABC (30 000 formes = canal). Communaute active sur LinkedIn (posts RSE/carbone tres engages). |
| **Simplicite vente** | 4/5 | "Vos clients remplissent eux-memes leurs donnees carbone dans un portail dedie. Vous voyez en 1 clic ou en est chaque mission." Tout consultant qui a relance un DAF 4 fois par email comprend la valeur en 5 secondes. Decideur unique (le consultant freelance ou le gerant du petit cabinet). |
| **Faisabilite solo** | 5/5 | CRUD missions + portail client (formulaires dynamiques) + systeme de relance (cron + emails) + dashboard. Stack Next.js + Supabase + Resend/Postmark. Pas de calcul carbone, pas de base facteurs d'emission, pas d'API complexe. MVP 2-3 semaines (portail basique + relance + dashboard). |

**TOTAL : 17/20**

## Verification criteres eliminatoires

- Marketplace two-sided : NON (le consultant est le client payant, le portail client est un sous-produit de l'outil)
- Demarchage telephonique permanent : NON (cold email cible via annuaires ABC/APCC + SEO + LinkedIn + presence aux formations)
- Cycle de vente > 1 mois : NON (self-service, prix freelance, douleur immediate)
- Marche < 500 cibles : NON (1 300+ organisations ABC, 30 000+ formes, des milliers de consultants independants et petits cabinets)
- Concurrent dominant : NON (aucun outil de collecte dedie pour le consultant multi-client. Greenly/Sami/Carbo sont des plateformes pour entreprises, pas pour consultants)
- Aucun canal acquisition en ligne : NON (annuaires publics + SEO + LinkedIn + communaute ABC)
- Architecture complexe : NON (CRUD + formulaires + emails + dashboard, stack classique)
- Responsabilite metier : NON (outil de collecte de donnees brutes et de suivi de projet. Pas de calcul d'empreinte, pas d'interpretation scientifique ou reglementaire. Le consultant fait ses propres calculs avec ses propres outils.)

**AUCUN critere eliminatoire declenche.**

## Verdict
**RETENUE** - Marche en croissance explosive (BEGES elargi, CSRD progressive, plans de transition, loi Climat & Resilience) qui genere un afflux de missions pour les consultants bilan carbone independants. Ces consultants sont de plus en plus nombreux (30 000+ formes, 1 300+ organisations ABC) mais n'ont AUCUN outil dedie pour gerer leur goulot d'etranglement principal : la collecte de donnees client. Les plateformes carbone existantes (150-2000 EUR/mois) ciblent l'entreprise, pas le consultant. CollecteCarbone se positionne en COMPLEMENT (pas en remplacement) de ces plateformes, sur un creneau de prix accessible (39-49 EUR/mois) et un perimetre simple sans responsabilite metier.

---

### Sources
- [Annuaire prestataires Bilan Carbone - ABC](https://abc-transitionbascarbone.fr/les-acteurs/annuaire-des-prestataires/)
- [Annuaire APCC - Professionnels Conseil Climat](https://annuaire.apc-climat.fr/)
- [Formations Bilan Carbone - 30 000+ personnes formees (ABC)](https://abc-transitionbascarbone.fr/agir/se-former-au-bilan-carbone/)
- [Logiciel Bilan Carbone pour consultants - Take[air] 150 EUR/mois/client](https://www.takeair.fr/consultant/)
- [7 erreurs frequentes collecte donnees carbone (Take[air])](https://www.takeair.fr/blog/bilan-carbone/erreurs-frequentes-collecte-donnees-carbone/)
- [Methode de collecte des donnees d'activite - Bilan Carbone](https://www.bilancarbone-methode.com/4-comptabilisation/4.2-methode-de-collecte-des-donnees-dactivite)
- [Barometre competences consultant RSE 2025 (RH Solutions)](https://www.rh-solutions.com/actualites/2026-barometre-des-competences-du-consultant-rse-salarie-ou-freelance/)
- [Scope 3 obligatoire - collecte fournisseurs (Provigis)](https://provigis.com/blog/rse/scope-3-obligatoire-bilan-carbone)
- [Logiciel bilan carbone - comparatif (WeCount)](https://www.wecount.io/ressources-articles/choisir-outil-calcul-bilan-carbone)
- [Paquet Omnibus - report CSRD PME cotees 2026 (Provigis)](https://provigis.com/blog/rse/csrd-pme-cotees-2026)
