# Idee #18 : SyndicEasy

**Angle d'attaque :** 6 - Douleur visible en ligne
**Date :** 2026-02-06
**Run :** 002

---

## Resume

| Champ | Detail |
|-------|--------|
| **Nom du projet** | SyndicEasy |
| **Angle** | 6 - Douleur visible en ligne (forums, Facebook, LinkedIn, Reddit) |
| **Cible** | Syndics benevoles de copropriete (coproprietaires qui gerent leur immeuble sans syndic professionnel) |
| **Douleur** | Le syndic benevole se noie dans la comptabilite, les appels de fonds, les PV d'AG et le suivi des travaux, sans formation ni outils adaptes, au risque de commettre des erreurs legalement sanctionnables et de se retrouver en conflit avec les coproprietaires. |
| **Declencheur d'achat** | Election comme syndic benevole en AG (on herite du role), premiere cloture comptable a presenter, premiere erreur de repartition des charges qui declenche un conflit, ou depart du syndic professionnel juge trop cher. |
| **Score** | **15/20** |
| **Verdict** | **RETENUE** -- Marche en forte croissance (x3 en 10 ans), douleur massivement documentee en ligne, concurrence faible et fragmentee, decideur unique, prix d'entree tres bas. A approfondir en BMAD. |

---

## 1. La cible (qui paye)

### Profil type : Philippe, 55 ans, syndic benevole

Philippe est coproprietaire dans un immeuble de 12 lots en banlieue parisienne. L'ancien syndic professionnel facturait 2 800 EUR/an pour des prestations jugees mediocres. En AG, les coproprietaires ont vote pour passer en syndic benevole. Philippe, retraite et "bon en informatique" (il sait utiliser Excel), a ete elu.

**6 mois plus tard :**
- Il passe 10-15h/mois sur la gestion de la copro
- Sa feuille Excel "comptabilite" fait 12 onglets et il n'est plus sur des formules
- Il ne sait pas comment calculer les appels de fonds trimestriels correctement
- 2 coproprietaires contestent la repartition des charges (confusion tantiemes generaux vs speciaux)
- Il doit preparer l'AG annuelle : convocation legale, budget previsionnel, rapport financier, PV...
- Il n'a aucune idee de comment generer un FEC (Fichier des Ecritures Comptables) conforme
- Il se demande s'il ne va pas tout lacher et rappeler un syndic pro

### Profil secondaire : Sophie, 38 ans, syndic benevole "contrainte"

Sophie habite dans une petite copro de 6 lots en province. Personne ne voulait etre syndic. Elle a accepte "temporairement" il y a 2 ans. Elle jongle entre son travail, ses enfants et la gestion de la copro. Elle cherche un outil simple pour automatiser le maximum et y passer le moins de temps possible.

### Le marche en chiffres

| Metrique | Valeur | Source |
|----------|--------|--------|
| Coproprietes en France | ~526 000 (2022) | Registre national coproprietes |
| Coproprietes en syndic benevole | ~32 870 (6.2%) a ~79 000 (15%) | Registre national / MonImmeuble |
| Syndics benevoles actifs | ~52 000+ | Maison a Part (2024) |
| Lots geres par syndics benevoles | ~550 000 | Maison a Part (2024) |
| Croissance | x3 en 10 ans (5% -> 15%) | MonImmeuble |
| Taille mediane copro en syndic benevole | 5-15 lots | Estimations (31% en rural, 28% petites agglo) |
| **Cible principale** | **52 000+ syndics benevoles** | -- |
| **Croissance annuelle estimee** | +10-15% / an | Tendance observee |

### Pourquoi le marche grossit ?

