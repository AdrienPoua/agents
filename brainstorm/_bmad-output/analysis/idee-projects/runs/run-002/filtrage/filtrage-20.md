# Filtrage #20 - CopropCheck

## Idee initiale
Pilotage DPE collectif + PPT pour syndics benevoles. Deadline 01/01/2026. 160K cibles.
**Score initial : 17/20**

---

## 1. CONCURRENCE (Score : 4/5)

### Concurrents identifies

| Concurrent | Type | Focus | Position |
|---|---|---|---|
| **CoproSolutions (Hellio)** | Plateforme suivi renovation copropriete | Syndics pro, AMO, bureaux d'etudes | Lancement recent, focus sur les pros pas les benevoles |
| **PROGE COPRO (Ekopolis)** | Plateforme numerique collaborative | BET et AMO | Outil technique pour professionnels |
| **Matera** | Plateforme syndic cooperatif | Syndics cooperatifs/benevoles | Integre le DPE/PPT dans sa plateforme globale mais pas comme feature centrale |
| **Copriciel / Copromatic / Coprolib'** | Logiciels gestion copropriete | Syndics benevoles | Gestion generale, pas de module DPE/PPT dedie |

### Analyse

**Bonne nouvelle** : Il n'existe PAS d'outil SaaS specifiquement concu pour aider les syndics benevoles a piloter leurs obligations DPE collectif + PPPT. Les solutions existantes sont soit :
- Des plateformes pour professionnels (CoproSolutions, PROGE COPRO)
- Des outils de gestion generale qui n'ont pas de module dedie (Copriciel, Copromatic)
- Matera qui fait du service managed (pas self-service)

**Le creneau "outil self-service DPE+PPPT pour syndics benevoles" est relativement vierge.**

Pas de concurrent ayant leve 100M$+ sur ce creneau specifique. Matera est sur le segment copropriete mais pas sur cette niche precise.

---

## 2. PREUVE DE DOULEUR (Score : 4/5)

### Sources de douleur identifiees
- **Obligations legales confirmees** : DPE collectif obligatoire pour toutes les coproprietes (y compris <50 lots) depuis le 01/01/2026. PPPT obligatoire pour toutes les coproprietes >15 ans depuis le 01/01/2025.
- Les syndics benevoles sont **les plus vulnerables** : memes obligations que les pros, mais sans formation ni outils dedies.
- "La loi ne fait pas de difference entre syndic professionnel et syndic benevole : les obligations sont strictement definies" (mondeviscopro.fr)
- Les forums montrent une meconnaissance massive des obligations : beaucoup de syndics benevoles ne savent pas ce qu'est un PPPT, encore moins comment le piloter.
- **Responsabilite civile personnelle** du syndic benevole en jeu : peut etre revoque et poursuivi pour faute de gestion.

### Bémol
- Les sanctions directes (amendes) pour absence de PPPT/DPE **n'existent pas encore formellement**. Les textes actuels prevoient :
  - Perte d'acces aux subventions publiques (MaPrimeRenov', CEE)
  - Mise en demeure par la mairie/prefet
  - Realisation d'office aux frais du syndicat
  - Responsabilite civile du syndic
- C'est un levier de pression fort mais **pas une amende directe**.

---

## 3. TAILLE DE MARCHE (Score : 4/5)

### Chiffres verifies
- **600 000 coproprietes immatriculees** en France (registre national 2024).
- **89% ont moins de 50 lots** = ~534 000 coproprietes concernees par la deadline DPE du 01/01/2026 (la derniere vague).
- **52 839 syndics benevoles** gerant des coproprietes (ANAH 2024).
- **~15% des coproprietes** sont en syndic benevole = ~90 000 coproprietes en gestion benevole.

### Recalcul des cibles
- Le chiffre initial de 160K semble surestime.
- Cible realiste : **52 000 syndics benevoles** (le syndic est le decisionnaire/acheteur).
- Mais chaque syndic benevole gere 1 copropriete en moyenne, donc 1 licence = 1 copropriete.
- A 150-300 EUR/an : TAM = 7.8M - 15.6M EUR/an.
- **C'est modeste mais suffisant** pour un solo dev si on capture 5-10% = 390K-1.5M EUR/an.

---

## 4. DECLENCHEUR VERIFIABLE (Score : 5/5)

### Verification sur Legifrance et sources officielles

**DPE collectif** :
- Loi Climat et Resilience du 22 aout 2021 (article 158).
- Decret n.2024-34 : calendrier progressif.
- **01/01/2024** : coproprietes >200 lots -> FAIT
- **01/01/2025** : coproprietes 50-200 lots -> FAIT
- **01/01/2026** : coproprietes <50 lots -> **DEADLINE PASSEE DEPUIS 37 JOURS** (nous sommes le 06/02/2026)

