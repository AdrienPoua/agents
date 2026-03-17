# Election du Projet Gagnant

> **Date :** 6 fevrier 2026
> **Methode :** Grille de 18 criteres ponderes /100 (voir comparaison-final.md)
> **Finalistes :** FormaPilot, COPRO-ENERGIE, DUERPilot, SeuilRH

---

## Resultat Final

```
  #1  COPRO-ENERGIE   86.5 / 100  ████████████████████░░  GAGNANT
  #2  SeuilRH         75.9 / 100  ███████████████░░░░░░░
  #3  DUERPilot       75.6 / 100  ███████████████░░░░░░░
  #4  FormaPilot      71.1 / 100  ██████████████░░░░░░░░
```

---

## Scoring Detaille

### Grille Complete

| Critere | Max | COPRO-ENERGIE | SeuilRH | DUERPilot | FormaPilot |
|---------|-----|:---:|:---:|:---:|:---:|
| **A. VITESSE (25%)** | | | | | |
| A1. Temps 1er euro | /5 | **4** | 3 | 3 | 2 |
| A2. Complexite MVP | /5 | 3 | 3 | 3 | 3 |
| A3. Fit stack | /5 | **4** | 4 | 4 | 4 |
| Sous-total A (brut) | /15 | **11** | 10 | 10 | 9 |
| **Score A pondere** | /25 | **18.3** | 16.7 | 16.7 | 15.0 |
| | | | | | |
| **B. ACQUISITION (25%)** | | | | | |
| B1. Donnees publiques | /5 | **5** | 4 | 3 | 4 |
| B2. Force SEO | /5 | 4 | 4 | **5** | 4 |
| B3. Lead magnet | /5 | **5** | 4 | 4 | 4 |
| B4. Prescripteurs | /5 | 4 | **5** | **5** | 3 |
| Sous-total B (brut) | /20 | **18** | 17 | 17 | 15 |
| **Score B pondere** | /25 | **22.5** | 21.3 | 21.3 | 18.8 |
| | | | | | |
| **C. MONETISATION (20%)** | | | | | |
| C1. Willingness to pay | /5 | **5** | **5** | 4 | **5** |
| C2. Recurrence | /5 | **5** | 4 | 4 | 4 |
| C3. MRR 12 mois | /5 | **4** | 3 | 3 | **4** |
| Sous-total C (brut) | /15 | **14** | 12 | 11 | 13 |
| **Score C pondere** | /20 | **18.7** | 16.0 | 14.7 | 17.3 |
| | | | | | |
| **D. DEFENSABILITE (15%)** | | | | | |
| D1. Moat | /5 | **5** | 4 | 4 | 3 |
| D2. Risque reglementaire | /5 | **5** | **5** | **5** | 4 |
| D3. Dependance externe | /5 | 4 | **5** | 3 | 4 |
| Sous-total D (brut) | /15 | **14** | **14** | 12 | 11 |
| **Score D pondere** | /15 | **14.0** | **14.0** | 12.0 | 11.0 |
| | | | | | |
| **E. IMPACT CV (10%)** | | | | | |
| E1. Patterns avances | /5 | **4** | 3 | **4** | 3 |
| E2. Sujet parlant | /5 | **5** | 3 | 3 | 3 |
| Sous-total E (brut) | /10 | **9** | 6 | 7 | 6 |
| **Score E pondere** | /10 | **9.0** | 6.0 | 7.0 | 6.0 |
| | | | | | |
| **F. SCALABILITE (5%)** | | | | | |
| F1. Support client | /5 | **4** | 2 | **4** | 3 |
| **Score F pondere** | /5 | **4.0** | 2.0 | **4.0** | 3.0 |
| | | | | | |
| **SCORE FINAL** | **/100** | **86.5** | **75.9** | **75.6** | **71.1** |

---

## Justifications Detaillees par Projet

### #1 - COPRO-ENERGIE (86.5/100)

#### Axe A : Vitesse (18.3/25)

