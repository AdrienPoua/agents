# Idee #22 : CertiControl

## Angle d'attaque
**Angle 10 : RISQUE PERSONNEL DU DECIDEUR**

## Nom du projet
**CertiControl** - Conformite centres de controle technique

## La cible (qui paye)
Titulaires d'agrement de centres de controle technique automobile independants ou en petit reseau (1-3 centres) en France.

- **Taille du marche** : La France compte 6 000 centres de controle technique agrees. Environ 18% sont des independants (soit ~1 080), et de nombreux petits reseaux (2-3 centres) existent egalement. Cible totale estimee : 1 500 a 2 500 decideurs.
- **Decideur** : Le titulaire de l'agrement du centre. C'est LUI qui est personnellement sanctionne en cas de non-conformite.
- **Budget** : Un centre genere 150 000-300 000 EUR de CA/an. Un outil a 49-79 EUR/mois est derisoire face au risque de suspension d'agrement.

## La douleur (1 phrase)
Le titulaire d'agrement d'un centre de controle technique risque personnellement la suspension (jusqu'a 10 mois) ou le retrait definitif de son agrement -- et donc la fermeture de son entreprise -- en cas de non-conformite lors des audits prefectoraux ou des controles de l'OTC, et les nouvelles obligations entrant en vigueur au 1er janvier 2026 (decret du 8 decembre 2025) ajoutent des amendes administratives de 1 500 EUR par infraction.

## Le declencheur d'achat
- **Audit annuel periodique** : chaque centre est audite au minimum 1 fois/an par un organisme agree. L'approche de l'audit cree une urgence de mise en conformite.
- **Controle inopin de la prefecture/DREAL** : en Pays de la Loire, 60 sanctions ont ete prononcees en 3 ans (2022-2025), dont 9 retraits definitifs d'agrement. Les controles s'intensifient.
- **Entree en vigueur du decret du 8 decembre 2025** : nouvelles obligations sur les campagnes de rappel constructeur, nouveau cadre d'amendes administratives, obligation de tracabilite renforcee -- le titulaire doit s'adapter sous peine de sanction.
- **Sanction d'un confrere** : quand un centre voisin se fait suspendre, le titulaire realise sa propre vulnerabilite.

## Les concurrents probables
| Concurrent | Type | Forces | Faiblesses |
|---|---|---|---|
| **Logiciels reseau (Autovision, Dekra, Securitest...)** | Outils internes reseau | Integres au systeme du reseau, formation incluse | Reserves aux franchises, pas accessibles aux independants |
| **OTC/UTAC** | Organisme technique central | Definit les protocoles officiels, fournit le cadre | Ne propose pas d'outil de gestion/conformite aux centres, c'est un regulateur pas un editeur |
| **Excel/classeurs papier** | Statu quo | Gratuit | Aucune alerte, aucun suivi proactif, risque d'oubli = risque de sanction |
| **ProTechnologies** | Accompagnement independants | Aide a l'obtention de l'agrement | Conseil, pas un outil SaaS. Accompagnement ponctuel, pas de suivi continu. |

**Constat critique** : les centres independants n'ont PAS d'outil SaaS dedie a leur conformite reglementaire. Les reseaux (Autovision, Dekra, Securitest) fournissent des outils a leurs franchises, mais les independants (18% du marche) gerent leur conformite avec des classeurs, des tableurs et leur memoire. C'est un angle mort du marche.

## La differentiation
**CertiControl est le tableau de bord de conformite permanent du centre independant**, avec 3 fonctions cle :

1. **Checklist de conformite vivante** : toutes les obligations reglementaires du centre (equipement, affichage, formation controleurs, transmission OTC, registres) sous forme de checklist interactive, mise a jour automatiquement quand la reglementation change.

2. **Alertes echeances critiques** : rappels automatiques avant les dates cle :
   - Renouvellement agrement controleurs
   - Audit periodique annuel
   - Etalonnage/verification des equipements de mesure
   - Mise a jour logiciel d'inspection (qualification OTC)
   - Declaration annuelle et transmissions reglementaires
   - Nouvelles obligations (ex: campagnes rappel constructeur depuis janvier 2026)

3. **Dossier d'audit pre-rempli** : quand l'audit approche, CertiControl genere automatiquement le dossier avec toutes les preuves de conformite organisees, pret a presenter a l'auditeur.

**Acquisition** :
- SEO sur "agrement controle technique independant", "audit centre controle technique", "obligations centre controle technique 2026", "sanction controle technique"
- Partenariats avec ProTechnologies et les cooperatives d'independants (A-3S, Auto'Nome, Auto Bilan System)
- Mailing direct aux 1 080 centres independants (base publique UTAC-OTC)
- Contenu : articles de blog sur chaque evolution reglementaire, newsletter mensuelle

**Positionnement prix** : 49-79 EUR/mois (derisoire vs risque de suspension/retrait d'agrement)

## Score rapide /20

| Critere | Score | Justification |
|---|---|---|
| Intensite douleur | 5/5 | Risque PERSONNEL du titulaire d'agrement : suspension jusqu'a 10 mois ou retrait definitif = fermeture de l'entreprise. Les sanctions se multiplient (60 en 3 ans en une seule region). Nouvelles amendes 2026. C'est existentiel. |
| Facilite acquisition | 3/5 | Marche de niche (1 500-2 500 cibles). SEO possible mais volume de recherche limite. Le mailing direct aux independants (base publique) et les partenariats avec cooperatives sont les canaux principaux. Pas de cold call necessaire, mais acquisition plus "artisanale" que du pur SEO de masse. |
| Simplicite vente | 4/5 | "Votre agrement, c'est votre gagne-pain. 60 sanctions en 3 ans en Pays de la Loire. CertiControl vous alerte AVANT que l'auditeur ne trouve un probleme. 49 EUR/mois." -- vente par la peur, ultra-efficace. |
| Faisabilite solo | 4/5 | MVP = checklist reglementaire + systeme d'alertes email + generation PDF dossier audit. Stack classique. La veille reglementaire (decrets, arretes) est le cout operationnel principal mais le rythme est geurable (5-10 evolutions/an). |
| **TOTAL** | **16/20** | |

## Verdict
**RETENUE**

Le nombre de cibles (1 500-2 500) est au-dessus du seuil eliminatoire de 500 mais reste une niche. Le point fort majeur est l'intensite de la douleur : c'est le gagne-pain personnel du decideur qui est en jeu, pas juste une amende corporate. Le declencheur reglementaire 2026 cree une fenetre d'opportunite temporelle. Le risque principal est le plafond de marche : a 2 000 cibles x 10% penetration x 49 EUR/mois = ~12 000 EUR MRR, ce qui depasse l'objectif de 2 500-3 000 EUR/mois. Mais l'acquisition devra etre proactive (mailing direct, partenariats) car le SEO seul ne suffira pas sur un marche aussi etroit.
