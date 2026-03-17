# Situation Voiture - Peugeot 208

**Date:** 2 février 2026
**Dernière mise à jour:** 2 février 2026 - Diagnostic affiné après questions au cousin

---

## La Voiture

| Information | Valeur |
|-------------|--------|
| Marque/Modèle | Peugeot 208 |
| Année | 2015 |
| Kilométrage | 125 715 km |
| Motorisation | Essence PureTech |
| Contrôle technique | Passé le 19/12/2025 |
| Prix d'achat | 2 900€ |

---

## La Situation Financière

```
VENDEUSE (Paris)
    │
    ├── Reçu 1 600€ du cousin (virement officiel)
    │
    └── Reçu 1 300€ de Humain (avance secrète pour débloquer la situation)

HUMAIN (Paris)
    │
    └── A avancé 1 300€ → Le cousin refuse de rembourser

COUSIN DE LA COPINE (Poitiers)
    │
    ├── Possède la voiture
    ├── A payé 1 600€
    ├── A annulé son virement de 1 300€ APRÈS avoir récupéré la voiture
    └── Refuse de payer en utilisant l'excuse "la voiture est une arnaque"
```

**Problème principal:** Humain a 1 300€ dans la nature que le cousin refuse de rembourser.

---

## Le Devis du Garagiste (4 073,20€ TTC)

### Détail des postes:

| Poste | Prix TTC |
|-------|----------|
| Boîte de vitesses | 439,50€ |
| Kit embrayage 3 pièces | 343,06€ |
| Huile Tranmax (x2) | 48,00€ |
| Dépose/repose boîte | 265,00€ |
| Kit distribution PureTech | 252,46€ |
| Dépose/repose distribution | 140,00€ |
| Huile moteur | 39,50€ |
| Filtre à huile | 9,78€ |
| Kit courroie entraînement | 97,28€ |
| Silencieux arrière (occasion) | 85,00€ |
| Dépose/repose silencieux | 20,00€ |
| Pare-boue AVG (x2) | 229,06€ |
| Bras suspension AVG + pose | 248,91€ |
| Rotules direction AVG (x2) | 195,59€ |
| Silent blocs barre stab | 47,00€ |
| Pneus Kleber (x4) | 178,00€ |
| Géométrie avant | 75,00€ |
| Catalyseur (pièce + MO) | ~562,00€ |
| **TOTAL TTC** | **4 073,20€** |

---

## Diagnostic du Bruit (MISE À JOUR v2)

### Symptômes décrits par le cousin:

| Question | Réponse |
|----------|---------|
| Type de bruit | **Grincement** |
| Quand? | Quand il change de vitesse (1, 2, 3) |
| Embrayage (pédale)? | **OUI**, quand il appuie sur la pédale |
| Levier de vitesse? | **NON**, pas de bruit quand il bouge le levier |
| À l'arrêt? | Pas de bruit |
| Sur autoroute? | Pas de bruit |

### Conclusion du diagnostic:

**Le problème est UNIQUEMENT l'EMBRAYAGE (butée), PAS la boîte de vitesses!**

- Bruit à la pédale = **Butée d'embrayage usée** ✅ Confirmé
- Bruit au levier = **Synchroniseurs de boîte usés** ❌ PAS le cas!

**Le garagiste a PARTIELLEMENT TORT:** La boîte de vitesses n'est probablement PAS à changer (~440€ d'économie).

---

## Analyse du Devis (MISE À JOUR v2)

### ✅ JUSTIFIÉ (réparations nécessaires):

