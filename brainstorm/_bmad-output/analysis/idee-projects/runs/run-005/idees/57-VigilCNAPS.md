# Idee #57 - VigilCNAPS

## Angle d'attaque
**Angle 10 : Risque personnel du decideur**
Le dirigeant d'une societe de securite privee risque PERSONNELLEMENT le retrait de son agrement CNAPS s'il fait travailler des agents avec des cartes professionnelles expirees ou sans MAC valide. Ce n'est pas juste une amende pour l'entreprise : c'est SA carriere qui est en jeu.

## Nom du projet
**VigilCNAPS** - Copilote conformite CNAPS pour dirigeants de societes de securite privee

## La cible (qui paye)
Dirigeants/gerants de petites et moyennes entreprises de securite privee (gardiennage, surveillance, protection) en France. Marche : **12 000 a 25 000 entreprises actives** (sources variables selon definition), dont une majorite de TPE/PME de 5 a 50 agents.

## La douleur (1 phrase)
Le dirigeant d'une societe de securite privee risque le retrait de son agrement personnel et la fermeture de son entreprise s'il fait travailler ne serait-ce qu'UN agent avec une carte professionnelle CNAPS expiree, et il gere ces echeances manuellement dans un fichier Excel ou dans sa tete.

## Le declencheur d'achat
- **Controle CNAPS** : 3,9 millions d'euros de sanctions financieres prononcees en 2024 (+40% en un an). Le CNAPS intensifie ses controles.
- **Agent pris en flagrant delit** : un agent travaille avec une carte expiree = amende + suspension/retrait d'agrement du dirigeant.
- **Reforme mars 2025** : depuis le 1er mars 2025, TOUS les formateurs en securite privee doivent aussi detenir une carte pro CNAPS. Couche de complexite supplementaire.
- **Renouvellement d'agrement** : le dirigeant decouvre au dernier moment qu'un document manque pour son propre renouvellement d'agrement (tous les 5 ans).
- **Perte d'un contrat client** : un donneur d'ordres (centre commercial, entreprise) demande la preuve de conformite de tous les agents affectes a son site.

## Les concurrents connus
- **Sekur** : logiciel de gestion d'agence de securite (planning, facturation, rondes, mains courantes). Made in France, positionnement PME. Prix non communique publiquement. **Fait du planning/facturation, PAS de module conformite CNAPS dedie.**
- **Comete (AEXAE)** : ERP complet pour societes de securite (planning, RH, facturation). Positionnement PME/ETI. Prix sur devis. **Focus gestion operationnelle, pas conformite CNAPS.**
- **Trackforce Valiant** : suite logicielle internationale. Positionnement grands comptes. **Trop cher et complexe pour les TPE.**
- **Withtime** : solution operations securite. Prix sur devis. **Focus planning/performances.**
- **Excel/papier** : la realite de la majorite des TPE de securite privee.

**Aucun outil n'est laser-focalise sur la conformite CNAPS** (suivi des cartes pro, echeances MAC, agrement dirigeant, alertes automatiques, preuve de conformite pour les clients).

## La differenciation
1. **Laser-focus conformite CNAPS** : pas un ERP generaliste, un outil unique dédié au suivi des cartes pro, MAC, agrements.
2. **Alertes automatiques** : notifications 6 mois, 3 mois, 1 mois avant expiration de chaque carte pro agent + agrement dirigeant.
3. **Verification CNAPS automatisee** : scraping/API du teleservice CNAPS pour verifier la validite des cartes en temps reel.
4. **Dashboard dirigeant** : vue d'ensemble "rouge/orange/vert" de la conformite de tous les agents, exportable en PDF pour les clients donneurs d'ordres.
5. **Check-list embauche** : verification automatique qu'un nouvel agent a bien une carte pro valide avant affectation.
6. **Prix accessible** : 29-49 EUR/mois (vs logiciels ERP a prix sur devis = centaines d'euros/mois).

## Score rapide /20

| Critere | Score | Justification |
|---------|-------|---------------|
| Intensite douleur | 5/5 | Le dirigeant risque PERSONNELLEMENT le retrait de son agrement = fermeture de son entreprise. 3,9M EUR de sanctions en 2024 (+40%). L'exercice sans carte pro valide = sanction penale. |
| Facilite acquisition | 4/5 | Le CNAPS publie la liste des entreprises agreees. Scraping possible. Syndicats professionnels (SNES, USP) = canaux. Salons securite (APS, Expoprotection). Groupes Facebook/LinkedIn actifs. |
| Simplicite vente | 4/5 | "Savez-vous si TOUS vos agents ont une carte pro valide aujourd'hui ?" = message qui fait mouche. Decideur unique (le gerant). Comprehension en 10 secondes. Freemium possible (check gratuit de 5 agents). |
| Faisabilite solo | 4/5 | MVP = dashboard + import CSV des agents avec dates d'expiration + alertes email/SMS. Scraping teleservice CNAPS pour verification. Next.js + Supabase + CRON jobs. MVP en 3-4 semaines. |

**TOTAL : 17/20**

## Verification des criteres eliminatoires
- Marketplace two-sided : NON (B2B direct)
- Demarchage telephonique permanent : NON (acquisition en ligne + salons + syndicats)
- Cycle de vente > 1 mois : NON (le gerant decide seul, douleur immediate)
- Marche < 500 cibles France : NON (12 000-25 000 entreprises)
- Concurrent dominant (100M$+ leve ou GAFAM) : NON (aucun acteur dominant sur ce creneau specifique)
- Aucun canal acquisition en ligne : NON (SEO "renouvellement carte pro CNAPS", LinkedIn, groupes Facebook securite privee)
- Architecture complexe requise des le MVP : NON (CRUD + scraping + alertes)
- Responsabilite metier : NON (l'outil SUIT des echeances, il ne donne pas de conseil juridique)

**Aucun critere eliminatoire viole.**
