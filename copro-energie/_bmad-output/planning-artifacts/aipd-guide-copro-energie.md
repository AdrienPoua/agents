# AIPD COPRO-ENERGIE - Guide et Plan d'Action

> **Qu'est-ce que c'est ?** L'AIPD (Analyse d'Impact relative a la Protection des Donnees) est un document juridique obligatoire quand on traite des donnees personnelles a grande echelle ou qu'on croise plusieurs sources contenant des donnees personnelles. C'est exige par le RGPD (article 35) et la CNIL.

> **Pourquoi c'est obligatoire pour COPRO-ENERGIE ?** Parce qu'on croise des adresses (= donnees personnelles selon la CNIL) provenant de plusieurs sources publiques (DPE, ANAH, DVF, BDNB). La CNIL a publie en juin 2024 des recommandations specifiques pour les "reutilisateurs de donnees publiees sur Internet" qui s'appliquent directement a notre cas.

---

## 1. Pourquoi l'AIPD est obligatoire

### Les declencheurs (criteres CNIL)

L'AIPD est obligatoire des qu'au moins **2 criteres** sur 9 sont remplis. COPRO-ENERGIE en remplit **au moins 3** :

| Critere CNIL | Applicable ? | Detail |
|-------------|-------------|--------|
| Croisement de donnees | **OUI** | DPE + ANAH + DVF + cadastre + BDNB |
| Donnees concernant des personnes vulnerables | Non | - |
| Collecte a large echelle | **OUI** | 13,9M DPE, 578K coproprietes, millions de transactions DVF |
| Profilage ou scoring | **OUI** | Scoring priorite travaux, estimation decote par quartier |
| Surveillance systematique | Non | - |
| Prise de decision automatisee | Non (le syndic decide) | - |

**Resultat : 3 criteres = AIPD OBLIGATOIRE.**

### La restriction DVF specifique

L'article **R112-A-3 du Livre des procedures fiscales** interdit explicitement la reidentification des personnes via les donnees DVF. Le croisement DVF + adresse exacte pour identifier la valeur d'un bien specifique = **violation directe**.

**Impact sur COPRO-ENERGIE :** L'estimation de "decote par lot" basee sur le prix de vente exact d'un lot identifie est interdite. La solution : utiliser uniquement des **donnees agregees** (prix moyen au m2 par code postal ou code IRIS).

---

## 2. Ce que contient une AIPD

L'AIPD est un document structure en 4 parties :

### Partie 1 : Description du traitement

- **Finalite** : Fournir aux syndics de copropriete un dashboard de suivi energetique de leur portefeuille
- **Base juridique** : Interet legitime (article 6.1.f RGPD) - le syndic a un interet professionnel a connaitre l'etat energetique de ses coproprietes pour remplir ses obligations legales (loi Climat et Resilience)
- **Donnees traitees** : Adresses de coproprietes, classes DPE, surfaces, prix moyens par quartier (agrege)
- **Sources** : BDNB, DPE ADEME, registre ANAH, DVF+ Cerema, Geoplateforme IGN
- **Destinataires** : Le syndic client (acces uniquement a ses coproprietes)
- **Duree de conservation** : A definir (suggestion : 5 ans glissants)

### Partie 2 : Evaluation de la necessite et proportionnalite

