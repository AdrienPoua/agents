# Idee #53 - PlanifMarche

## Angle : DECIDEUR UNIQUE

---

## Nom du projet
**PlanifMarche** - Copilote administratif des commercants ambulants multi-marches

## Cible
Commercants non sedentaires (ambulants) qui travaillent sur plusieurs marches par semaine : marchands de fruits/legumes, fromagers, rotisseurs, marchands de vetements, bijoutiers, fleuristes, etc.

**Taille du marche :**
- 27 897 cartes de commercant ambulant delivrees par les CCI en 2023 (uniquement les nouvelles cartes annuelles)
- Estimation prudente : 50 000 a 70 000 commercants ambulants actifs en France (cartes valables 4 ans)
- Un commercant fait en moyenne 3 a 5 marches par semaine = gestion lourde multi-emplacements
- Secteur genere 6+ milliards EUR de CA (toutes activites confondues)
- Listes scrapables : registres CCI, annuaires de marches publics (chaque mairie publie la liste de ses marches), groupes Facebook "marches de [region]", forums de forains
- Decideur unique : le commercant lui-meme, souvent en auto-entreprise ou SARL unipersonnelle

## Douleur
Le commercant ambulant qui fait 3 a 5 marches par semaine doit jongler entre les droits de place differents par commune, les autorisations d'occupation temporaire (AOT) de chaque mairie, le renouvellement de sa carte ambulante tous les 4 ans, les dates limites des demandes d'emplacement annuelles, les regles specifiques de chaque marche (horaires de deballage, reglement interieur, jours feries) et la gestion de sa tresorerie de droits de place paye en cash sur place. Tout est gere sur papier, dans des agendas, ou dans la tete. Un seul oubli = emplacement perdu au profit d'un concurrent.

## Declencheur d'achat
- **Perte d'un emplacement** : le commercant oublie de renouveler sa demande annuelle d'emplacement aupres d'une mairie = son spot est attribue a un autre. Un bon emplacement genere 500-2000 EUR de CA par marche. Perdre un marche du samedi matin = catastrophe financiere.
- **Controle de la police municipale** : le commercant doit presenter sa carte ambulante, son AOT, son assurance RC, son numero de SIREN/SIRET. Documents manquants = amende de 5e classe (1500 EUR) et expulsion immediate du marche.
- **Renouvellement carte ambulante** (tous les 4 ans) : oubli = impossibilite legale d'exercer hors de sa commune de domiciliation. Chaque jour sans carte = jour sans revenu.
- **Hausse des droits de place** : le commercant n'a aucune visibilite sur l'evolution de ses couts de place par marche. Il decouvre la hausse en arrivant le matin.
- **Saison haute** (printemps/ete) : afflux de demandes d'emplacements temporaires pour marches saisonniers, festifs, de Noel = multiples deadlines a gerer simultanement.

## Concurrents connus

| Concurrent | Positionnement | Forces | Faiblesses |
|---|---|---|---|
| **Logitud Regie Marche** | Logiciel de gestion de marches pour les mairies/placiers | Gestion des emplacements cote mairie | Outil POUR les mairies, pas pour les commercants. Le commercant n'y a pas acces. |
| **Tactill / SumUp** | Caisse enregistreuse mobile pour marches | Encaissement, stocks | Aucune gestion administrative (emplacements, AOT, carte ambulante, droits de place) |
| **Phimag Food Truck** | Logiciel de caisse pour food trucks | Adapte commerce ambulant alimentaire | Caisse uniquement, pas de gestion multi-marches ni de suivi administratif |
| **Google Agenda + Excel** | L'outil du commercant moyen | Gratuit | Aucune automatisation, pas d'alertes, pas de suivi financier des droits de place, risque d'oubli |

**Analyse concurrentielle :** Il n'existe AUCUN SaaS dedie a la gestion administrative et au planning multi-marches du commercant ambulant. Les outils existants sont soit cote mairie (Logitud), soit de la caisse (Tactill, SumUp). Le commercant gere tout a la main. La niche est ouverte.

