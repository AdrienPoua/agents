# Contexte Cyberattaques — Federations Sportives Francaises

> Date : 16/02/2026
> Sources : ZATAZ, BleepingComputer, Le Monde Informatique, Next.ink, FFBB.com

---

## 1. Attaque massive "TheFrenchGuy" — Janvier 2025

### Resume
Un hacker sous le pseudo **"TheFrenchGuy"** a compromis 19 federations sportives francaises + le Ministere des Sports via une attaque supply chain.

### Details de l'attaque

| Element | Detail |
|---------|--------|
| **Attaquant** | "TheFrenchGuy" |
| **Date** | Janvier 2025 |
| **Methode** | Attaque supply chain via le prestataire IT commun (gestion des licences) |
| **Nombre de victimes** | 19 federations + Ministere des Sports |
| **Donnees volees** | **4.5 millions d'enregistrements** |
| **Vente** | 8 bases de donnees sur le dark web |

### Donnees compromises par personne
- Nom et prenom
- Adresse email
- Date et lieu de naissance
- Nationalite
- Adresse postale
- Telephone
- Numero de licence
- Donnees d'employeur (pour certaines)

### Federations confirmees touchees
1. **Federation Francaise de Football (FFF)** — 10 millions de victimes
2. Federation Francaise de Handball
3. Federation Francaise de Golf — 450K licencies
4. Federation Francaise de Tir
5. Federation de Tennis de Table
6. Federation Francaise de Montagne et Escalade (FFME)
7. + 13 autres federations (liste complete non publiee)

### Impact Ministere des Sports
- Donnees du dispositif **Pass'Sport** compromises
- **3.5 millions de foyers** affectes

### Methode technique
- Le hacker a exploite une faille chez le **prestataire IT mutualise** qui gere les systemes de licences
- Il a obtenu un **Remote Code Execution (RCE)** sur les serveurs
- Acces a toutes les federations clientes du meme prestataire

---

## 2. Attaque FFBB (Federation Francaise de Basketball) — Juin 2019

### Resume
La FFBB a subi une attaque par **ransomware** les 2 et 3 juin 2019.

### Details

| Element | Detail |
|---------|--------|
| **Date** | 2-3 juin 2019 |
| **Type** | Ransomware |
| **Victimes potentielles** | 700 000 licencies |
| **Systemes touches** | Emails, serveurs fichiers, applications metier, gestion licences/competitions |
| **Exfiltration** | Non confirmee (selon enquete initiale) |
| **Restauration** | Systeme licences retabli le 5 juin, email d'alerte aux 700K membres le 8 juin |

### Sources
- [Le Monde Informatique — "La Federation de basket toujours sous le coup d'un ransomware"](https://www.lemondeinformatique.fr/actualites/lire-la-federation-de-basket-toujours-sous-le-coup-d-un-ransomware-75592.html)
- [ZATAZ — "La federation Francaise de Basket FFBB piratee"](https://www.zataz.com/la-federation-francaise-de-basket-ffbb-piratee/)
- [FFBB.com — "Precisions a la suite de l'attaque informatique"](https://www.ffbb.com/ffbb/precisions-la-suite-de-lattaque-informatique-dont-ete-victime-la-ffbb)

---

## 3. Lien avec basketidf.com

### Pourquoi c'est pertinent pour le pitch

1. **La FFBB a deja ete hackee** (2019). Les ligues regionales partagent souvent les memes systemes et prestataires que la federation nationale.

2. **L'attaque de 2025 est passee par un prestataire mutualise**. Si la Ligue IDF utilise les memes outils/prestataires que les federations touchees, elle est potentiellement exposee.

3. **WordPress + 15 plugins = meme surface d'attaque** que les sites qui se font compromettre quotidiennement. Les CVE critiques des plugins installes (voir `02-failles-securite.md`) sont activement exploitees.

4. **Le contexte reglementaire se durcit** :
   - Le RGPD impose une obligation de **securite des donnees personnelles** (art. 32)
   - En cas de fuite, obligation de **notification CNIL sous 72h** (art. 33)
   - Sanctions : jusqu'a 20M EUR ou 4% du CA

### L'argument
> "La federation nationale de basketball a deja ete victime d'un ransomware en 2019 touchant 700 000 licencies. En janvier 2025, 19 federations sportives ont subi une attaque massive avec 4.5 millions de donnees volees. Votre site WordPress expose publiquement la liste complete de ses plugins et leur configuration. Chaque jour sans migration est un jour d'exposition supplementaire."

---

## 4. Sources generales

- [ZATAZ — Federations sportives francaises visees par des cyberattaques](https://www.zataz.com/federations-sportives-francaises-visees-par-des-cyberattaques/)
- [ZATAZ — Piratage massif : 4.5 millions de donnees vendues](https://www.zataz.com/piratage-massif-des-federations-sportives-francaises-45-millions-de-donnees-vendues/)
- [Next.ink — Fuites de donnees : les dessous de l'attaque](https://next.ink/166951/fuites-de-donnees-les-dessous-de-lattaque-contre-des-federations-francaises-de-sport/)
- [Patrick Bayeux — Quand le sport devient une cible](https://patrickbayeux.com/actualites/quand-le-sport-devient-une-cible-la-vague-de-cyberattaques-frappe-les-federations/)
- [ID Protect — FFF piratee : 10 millions de victimes](https://idprotect.fr/fff-hack-usurpation-identite/)
- [FFME — Acte de cyber-malveillance](https://www.ffme.fr/la-ffme-victime-dun-acte-de-cyber-malveillance/)