| Critere | Score | Justification |
|---------|:-----:|---------------|
| A1 | **4** | MVP 6 semaines (data pipeline + dashboard + PDF). Lead magnet automatise des le lancement. **Premier euro realiste en 8-10 semaines.** |
| A2 | **3** | ETL 4 sources publiques + geocoding + scoring energetique + generation PDF. Non trivial mais pas de workflow engine complexe. Le coeur = ingestion + croisement + affichage. |
| A3 | **4** | Next.js + Supabase + Docker = parfait. Besoin de librairie geocoding + PDF, rien d'exotique. |

#### Axe B : Acquisition (22.5/25) - LE POINT FORT

| Critere | Score | Justification |
|---------|:-----:|---------------|
| B1 | **5** | Le registre ANAH contient le **nom du syndic pour chaque copropriete**. On peut croiser avec la base DPE ADEME pour generer automatiquement : "Vous gerez 72 coproprietes, 23 sont des passoires thermiques. Voici votre rapport gratuit." C'est le seul projet ou **l'acquisition client est automatisable de bout en bout** sans aucun demarchage humain. |
| B2 | **4** | "DPE collectif obligatoire", "passoire thermique copropriete", "obligation energetique copropriete" = bon volume, urgence actuelle (derniere echeance janvier 2026). |
| B3 | **5** | Le rapport energetique gratuit personnalise est **le lead magnet ultime** : il revele un probleme que le syndic ne connaissait pas, chiffre en euros. Aucun effort commercial necessaire - le rapport fait le travail de vente. |
| B4 | **4** | FNAIM, UNIS (federations de syndics) peuvent labelliser. Les syndics se parlent entre eux dans un marche concentre (4 400 syndics). |

#### Axe C : Monetisation (18.7/20)

| Critere | Score | Justification |
|---------|:-----:|---------------|
| C1 | **5** | Le travail manuel coute 750-1 500 EUR par copropriete. A 72 copros par syndic, c'est 54 000-108 000 EUR de travail que l'outil remplace. Un abo a 249 EUR/mois est une evidence. |
| C2 | **5** | Recurrence naturelle exceptionnelle : ~35 000 nouveaux DPE publies par semaine (dashboard toujours utile), AG annuelles (rapport necessaire chaque annee), interdictions progressives jusqu'en 2034 (G=2025, F=2028, E=2034). Le syndic ne peut PAS se desabonner. |
| C3 | **4** | 4 400 syndics cibles. Objectif : 20 clients a 249 EUR = 4 980 EUR MRR a 12 mois. Realiste grace au lead magnet automatise + marche concentre. |

#### Axe D : Defensabilite (14.0/15)

| Critere | Score | Justification |
|---------|:-----:|---------------|
| D1 | **5** | Le croisement de 4 bases publiques (DPE ADEME + ANAH + DVF + Cadastre) est **unique**. Personne ne le fait. L'enrichissement continu des donnees cree un fossé croissant. Plus les syndics utilisent l'outil, plus l'historique a de valeur. |
| D2 | **5** | Loi Climat et Resilience : obligation permanente. Les interdictions de location vont jusqu'en 2034. Pas un decret experimental, c'est inscrit dans la loi. Aucun risque d'abrogation. |
| D3 | **4** | Dependance aux APIs publiques (ADEME, ANAH, DVF, Cadastre). Ces APIs sont stables, maintenues par l'Etat, et les donnees sont aussi disponibles en telechargement bulk. Risque faible. |

#### Axe E : Impact CV (9.0/10)

| Critere | Score | Justification |
|---------|:-----:|---------------|
| E1 | **4** | Data pipeline ETL multi-sources, geocoding/geospatial, scoring algorithmique, real-time sync, generation PDF. 3-4 patterns avances. |
| E2 | **5** | **"J'ai construit un data pipeline qui croise 4 bases de donnees gouvernementales pour identifier automatiquement les passoires thermiques dans 315 000 coproprietes."** C'est le genre de phrase qui arrete un recruteur. Impact mesurable, donnees reelles, probleme concret. |