**PPPT (Plan Pluriannuel de Travaux)** :
- Loi Climat et Resilience, article 171.
- Obligatoire pour toutes les coproprietes >15 ans.
- **01/01/2023** : >200 lots -> FAIT
- **01/01/2024** : 51-200 lots -> FAIT
- **01/01/2025** : <50 lots -> **DEADLINE PASSEE DEPUIS 1 AN**

**C'est le declencheur le plus fort des 4 idees.** Les deadlines sont REELLES, PASSEES, et les coproprietes concernees (<50 lots) representent 89% du parc. L'urgence est maximale -- les syndics benevoles qui n'ont rien fait sont en infraction depuis des mois.

---

## SYNTHESE

| Critere | Score |
|---|---|
| Concurrence | 4/5 |
| Preuve de douleur | 4/5 |
| Taille de marche | 4/5 |
| Declencheur | 5/5 |
| **TOTAL REVISE** | **17/20** |

---

## VERDICT : SURVIT

### Points forts
1. **Timing parfait** : Les deadlines sont passees. 89% des coproprietes (<50 lots) doivent maintenant avoir un DPE collectif et un PPPT. La plupart des syndics benevoles ne l'ont pas fait.
2. **Niche non couverte** : Pas d'outil self-service dedie au pilotage DPE+PPPT pour syndics benevoles.
3. **Responsabilite personnelle** : Le syndic benevole risque sa responsabilite civile, ce qui cree une urgence a se mettre en conformite.
4. **Perte de subventions** : Sans DPE/PPPT, la copropriete perd l'acces a MaPrimeRenov' et aux CEE -- c'est potentiellement des dizaines de milliers d'euros.

### Risques identifies
1. **Marche modeste en valeur** : ~52K cibles a 150-300 EUR/an = TAM de 7.8-15.6M EUR. OK pour un solo dev, pas pour un VC.
2. **Chevauchement avec SyndicEasy (#18)** : Meme cible (syndics benevoles). Mais SyndicEasy est ELIMINEE, donc pas de conflit. Si CopropCheck fonctionne, il pourrait s'etendre vers la gestion generale apres.
3. **Absence de sanctions financieres directes** : Le levier est la perte de subventions et la responsabilite civile, pas une amende directe.
4. **Concurrence indirecte de Matera** : Si Matera ajoute un module DPE/PPPT dedie pour ses clients cooperatifs, cela pourrait eroder le marche.

### Recommandation
Idee viable pour un solo dev. Le timing est ideal (deadlines passees, urgence maximale). A attaquer rapidement avant que les acteurs existants (Copriciel, Matera) n'ajoutent cette feature.

---

## Sources web

- [PPPT obligation et sanctions 2026 - mondeviscopro.fr](https://mondeviscopro.fr/blog/pppt-copropriete-obligation-et-sanctions-2025/)
- [DPE collectif obligatoire 2026 - homy-diagnostic.fr](https://homy-diagnostic.fr/dpe-collectif-2026/)
- [DPE collectif Service Public](https://www.service-public.gouv.fr/particuliers/vosdroits/F37504)
- [Copropriete 2026 obligations syndic - maformationimmo.fr](https://www.maformationimmo.fr/copropriete-2026-obligations-du-syndic-face-au-dpe-collectif-et-au-plan-pluriannuel-de-travaux-ppt/)
- [PPPT sanctions absence - thermiconseil.fr](https://thermiconseil.fr/actualites/plan-pluriannuel-de-travaux-sanction/)
- [PPT non realise consequences - Matera](https://matera.eu/fr/blog/ppt-non-realise-par-le-syndic-de-copropriete-quelles-consequences-et-sanctions)
- [CoproSolutions Hellio](https://www.hellio.com/actualites/communiques/lancement-coprosolutions)
- [PROGE COPRO - Ekopolis](https://www.ekopolis.fr/ressources/proge-copro-solution-numerique-de-la-renovation-energetique-en-copropriete-au-service)
- [Registre national coproprietes - data.gouv.fr](https://www.data.gouv.fr/datasets/registre-national-dimmatriculation-des-coproprietes)
- [89% coproprietes <50 lots - monimmeuble.com](https://monimmeuble.com/actualite/les-chiffres-cles-de-la-copropriete)
- [Chiffres cles copropriete France](https://monimmeuble.com/actualite/combien-de-coproprietes-en-france-et-comment-sont-elles-reparties)
- [Nouvelles regles copropriete 2026 - blog.door-in.fr](https://blog.door-in.fr/nouvelles-regles-de-la-copropriete-en-2026-toutes-les-evolutions-juridiques-a-connaitre/)
- [PPPT guide complet 2026 - opera-energie.com](https://opera-energie.com/pppt-projet-plan-pluriannuel-travaux/)