## Differentiation
1. **Planning multi-marches** : vue hebdomadaire de tous les marches du commercant, avec horaires de deballage, adresses, contacts placiers. Un seul endroit pour tout voir.
2. **Alertes de renouvellement** : notifications automatiques pour la carte ambulante (4 ans), les demandes d'emplacement annuelles par mairie, les assurances, et les documents obligatoires.
3. **Suivi financier des droits de place** : le commercant saisit ce qu'il paye en droits de place a chaque marche (souvent en especes). Tableaux de bord de rentabilite par marche, par jour, par saison.
4. **Coffre-fort documentaire** : carte ambulante, AOT, assurance RC, Kbis/SIREN, tous les documents au meme endroit. Generez un QR code a montrer aux controles de police municipale.
5. **Annuaire de marches** : base de donnees de marches par region avec jours, horaires, contacts placiers, tarifs droits de place (alimentation communautaire des utilisateurs).
6. **Prix TPE** : 9-15 EUR/mois. Un seul marche perdu rembourse 3 ans d'abonnement.
7. **Acquisition par communautes en ligne** : groupes Facebook de forains, forums de commercants ambulants, salons professionnels (Salon des Maires, Salon du Commerce Ambulant).

## Score rapide /20

| Critere | Note | Justification |
|---|---|---|
| **Intensite douleur** | 4/5 | Perte d'emplacement = perte seche de CA (500-2000 EUR par marche). Amende 1500 EUR en cas de controle sans documents. Carte ambulante expiree = interdiction d'exercer. La douleur est financiere et immediate. |
| **Facilite acquisition** | 3/5 | Pas de liste publique scrapable directement (pas de registre national des ambulants). MAIS : groupes Facebook tres actifs de forains par region, forums specialises, associations de commercants de marches, salons professionnels. SEO sur "gestion marche ambulant", "planning commercant marche". Acquisition communautaire plutot que cold email. |
| **Simplicite vente** | 5/5 | "Tous vos marches, deadlines et documents au meme endroit. Ne perdez plus jamais un emplacement." Comprend en 5 secondes. Le commercant ambulant decide seul, paye seul, pas de comite. |
| **Faisabilite solo** | 5/5 | Calendrier + alertes + saisie droits de place + stockage documents. Stack Next.js + Supabase. MVP 2-3 semaines. Aucune complexite technique. Pas de donnees sensibles au sens metier (pas de conseil legal/medical). |

**TOTAL : 17/20**

## Verification criteres eliminatoires

- Marketplace two-sided : NON (outil direct pour le commercant, pas de mise en relation)
- Demarchage telephonique : NON (acquisition communautaire Facebook/forums + SEO)
- Cycle de vente > 1 mois : NON (self-service, urgence immediate, prix tres bas)
- Marche < 500 cibles : NON (50 000 a 70 000 commercants ambulants actifs)
- Concurrent dominant : NON (aucun SaaS dedie existant pour les commercants ambulants)
- Aucun canal acquisition en ligne : NON (groupes Facebook, forums, SEO)
- Architecture complexe : NON (CRUD + calendrier + alertes + stockage docs)
- Responsabilite metier : NON (outil de planning et d'archivage, aucun conseil juridique)

**AUCUN critere eliminatoire declenche.**

## Verdict
**RETENUE** - Marche de 50 000+ commercants ambulants actifs, aucun concurrent SaaS dedie (niche completement ouverte), MVP ultra-simple (2-3 semaines), douleur financiere immediate (perte d'emplacement, amendes), decideur unique qui paye seul. Le point de vigilance est l'acquisition : pas de liste scrapable, mais des communautes en ligne tres actives (groupes Facebook de forains). Le prix tres bas (9-15 EUR/mois) et la proposition de valeur limpide ("ne perdez plus jamais un emplacement") facilitent le bouche-a-oreille dans un milieu ou tout le monde se connait.

---

### Sources
- [Commerce ambulant reglementation - Service Public](https://entreprendre.service-public.gouv.fr/vosdroits/F21856)
- [Carte commercant ambulant - Legalstart](https://www.legalstart.fr/fiches-pratiques/demarches-creation/carte-commercant-ambulant/)
- [Demander un emplacement marche - Service Public](https://entreprendre.service-public.gouv.fr/vosdroits/F32276)
- [Logitud Regie Marche - gestion emplacements mairies](https://logitud.fr/solutions/securite/regies-marches-application-suivi-encaissement-droit-de-places)
- [Formalites commerce ambulant - CCI Loiret](https://www.loiret.cci.fr/formalites-commerce-ambulant)
- [Guide commerce non sedentaire - CCI Paris IDF](https://www.cci-paris-idf.fr/sites/default/files/2021-01/Guide-commerce-non-sedentaire.pdf)
