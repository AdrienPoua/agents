# Idee #58 - StockBureau

## Angle d'attaque
**Angle 9 : Temps perdu massivement**
Le buraliste passe plusieurs heures par semaine a gerer manuellement les stocks de centaines de references tabac (changements de prix multiples par an), les invendus presse, les declarations de stock aux Douanes, et la conformite de son bureau. Temps quantifiable : "vous passez 5h/semaine la-dessus, mon outil le fait en 30 minutes."

## Nom du projet
**StockBureau** - Copilote stock et conformite pour buralistes

## La cible (qui paye)
Buralistes/debitants de tabac en France. Marche : **23 300 buralistes** actifs en France, chacun lie par un contrat de gerance avec les Douanes.

## La douleur (1 phrase)
Le buraliste gere manuellement des centaines de references tabac avec des changements de prix multiples par an, doit produire des declarations de stock pour les Douanes a chaque changement fiscal, et risque la fermeture provisoire de son bureau s'il ne respecte pas ses obligations (formation continue, presence 60%, declarations), le tout avec des marges de 6-10% sur le tabac qui ne laissent aucune place a l'erreur d'inventaire.

## Le declencheur d'achat
- **Changement de prix tabac** : plusieurs fois par an, les prix changent pour des dizaines/centaines de references. Le buraliste doit faire un inventaire complet et produire une declaration de stock dans les 4 jours. Source d'erreurs et de stress enorme.
- **Nouvelle obligation de presence 60%** : depuis le 1er octobre 2025, le gerant doit etre present au minimum 60% du temps d'ouverture hebdomadaire. Obligation de tracer cette presence.
- **Controle des Douanes** : les agents des Douanes peuvent contrôler les stocks a tout moment. Un ecart entre le stock declare et le stock reel = sanctions pouvant aller jusqu'a la resiliation du contrat de gerance.
- **Formation continue non faite** : si le gerant ne suit pas sa formation continue obligatoire (tous les 3 ans), le bureau est **ferme provisoirement** jusqu'a mise en conformite.
- **Arrete du 29 aout 2025** : nouveau decret renforçant les obligations du contrat de gerance, avec modules de formation obliagtoires restructures.

## Les concurrents connus
- **Galilee (Imperial Tobacco/JTI)** : logiciel de caisse fourni par les fournisseurs de tabac. **Fait la caisse et la commande tabac, PAS le suivi de conformite ni les declarations de stock automatisees pour les Douanes.**
- **Bsoft** : logiciel de caisse pour buralistes. **Focus encaissement, pas conformite.**
- **LeKiosque / ePresse** : gestion des invendus presse. **Uniquement presse, pas tabac ni conformite.**
- **Logiciels comptables generiques** : pas adaptes aux specificites du metier de buraliste (marges fixes tabac, contrat de gerance Douanes, declaration de stock specifique).
- **Excel/papier** : la realite de la majorite des buralistes pour les declarations de stock et le suivi de conformite.

**Aucun outil ne combine** : suivi de stock tabac avec alerte changement de prix + generation automatique des declarations de stock Douanes + suivi formation continue/presence + checklist conformite bureau.

## La differenciation
1. **Alerte changement de prix tabac** : scraping des arretes de prix publies au JO + notification push au buraliste AVANT la date d'application, avec liste des references impactees.
2. **Declaration de stock semi-automatique** : a chaque changement de prix, l'outil pre-remplit la declaration de stock a partir de l'inventaire numerique, le buraliste n'a plus qu'a ajuster et valider.
3. **Suivi conformite gerance** : tableau de bord "rouge/orange/vert" avec alertes sur les echeances (formation continue, renouvellement contrat, obligation presence 60%).
4. **Inventaire simplifie** : scan code-barres via smartphone pour inventaire rapide, rapprochement avec les bons de livraison.
5. **Prix ultra-accessible** : 19-29 EUR/mois (les buralistes ont des marges tres serrees, le prix doit etre minimal).

## Score rapide /20

| Critere | Score | Justification |
|---------|-------|---------------|
| Intensite douleur | 4/5 | Fermeture provisoire du bureau si formation non faite. Resiliation du contrat de gerance par les Douanes en cas d'infraction. Erreurs d'inventaire = pertes seches sur marges deja tres faibles (6-10%). Stress reel a chaque changement de prix. |
| Facilite acquisition | 4/5 | La Confederation des buralistes a un reseau structure et communique avec ses 23 300 membres. Salons professionnels (Buralistes en mouvement). Presse specialisee (La Revue des Tabacs). Groupes Facebook buralistes tres actifs. Liste non directement scrapable mais syndication forte. |
| Simplicite vente | 4/5 | "Votre prochaine declaration de stock en 5 minutes au lieu de 3 heures" = comprehension immediate. Decideur unique (le gerant). Pas de comite d'achat. Demo gratuite sur la prochaine vague de changement de prix. |
| Faisabilite solo | 4/5 | MVP = app web/mobile avec saisie stock (scan code-barres), base de donnees des references tabac (donnees publiques), alertes changement de prix (scraping JO), generation PDF declaration stock. Next.js + Supabase + PWA. MVP en 3-4 semaines. |

**TOTAL : 16/20**

## Verification des criteres eliminatoires
- Marketplace two-sided : NON (B2B direct, outil pour le buraliste)
- Demarchage telephonique permanent : NON (acquisition via syndicat/presse specialisee/Facebook/SEO)
- Cycle de vente > 1 mois : NON (le gerant decide seul, douleur immediate et recurrente)
- Marche < 500 cibles France : NON (23 300 buralistes)
- Concurrent dominant (100M$+ leve ou GAFAM) : NON (aucun acteur SaaS dominant sur ce creneau specifique)
- Aucun canal acquisition en ligne : NON (SEO "declaration stock tabac douanes", groupes Facebook buralistes, presse en ligne)
- Architecture complexe requise des le MVP : NON (CRUD + scraping arrete prix + scan code-barres + PDF generation)
- Responsabilite metier : NON (l'outil genere des pre-remplissages, le buraliste valide et reste responsable de sa declaration)

**Aucun critere eliminatoire viole.**