1. **Cout du syndic professionnel** : 1 500 - 3 500 EUR/an pour une petite copro. Avec l'inflation, beaucoup passent en benevole.
2. **Mecontentement generalise** envers les syndics pro (mauvaise communication, honoraires opaques, travaux lents).
3. **Petites copros** : pour 4-10 lots, le cout du syndic pro est disproportionne par rapport aux charges.
4. **Loi ALUR (2014) puis loi Climat et Resilience** : obligations croissantes (fonds travaux, DPE collectif, PPT) qui poussent les copros a reprendre le controle.
5. **Digital** : les outils en ligne rendent la gestion plus accessible aux non-professionnels.

---

## 2. La douleur (precise et documentee en ligne)

### Preuves de douleur visibles sur internet

La douleur des syndics benevoles est **massivement documentee** sur les forums, ce qui correspond parfaitement a l'angle 6 :

**Forums et communautes identifiees :**
- **ARC (Association des Responsables de Copropriete)** : forum dedie aux syndics benevoles, guide "Etre Syndic Benevole" en plusieurs tomes
- **Droit-Finances.commentcamarche.com** : dizaines de threads "je cherche un logiciel simple de syndic benevole", "probleme comptabilite copropriete"
- **Forum ValCompta** : communaute active autour du logiciel ValCompta, questions techniques recurrentes
- **Bulle-Immobiliere.org** : thread "Syndic benevole : je reponds a vos questions" avec des centaines de messages
- **Groupes Facebook** : "SYNDIC BENEVOLE / NON PROFESSIONNEL" -- groupe dedie
- **Alexia.fr** (forum juridique) : questions recurrentes sur les obligations du syndic benevole
- **BatICopro** : guides et articles sur les problemes avec les syndics benevoles

### Les problemes les plus cites