| Élément | Prix | Raison |
|---------|------|--------|
| ~~Boîte de vitesses~~ | ~~439,50€~~ | ❌ **PAS NÉCESSAIRE** - le bruit est uniquement à la pédale, pas au levier |
| Kit embrayage 3 pièces | 343,06€ | ✅ Confirmé (butée d'embrayage usée) |
| Huile Tranmax (x2) | 48,00€ | ✅ Recommandé lors du changement d'embrayage |
| Dépose/repose boîte | 265,00€ | ✅ Main d'œuvre obligatoire pour accéder à l'embrayage |
| **SOUS-TOTAL EMBRAYAGE** | **~656€** | (au lieu de ~1 095€) |

### ⚠️ CONFIRMÉ mais PAS URGENT:

| Élément | Prix devis | Alternatives | Raison |
|---------|------------|--------------|--------|
| Catalyseur | ~562€ | **20€ à 400€** (voir section dédiée) | Diagnostic valise confirme "perte d'efficacité", mais voiture roule |

### ❓ À VÉRIFIER (peut-être pas nécessaire):

| Élément | Prix | Raison |
|---------|------|--------|
| Kit distribution | ~390€ | À vérifier si déjà fait (recommandé tous les 120k km) |
| Bras suspension + rotules | ~445€ | Le bruit n'était PAS lié à la direction finalement |
| Pneus Kleber | 178€ | À voir l'état réel |

### ❌ PROBABLEMENT SUPERFLU:

| Élément | Prix | Raison |
|---------|------|--------|
| Pare-boues | 229€ | Esthétique, pas sécurité |
| Silencieux occasion | 105€ | Si pas percé, pas urgent |

---

## Diagnostic Valise (fait par un ami)

- Défaut signal détection sous-gonflage pneus
- Défaut haut-parleurs droit et gauche
- Défaut accessoires/relais positif non cohérent
- Défaut commande feu stop gauche
- Défaut éclairage plaque immatriculation
- Code LINFault21
- **Convertisseur catalytique : perte d'efficacité** (explique le voyant moteur orange)
- Sécurité basse pression climatisation

**Note:** Aucun code erreur boîte de vitesses (mais les problèmes mécaniques d'embrayage/synchros ne génèrent pas toujours de codes)

---

## Le Catalyseur - Explication et Options

### C'est quoi un catalyseur?

Le catalyseur (convertisseur catalytique) est une pièce du système d'échappement qui **filtre les gaz polluants**. Ce n'est PAS un filtre remplaçable, c'est une pièce monobloc contenant des métaux précieux (platine, palladium, rhodium) qui transforment chimiquement les gaz toxiques.

```
Moteur → Catalyseur → Pot d'échappement → Air
         (convertit les
          gaz polluants)
```

### "Perte d'efficacité" = quelles conséquences?

| Impact | Gravité |
|--------|---------|
| Voyant moteur orange allumé | ⚠️ Gênant mais pas grave |
| Pollution plus élevée | ⚠️ Impact environnemental |
| Légère perte de puissance | ❌ Souvent imperceptible |
| Danger pour le moteur? | ❌ Non |
| La voiture roule? | ✅ Oui, normalement |

### Options pour régler le problème:

| Option | Prix | Efficacité | Recommandation |
|--------|------|------------|----------------|
| **Nettoyant catalyseur** (additif essence type Bardahl/Facom) | 15-30€ | ⚠️ Peut marcher si juste encrassé | **À essayer en 1er!** |
| **Décalaminage moteur** (chez un pro) | 80-150€ | ⚠️ Peut aider, pas garanti | En 2ème recours |
| **Catalyseur OCCASION** | 100-200€ + pose (~150€) | ✅ Fonctionne | Bon compromis |
| **Catalyseur GÉNÉRIQUE homologué** | 150-300€ + pose (~150€) | ✅ Fonctionne | Bon compromis |
| **Catalyseur ORIGINE Peugeot** | 400-600€ + pose | ✅ Fonctionne | Cher, pas nécessaire |

### Stratégie recommandée:

```
ÉTAPE 1 → Nettoyant catalyseur (~20€)
          Mettre dans le réservoir, rouler 50-100 km sur autoroute
          Effacer le code erreur avec valise OBD
          Si voyant ne revient pas → Problème réglé pour 20€!

ÉTAPE 2 → Si le voyant revient
          Catalyseur occasion ou générique: 250-400€ total
          (au lieu de 562€ du devis)
```

### Le voyant et la revente:

- Tu peux effacer le code erreur avec une valise → voyant s'éteint
- MAIS il reviendra après 50-200 km de conduite (le calculateur re-teste)
- Pour vendre: soit tu répares, soit tu baisses le prix de 300-400€

### Le contrôle technique:

- CT actuel: 19/12/2025 → valable jusqu'au **19/06/2026** pour une vente
- Si tu revends avant juin 2026, pas besoin de repasser le CT
- Un catalyseur HS peut faire échouer le CT (pollution excessive)

---

## Étude de Marché (MISE À JOUR v2 - Réaliste)

### Prix d'une 208 2015 essence en BON état:

| Prix | Kilométrage | Vendeur | État |
|------|-------------|---------|------|
| 4 500€ | 80 890 km | Particulier | Bon |
| 5 000€ | 98 069 km | Particulier | Bon |
| 5 390€ | 68 500 km | Particulier | Distribution neuve |
| 5 500€ | 106 844 km | Particulier | Bon |
| 6 990€ | 121 300 km | Professionnel | Bon |

### TOUS les défauts de CETTE voiture:

| Défaut | Impact sur le prix |
|--------|-------------------|
| Embrayage + boîte à changer | -800€ à -1 000€ |
| Catalyseur (voyant orange) | -300€ à -500€ |
| Distribution à faire (125k km, 11 ans) | -400€ à -500€ |
| Carrosserie rayée (état moyen) | -200€ à -400€ |
| Kilométrage élevé (125k) | -300€ |
| Défauts mineurs (capteurs, HP, etc.) | -100€ à -200€ |
| **DÉCOTE TOTALE** | **-2 100€ à -2 900€** |

### Estimation RÉALISTE de la valeur de revente:

| État de la voiture | Prix de vente réaliste |
|--------------------|------------------------|
| **En l'état** (sans aucune réparation) | **2 500€ - 3 200€** |
| Après embrayage + boîte seulement | 3 200€ - 3 800€ |
| Après embrayage + boîte + distribution | 3 500€ - 4 000€ |
| Après TOUTES les réparations | **4 000€ - 4 500€ MAX** |

**Conclusion:** Le prix de revente réaliste est **4 000€ MAXIMUM** même après réparations, à cause de la carrosserie rayée et du kilométrage.

### Sources:
- [Le Bon Coin - Peugeot 208 2015](https://www.leboncoin.fr/ck/voitures/peugeot-208-2015)
- [AutoUncle - Analyse de 94 annonces](https://www.autouncle.fr/fr/voitures-occasion/Peugeot/208/y-2015)

---

## Options pour Récupérer les 1 300€

### Option A: Voie familiale (OPTION SIMPLE)
- La copine intervient auprès de son cousin
- Pression familiale pour obtenir le remboursement
- **Avantage:** Pas de frais, pas d'effort
- **Résultat si ça marche:** 0€ perdu
- **Action:** À faire EN PRIORITÉ

### Option B: Rachat + Réparation OSCARO + Revente (OPTION RENTABLE) 🎉
- Racheter à 1 600€
- Commander pièces sur Oscaro (~200€)
- Faire distribution à Poitiers (~150€ MO) puis ramener
- Faire embrayage à Paris (~300€ MO)
- Nettoyant catalyseur (~20€)
- Revendre à 4 000€
- **Résultat:** +450€ de GAIN!
- **Effort:** Élevé (trouver garagistes, gérer les RDV, etc.)

### Option C: Rachat + Revente EN L'ÉTAT (OPTION INTERMÉDIAIRE)
- Racheter à 1 600€
- Faire remorquer par plateau (~300€)
- Revendre en l'état à ~3 000€
- **Résultat:** -400€ à 0€
- **Effort:** Moyen

### Option D: Accepter la perte (PIRE OPTION)
- Ne rien faire
- Perdre les 1 300€
- **Résultat:** -1 300€
- **À éviter si possible**

---

## Calcul Option Rachat (MISE À JOUR v5 - PRIX OSCARO)

### Réparations à prévoir (avec pièces Oscaro):

| Réparation | Obligatoire? | Coût devis garagiste | Coût OSCARO + MO |
|------------|--------------|----------------------|------------------|
| Embrayage | ✅ OUI | ~656€ | **~400€** (100€ pièce + 300€ MO) |
| Distribution | ⚠️ Recommandé | ~540€ | **~230€** (80€ pièce + 150€ MO) |
| Catalyseur | ⚠️ Pour revente | ~562€ | **~20€ à 375€** (nettoyant ou 275€ + 100€ MO) |
| **TOTAL** | | ~1 758€ | **~650€ à 1 005€** |

**Économie avec Oscaro:** ~750€ à 1 100€!

### ⚠️ RISQUE CRITIQUE: Le trajet Poitiers → Paris (~350 km)

Si la distribution casse en route = **MOTEUR DÉTRUIT** = voiture à la casse

| Option pour le trajet | Coût | Risque |
|-----------------------|------|--------|
| Rouler et prier | 0€ | ⚠️ ÉLEVÉ (distribution due) |
| Faire la distribution à Poitiers avant | ~230€ (Oscaro) | ✅ Sécurisé |
| Faire remorquer (plateau) | 200€ - 400€ | ✅ Sécurisé |

### Scénarios (avec pièces OSCARO, revente à 4 000€ MAX):

| Scénario | Optimiste | Réaliste | Pessimiste | CATASTROPHE |
|----------|-----------|----------|------------|-------------|
| Déjà payé | 1 300€ | 1 300€ | 1 300€ | 1 300€ |
| Rachat au cousin | 1 600€ | 1 600€ | 1 600€ | 1 600€ |
| **Acquisition** | **2 900€** | **2 900€** | **2 900€** | **2 900€** |
| Embrayage (Oscaro + MO) | 400€ | 400€ | 400€ | - |
| Distribution (Oscaro + MO) | 230€ | 230€ | 230€ | - |
| Catalyseur | 20€ (nettoyant) | 375€ | 375€ | - |
| Imprévus | 0€ | 100€ | 300€ | - |
| **Total réparations** | **650€** | **1 105€** | **1 305€** | - |
| **Total investi** | **3 550€** | **4 005€** | **4 205€** | **2 900€** |
| Revente estimée | 4 000€ | 3 800€ | 3 500€ | 300€ (épave) |
| **Résultat** | **+450€** | **-205€** | **-705€** | **-2 600€** |

### Analyse avec prix Oscaro:

- **Scénario optimiste:** Tu **GAGNES 450€!** 🎉
- **Scénario réaliste:** Tu perds seulement **~205€**
- **Scénario pessimiste:** Tu perds **~705€**
- **Scénario catastrophe:** Distribution casse → Tu perds **~2 600€**

### Alternative: Vendre EN L'ÉTAT sans réparer

| | Calcul |
|--|--------|
| Acquisition | 2 900€ |
| Transport plateau Poitiers → Paris | ~300€ |
| **Total investi** | **3 200€** |
| Revente en l'état | 2 800€ - 3 200€ |
| **Résultat** | **-400€ à 0€** |

### Comparaison des stratégies de rachat:

| Stratégie | Résultat probable |
|-----------|-------------------|
| Réparer avec pièces Oscaro et revendre | **+450€ à -705€** |
| Remorquer et revendre en l'état | **-400€ à 0€** |
| Ne pas racheter du tout | **0€** (si copine récupère 1 300€) ou **-1 300€** (si échec) |

### ⚠️ NOUVELLE STRATÉGIE OPTIMALE:

```
1. Racheter la voiture (1 600€)
2. Faire réparer la DISTRIBUTION à Poitiers avant de partir (~230€ avec Oscaro)
3. Ramener la voiture à Paris (maintenant sécurisé)
4. Faire réparer l'EMBRAYAGE à Paris (~400€ avec Oscaro)
5. Essayer le NETTOYANT CATALYSEUR (~20€)
6. Revendre à 4 000€
7. RÉSULTAT: +450€ de gain!
```

**Conclusion option rachat:** Avec les prix Oscaro, c'est devenu une **BONNE AFFAIRE** dans le scénario optimiste!

---

## Résumé des Réparations (MISE À JOUR v3 - PRIX OSCARO)

### Comparaison Prix Garagiste vs Oscaro:

| Pièce | Prix Garagiste | Prix Oscaro | Économie |
|-------|----------------|-------------|----------|
| Kit embrayage | 343€ | **~100€** (VALEO) | -243€ |
| Kit distribution | 252€ | **~80€** (CONTITECH) | -172€ |
| Catalyseur | ~400€ | **~275€** (BM CATALYSTS) | -125€ |
| **TOTAL PIÈCES** | **~995€** | **~455€** | **-540€** |

### Coût RÉEL si tu achètes les pièces sur Oscaro:

| Poste | Coût |
|-------|------|
| Kit embrayage VALEO | ~100€ |
| Kit distribution CONTITECH | ~80€ |
| Catalyseur (ou nettoyant 20€) | 20€ - 275€ |
| **Total pièces** | **200€ - 455€** |
| Main d'œuvre embrayage (dépose/repose boîte) | ~300€ |
| Main d'œuvre distribution | ~150€ |
| Main d'œuvre catalyseur (si nécessaire) | ~100€ |
| **Total main d'œuvre** | **~450€ - 550€** |
| **TOTAL RÉPARATIONS** | **~650€ - 1 000€** |

**Économie totale:** ~2 400€ à 3 400€ par rapport au devis du garagiste (4 073€)

### Sources prix Oscaro:
- [Kit embrayage Peugeot 208 1.2 VTi 82cv](https://www.oscaro.com/kit-dembrayage-peugeot-208-5-portes-1-2-vti-12v-82-cv-479-34603-0-gt)
- [Kit distribution Peugeot 208 1.2 VTi 82cv](https://www.oscaro.com/kit-de-distribution-peugeot-208-3-portes-1-2-vti-12v-82-cv-307-34596-0-gt)
- [Catalyseur Peugeot 208 1.2 VTi 82cv](https://www.oscaro.com/catalyseur-peugeot-208-5-portes-1-2-vti-12v-82-cv-429-34603-0-gt)

---

## Conclusions (MISE À JOUR v5 - PRIX OSCARO)

1. **La voiture a des problèmes, mais MOINS que le garagiste prétend:**
   - Embrayage (butée) à changer: ✅ Confirmé
   - Boîte de vitesses: ❌ **PAS À CHANGER** (le garagiste avait TORT)
   - Distribution à faire (125k km, 11 ans = due)
   - Catalyseur en perte d'efficacité
   - Carrosserie rayée
   - Multiples défauts mineurs

2. **Le garagiste ARNAQUE sur les prix des pièces:**
   - Kit embrayage: 343€ au lieu de **~100€** sur Oscaro
   - Kit distribution: 252€ au lieu de **~80€** sur Oscaro
   - Catalyseur: ~400€ au lieu de **~275€** sur Oscaro
   - **Marge abusive du garagiste: ~540€ sur les pièces seules!**

3. **Prix de revente RÉALISTE: 4 000€ MAXIMUM** (et plutôt 3 500€ - 3 800€ vu la carrosserie)

4. **Réparations réellement nécessaires (avec pièces Oscaro):**
   - Embrayage: **~400€** (100€ pièce + 300€ MO)
   - Distribution: **~230€** (80€ pièce + 150€ MO)
   - Catalyseur: **~20€** (nettoyant) à **~375€** (pièce + MO)
   - **Total: ~650€ à 1 005€** (au lieu de 4 073€ du devis!)

5. **L'option rachat est devenue INTÉRESSANTE avec Oscaro:**
   - Meilleur cas: **+450€ de GAIN!** 🎉
   - Cas réaliste: **-205€** (perte minime)
   - Pire cas: **-705€**
   - Catastrophe (distribution casse): **-2 600€**

6. **Le cousin n'a PAS été arnaqué.** La voiture vaut ~2 800€ - 3 200€ en l'état. Il te doit 1 300€.

7. **DEUX BONNES OPTIONS:**
   - Option A: Récupérer les 1 300€ via ta copine (0€ perdu)
   - Option B: Racheter + réparer avec Oscaro + revendre (potentiel +450€)

---

## Recommandation Finale (MISE À JOUR v3 - PRIX OSCARO)

```
OPTION A → Faire intervenir la copine pour récupérer les 1 300€
           ✅ Option la plus SIMPLE
           Le cousin a une voiture qui vaut ~2 800€ à 3 200€ en l'état
           Résultat: 0€ perdu

OPTION B → Racheter + Réparer avec pièces OSCARO + Revendre
           ✅ Option la plus RENTABLE (si tu as le temps)
           - Racheter à 1 600€
           - Faire distribution à Poitiers (~230€) avant de partir
           - Ramener à Paris
           - Faire embrayage à Paris (~400€)
           - Nettoyant catalyseur (~20€)
           - Revendre à 4 000€
           - Résultat: +450€ de GAIN! 🎉

OPTION C → Racheter + Revendre EN L'ÉTAT
           ⚠️ Option intermédiaire
           - Racheter à 1 600€
           - Faire remorquer (plateau ~300€)
           - Revendre en l'état à ~3 000€
           - Résultat: -400€ à 0€

OPTION D → Ne rien faire + Accepter la perte
           ❌ Pire option (si copine échoue)
           - Résultat: -1 300€
```

### Comparaison des options:

| Action | Résultat | Effort |
|--------|----------|--------|
| Copine récupère 1 300€ | **0€** ✅ | Faible |
| Racheter + réparer Oscaro + revendre | **+450€** 🎉 | Élevé |
| Racheter + revendre en l'état | **-400€ à 0€** | Moyen |
| Ne rien faire | **-1 300€** ❌ | Aucun |

### Si tu choisis l'OPTION B (rachat + réparation):

```
ÉTAPE 1: Racheter la voiture (1 600€)

ÉTAPE 2: Commander les pièces sur Oscaro (~200€)
         - Kit embrayage VALEO: ~100€
         - Kit distribution CONTITECH: ~80€
         - Nettoyant catalyseur: ~20€

ÉTAPE 3: Trouver un garagiste à Poitiers
         - Lui donner les pièces Oscaro
         - Faire la DISTRIBUTION (~150€ de MO)
         - Coût total distribution: ~230€

ÉTAPE 4: Ramener la voiture à Paris (maintenant sécurisé!)

ÉTAPE 5: Trouver un garagiste à Paris
         - Lui donner le kit embrayage Oscaro
         - Faire l'EMBRAYAGE (~300€ de MO)
         - Coût total embrayage: ~400€

ÉTAPE 6: Essayer le nettoyant catalyseur
         - Rouler 100 km sur autoroute
         - Effacer le code erreur
         - Si voyant revient → catalyseur occasion (~375€)

ÉTAPE 7: Mettre en vente sur Le Bon Coin à 4 200€
         - Négocier jusqu'à 4 000€ minimum
         - Être honnête sur l'état de la carrosserie

RÉSULTAT ATTENDU: +450€ de gain (scénario optimiste)
```

### Arguments pour ta copine (si tu choisis l'option A):

> "Ton cousin a acheté une voiture à 2 900€. Même avec tous ses problèmes, elle vaut encore 2 800€ à 3 000€ en l'état. Il peut la revendre demain et récupérer son argent. Moi j'ai avancé 1 300€ pour l'aider et maintenant il refuse de me rembourser. C'est pas une question de voiture, c'est une question d'honnêteté."

---

## Sources

- [Le Bon Coin - Peugeot 208 2015](https://www.leboncoin.fr/ck/voitures/peugeot-208-2015)
- [AutoUncle - Cote Peugeot 208 2015](https://www.autouncle.fr/fr/voitures-occasion/Peugeot/208/y-2015)
- [Autobiz - Cote Peugeot 208](https://coteauto.autobiz.fr/peugeot/peugeot-208-1.2-80-puretech-active-2015/cote-auto/)
- [La Centrale - Argus 208 2015](https://www.lacentrale.fr/cote-voitures-peugeot-208--2015-.html)
