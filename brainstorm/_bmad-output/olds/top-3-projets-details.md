# Top 3 Projets Retenus - Explication Détaillée

> **Date :** 5 février 2026
> **Objectif :** Comprendre exactement chaque projet, la douleur et la solution

---

## 1. FormaPilot - Gestion pour Organismes de Formation Qualiopi

### C'est quoi Qualiopi ? (Le contexte)

**Qualiopi** est une certification obligatoire en France pour tous les organismes qui font de la formation professionnelle et qui veulent accéder aux financements publics (CPF, OPCO, Pôle Emploi).

**Concrètement :**
- Tu es formateur indépendant ou tu as un centre de formation
- Tu veux que tes clients puissent payer leur formation avec leur CPF (Compte Personnel de Formation)
- Pour ça, tu DOIS être certifié Qualiopi
- Sans Qualiopi = pas d'accès aux 15 milliards € de financements formation en France

**Le processus Qualiopi :**
1. Tu prépares un dossier avec 32 indicateurs à respecter
2. Un auditeur vient vérifier que tu respectes tout
3. Si OK → certifié pour 3 ans
4. Audit de surveillance à 18 mois
5. Renouvellement à 3 ans

### La douleur (Le problème)

**Qui souffre ?**
- 90 000 organismes de formation en France
- Surtout les petits : formateurs indépendants, petits centres (1-10 personnes)

**De quoi ils souffrent ?**

```
AVANT L'AUDIT :
- "Je dois prouver 32 indicateurs mais je ne sais pas comment"
- "Je passe mes soirées à créer des documents Word/Excel"
- "J'ai peur d'oublier un truc et de rater mon audit"

PENDANT L'ACTIVITÉ :
- "Je passe 40% de mon temps en administratif au lieu de former"
- "Mes émargements sont sur papier, je les perds"
- "Je ne sais pas si mes documents sont conformes"

LORS DE L'AUDIT :
- "L'auditeur me demande un document, je mets 20 min à le retrouver"
- "Il me manque une preuve, je suis recalé"
```

**Combien ça coûte ?**
- Temps perdu : 10-15h/semaine en admin
- Consultant externe pour préparer l'audit : 2 000-5 000€
- Échec à l'audit = perte des financements = mort du business

### La solution (FormaPilot)

**Ce que fait l'application :**

