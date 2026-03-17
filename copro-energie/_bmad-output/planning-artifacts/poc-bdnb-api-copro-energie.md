# POC BDNB API - Plan de Test Technique pour COPRO-ENERGIE

> **Qu'est-ce que c'est ?** Un POC (Proof of Concept) est un petit test technique rapide pour verifier que quelque chose fonctionne avant de construire toute l'application dessus. Ici, on veut verifier que l'API BDNB (Base de Donnees Nationale des Batiments) retourne bien les donnees dont COPRO-ENERGIE a besoin.

> **Pourquoi c'est important ?** La recherche de domaine recommande d'utiliser la BDNB comme source principale (38+ bases croisees) plutot que de croiser manuellement 4 bases separees. Avant de construire toute l'architecture dessus, il faut verifier que ca marche vraiment.

---

## 1. Objectifs du POC

| Question a valider | Critere de succes |
|--------------------|--------------------|
| L'API BDNB retourne-t-elle les DPE pour une adresse donnee ? | DPE classe + consommation + date pour >70% des adresses testees |
| Les donnees BDNB sont-elles suffisantes vs API ADEME directe ? | Memes informations DPE ou plus completes |
| L'ID-RNB est-il present et exploitable ? | ID-RNB retourne pour >60% des batiments testes |
| Le matching par adresse fonctionne-t-il ? | Geocodage + recherche BDNB reussis pour >80% des adresses |
| Le rate limiting (120 req/min gratuit) est-il suffisant pour le MVP ? | Possible de charger 72 coproprietes en <5 min |
| Les donnees DVF agregees sont-elles disponibles via BDNB ? | Prix moyen/m2 ou indicateurs fonciers disponibles |

---

## 2. Donnees de test

### Preparer 10 adresses de coproprietes reelles

Prendre des adresses variees depuis le registre ANAH (data.gouv.fr) :

| # | Adresse | Ville | CP | Pourquoi |
|---|---------|-------|----|----------|
| 1 | Grande copropriete connue | Paris | 75xxx | Test couverture Paris |
| 2 | Copropriete moyenne | Lyon | 69xxx | Test grande ville |
| 3 | Copropriete moyenne | Marseille | 13xxx | Test grande ville |
| 4 | Petite copropriete | Ville moyenne | - | Test couverture |
| 5 | Copropriete <10 lots | Petite ville | - | Test petites copros |
| 6 | Copropriete recente (post-2020) | - | - | Test DPE recent |
| 7 | Copropriete ancienne (pre-1970) | - | - | Test DPE ancien |
| 8 | Copropriete classe F ou G connue | - | - | Test passoire thermique |
| 9 | Copropriete mixte (habitat + bureaux) | - | - | Test tertiaire |
| 10 | Adresse mal formatee | - | - | Test robustesse matching |

**Source des adresses :** Telecharger le registre ANAH (CSV, ~437 Mo) depuis data.gouv.fr et prendre 10 adresses variees.

---

## 3. APIs a tester

### 3.1 API BDNB Open (gratuite)

**URL documentation :** https://bdnb.io/services/services_api/
**Portail API :** https://api-portail.bdnb.io
**Documentation technique :** https://docs.bdnb-api.com

**Limites :**
- 10 000 requetes/mois
- 120 requetes/minute/IP
- Pas d'authentification requise

**Endpoints a tester :**

| Endpoint | Quoi | Donnees attendues |
|----------|------|-------------------|
| Recherche par adresse | Trouver le batiment pour une adresse | ID batiment, ID-RNB, coordonnees |
| DPE batiment | Donnees DPE du batiment | Classe DPE, consommation kWh, emissions CO2, date DPE |
| Informations batiment | Infos generales | Surface, annee construction, nb logements, type usage |
| Donnees foncières | Indicateurs DVF | Prix moyen/m2 zone (si disponible) |

### 3.2 API RNB (gratuite)

**URL :** https://rnb-api.beta.gouv.fr
**Documentation :** https://rnb-fr.gitbook.io/documentation

**Endpoints a tester :**

| Endpoint | Quoi |
|----------|------|
| Liste batiments par code INSEE | Tous les batiments d'une commune |
| Recherche par bounding box | Batiments dans une zone geographique |
| Obtention ID-RNB | Recuperer l'identifiant unique |

### 3.3 Geoplateforme IGN (gratuite)

**URL :** https://data.geopf.fr/geocodage/search/
**Documentation :** https://geoservices.ign.fr/documentation/services/services-geoplateforme/geocodage

**Endpoints a tester :**

| Endpoint | Quoi |
|----------|------|
| Geocodage (search) | Adresse → coordonnees lat/lng |
| Reverse geocoding | Coordonnees → adresse normalisee |
| Batch CSV | Geocodage en masse (50 req/sec/IP) |

---

## 4. Script du POC

### Etape 1 : Geocoder les 10 adresses (Geoplateforme IGN)

```
Pour chaque adresse :
1. Appeler Geoplateforme IGN avec l'adresse texte
2. Recuperer : lat, lng, adresse normalisee, code INSEE, score de confiance
3. Noter : l'adresse a-t-elle ete trouvee ? Score de confiance ?
```

**Mesurer :** Taux de reussite geocodage sur 10 adresses.