| Probleme | Frequence en ligne | Gravite |
|----------|-------------------|---------|
| **Comptabilite copro** : comment tenir les comptes, faire les appels de fonds, presenter les comptes en AG | TRES ELEVEE | Elevee (obligation legale) |
| **Repartition des charges** : confusion tantiemes generaux vs speciaux, erreurs de calcul | ELEVEE | Elevee (source de conflits) |
| **Preparation AG** : convocations dans les formes, respect des delais legaux, PV | ELEVEE | Elevee (nullite possible de l'AG) |
| **Fonds de travaux** : calcul, comptabilisation, placement | MOYENNE | Moyenne |
| **Registre national coproprietes** : inscription, mise a jour annuelle | MOYENNE | Moyenne (obligation legale) |
| **Recouvrement charges impayees** : comment relancer, mise en demeure, procedure judiciaire | MOYENNE | Elevee (tresorerie copro) |
| **Gestion des travaux** : devis, vote en AG, suivi, reception | MOYENNE | Moyenne |
| **Assurances copro** : souscription, sinistres, relation assureur | FAIBLE | Moyenne |

### Cout de la douleur

| Cout | Estimation |
|------|------------|
| **Temps passe** par le syndic benevole | 10-20h/mois = 120-240h/an (non remunere) |
| **Erreur de repartition des charges** | Conflit entre coproprietaires, AG contestee, nullite possible (cout juridique : 500-3 000 EUR) |
| **AG non conforme** (delai de convocation, contenu) | Annulation possible de toutes les decisions (cout de re-convocation + paralysie de la copro) |
| **Defaut de tenue comptable** | Mise en cause de la responsabilite civile du syndic benevole |
| **Retour au syndic pro** par decouragement | 1 500 - 3 500 EUR/an de frais syndic retrouves |
| **Alternative SyndicEasy** | **9-19 EUR/mois** |

---

## 3. Les concurrents

| Concurrent | Type | Prix | Forces | Faiblesses | Menace |
|-----------|------|------|--------|------------|--------|
| **Matera** | Syndic en ligne (service complet) | ~2 000 - 2 500 EUR/an | 10 000 copros gerees, interface moderne, accompagnement juridique, app mobile. Leve des fonds (non publie). | **C'est un syndic, pas un outil.** Prix eleve pour petites copros. Avis en baisse (4.4 -> 4.1). On ne decide plus rien soi-meme. | FAIBLE (positionnement different) |
| **Copriciel** | Logiciel en ligne | 120 EUR/an | Le moins cher du marche, forfaitaire, sans limite de lots. 7 jours d'essai. | UX basique, fonctionnalites limitees, pas de generation automatique de documents, pas de support reactif. | MOYENNE (concurrent direct) |
| **Copromatic** | Logiciel comptabilite copro | Variable (estimee ~150-250 EUR/an) | Comptabilite complete, interface correcte. | Focus comptabilite, moins complet sur AG et gestion globale. | MOYENNE |
| **ValCompta** | Logiciel de bureau (pas SaaS) | Variable | Communaute active sur le forum, fonctionnel | Pas cloud, pas mobile, UX datee, installation locale | FAIBLE |
| **Diacamma** | Open source | Gratuit | Modulaire, gratuit, communaute | Complexe, documentation sparse, UX technique | FAIBLE |
| **MonSyndicBenevole** | Logiciel en ligne | Variable | Simple, adapte aux petites copros | Peu connu, fonctionnalites limitees | FAIBLE |
| **Excel / Google Sheets** | DIY | Gratuit | Flexible, connu | Erreurs, pas de conformite comptable, pas de generation documents, cauchemar a maintenir | COMPLEMENTAIRE (c'est le status quo a remplacer) |

### Analyse du paysage concurrentiel

```
                    PRIX / AN
                    ^
          2500 EUR  |   MATERA (syndic complet, service inclus)
                    |
                    |
           250 EUR  |   Copromatic
                    |
           150 EUR  |   >>> SyndicEasy <<<  (sweet spot)
                    |   Copriciel (120 EUR)
                    |
          Gratuit   |   Diacamma, ValCompta, Excel
                    +---------------------------------------------->
                      Basique/Manuel            Complet/Automatise
                      (comptabilite seule)      (compta + AG + docs + rappels)
```

**Le trou dans le marche :**
- Les solutions gratuites sont trop complexes ou trop basiques
- Copriciel est economique mais fonctionnellement limite
- Matera est un service complet mais trop cher pour les petites copros (et on perd le controle)
- **Il n'existe pas d'outil SaaS moderne, mobile-friendly, a 9-19 EUR/mois qui couvre compta + AG + documents + rappels pour le syndic benevole de petite copro**

---

## 4. La differenciation

### Positionnement : "Le co-pilote du syndic benevole"

SyndicEasy n'est ni un syndic (comme Matera) ni un simple logiciel comptable (comme Copriciel). C'est un **outil guide** qui prend le syndic benevole par la main a chaque etape :

| Aspect | Ce que fait SyndicEasy | Ce que SyndicEasy ne fait PAS |
|--------|----------------------|------------------------------|
| **Comptabilite** | Saisie guidee, plan comptable copro pre-configure, appels de fonds auto-calcules | Expert-comptable, certification des comptes |
| **AG** | Generateur de convocation conforme, modeles de resolutions, PV auto-genere | Avocat, conseil juridique |
| **Documents** | Tous les documents legaux pre-remplis (convocations, PV, mise en demeure, appels de fonds) | Garantie de validite juridique |
| **Rappels** | Alertes automatiques (echeances AG, cloture comptable, declarations registre national) | Execution a la place du syndic |
| **Suivi financier** | Dashboard clair : tresorerie, impayees, budget vs reel, fonds travaux | Conseil financier |

### Differenciation vs Copriciel (concurrent le plus proche)

| Fonctionnalite | Copriciel (120 EUR/an) | SyndicEasy (108-228 EUR/an) |
|---------------|----------------------|----------------------------|
| Comptabilite copro | Oui (basique) | Oui (guidee pas-a-pas avec explications) |
| Appels de fonds auto | Basique | Auto-calcules par tantiemes + generation PDF |
| Preparation AG | Non | Oui (wizard : ordre du jour, convocations, feuille de presence, PV) |
| Generation documents | Limitee | Oui (convocations, PV, mises en demeure, rapports financiers) |
| Rappels automatiques | Non | Oui (echeances legales, impayees, declarations) |
| App mobile | Non | Oui (consulter les comptes, recevoir les alertes) |
| Dashboard visuel | Basique | Moderne (budget vs reel, tresorerie, graphiques) |
| Support / aide contextuelle | Email | Chat + aide contextuelle + base de connaissance integree |

---

## 5. Le declencheur d'achat

| Declencheur | Moment exact | Urgence |
|-------------|-------------|---------|
| **Election comme syndic benevole** | AG annuelle, vote du nouveau syndic | HAUTE -- le nouveau syndic Google immediatement "comment gerer une copro en syndic benevole" |
| **Premiere cloture comptable a presenter** | 1-3 mois avant l'AG annuelle | TRES HAUTE -- panique, les comptes doivent etre presentes et approuves |
| **Depart du syndic professionnel** | Decision en AG de ne pas renouveler le mandat | HAUTE -- transition, il faut reprendre tous les documents et la comptabilite |
| **Conflit sur les charges** | Un coproprietaire conteste la repartition | HAUTE -- il faut prouver que les calculs sont corrects |
| **Nouvelle obligation legale** (DPE collectif 2026, PPT, fonds travaux) | Publication au JO ou article de presse | MOYENNE -- le syndic benevole se demande "je dois faire quoi ?" |
| **Recherche forum/Google** | Le syndic benevole tape "logiciel syndic benevole" ou "comptabilite copropriete gratuit" | HAUTE -- intent d'achat direct |

---

## 6. Acquisition client

### Canal 1 : SEO (priorite ABSOLUE)

**Requetes cibles a fort intent :**

| Requete | Intent | Volume estime |
|---------|--------|---------------|
| "logiciel syndic benevole" | Transactionnel | 500-1 000/mois |
| "comptabilite copropriete syndic benevole" | Informatif -> conversion | 300-800/mois |
| "appel de fonds copropriete calcul" | Pratique -> conversion | 500-1 000/mois |
| "comment etre syndic benevole" | Informatif -> conversion | 1 000-2 000/mois |
| "modele convocation AG copropriete" | Transactionnel (template) | 500-1 000/mois |
| "PV assemblee generale copropriete modele" | Transactionnel (template) | 500-1 000/mois |
| "logiciel copropriete gratuit" | Transactionnel | 300-500/mois |
| "repartition charges copropriete tantiemes" | Pratique -> conversion | 300-500/mois |
| "syndic benevole obligations" | Informatif -> conversion | 500-1 000/mois |
| "fonds de travaux copropriete calcul" | Pratique -> conversion | 200-500/mois |

**Strategie** : Articles de blog optimises pour chaque requete. Chaque article fournit de la valeur gratuite + CTA vers l'outil. Les modeles de documents (convocation AG, PV, appel de fonds) sont des lead magnets naturels.

### Canal 2 : Forums et communautes

- **ARC** (Association des Responsables de Copropriete) : partenariat ou presence sur le forum
- **Groupes Facebook** : "SYNDIC BENEVOLE / NON PROFESSIONNEL" et groupes locaux
- **Forum ValCompta** : utilisateurs deja engages dans la gestion benevole
- **Droit-Finances.commentcamarche.com** : repondre aux questions avec du contenu utile

### Canal 3 : Prescripteurs

| Prescripteur | Pourquoi | Comment |
|-------------|----------|---------|
| **ARC** (25 000 adherents) | Accompagne les syndics benevoles, vend des guides | Partenariat, integration dans les guides |
| **Notaires** | Interviennent dans les mutations immobilieres, conseillent sur la gestion copro | Flyers en salle d'attente |
| **Experts-comptables** | Sollicites par les syndics benevoles perdus en comptabilite | Programme d'affiliation |
| **Agents immobiliers** | Connaissent les copros en transition vers le benevole | Recommandation |

### Lead magnet

- **"Etes-vous un bon syndic benevole ? Le test en 5 min"** : mini-questionnaire qui revele les obligations oubliees
- **"Modele de convocation AG 2026 conforme"** : document PDF gratuit en echange de l'email
- **"Checklist : les 15 obligations du syndic benevole"** : contenu gratuit haute valeur

---

## 7. Business model

### Pricing

| Plan | Prix | Cible | Contenu |
|------|------|-------|---------|
| **GRATUIT** | 0 EUR | Tous | Test "etes-vous un bon syndic ?", 1 modele de document, apercu comptabilite |
| **ESSENTIEL** | **9 EUR/mois** (ou 96 EUR/an) | Micro-copros (2-6 lots) | Comptabilite copro complete, appels de fonds, 5 documents/mois, rappels email |
| **PRO** | **19 EUR/mois** (ou 192 EUR/an) | Copros moyennes (7-30 lots) | Tout Essentiel + AG complete (convocation, PV, feuille presence), documents illimites, dashboard, multi-copro (2 copros) |
| **MULTI** | **29 EUR/mois** (ou 288 EUR/an) | Syndics benevoles gerant 3+ copros | Tout Pro + 5 copros max, reporting consolide, export comptable FEC |

### Justification du pricing

Le plan PRO a 19 EUR/mois = **228 EUR/an**. C'est :
- **10-15x moins cher** qu'un syndic professionnel (1 500 - 3 500 EUR/an)
- **~2x le prix** de Copriciel (120 EUR/an) mais avec AG, documents et rappels en plus
- **10x moins cher** que Matera (~2 000-2 500 EUR/an)
- L'equivalent de **~2 EUR/mois par lot** pour une copro de 10 lots

### Projections financieres (conservatrices)

| Mois | Clients payants | MRR | Hypothese |
|------|----------------|-----|-----------|
| M3 (lancement) | 30 | 450 EUR | Early adopters SEO + forums |
| M6 | 120 | 1 800 EUR | SEO commence a ranker, communaute |
| M9 | 280 | 4 200 EUR | Effets prescripteurs + contenu SEO |
| M12 | 500 | 7 500 EUR | Croissance organique + bouche a oreille |
| M18 | 900 | 13 500 EUR | Maturite SEO + partenariat ARC |
| M24 | 1 500 | 22 500 EUR | Reference du marche |

**Seuil de rentabilite (objectif 2 500 EUR/mois)** : ~170 clients a 15 EUR/mois (mix Essentiel/Pro).
**Sur 52 000+ syndics benevoles**, 170 clients = penetration de 0.3%. Realiste.

---

## 8. Technique

### Complexite : 2.5/5

| Aspect | Complexite | Detail |
|--------|------------|--------|
| **Code / dev** | 2/5 | CRUD : saisie comptable, generation documents (PDF), dashboard, auth, paiement. Stack standard. |
| **Comptabilite copro** | 3.5/5 | Plan comptable copropriete specifique (plan AFNOR), regles de repartition par tantiemes, gestion des cles de repartition. Doit etre exact et conforme. |
| **Generation documents** | 2/5 | Convocations, PV, appels de fonds en PDF. Modeles a remplir. |
| **Infrastructure** | 1/5 | Vercel + Supabase. Pas de charge lourde. |
| **Recherche reglementaire** | 3/5 | Loi de 1965, decret de 1967, loi ALUR 2014, loi Climat 2021. Il faut compiler les obligations du syndic benevole. Travail editorial, pas technique. |

### Complexite globale : 2.5/5

Le coeur du produit est de la saisie comptable guidee + de la generation de documents. La difficulte est dans l'exactitude du plan comptable copropriete et des regles de repartition, pas dans l'architecture technique.

### Stack technique

```
Frontend :     Next.js 14+ (App Router) + TypeScript + Tailwind CSS + shadcn/ui
Backend :      Supabase (PostgreSQL + Auth + Edge Functions)
Hebergement :  Vercel (frontend) + Supabase (backend)
PDF :          @react-pdf/renderer
Emails :       Resend
Analytics :    Plausible (RGPD-friendly)
Paiement :     Stripe
SEO :          Blog integre (MDX dans Next.js)

Cout mensuel :
  - Vercel Pro : 20 EUR/mois
  - Supabase Pro : 25 EUR/mois
  - Resend : 0-20 EUR/mois
  - Stripe : % transactions
  - Domaine : ~15 EUR/an
  - TOTAL : ~50-70 EUR/mois
```

### Temps MVP estime

| Phase | Duree | Contenu |
|-------|-------|---------|
| Semaine 1-2 | Recherche reglementaire | Plan comptable copro, obligations syndic, regles repartition, templates documents |
| Semaine 3-4 | Module comptabilite | Saisie guidee, plan comptable pre-configure, appels de fonds |
| Semaine 5 | Module AG | Wizard convocation, PV, feuille de presence |
| Semaine 6 | Generation PDF | Documents pre-remplis : convocations, PV, appels de fonds, mises en demeure |
| Semaine 7 | Dashboard + Auth + Stripe | Vue d'ensemble, rappels, paiement |
| Semaine 8 | Landing page + SEO + Lead magnets | Page de vente, 3 premiers articles, modele gratuit de convocation AG |
| **Total** | **8 semaines** | MVP fonctionnel et lançable |

### Points impressionnants pour le CV

| Point | Impact CV |
|-------|-----------|
| **Moteur comptable specifique** (plan copropriete, repartition par tantiemes) | Logique metier financiere non-triviale |
| **Generation de documents legaux** (convocations AG, PV conformes a la loi 1965) | Automatisation + domaine juridique |
| **Modele SaaS B2C niche** | Product-led growth, freemium, SEO |
| **Domaine immobilier / legaltech** | Niche a haute valeur percue |

---

## 9. Risques et mitigations

| Risque | Probabilite | Impact | Mitigation |
|--------|------------|--------|------------|
| **Matera descend en gamme** et propose un outil self-service pas cher | Faible | Eleve | Matera est positionne comme un syndic (service complet). Descendre en gamme cannibaliserait leur offre premium. Peu probable a court terme. |
| **Copriciel ameliore son produit** significativement | Moyenne | Moyen | Copriciel est un acteur modeste. L'avance UX + generation AG + rappels + mobile serait difficile a rattraper rapidement. |
| **Plan comptable copropriete mal implemente** (erreurs comptables) | Moyenne | Eleve | Tester avec un expert-comptable specialise copro. Disclaimers clairs : "outil d'aide, pas de certification comptable". |
| **Syndics benevoles pas assez digitaux** (profil age, rural) | Moyenne | Moyen | UX ultra-simple, pas de jargon tech. Version desktop priorisee (pas mobile-first). Aide contextuelle a chaque etape. |
| **Obligation de FEC** (fichier ecritures comptables) pour les copros | Faible | Moyen | Generer le FEC est un avantage concurrentiel, pas un risque. L'implementer des le depart. |
| **Responsabilite en cas d'erreur comptable** de l'outil | Moyenne | Eleve | CGU claires : "SyndicEasy est un outil d'aide a la gestion. Il ne remplace pas un expert-comptable. L'utilisateur reste responsable de l'exactitude des comptes." Pas de responsabilite metier. |

---

## 10. Score rapide /20

| Critere | Note | Justification |
|---------|------|---------------|
| **Intensite douleur** | 4/5 | Douleur quotidienne reelle et documentee. Le syndic benevole risque sa responsabilite civile (pas une amende de l'Etat, mais des conflits entre voisins et des mises en cause juridiques possibles). Pas aussi urgent que "fermeture administrative" (ConformCHR) mais tres penible. |
| **Facilite acquisition** | 4/5 | SEO excellent : requetes specifiques et nombreuses ("logiciel syndic benevole", "modele convocation AG copropriete"). Forums actifs et identifiables. Prescripteurs clairs (ARC, notaires). Communaute Facebook dediee. -1 car cible pas ultra-digitale (profil plus age que la moyenne). |
| **Simplicite vente** | 4/5 | "Gerez votre copro pour 9 EUR/mois au lieu de 2 500 EUR de syndic pro" = argument imparable. Decideur unique (le syndic benevole). Lead magnet naturel (modeles de documents gratuits). -1 car il faut parfois convaincre l'AG (les autres coproprietaires) de valider la depense. |
| **Faisabilite solo** | 3/5 | MVP en 8 semaines. Stack standard. Mais le plan comptable copropriete est un sujet technique qui demande de la precision. Les obligations legales (loi 1965, decret 1967) necessitent une recherche serieuse. -2 pour cet effort de recherche reglementaire. |
| **TOTAL** | **15/20** | |

---

## 11. Verification criteres eliminatoires

| Critere eliminatoire | Passe ? | Commentaire |
|---------------------|---------|-------------|
| Marketplace two-sided | OUI | Outil SaaS pur, pas de marketplace |
| Demarchage tel permanent | OUI | SEO + forums + prescripteurs. Pas de cold call. |
| Cycle vente > 1 mois | OUI | Self-service. Le syndic benevole qui Google "logiciel syndic benevole" est pret a payer immediatement. Decideur unique. |
| Marche < 500 cibles France | OUI | 52 000+ syndics benevoles, en croissance de +10-15%/an. |
| Concurrent dominant 100M$+ | OUI | Matera est le plus gros acteur mais positionne differemment (syndic en ligne, pas outil). Aucun acteur a 100M$+. |
| Aucun canal acquisition en ligne | OUI | SEO massif + forums + communautes Facebook + prescripteurs. |
| Architecture complexe pour MVP | OUI | CRUD + comptabilite + PDF. Stack standard. |
| Responsabilite metier | OUI | Outil d'aide a la gestion. Pas de certification comptable, pas de conseil juridique. Disclaimers et CGU claires. |

**Tous les criteres eliminatoires sont passes.**

---

## 12. Verdict final

### RETENUE -- A approfondir en BMAD

**Forces :**
1. **Marche en forte croissance** : x3 en 10 ans, tendance structurelle (cout syndics pro, petites copros)
2. **Douleur massivement documentee en ligne** (angle 6 valide) : forums, Facebook, ARC, questions juridiques
3. **Decideur unique** : le syndic benevole decide seul de s'outiller (pas besoin de vote AG pour un abonnement a 9-19 EUR/mois)
4. **Concurrence faible et fragmentee** : pas de leader dominant, outils existants basiques ou datees
5. **SEO naturel** : milliers de requetes mensuelles sur les obligations du syndic benevole, les modeles de documents
6. **Prix imbattable** : 9-19 EUR/mois vs 1 500-3 500 EUR/an de syndic pro
7. **Retention naturelle** : une fois les comptes dans l'outil, le switching cost est eleve
8. **Techniquement faisable** : CRUD + comptabilite + PDF. 8 semaines de MVP.

**Faiblesses :**
1. Cible potentiellement moins digitale que la moyenne (profil age, rural)
2. La comptabilite copropriete demande de la precision (plan comptable specifique)
3. La recherche reglementaire (loi 1965, ALUR) demande un investissement temps initial
4. Le marche est plus petit que ConformCHR (52 000 vs 161 000+)
5. L'ARPU est bas (9-19 EUR/mois) -- il faut du volume

**Prochaines etapes si BMAD :**
1. Valider le volume SEO reel (Ubersuggest, Ahrefs)
2. Analyser en detail Copriciel et Copromatic (fonctionnalites, UX, lacunes)
3. Interviewer 3-5 syndics benevoles (ARC, forums)
4. Compiler les obligations legales du syndic (loi 1965, decret 1967, ALUR, Climat)
5. Prototyper le plan comptable copropriete

---

## Sources

### Statistiques et marche
- [Hausse fulgurante du nombre de syndics benevoles - Maison a Part](https://www.maisonapart.com/edito/immobilier-logement/vie-en-copropriete/coproprietes---hausse-fulgurante-du-nombre-de-synd-10730.php)
- [Combien de coproprietes par syndic en France - MonImmeuble](https://monimmeuble.com/actualite/combien-de-coproprietes-par-syndic-en-france-quels-departements-en-tete)
- [Chiffres cles de la copropriete](https://monimmeuble.com/actualite/les-chiffres-cles-de-la-copropriete)
- [Registre national coproprietes - data.gouv.fr](https://www.data.gouv.fr/reuses/copriciel-logiciel-de-gestion-de-coproprietes-en-ligne)
- [Syndic benevole statistiques - newsletter Actes.immo](https://newsletter.actes.immo/p/11-le-kit-minimal-de-statistiques)

### Reglementation
- [Syndic de copropriete - Service-Public.fr](https://www.service-public.gouv.fr/particuliers/vosdroits/F2608)
- [Appels de fonds en copropriete - Coproconseils](https://www.coproconseils.fr/les-appels-de-fonds-en-copropriete/)
- [Repartir les charges en syndic benevole - BatiCopro](https://www.baticopro.com/guides/repartir-les-charges-d-un-immeuble-en-tant-que-syndic-benevole.html)
- [Etre syndic benevole : la comptabilite - UNPI](https://www.unpi.org/fr/1/107/712/etre-syndic-benevole-la-copropriete-sous-l-angle-comptable.html)
- [Copropriete 2026 : DPE collectif et PPT - MaFormationImmo](https://www.maformationimmo.fr/copropriete-2026-obligations-du-syndic-face-au-dpe-collectif-et-au-plan-pluriannuel-de-travaux-ppt/)

### Concurrence
- [Matera - matera.eu](https://matera.eu/fr)
- [Avis Matera - ImmoCompare](https://immocompare.org/home/comparatif-syndic-en-ligne/avis-matera/)
- [Copriciel - copriciel.com](https://www.copriciel.com/)
- [Copriciel logiciels gratuits copropriete 2025](https://www.copriciel.com/copropriete/logiciel-syndic-benevole-gratuit/)
- [Copromatic - copromatic.com](https://www.copromatic.com/)
- [ValCompta - valcompta.net](https://valcompta.net/)
- [SyndicLogiciel - syndiclogiciel.com](https://www.syndiclogiciel.com/)

### Forums et douleur visible
- [Forum Droit-Finances : logiciel syndic benevole](https://droit-finances.commentcamarche.com/forum/affich-7019348-je-cherche-un-logiciel-simple-de-syndic-benevole-de-copropriete)
- [Copro-Forum ARC](https://arc-copro.fr/actualite/copro-forum-pour-partager-votre-experience-avec-dautres-syndics-benevoles-et-trouver-des)
- [Problemes avec un syndic benevole - BatiCopro](https://www.baticopro.com/guides/problemes-avec-un-syndic-benevole-que-faire-quels-recours.html)
- [Inconvenients du syndic benevole - 123syndic](https://123syndic.com/inconvenients-du-syndic-benevole/)
- [Forum Bulle Immobiliere - syndic benevole](http://bulle-immobiliere.org/forum/viewtopic.php?f=172&t=44936)
- [Syndic benevole - Alexia.fr](https://www.alexia.fr/questions/208542/syndic-benevole-ne-fait-pas-d-ag.htm)
- [Forum ValCompta - syndic benevole](http://www.valcompta.net/forum/topic1001-nouvelle-copropriete-inscription-registre-syndic-benevole.html)

---

*Analyse realisee le 2026-02-06 -- Run 002, Angle 6*
*Douleur visible en ligne : CONFIRMEE (forums, Facebook, ARC, questions juridiques)*