```
┌─────────────────────────────────────────────────────────────────┐
│                        FORMAPILOT                                │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  📋 CHECKLIST QUALIOPI                                         │
│  ├── Indicateur 1 : Conditions d'information ✅                │
│  ├── Indicateur 2 : Objectifs de formation ✅                  │
│  ├── Indicateur 3 : Prérequis ⚠️ (document manquant)          │
│  └── ... 32 indicateurs avec statut en temps réel              │
│                                                                 │
│  📄 GÉNÉRATION DE DOCUMENTS                                    │
│  ├── Convention de formation (auto-générée)                    │
│  ├── Programme de formation (template)                         │
│  ├── Attestation de fin de formation (auto)                    │
│  └── Émargement numérique (signature sur tablette/tel)         │
│                                                                 │
│  📊 TABLEAU DE BORD                                            │
│  ├── Prochaines sessions                                       │
│  ├── Documents manquants                                       │
│  └── Score de préparation audit : 78%                          │
│                                                                 │
│  🤖 ASSISTANT IA                                               │
│  └── "Il te manque le questionnaire de satisfaction pour       │
│       la session du 15 janvier. Veux-tu que je le génère ?"   │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

**Fonctionnalités clés :**

| Fonction | Ce que ça fait | Pourquoi c'est utile |
|----------|----------------|----------------------|
| **Checklist 32 indicateurs** | Liste tous les indicateurs Qualiopi avec ce qu'il faut prouver | Tu sais exactement où tu en es |
| **Génération documents** | Crée automatiquement conventions, attestations, programmes | Plus de Word/Excel à la main |
| **Émargement numérique** | Les stagiaires signent sur leur téléphone | Fini le papier perdu |
| **Stockage centralisé** | Tous tes documents au même endroit | Tu retrouves tout en 2 clics pour l'audit |
| **Alertes automatiques** | "Tu as une session dans 3 jours, il manque le programme" | Tu n'oublies plus rien |

### Déclencheur d'achat

| Déclencheur | Moment | Urgence |
|-------------|--------|---------|
| Premier audit Qualiopi | 2-3 mois avant | CRITIQUE |
| Audit de surveillance (18 mois) | 1-2 mois avant | HAUTE |
| Renouvellement (3 ans) | 2-3 mois avant | CRITIQUE |
| Échec à un audit | Immédiat | CRITIQUE |

### Comment trouver les clients

| Canal | Détail |
|-------|--------|
| **Base publique** | [data.gouv.fr](https://data.gouv.fr) - Liste des 90 000 organismes déclarés |
| **LinkedIn** | Groupes "Formateurs indépendants", "Qualiopi" |
| **Facebook** | Groupes formateurs (très actifs) |
| **SEO** | "logiciel qualiopi", "préparer audit qualiopi" |
| **Partenariats** | Certificateurs Qualiopi (ils voient qui galère) |

### Pricing

| Cible | Prix | Justification |
|-------|------|---------------|
| Formateur solo | 49-79€/mois | Économise consultant à 3000€ |
| Petit centre (2-5 formateurs) | 99-149€/mois | Gestion centralisée |
| Centre moyen (5-10) | 199-299€/mois | Multi-utilisateurs |

### Complexité technique

| Aspect | Détail |
|--------|--------|
| **Stack** | Next.js + Supabase + PDF generation |
| **Complexité** | 4/5 |
| **Temps MVP** | 3-4 mois |
| **Points techniques intéressants** | Workflow engine (32 indicateurs), document generation, multi-tenant |

---

## 2. SyndicFlow - Gestion pour Syndics Bénévoles de Copropriété

### C'est quoi un syndic bénévole ? (Le contexte)

**La copropriété :**
- Quand tu achètes un appartement dans un immeuble, tu deviens copropriétaire
- L'immeuble a des parties communes (hall, escaliers, toiture, ascenseur)
- Il faut gérer ces parties communes : entretien, travaux, budget

**Le syndic :**
- C'est la personne/entreprise qui gère la copropriété
- Il y a 2 types :
  - **Syndic professionnel** : Une entreprise payée 150-300€/lot/an (cher + souvent mauvais service)
  - **Syndic bénévole** : Un copropriétaire qui le fait gratuitement pour économiser

**Le problème des syndics bénévoles :**
- C'est souvent quelqu'un qui s'y connaît pas
- Il doit gérer de la comptabilité complexe (plan comptable spécifique copropriété)
- Il doit organiser les Assemblées Générales (convocations, votes, PV)
- Il reçoit des centaines d'emails de copropriétaires qui se plaignent

### La douleur (Le problème)

**Qui souffre ?**
- Des milliers de syndics bénévoles en France
- 8 millions de logements en copropriété
- 38% des copropriétaires insatisfaits de leur syndic pro → beaucoup passent en bénévole

**De quoi ils souffrent ?**

```
COMPTABILITÉ :
- "Je ne suis pas comptable, je ne comprends rien au plan comptable copropriété"
- "Je fais mes comptes sur Excel et j'ai peur de me tromper"
- "Les appels de fonds, c'est un casse-tête"

ASSEMBLÉES GÉNÉRALES :
- "Organiser une AG, c'est 3 semaines de boulot"
- "Les convocations papier coûtent cher en recommandés"
- "Compter les votes (tantièmes), c'est l'enfer"

COMMUNICATION :
- "Je reçois 50 emails par jour de copropriétaires mécontents"
- "Tout le monde me demande les mêmes infos"
- "Je n'ai pas de vie, je gère l'immeuble le soir et le week-end"