#### Axe F : Scalabilite (4.0/5)

| Critere | Score | Justification |
|---------|:-----:|---------------|
| F1 | **4** | Dashboard self-service, rapports auto-generes. Les syndics sont des professionnels habitues aux outils numeriques. Support minimal : FAQ + documentation suffit. |

---

### #2 - SeuilRH (75.9/100)

#### Axe A : Vitesse (16.7/25)

| Critere | Score | Justification |
|---------|:-----:|---------------|
| A1 | **3** | MVP 7 semaines. Mais le rule engine du Code du travail est dense a codifier correctement. Premier euro realiste en 12-14 semaines avec ciblage SIRENE. |
| A2 | **3** | Rule engine complexe (dizaines d'obligations par seuil), generation de documents juridiques (reglement interieur, convocations CSE), CQRS pour audit trail. |
| A3 | **4** | Next.js + Supabase. Rule engine en TypeScript. Document generation avec PDF. Pas de techno exotique. |

#### Axe B : Acquisition (21.3/25)

| Critere | Score | Justification |
|---------|:-----:|---------------|
| B1 | **4** | SIRENE filtre par tranche effectif (45-55 salaries). On peut identifier les entreprises proches du seuil 50 et les cibler. Message : "Vous avez 48 salaries, savez-vous ce qui vous attend a 50 ?" Bon mais moins personnalise que COPRO-ENERGIE (on ne revele pas un probleme inconnu). |
| B2 | **4** | "obligations 50 salaries", "seuil CSE 11 salaries", "passage 50 salaries" = bon volume, intent informationnel qui convertit. |
| B3 | **4** | Diagnostic gratuit "215 000 EUR de risque" = effet choc. Le dirigeant decouvre l'ampleur des obligations. Puissant mais reste un diagnostic generique (memes obligations pour tous au meme seuil). |
| B4 | **5** | **Les experts-comptables sont les prescripteurs parfaits.** Ils voient l'effectif de chaque client, ils savent quand un seuil approche, et ils n'ont pas d'outil a recommander. Commission 20% = incentive fort. Un seul expert-comptable = 5-10 referrals. |

#### Axe C : Monetisation (16.0/20)

| Critere | Score | Justification |
|---------|:-----:|---------------|
| C1 | **5** | Les cabinets d'avocats facturent 5 000-15 000 EUR pour un audit de conformite au seuil. L'outil a 99 EUR/mois = 50-150x moins cher. Budget largement justifie. |
| C2 | **4** | Mise en conformite sur 12 mois (99 EUR/mois) puis maintien (49 EUR/mois). L'entreprise continue de grandir = prochain seuil. Recurrence bonne mais rythme plus lent qu'un usage quotidien. |
| C3 | **3** | 50 000 entreprises/an franchissent un seuil. Objectif : 30 clients x 85 EUR moyen = 2 550 EUR MRR a 12 mois. Realiste mais modeste. Le canal expert-comptable pourrait accelerer mais prend du temps a etablir. |

#### Axe D : Defensabilite (14.0/15)

| Critere | Score | Justification |
|---------|:-----:|---------------|
| D1 | **4** | Le rule engine codifiant le Code du travail francais est complexe a reproduire. Des mois de travail juridique. Mais pas de donnees proprietaires uniques. |
| D2 | **5** | Les seuils d'effectif existent depuis des decennies. La loi PACTE 2019 a simplifie mais pas supprime. Aucun risque d'abrogation, c'est structurel au droit du travail francais. |
| D3 | **5** | Zero dependance externe critique. Le rule engine est interne. L'API DSN est optionnelle (enrichissement). L'outil fonctionne en standalone. |

#### Axe E : Impact CV (6.0/10)

| Critere | Score | Justification |
|---------|:-----:|---------------|
| E1 | **3** | Rule engine + CQRS audit trail + document generation. Solide mais pas exceptionnel. |
| E2 | **3** | "J'ai codifie le droit du travail francais en un moteur de regles." Interessant mais niche, moins percutant que du data engineering. |

#### Axe F : Scalabilite (2.0/5)

| Critere | Score | Justification |
|---------|:-----:|---------------|
| F1 | **2** | **Point faible majeur.** Les dirigeants qui franchissent un seuil auront BEAUCOUP de questions specifiques : "Est-ce que les CDD comptent ?", "Depuis quelle date exactement ?", "Mon cas particulier...". Risque de devenir du consulting deguise. |

---

### #3 - DUERPilot (75.6/100)

#### Axe A : Vitesse (16.7/25)

| Critere | Score | Justification |
|---------|:-----:|---------------|
| A1 | **3** | MVP 8 semaines. Acquisition par SEO (fort volume) + freemium. Premier euro realiste en 12-14 semaines. |
| A2 | **3** | Generation IA par code NAF, rule engine sectoriel, Event Sourcing pour conservation 40 ans, PDF signe. La partie IA ajoute de la complexite (prompts, qualite des outputs, edge cases par secteur). |
| A3 | **4** | Next.js + Supabase + API LLM (OpenAI/Anthropic). Stack connue, juste l'integration LLM en plus. |

#### Axe B : Acquisition (21.3/25)

| Critere | Score | Justification |
|---------|:-----:|---------------|
| B1 | **3** | SIRENE contient tous les employeurs mais c'est **trop large** (2,4M). Difficile de cibler specifiquement les non-conformes. Pas de donnee publique qui dit "cette entreprise n'a pas de DUERP". Ciblage moins precis que COPRO-ENERGIE ou SeuilRH. |
| B2 | **5** | **Meilleur SEO des 4 projets.** "DUERP modele gratuit", "document unique obligatoire", "DUERP en ligne" = volume de recherche ENORME. 2,4M d'entreprises concernees, plus de la moitie non conformes. Le traffic organique sera massif. |
| B3 | **4** | DUERP genere gratuitement avec filigrane "version non officielle". Le dirigeant voit le resultat, comprend la valeur, paye pour la version conforme et signee. Bon freemium. |
| B4 | **5** | **Experts-comptables = canal ideal.** Ils savent que leurs clients TPE n'ont pas de DUERP. Ils n'ont rien a recommander aujourd'hui. Commission 20% = incentive clair. CCI et CMA peuvent aussi relayer. |

#### Axe C : Monetisation (14.7/20)

| Critere | Score | Justification |
|---------|:-----:|---------------|
| C1 | **4** | Consultants QSE a 500-2 000 EUR/an. Budget existant mais plus petit que les autres projets. Les TPE sont price-sensitive. |
| C2 | **4** | Mise a jour annuelle obligatoire (11+ salaries) + apres chaque accident du travail + conservation 40 ans. Bonne recurrence. |
| C3 | **3** | **Le point faible : le ticket est bas.** 149 EUR/AN pour TPE = ~12 EUR/mois. Il faut 400 clients pour atteindre 5 000 EUR MRR. Objectif realiste a 12 mois : 150-250 clients = 1 800-3 000 EUR MRR. Le volume SEO compense partiellement. |

#### Axe D : Defensabilite (12.0/15)

| Critere | Score | Justification |
|---------|:-----:|---------------|
| D1 | **4** | IA sectorisee par code NAF = expertise accumulee. Conservation 40 ans = lock-in extreme (le client ne peut pas partir sans perdre son historique legal). Des concurrents existent (DigiRisk, DUERP.com) mais aucun avec IA + conservation. |
| D2 | **5** | DUERP obligatoire depuis 2001. 25 ans de stabilite. Conservation 40 ans depuis 2021. Aucun risque politique, c'est ancre dans le Code du travail. |
| D3 | **3** | **Dependance aux APIs LLM.** Si OpenAI change ses prix ou sa politique, ca impacte directement le produit. Alternatives existent (Anthropic, open-source) mais c'est une dependance reelle. |

#### Axe E : Impact CV (7.0/10)

| Critere | Score | Justification |
|---------|:-----:|---------------|
| E1 | **4** | Event Sourcing (historique 40 ans), rule engine sectoriel, generation IA, multi-tenant. Bonne diversite de patterns. |
| E2 | **3** | "J'ai construit un outil qui genere le Document Unique en 30 min avec de l'IA sectorisee." Bon mais moins impactant qu'un data pipeline multi-sources. Le DUERP est un sujet "ennuyeux" en entretien. |

#### Axe F : Scalabilite (4.0/5)

| Critere | Score | Justification |
|---------|:-----:|---------------|
| F1 | **4** | Wizard self-service, l'IA fait le gros du travail. Le dirigeant de TPE a peu de questions (il veut juste son document). FAQ suffit. |

---

### #4 - FormaPilot (71.1/100)

#### Axe A : Vitesse (15.0/25)

| Critere | Score | Justification |
|---------|:-----:|---------------|
| A1 | **2** | **Point faible majeur.** MVP 3-4 mois (workflow engine 32 indicateurs + emargement + document generation). Puis acquisition client 1-2 mois. Premier euro realiste en **5-6 mois**. C'est long pour quelqu'un sans revenu. |
| A2 | **3** | Workflow engine pour 32 indicateurs Qualiopi, chacun avec ses propres preuves et documents. Emargement numerique (signature). Generation de conventions, attestations, programmes. Multi-tenant. C'est un vrai produit complexe. |
| A3 | **4** | Next.js + Supabase + PDF. Stack parfaite, juste PDF generation en plus. |

#### Axe B : Acquisition (18.8/25)

| Critere | Score | Justification |
|---------|:-----:|---------------|
| B1 | **4** | Base data.gouv.fr des 90 000 organismes declares (SIRET). On peut trouver les contacts via SIRET → site web → email. Bon mais **pas de message ultra-personnalise** comme COPRO-ENERGIE (on ne peut pas dire "il vous manque les indicateurs 3, 7 et 15"). |
| B2 | **4** | "logiciel qualiopi", "preparer audit qualiopi", "gestion formation qualiopi" = bon volume avec intent d'achat. Concurrence SEO avec Digiforma. |
| B3 | **4** | Diagnostic de preparation audit : "Etes-vous pret pour votre audit Qualiopi ? Score : 45%." Bon lead magnet mais generique (questionnaire, pas de donnee personnalisee automatique). |
| B4 | **3** | Groupes Facebook formateurs actifs, certificateurs Qualiopi possibles. Mais pas de prescripteur naturel aussi puissant que l'expert-comptable pour SeuilRH/DUERPilot. Les formateurs sont independants et atomises. |

#### Axe C : Monetisation (17.3/20)

| Critere | Score | Justification |
|---------|:-----:|---------------|
| C1 | **5** | Les consultants Qualiopi facturent 2 000-5 000 EUR. Les formateurs ont l'habitude de payer des outils. Digiforma facture deja 80-200 EUR/mois → le budget est valide. |
| C2 | **4** | Usage quotidien (admin formation), audits tous les 18 mois et 3 ans. Donnees accumulees dans l'outil. Bonne retention mais cycle d'audit = moment de verite (si le formateur arrete la formation, il se desabonne). |
| C3 | **4** | 90 000 cibles, prix 49-149 EUR/mois. Objectif : 40-60 clients x 79 EUR = 3 200-4 700 EUR MRR. Realiste avec le volume de cibles, mais le cycle de vente est plus long (le formateur attend son prochain audit). |

#### Axe D : Defensabilite (11.0/15)

| Critere | Score | Justification |
|---------|:-----:|---------------|
| D1 | **3** | Expertise Qualiopi codifiee (32 indicateurs). Mais **Digiforma existe deja** avec 52% de PDM sur ce marche. Le moat est l'UX et l'IA, pas les donnees. Copiable en 3-6 mois par un concurrent motive. |
| D2 | **4** | Qualiopi est etablie depuis 2022, V9 en 2025. Durable, mais c'est une certification (pas une loi fondamentale). Un gouvernement pourrait theoriquement modifier le systeme, meme si c'est improbable. |
| D3 | **4** | Pas de dependance critique. API France Competences optionnelle. L'outil fonctionne en standalone. |

#### Axe E : Impact CV (6.0/10)

| Critere | Score | Justification |
|---------|:-----:|---------------|
| E1 | **3** | Workflow engine + multi-tenant + document generation. Patterns solides mais standard pour un SaaS. |
| E2 | **3** | "J'ai construit un outil de conformite pour les organismes de formation." Correct mais pas de "wow factor" en entretien technique. Le sujet Qualiopi est niche et pas sexy. |

#### Axe F : Scalabilite (3.0/5)

| Critere | Score | Justification |
|---------|:-----:|---------------|
| F1 | **3** | Support modere. Les formateurs auront des questions sur les indicateurs specifiques ("est-ce que mon document est suffisant pour l'indicateur 7 ?"). Risque de questions metier frequentes. |

---

## Analyse Comparative par Axe

### Qui gagne sur chaque axe ?

| Axe | #1 | #2 | #3 | #4 |
|-----|:--:|:--:|:--:|:--:|
| A. Vitesse | **COPRO-ENERGIE** (18.3) | SeuilRH / DUERPilot (16.7) | - | FormaPilot (15.0) |
| B. Acquisition | **COPRO-ENERGIE** (22.5) | SeuilRH / DUERPilot (21.3) | - | FormaPilot (18.8) |
| C. Monetisation | **COPRO-ENERGIE** (18.7) | FormaPilot (17.3) | SeuilRH (16.0) | DUERPilot (14.7) |
| D. Defensabilite | **COPRO-ENERGIE / SeuilRH** (14.0) | - | DUERPilot (12.0) | FormaPilot (11.0) |
| E. Impact CV | **COPRO-ENERGIE** (9.0) | DUERPilot (7.0) | SeuilRH / FormaPilot (6.0) | - |
| F. Scalabilite | **COPRO-ENERGIE / DUERPilot** (4.0) | FormaPilot (3.0) | SeuilRH (2.0) | - |

**COPRO-ENERGIE est #1 ou #1 ex aequo sur les 6 axes.** Il n'a aucun point faible majeur.

### Forces et faiblesses de chaque projet

```
COPRO-ENERGIE (86.5)
  Forces  : Acquisition automatisee (B1+B3), recurrence extreme (C2), moat data (D1), story CV (E2)
  Faiblesses : Marche plus petit (4 400 syndics) mais ticket eleve compense

SeuilRH (75.9)
  Forces  : Prescripteurs naturels (B4), defensabilite (D), zero dependance (D3)
  Faiblesses : Support lourd (F1), MRR modeste (C3), sujet peu sexy en CV (E2)

DUERPilot (75.6)
  Forces  : Meilleur SEO (B2), prescripteurs forts (B4), marche le plus large (2.4M)
  Faiblesses : Ticket trop bas (C3), dependance LLM (D3)

FormaPilot (71.1)
  Forces  : Willingness to pay (C1), MRR potentiel (C3), marche captif Qualiopi
  Faiblesses : MVP trop long (A1), concurrence Digiforma (D1), pas de prescripteur fort (B4)
```

---

## Pourquoi COPRO-ENERGIE Gagne

### 1. L'acquisition client est une machine automatique

C'est le seul projet ou tu peux :
1. Telecharger le registre ANAH (nom du syndic par copropriete)
2. Croiser avec la base DPE ADEME (classe energetique par batiment)
3. Generer automatiquement un rapport personnalise par syndic
4. Envoyer : "Vous gerez 72 coproprietes. 23 sont des passoires thermiques. Voici votre rapport gratuit."

**Zero demarchage. Zero telephone. Zero networking.** Un script Python + une API d'envoi d'emails = acquisition client automatisee.

Les autres projets necessitent tous un effort humain dans l'acquisition :
- FormaPilot : tu envoies un email generique "preparez votre audit Qualiopi"
- SeuilRH : tu cibles par effectif mais sans donnee personnalisee
- DUERPilot : tu attends que le trafic SEO vienne a toi

### 2. La recurrence est naturelle et inevitable

```
Semaine apres semaine :
→ 35 000 nouveaux DPE publies = le dashboard se met a jour
→ Le syndic DOIT verifier si ses coproprietes sont impactees

Chaque annee :
→ AG obligatoire = rapport energetique necessaire
→ Nouvelles interdictions de location qui avancent

Jusqu'en 2034 :
→ G interdit (2025), F interdit (2028), E interdit (2034)
→ Le besoin ne disparait JAMAIS
```

### 3. Le moat est le plus solide

Croiser 4 bases de donnees publiques (ADEME + ANAH + DVF + Cadastre) avec geocoding et scoring = **personne d'autre ne le fait**. C'est un avantage technique reel, pas juste une UX plus jolie.

### 4. L'histoire en entretien est la meilleure

> "J'ai construit un SaaS qui croise 4 bases de donnees gouvernementales (9 millions de DPE, 528 000 coproprietes, transactions immobilieres, cadastre) pour identifier automatiquement les passoires thermiques dans 315 000 coproprietes. Le produit genere des rapports energetiques personnalises par immeuble, directement exploitables en Assemblee Generale."

C'est le genre de projet qui fait dire a un recruteur : "Explique-moi comment tu as fait le matching geographique entre les bases."

---

## Les Risques de COPRO-ENERGIE (pour etre honnete)

| Risque | Gravite | Mitigation |
|--------|---------|------------|
| **Marche plus petit** (4 400 syndics vs 2.4M pour DUERPilot) | Moyenne | Ticket eleve (249 EUR/mois) compense. 20 clients = 5K MRR. Et extension possible vers les gestionnaires de patrimoine, les bailleurs sociaux. |
| **Qualite des donnees publiques** (adresses mal formatees, DPE manquants) | Moyenne | Les APIs ADEME et ANAH sont bien maintenues. Geocoding avec tolerance. Commencer par les coproprietes avec DPE complet. |
| **Les syndics sont conservateurs** | Faible | Le lead magnet gratuit contourne cette resistance. Ils ne s'abonnent pas a un outil inconnu, ils recoivent un rapport gratuit qui revele un probleme urgent. La vente se fait apres. |
| **Un concurrent pourrait copier** | Faible a court terme | Il faut des mois pour construire le pipeline de croisement de donnees + l'accumulation d'enrichissements. First-mover advantage significatif. |

---

## Verdict Final

```
COPRO-ENERGIE est le gagnant parce qu'il est le seul projet
ou TOUTES les conditions sont reunies simultanement :

✅ MVP rapide          → 6 semaines
✅ Acquisition sans vente → Lead magnet automatise par donnees publiques
✅ Premier euro rapide  → 8-10 semaines
✅ Recurrence forte     → Usage hebdomadaire, besoin jusqu'en 2034
✅ Moat data            → Croisement unique de 4 bases publiques
✅ Story CV             → Data pipeline multi-sources impressionnant
✅ Zero dependance      → APIs gouvernementales stables
✅ Reglementation solide → Loi Climat et Resilience, pas un decret experimental

Aucun autre finaliste ne coche toutes ces cases.
```

---

## Prochaine Etape

**Lancer COPRO-ENERGIE.**

Semaine 1-2 : Valider les APIs publiques (ADEME, ANAH) et creer le pipeline de croisement de donnees.
Semaine 3-4 : Dashboard MVP + generation PDF rapport AG.
Semaine 5-6 : Lead magnet automatise + premiers envois.
Semaine 7-8 : Premier client payant.

---

*Document genere le 6 fevrier 2026*