### Etape 2 : Chercher dans BDNB (API Open)

```
Pour chaque adresse geocodee :
1. Appeler BDNB avec lat/lng (recherche spatiale)
2. Recuperer : ID batiment, ID-RNB, donnees DPE, infos batiment
3. Noter : quelles donnees sont presentes ? Lesquelles manquent ?
```

**Mesurer :**
- Taux de matching BDNB sur 10 adresses
- Presence ID-RNB (oui/non)
- Presence DPE (oui/non, si oui : classe, date, methode)
- Presence infos batiment (annee construction, surface, nb logements)

### Etape 3 : Comparer avec API ADEME directe

```
Pour les memes 10 adresses :
1. Appeler API ADEME DPE avec l'adresse
2. Comparer les resultats DPE : BDNB vs ADEME direct
3. Noter : sont-ils identiques ? BDNB a-t-il plus/moins de DPE ?
```

**Mesurer :** BDNB est-il une source suffisante ou faut-il completer avec ADEME ?

### Etape 4 : Tester le matching ID-RNB

```
Pour les adresses ou BDNB a retourne un ID-RNB :
1. Appeler API RNB avec cet ID
2. Verifier la coherence (meme batiment, meme adresse)
3. Tester le chemin inverse : API RNB → obtenir ID → API BDNB avec ID
```

**Mesurer :** L'ID-RNB est-il un pivot fiable entre les bases ?

### Etape 5 : Tester la performance

```
1. Envoyer 72 requetes BDNB consecutives (= 1 portefeuille syndic)
2. Mesurer le temps total
3. Verifier qu'on ne depasse pas le rate limit (120/min)
```

**Mesurer :** Temps pour charger un portefeuille complet. Acceptable si <5 min.

---

## 5. Grille d'evaluation

A remplir apres les tests :

| Critere | Resultat | Note /5 | Commentaire |
|---------|----------|---------|-------------|
| Taux geocodage IGN (sur 10) | _/10 | | |
| Taux matching BDNB (sur 10) | _/10 | | |
| Taux presence DPE dans BDNB | _/10 | | |
| Taux presence ID-RNB | _/10 | | |
| Richesse donnees batiment | | | Quels champs utiles ? Quels champs manquants ? |
| BDNB vs ADEME (DPE) | | | BDNB suffisant ou complement ADEME necessaire ? |
| Donnees DVF agregees dispo | Oui/Non | | Prix moyen/m2 par zone ? |
| Performance 72 requetes | _ secondes | | Acceptable si <300s |
| Qualite documentation API | | | Facile a utiliser ? Bien documentee ? |
| **VERDICT GLOBAL** | | **/5** | BDNB comme source principale : GO / NO-GO |

---

## 6. Decisions a prendre apres le POC

### Si BDNB = GO (score >= 3/5)

- Confirmer BDNB Open comme source principale du MVP
- ID-RNB comme cle primaire dans PostgreSQL
- Completer avec API ADEME seulement si couverture DPE BDNB insuffisante
- Import batch ANAH (CSV) pour les donnees specifiques coproprietes (nom syndic, nb lots)
- Planifier upgrade BDNB Open Plus quand volume augmente

### Si BDNB = NO-GO (score < 3/5)

- Revenir a l'architecture initiale : croisement manuel 4 bases
- Garder ID-RNB comme cle pivot si disponible
- Utiliser BDNB en complement, pas en source principale
- Investir plus dans la normalisation d'adresses (RNVP + geocodage)

---

## 7. Estimation effort

| Element | Duree estimee |
|---------|---------------|
| Preparer les 10 adresses de test (registre ANAH) | 30 min |
| Lire la documentation BDNB / RNB / IGN | 2-3h |
| Ecrire les scripts de test (Python ou Node.js) | 2-3h |
| Executer les tests et remplir la grille | 1-2h |
| Analyser les resultats et prendre la decision | 1h |
| **Total** | **~1 journee de travail** |

---

## 8. Liens utiles

| Ressource | URL |
|-----------|-----|
| BDNB - Site principal | https://bdnb.io |
| BDNB - Portail API | https://api-portail.bdnb.io |
| BDNB - Documentation | https://docs.bdnb-api.com |
| BDNB - Offres API (pricing) | https://bdnb.io/services/services_api/ |
| BDNB - Millesime 2025-07.a (derniere version) | https://bdnb.io/blog/22/11/2025/new_millesime_2025_07.a/ |
| RNB - Portail | https://rnb.beta.gouv.fr |
| RNB - API | https://rnb-api.beta.gouv.fr |
| RNB - Documentation | https://rnb-fr.gitbook.io/documentation |
| Geoplateforme IGN - Geocodage | https://geoservices.ign.fr/documentation/services/services-geoplateforme/geocodage |
| Registre ANAH (CSV) | https://www.data.gouv.fr/datasets/registre-national-dimmatriculation-des-coproprietes |
| API ADEME DPE | https://data.ademe.fr/datasets/dpe03existant |
| DVF+ Cerema | https://datafoncier.cerema.fr/donnees/autres-donnees-foncieres/dvfplus-open-data |

---

**Estimation totale : 1 journee de travail. Cout : 0 EUR (APIs gratuites).**
**Criticite : A faire AVANT de commencer le developpement du pipeline ETL.**