RÉGLEMENTATION :
- "Le carnet d'entretien numérique est obligatoire, je ne sais pas comment faire"
- "Les règles changent tout le temps, je ne suis pas à jour"
```

**Combien ça coûte ?**
- Temps : 10-20h/mois pour une copropriété de 20 lots
- Erreurs comptables : régularisations douloureuses, conflits
- Stress : le syndic bénévole est responsable juridiquement

### La solution (SyndicFlow)

**Ce que fait l'application :**

```
┌─────────────────────────────────────────────────────────────────┐
│                        SYNDICFLOW                                │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  💰 COMPTABILITÉ SIMPLIFIÉE                                    │
│  ├── Plan comptable copropriété pré-configuré                  │
│  ├── Appels de fonds automatiques                              │
│  ├── Suivi des paiements par copropriétaire                    │
│  └── Clôture annuelle guidée                                   │
│                                                                 │
│  📋 ASSEMBLÉES GÉNÉRALES                                       │
│  ├── Convocations numériques (économise les recommandés)       │
│  ├── Vote électronique pendant l'AG                            │
│  ├── Calcul automatique des tantièmes                          │
│  └── PV généré automatiquement                                 │
│                                                                 │
│  👥 PORTAIL COPROPRIÉTAIRES                                    │
│  ├── Chaque copro voit ses appels de fonds                     │
│  ├── Documents de la copro accessibles                         │
│  ├── Signalement de problèmes (fuite, panne...)                │
│  └── FAQ automatique (moins d'emails pour le syndic)           │
│                                                                 │
│  📁 CARNET D'ENTRETIEN NUMÉRIQUE                               │
│  ├── Historique des travaux                                    │
│  ├── Contrats en cours (ascenseur, ménage...)                  │
│  └── Échéances de maintenance                                  │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

**Fonctionnalités clés :**

| Fonction | Ce que ça fait | Pourquoi c'est utile |
|----------|----------------|----------------------|
| **Comptabilité copro** | Plan comptable spécifique déjà configuré | Pas besoin d'être comptable |
| **Appels de fonds** | Calcule et envoie les appels automatiquement | Plus de calculs manuels |
| **Vote électronique** | Les copros votent sur leur téléphone pendant l'AG | Fini les comptages à la main |
| **Portail copros** | Chaque copropriétaire a son espace | Moins d'emails au syndic |
| **Carnet d'entretien** | Historique numérique obligatoire depuis 2025 | Conformité légale |

### Déclencheur d'achat

| Déclencheur | Moment | Urgence |
|-------------|--------|---------|
| Élection comme syndic bénévole | Immédiat | CRITIQUE |
| Ras-le-bol du syndic pro (trop cher, mauvais) | Décision de changer | HAUTE |
| Première AG à organiser | 1-2 mois avant | HAUTE |
| Erreur comptable découverte | Immédiat | CRITIQUE |

### Comment trouver les clients

| Canal | Détail |
|-------|--------|
| **Groupes Facebook** | "Syndics bénévoles", "Copropriété" (très actifs) |
| **Forums** | Forum-copropriete.com |
| **SEO** | "logiciel syndic bénévole", "comptabilité copropriété gratuit" |
| **Bouche à oreille** | Les syndics bénévoles se parlent entre eux |

### Pricing

| Modèle | Prix | Exemple |
|--------|------|---------|
| Par lot | 2€/lot/mois | Copro 20 lots = 40€/mois |
| Minimum | 29€/mois | Petites copros |
| Maximum | 150€/mois | Grandes copros (plafonné) |

**Comparaison :** Syndic pro = 150-300€/lot/AN. SyndicFlow = 24€/lot/AN → 6x moins cher.

### Complexité technique

| Aspect | Détail |
|--------|--------|
| **Stack** | Next.js + Supabase + PDF generation |
| **Complexité** | 4/5 |
| **Temps MVP** | 4-5 mois |
| **Points techniques intéressants** | Comptabilité spécifique, vote électronique, multi-tenant avec rôles (syndic/copropriétaire) |

---

## 3. EventSafe - Conformité Sécurité pour Événements

### C'est quoi le problème de sécurité événementielle ? (Le contexte)

**Quand tu organises un événement en France :**
- Si tu accueilles plus de 300 personnes, tu es soumis à la réglementation ERP (Établissement Recevant du Public)
- Tu dois fournir des documents de sécurité à la mairie/préfecture
- Tu es **personnellement responsable pénalement** si un accident arrive

**Les documents obligatoires :**
- Plan de sécurité (sorties de secours, extincteurs, etc.)
- DUERP (Document Unique d'Évaluation des Risques Professionnels)
- Attestation d'assurance
- Demande d'autorisation en mairie
- Plan d'évacuation
- Liste du personnel de sécurité

**Qui est concerné ?**
- Organisateurs de mariages/événements privés
- Associations qui font des événements (fêtes, tournois)
- Entreprises (séminaires, salons)
- Mairies (fêtes de village, 14 juillet)
- Domaines de mariage

### La douleur (Le problème)

**Qui souffre ?**
- Organisateurs occasionnels (c'est pas leur métier)
- Domaines de mariage (30+ événements/an)
- Associations sportives/culturelles
- Mairies pour les événements communaux

**De quoi ils souffrent ?**

```
MÉCONNAISSANCE :
- "Je ne savais même pas qu'il fallait un dossier de sécurité"
- "J'ai découvert les obligations 2 jours avant l'événement"
- "Je ne sais pas quels documents sont obligatoires pour MON événement"

COMPLEXITÉ :
- "J'ai passé 3 jours à chercher des modèles sur internet"
- "Le document que j'ai trouvé ne correspond pas à mon cas"
- "La mairie m'a renvoyé mon dossier car il manquait des pièces"

PEUR :
- "Si quelqu'un se blesse, c'est MA responsabilité pénale"
- "Je n'ai pas les moyens de payer un consultant à 3000€"
- "J'ai peur de mal faire et d'avoir des ennuis"

RÉCURRENCE (pour les pros) :
- "Je fais 40 mariages par an, je refais le même dossier à chaque fois"
- "Chaque événement est différent, je dois tout adapter"
```

**Combien ça coûte ?**
- Consultant sécurité : 2 000-5 000€ par événement
- Temps perdu : 20-40h de recherches et paperasse
- Risque : Responsabilité pénale en cas d'accident (prison possible)
- Annulation : La mairie peut annuler l'événement si dossier incomplet

### La solution (EventSafe)

**Ce que fait l'application :**

```
┌─────────────────────────────────────────────────────────────────┐
│                         EVENTSAFE                                │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  🎯 ÉTAPE 1 : QUESTIONNAIRE INTELLIGENT                        │
│  ├── Type d'événement ? [Mariage / Concert / Salon / Fête]     │
│  ├── Nombre de personnes ? [____]                              │
│  ├── Lieu ? [Intérieur / Extérieur / Mixte]                    │
│  ├── Restauration ? [Oui / Non]                                │
│  └── Feu d'artifice ? [Oui / Non]                              │
│                                                                 │
│  📋 ÉTAPE 2 : OBLIGATIONS IDENTIFIÉES                          │
│  ├── ✅ Plan de sécurité (obligatoire > 300 pers.)            │
│  ├── ✅ DUERP (obligatoire avec personnel)                     │
│  ├── ✅ Demande d'autorisation mairie                          │
│  ├── ⚪ Déclaration préfecture (non requis < 1500 pers.)       │
│  └── ✅ Attestation assurance RC                               │
│                                                                 │
│  📄 ÉTAPE 3 : GÉNÉRATION DES DOCUMENTS                         │
│  ├── [📥 Télécharger] Plan de sécurité (pré-rempli)           │
│  ├── [📥 Télécharger] DUERP (pré-rempli)                      │
│  ├── [📥 Télécharger] Demande autorisation (pré-remplie)      │
│  └── [📝 À compléter] Attestation assurance (modèle)          │
│                                                                 │
│  ✅ ÉTAPE 4 : CHECKLIST JOUR J                                 │
│  ├── [ ] Extincteurs vérifiés                                  │
│  ├── [ ] Sorties de secours dégagées                           │
│  ├── [ ] Personnel sécurité briefé                             │
│  └── [ ] Numéros d'urgence affichés                            │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

**Fonctionnalités clés :**

| Fonction | Ce que ça fait | Pourquoi c'est utile |
|----------|----------------|----------------------|
| **Wizard intelligent** | Questions simples → obligations identifiées | Tu sais exactement ce qu'il te faut |
| **Documents pré-remplis** | PDFs générés avec tes infos | Plus de recherche de modèles |
| **Checklist jour J** | Liste de vérification le jour de l'événement | Tu n'oublies rien |
| **Historique** | Tes événements passés sauvegardés | Tu réutilises pour les prochains |

### Déclencheur d'achat

| Déclencheur | Moment | Urgence |
|-------------|--------|---------|
| Premier gros événement (mariage, fête) | 1-2 mois avant | HAUTE |
| Demande de la mairie "il manque des documents" | Immédiat | CRITIQUE |
| Peur de la responsabilité pénale | Variable | HAUTE |
| Domaine de mariage qui veut professionnaliser | Décision business | MOYENNE |

### Comment trouver les clients

| Canal | Détail |
|-------|--------|
| **SEO** | "dossier sécurité événement", "plan de sécurité mariage", "obligations ERP" |
| **Groupes Facebook** | "Wedding planners France", "Organisateurs d'événements" |
| **Partenariats** | Domaines de mariage, salles de réception |
| **Mairies** | Elles peuvent recommander l'outil aux organisateurs |

### Pricing

| Modèle | Prix | Cible |
|--------|------|-------|
| Par événement (ponctuel) | 29-49€/événement | Particuliers, associations |
| Par événement (gros) | 99-199€/événement | Salons, concerts |
| Abonnement pro | 99€/mois | Domaines (événements illimités) |

**Comparaison :** Consultant = 2 000-5 000€. EventSafe = 29-199€ → 10-100x moins cher.

### Complexité technique

| Aspect | Détail |
|--------|--------|
| **Stack** | Next.js + Supabase + PDF generation |
| **Complexité** | 3/5 (le plus simple des 3) |
| **Temps MVP** | 2-3 mois |
| **Points techniques** | Wizard conditionnel, génération PDF, templates dynamiques |

---

## Tableau Comparatif Final

| Critère | FormaPilot | SyndicFlow | EventSafe |
|---------|------------|------------|-----------|
| **Douleur** | 5/5 | 4/5 | 4/5 |
| **Déclencheur** | 5/5 (audit obligatoire) | 4/5 (élection syndic) | 5/5 (événement ponctuel) |
| **Acquisition** | 5/5 (base publique) | 3/5 (groupes FB) | 4/5 (SEO + partenariats) |
| **Concurrence** | 4/5 (existe mais UX datée) | 4/5 (rien au milieu) | 5/5 (zéro SaaS) |
| **Complexité tech** | 4/5 | 4/5 | 3/5 |
| **Temps MVP** | 3-4 mois | 4-5 mois | 2-3 mois |
| **Pricing** | 49-299€/mois | 29-150€/mois | 29-199€/événement |
| **TOTAL** | 19/25 | 15/25 | 18/25 |

---

## Ma Recommandation

### Pour commencer vite : EventSafe
- MVP en 2-3 mois
- Zéro concurrent direct
- Monétisation par événement (pas d'abonnement à vendre)

### Pour le plus gros marché captif : FormaPilot
- 90 000 organismes obligés
- Base de données publique pour acquisition
- Rétention forte (certification 3 ans)

### Pour le projet technique le plus intéressant : SyndicFlow
- Comptabilité spécifique = vraie expertise
- Multi-tenant avec rôles complexes
- Marché de niche fidèle

---

*Document créé le 5 février 2026*