- Pourquoi ce croisement est necessaire (pas d'alternative moins intrusive)
- Pourquoi les adresses sont indispensables (c'est la cle de matching)
- Pourquoi les donnees DVF sont agregees (proportionnalite)

### Partie 3 : Evaluation des risques

| Risque | Probabilite | Gravite | Mesure |
|--------|-----------|---------|--------|
| Reidentification via DVF | Elevee si prix par adresse | Elevee | **Donnees agregees uniquement** (prix moyen/m2 par code postal ou IRIS) |
| Fuite de donnees | Faible | Elevee | Chiffrement, RLS Supabase, auth obligatoire |
| Acces non autorise | Faible | Moyenne | Multi-tenant strict, audit logs |
| Croisement excessif | Moyenne | Moyenne | Limiter aux donnees strictement necessaires |

### Partie 4 : Mesures de protection

- Pseudonymisation (pas de noms de proprietaires, jamais)
- Chiffrement en transit (HTTPS) et au repos (Supabase)
- Controles d'acces (RLS multi-tenant, un syndic ne voit que ses copros)
- Audit logs (tracer qui accede a quoi)
- DVF = donnees agregees uniquement, jamais par adresse exacte
- Attribution source dans l'interface ("Source : ADEME, Licence Ouverte Etalab 2.0")
- Tests de reidentification documentes (prouver que reidentification est impossible/difficile)

---

## 3. Comment la realiser

### Option A : Outil PIA de la CNIL (gratuit)

La CNIL fournit un logiciel gratuit pour realiser l'AIPD :
- **Telecharger** : https://www.cnil.fr/fr/outil-pia-telechargez-et-installez-le-logiciel-de-la-cnil
- Interface guidee qui pose toutes les bonnes questions
- Genere un document PDF conforme
- **Temps estime : 1-2 jours de travail**

### Option B : Avocat RGPD specialise (recommande)

- Cout : **1 000 - 2 000 EUR** pour une AIPD complete
- Avantage : document juridiquement solide, couverture en cas de controle CNIL
- L'avocat peut aussi valider l'approche "donnees agregees" pour DVF

### Option C : Consultation CNIL (complementaire, gratuit)

- La CNIL propose un service de consultation gratuit et non-contraignant
- Formulaire en ligne : https://www.cnil.fr/fr/contactez-la-cnil
- Poser la question specifique : "Notre SaaS croise DPE + ANAH + DVF (agrege) + BDNB pour dashboard syndics. L'approche DVF agregee par code IRIS est-elle conforme a l'art. R112-A-3 ?"

---

## 4. Plan d'action concret

### Avant le developpement

| Etape | Action | Duree | Cout |
|-------|--------|-------|------|
| 1 | Telecharger l'outil PIA de la CNIL | 10 min | Gratuit |
| 2 | Remplir les 4 sections de l'AIPD avec l'outil PIA | 1-2 jours | Gratuit |
| 3 | (Optionnel) Envoyer l'AIPD a un avocat RGPD pour validation | 1 semaine | 1-2K EUR |
| 4 | (Optionnel) Soumettre une consultation a la CNIL | 2-4 semaines reponse | Gratuit |
| 5 | Documenter le registre de traitement (art. 30 RGPD) | 2h | Gratuit |

### Pendant le developpement

| Etape | Action |
|-------|--------|
| 6 | Implementer RLS multi-tenant strict dans Supabase |
| 7 | Implementer DVF = donnees agregees uniquement (prix moyen/m2 par code postal ou IRIS) |
| 8 | Ajouter les mentions d'attribution source dans l'interface |
| 9 | Implementer audit logs (qui accede a quoi, quand) |
| 10 | Ecrire la politique de confidentialite citant chaque source publique |

### Avant le lancement

| Etape | Action |
|-------|--------|
| 11 | Realiser les tests de reidentification (prouver que c'est impossible/difficile) |
| 12 | Publier la politique de confidentialite sur le site |
| 13 | Verifier que l'AIPD est a jour avec l'implementation reelle |

---

## 5. Documents de reference

| Document | URL |
|---------|-----|
| Outil PIA CNIL | https://www.cnil.fr/fr/outil-pia-telechargez-et-installez-le-logiciel-de-la-cnil |
| CNIL - Recommandations reutilisateurs (juin 2024) | https://www.cnil.fr/fr/recommandations-reutilisateurs-donnees-internet |
| CNIL - Identifier les donnees personnelles | https://www.cnil.fr/fr/identifier-les-donnees-personnelles |
| Art. R112-A-3 (DVF anti-reidentification) | https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000037000816 |
| Licence Ouverte Etalab 2.0 | https://www.etalab.gouv.fr/wp-content/uploads/2017/04/ETALAB-Licence-Ouverte-v2.0.pdf |
| ADEME - Donnees personnelles DPE | https://observatoire-dpe-audit.ademe.fr/donnees-personnelles |
| RGPD Article 35 (AIPD) | https://www.cnil.fr/fr/RGPD-analyse-impact-protection-des-donnees-aipd |

---

**Estimation totale : 2-3 jours de travail + 0 a 2K EUR selon si avocat ou non.**
**Criticite : BLOQUANT avant commercialisation. A faire AVANT ou PENDANT le dev, pas apres.**
