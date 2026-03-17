# Filtrage #23 - SolAdmin
## Dashboard admin pour installateurs photovoltaiques (Enedis/Consuel/Advenir/EDF OA)

**Date de verification** : 2026-02-06
**Score initial** : 16/20

---

## 1. CONCURRENCE (Score: 2/5) - PREOCCUPANT

### Concurrents directs identifies

1. **OpenFire** - **700+ clients**, ERP complet pour metiers de l'energie base sur Odoo. Couvre DEJA le suivi des dossiers Enedis, Consuel, et declaration prealable. Centralise documents, echanges clients, planning, paiement, suivi materiel. Du premier devis a la mise en service.
   - Source : https://openfire.fr/votre-metier/logiciel-photovoltaique

2. **Revolt.eco** - **500+ entreprises**, **30 000 installations gerees**. Levee de **3 millions EUR** (novembre 2025, fonds allemand Revent). Automatise les demarches administratives : declaration prealable, demande de raccordement, Consuel. Fondee en 2024 seulement ! En expansion vers le CVC.
   - Source : https://www.revolt.eco/
   - Source levee : https://www.pv-magazine.fr/2025/11/17/interview-les-dessous-de-la-levee-de-fonds-de-3-millions-deuros-de-revolt-eco/

3. **Praxedo** - FSM generaliste avec modules specifiques pour les installateurs ENR. Investissement MBO+.
   - Source : https://www.praxedo.fr/

### Analyse concurrentielle

**OpenFire** est le concurrent le plus direct. Avec 700+ clients sur ~4 800 cibles QualiPV, il detient deja ~15% du marche. Il couvre la majorite de la proposition de valeur de SolAdmin (dossiers Enedis/Consuel centralises).

**Revolt.eco** est le signal d'alarme le plus fort : startup creee en 2024, deja 500+ clients, 3M EUR leves, et qui automatise deja les demarches Enedis/Consuel/DP. En plus, elle s'etend vers le CVC. C'est quasiment le pitch de SolAdmin avec 18 mois d'avance et du capital.

### Question cle : suivi POST-installation ?
La proposition de SolAdmin incluait le suivi **post-devis** (Enedis/Consuel/Advenir/EDF OA). OpenFire et Revolt couvrent le cycle jusqu'a la mise en service. Le suivi EDF OA (contrat d'achat, facturation) et le suivi Advenir (dossier subvention) semblent moins couverts. Mais c'est une niche dans la niche.

### Levees de fonds
- **Revolt.eco** : 3M EUR (novembre 2025) - pas 100M$+, mais une startup VC-backed en pleine croissance sur le MEME marche.
- **OpenFire** : pas de levee identifiee, entreprise rentable.
- Pas de concurrent a 100M$+.

---

## 2. PREUVE DE DOULEUR (Score: 4/5) - FORTE

### Forums et temoignages

La douleur administrative des installateurs PV est **massivement documentee** :

- **Forum Photovoltaique** : "2 jours de travaux d'installation, mais 5 jours de paperasse (autorisations, dossiers, inspections)" - source : https://forum-photovoltaique.fr/viewtopic.php?t=72426
- **Delais Enedis** : "On recoit 50 demandes par jour", "ca devrait pas tarder", "y'a eu les conges d'ete" - installateurs bloques pendant des mois.
- **Consuel** : des cas ou la mise en service n'est toujours pas faite 1 AN apres l'installation a cause des demarches administratives - source : https://forum-photovoltaique.fr/viewtopic.php?t=76536
- **Installateurs debordés** : un installateur est cense prendre en charge l'ensemble des demarches, mais beaucoup repoussent systematiquement.

### Confirmation par Revolt.eco
Le fait que Revolt.eco ait deja 500+ clients et que ses utilisateurs "divisent par 2 ou 3 le temps passe sur la gestion de projet" confirme que la douleur est REELLE et MONETISABLE.

---

## 3. TAILLE DE MARCHE (Score: 2/5) - INSUFFISANT

### Chiffres verifies
- **~4 800 entreprises QualiPV** (debut 2025, source Qualit'EnR) - source : https://www.genieclimatique.fr/tendances/installation/22202/74-le-nombre-d-entreprises-qualifiees-qualipv-explose-en-2023
- Croissance forte : +74% en 2023 (de ~2 000 a ~3 200), puis ~4 800 en 2025.
- Projection 2026-2027 : probablement 6 000-7 000 si la tendance continue.

### Analyse
4 800 cibles QualiPV, c'est petit. MAIS :
- La croissance est forte (doublement tous les 2 ans).
- Certains installateurs PV ne sont pas QualiPV (marche gris).
- Meme avec 6 000-7 000 cibles en 2027, c'est un marche etroit.

**Calcul TAM** : 6 000 cibles x 150 EUR/mois x 12 = **10.8M EUR/an** de TAM maximum. Avec 10% de penetration = 1M EUR ARR. C'est viable pour un solodev mais PAS pour un VC-play.

### MAIS : OpenFire a deja 700 clients et Revolt.eco 500 clients
Sur 4 800 cibles, ~1 200 sont DEJA clientes d'un concurrent (25% du marche pris). Le marche adressable restant = ~3 600 cibles maximum.

---

## 4. DECLENCHEUR VERIFIABLE (Score: 4/5) - FORT

### Cadre reglementaire
Le declencheur n'est pas une amende mais une **obligation de process** :
- **Consuel** : attestation de conformite OBLIGATOIRE avant mise en service (Code de la construction).
- **Enedis** : demande de raccordement obligatoire pour toute installation > 3 kWc.
- **EDF OA** : contrat d'achat obligatoire pour revente/surplus.
- **Advenir** : prime conditionnee a un dossier administratif complexe ("un vrai parcours du combattant" selon Advenir eux-memes).

### Force du declencheur
Chaque installation PV GENERE OBLIGATOIREMENT ces demarches. C'est un declencheur **systematique** et **recurrent** : 2 790 nouvelles entreprises QualiPV rien qu'en 2024, chacune devant gerer ces dossiers pour chaque chantier.

Le nouveau decret 2025 sur les parkings > 20 places (obligation IRVE) ajoute une couche reglementaire supplementaire.

---

## SCORES REVISES

| Critere | Score |
|---------|-------|
| Concurrence | 2/5 |
| Preuve de douleur | 4/5 |
| Taille de marche | 2/5 |
| Declencheur | 4/5 |
| **TOTAL** | **12/20** |

**Score initial** : 16/20 -> **Score revise** : 12/20 (-4 points)

---

## VERDICT : ELIMINEE

### Raisons d'elimination
1. **Revolt.eco est le tueur** : Startup creee en 2024, deja 500+ clients, 3M EUR leves, qui fait EXACTEMENT ce que SolAdmin propose (automatisation Enedis/Consuel/DP) et qui s'etend deja vers le CVC. Arriver apres eux sur le meme pitch est suicidaire.
2. **OpenFire** detient deja 700+ clients (15% du marche) avec une solution ERP complete.
3. **Marche trop etroit** : 4 800 cibles dont 25% deja clientes de concurrents = ~3 600 cibles restantes. Insuffisant face a deux concurrents finances.
4. Le score total (12/20) est au-dessus du seuil d'elimination, mais la combinaison "petit marche + concurrent VC-backed en avance" est redhibitoire pour un solodev.

### Ce qui a tue l'idee
**Revolt.eco**. Cree en 2024, 3M EUR leves en novembre 2025, 500 clients, 30 000 installations gerees, et en expansion vers le CVC. C'est exactement SolAdmin, mais avec du capital, de l'equipe, et 18 mois d'avance. La douleur est reelle, le declencheur est fort, mais le train est deja passe.

### Note : Si Revolt.eco n'existait pas
Sans Revolt, SolAdmin aurait ete un candidat viable (douleur forte + declencheur fort). La lecon : verifier les startups recentes (< 2 ans) est CRITIQUE, pas seulement les acteurs etablis.

---

## Sources web

- [OpenFire - Logiciel Photovoltaique](https://openfire.fr/votre-metier/logiciel-photovoltaique)
- [OpenFire - Application PV](https://openfire.fr/application/photovoltaique)
- [Revolt.eco](https://www.revolt.eco/)
- [Revolt.eco - Levee 3M EUR (PV Magazine)](https://www.pv-magazine.fr/2025/11/17/interview-les-dessous-de-la-levee-de-fonds-de-3-millions-deuros-de-revolt-eco/)
- [Revolt.eco - Levee (Journal du Net)](https://www.journaldunet.com/start-up/1546037-revolt-eco-leve-pres-de-3-millions-d-euros-pour-son-saas-dedie-a-la-renovation-energetique/)
- [Revolt.eco - PV Solaire Energie](https://pv-solaire-energie.com/revolt-eco-leve-3-millions-deuros-pour-accelerer-la-transition-energetique/)
- [QualiPV +74% (Genie Climatique)](https://www.genieclimatique.fr/tendances/installation/22202/74-le-nombre-d-entreprises-qualifiees-qualipv-explose-en-2023)
- [Qualit'EnR - QualiPV](https://www.qualit-enr.org/qualifications/qualipv/)
- [Forum PV - Delais Enedis/Consuel](https://forum-photovoltaique.fr/viewtopic.php?t=72426)
- [Forum PV - Mise en service 1 an apres](https://forum-photovoltaique.fr/viewtopic.php?t=76536)
- [Advenir - Programme](https://advenir.mobi/)
- [Praxedo - MBO+](https://www.clipperton.com/news-transaction/mbo-co-invests-in-praxedo-a-leading-saas-player-in-field-service-management-with-strong-growth-and-a-global-reach-across-europe-and-north-america)
