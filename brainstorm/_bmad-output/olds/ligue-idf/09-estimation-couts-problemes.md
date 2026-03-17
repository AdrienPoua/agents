# Estimation des Couts Payes et Problemes Actuels — basketidf.com

> Date : 16/02/2026
> Objectif : Estimer ce que la Ligue IDF a paye pour son site et ce qu'elle perd aujourd'hui

---

## 1. Profil financier de la Ligue IDF Basketball

| Donnee | Valeur | Source |
|--------|--------|--------|
| **Budget annuel total** | **2 606 240 EUR** (2023) | AG du 01/07/2023 |
| **Licencies** | 73 866 (2e ligue de France) | Chiffres au 31/12/2021 |
| **Commissaire aux comptes** | Cabinet Mazars | Pappers.fr |
| **SIRET** | 784 354 185 | Pappers.fr |
| **Statut** | Association loi 1901 | Mentions legales |

Avec un budget de 2.6M EUR, la Ligue IDF est une **grosse structure associative**. Un budget site web de 5-15K EUR represente 0.2-0.6% de leur budget — c'est marginal pour eux.

---

## 2. Combien ont-ils paye pour le site actuel ?

### Estimation de la creation initiale

**Hypothese basse — Freelance Elementor** : 3 000 - 6 000 EUR
- Theme Astra + Elementor Pro = montage rapide
- 50+ pages a integrer
- Pas de dev custom visible
- Possible que ca ait ete fait en interne ou par un benevole competent

**Hypothese moyenne — Agence locale** : 6 000 - 12 000 EUR
- Charte graphique sur mesure (couleurs, typographies)
- Integration des 55+ pages
- Configuration des plugins (SEOPress, Wordfence, etc.)
- Formation de base pour les redacteurs

**Hypothese haute — Agence specialisee sport** : 12 000 - 20 000 EUR
- Si cahier des charges formel avec comite de pilotage
- Migrations de contenus depuis un ancien site
- Espaces membres (meme si maintenant en 404)
- Integration carte des clubs (meme si maintenant en 404)

### Estimation la plus probable : **8 000 - 12 000 EUR**

**Justification** :
- Le site a clairement ete fait par quelqu'un qui connait Elementor (widgets bien structures)
- Mais il y a des signes d'amateurisme : page "Elementor #64864" publiee par erreur, tags anarchiques, sitemap jamais mis a jour
- L'absence de credits d'agence dans les mentions legales suggere soit un freelance, soit un benevole/salarie interne
- Pour une structure a 2.6M EUR de budget, 8-12K EUR est un investissement logique

---

## 3. Couts annuels actuels (licences et hebergement)

### Licences plugins (prix 2026)

| Plugin | Prix/an | Indispensable ? |
|--------|---------|-----------------|
| **Elementor Pro** (1 site) | 49 USD (~46 EUR) | Oui — tout le site est construit dessus |
| **Crocoblock All-Inclusive** (JetMenu, JetParallax, JetBlocks, JetBlog, JetElements, JetTabs, JetSmartFilters) | 199 USD (~186 EUR) | Oui — 7 plugins Jet detectes |
| **SEOPress Pro** | 49 USD (~46 EUR) | Oui — SEO du site |
| **Wordfence Premium** | 149 USD (~139 EUR) | Oui — securite |
| **Essential Addons (EAEL)** | ~40 USD (~37 EUR) | Oui — widget post list utilise |
| **Ultimate Addons (UAEL)** | ~57 USD (~53 EUR) | Probable (namespace uael/v1 detecte) |
| **Complianz Premium** (RGPD) | ~45 EUR | Probable (namespace complianz/v1 detecte) |
| **The Events Calendar Pro** | ~99 USD (~92 EUR) | NON — 0 evenements, plugin zombie |
| **Plugin Redirection** | Gratuit | — |
| **WP-Statistics** | Gratuit (version de base) | — |

### Total licences plugins

| Scenario | Montant/an |
|----------|-----------|
| **Minimum** (seulement les essentiels) | **~510 EUR/an** |
| **Probable** (tous les plugins detectes) | **~650 EUR/an** |
| **Maximum** (avec options premium) | **~800 EUR/an** |

### Hebergement et domaine

| Poste | Estimation |
|-------|-----------|
| Hebergement mutualise (type o2switch, OVH) | 60-120 EUR/an |
| Nom de domaine .com | 12-15 EUR/an |
| SSL | Gratuit (Let's Encrypt) |
| **Sous-total** | **~80-135 EUR/an** |

### Maintenance humaine

| Poste | Estimation |
|-------|-----------|
| Mises a jour WordPress + plugins (si prestataire) | 500-1 500 EUR/an |
| Redaction d'articles (probablement en interne) | 0 EUR (salarie/benevole) |
| Support technique ponctuel (bugs, conflits plugins) | 200-1 000 EUR/an |
| **Sous-total** | **0 - 2 500 EUR/an** |

### COUT TOTAL ANNUEL ESTIME

| Scenario | Montant/an |
|----------|-----------|
| **Si maintenance en interne** (benevole/salarie) | **~650 - 800 EUR/an** (licences + hebergement uniquement) |
| **Si prestataire externe** | **~1 500 - 3 000 EUR/an** (licences + hebergement + maintenance) |

---

## 4. Cout total sur la duree de vie du site

Le sitemap date de 2014. Le design Elementor actuel est probablement plus recent (Elementor Pro existe depuis 2017). Estimons que le site actuel a ete cree/refait entre **2020 et 2022**.

### Estimation sur 4-6 ans de vie

| Poste | Montant total estime |
|-------|---------------------|
| Creation initiale | 8 000 - 12 000 EUR |
| Licences (5 ans x 650 EUR) | 3 250 EUR |
| Hebergement (5 ans x 100 EUR) | 500 EUR |
| Maintenance/support (5 ans x 1000 EUR) | 5 000 EUR |
| **TOTAL INVESTI** | **~16 750 - 20 750 EUR** |

---

## 5. Les problemes qui leur coutent de l'argent (sans qu'ils le sachent)

### A. La dette technique invisible

**Probleme** : 15+ plugins empiles avec des interdependances.

**Cout reel** :
- Chaque mise a jour Elementor peut casser un widget Jet, EAEL ou UAEL
- Quand ca casse, il faut un dev urgence (200-500 EUR l'intervention)
- Les plugins non utilises (The Events Calendar = ~92 EUR/an) sont payes pour rien
- Estimation : **500-2 000 EUR/an de cout cache** en debug, interventions urgentes, et licences inutiles

### B. Les pages mortes qui tuent le SEO

**Probleme** : 5+ pages en 404, sitemap obsolete depuis 2014.

**Cout reel** :
- Google penalise les sites avec des erreurs 404 dans le sitemap
- Moins de trafic organique = moins de visibilite pour les evenements et inscriptions
- La carte des clubs en 404 = des licencies potentiels qui ne trouvent pas leur club
- Estimation : **perte de 10-30% de trafic organique potentiel** (difficilement chiffrable mais reel)

### C. La performance qui fait fuir les visiteurs

**Probleme** : 4-8 secondes de chargement mobile estime.

**Cout reel** :
- 53% des visiteurs mobiles quittent un site qui met plus de 3 secondes a charger (Google)
- Pour un site avec ~73 000 licencies potentiels + leurs familles, ca represente des milliers de visiteurs perdus
- Un parent qui cherche le planning du match de son enfant au gymnase n'attendra pas 5 secondes
- Les sponsors et partenaires qui visitent le site ont une premiere impression degradee

### D. Le risque securitaire non provisionne

**Probleme** : CVE critiques sur les plugins installes.

**Cout reel en cas d'incident** :
- Intervention de crise : 2 000 - 10 000 EUR
- Notification CNIL (obligatoire sous 72h si fuite de donnees) : 0 EUR mais mobilisation de l'equipe
- Notification aux 73 866 licencies (obligatoire RGPD) : cout d'envoi + reputation
- Restauration du site : 1 000 - 5 000 EUR
- Amende CNIL potentielle : mise en demeure a amende selon gravite
- **Cout d'un incident type ransomware (reference FFBB 2019)** : la FFBB a mis 3+ jours a restaurer ses systemes

### E. La non-conformite RGPD

**Probleme** : Banniere cookies absente/inactive, documents internes accessibles via API.

**Cout potentiel** :
- Controle CNIL : mise en demeure puis amende progressive
- Pour une association : amende proportionnee mais reelle (quelques milliers d'euros)
- Atteinte a l'image si rendu public

### F. Le cout d'opportunite

**Probleme** : Un site vieillissant qui ne valorise pas la ligue.

**Ce qu'ils perdent** :
- **Sponsors** : un site moderne est un argument de nego pour les partenariats. Un site lent et date devalue l'image.
- **Licencies** : les jeunes et leurs parents comparent avec d'autres sports. Un site moderne = image dynamique.
- **Benevoles** : un espace membre en 404 ne facilite pas l'engagement des benevoles.
- **Communication** : 200+ tags anarchiques = contenu impossible a retrouver et a naviguer.

---

## 6. Comparatif financier : situation actuelle vs offre Next.js

### Leur situation actuelle (estimation annuelle)

| Poste | Cout/an |
|-------|---------|
| Licences plugins (Elementor, Crocoblock, SEOPress, Wordfence, EAEL, UAEL, Complianz, Events Calendar) | ~650 EUR |
| Hebergement + domaine | ~100 EUR |
| Maintenance technique (mises a jour, debug, conflits plugins) | ~1 000 EUR |
| Interventions urgence (quand une MAJ casse le site) | ~500 EUR |
| **TOTAL ACTUEL** | **~2 250 EUR/an** |

**Mais ce cout est imprevisible** : une annee ca peut etre 1 500 EUR, une autre 4 000 EUR si un plugin casse tout ou s'il y a un incident securite. Pas de visibilite budgetaire.

### L'offre Next.js proposee

| Poste | Cout |
|-------|------|
| **Refonte complete** (one-shot) | 8 000 - 15 000 EUR |
| **Abonnement maintenance mensuel** | **100 EUR/mois = 1 200 EUR/an** |
| Hebergement (Vercel free tier) | 0 EUR |
| Licences plugins | 0 EUR |
| Domaine (.com) | ~12 EUR/an |
| **TOTAL ANNUEL (apres refonte)** | **~1 212 EUR/an** |

### Ce que comprend l'abonnement 100 EUR/mois

| Prestation | Inclus |
|------------|--------|
| Mises a jour du contenu (articles, pages, evenements) | Oui |
| Corrections de bugs et ajustements mineurs | Oui |
| Monitoring du site (uptime, performance) | Oui |
| Sauvegardes et restauration | Oui |
| Support par email (reponse sous 48h) | Oui |
| Mises a jour de securite (dependances npm) | Oui |
| Rapport mensuel (trafic, performance) | Oui |
| Evolutions fonctionnelles majeures | Devis separé |

### Comparatif cote a cote

| | Situation actuelle (WordPress) | Offre Next.js |
|--|-------------------------------|---------------|
| **Cout annuel** | ~2 250 EUR (imprevisible) | **1 212 EUR (fixe)** |
| **Previsibilite** | Non — budget variable selon les urgences | **Oui — forfait mensuel fixe** |
| **Interlocuteur** | Multiple (hebergeur + agence/freelance WP + editeurs plugins) | **Un seul — moi** |
| **Risque de casse** | Eleve (15+ plugins interdependants) | **Quasi nul** (zero plugin tiers) |
| **Securite** | Failles CVE critiques actives | **Surface d'attaque ~0** |
| **Performance** | 4-8s mobile | **< 1s mobile** |
| **Temps de reaction** | Variable selon prestataire | **48h garanti** |

### Economies annuelles

| Poste | Economie |
|-------|----------|
| Licences plugins eliminees | +650 EUR |
| Hebergement elimine | +100 EUR |
| Interventions urgence eliminees | +500 EUR |
| Maintenance technique remplacee par forfait | -200 EUR (le forfait est ~200 EUR de plus que la maintenance seule, mais INCLUT le support) |
| **Economie nette/an** | **~1 050 EUR/an** |

### Retour sur investissement

**Sans subvention :**

| | Calcul |
|--|--------|
| Investissement refonte | 8 000 - 15 000 EUR |
| Economie annuelle | ~1 050 EUR/an |
| ROI brut | Rembourse en **7.5 - 14 ans** |

C'est long. Mais le ROI financier brut n'est PAS l'argument principal. Les vrais arguments sont :
- **Previsibilite budgetaire** (forfait fixe vs couts aleatoires)
- **Securite** (zero CVE vs bombe a retardement)
- **Performance** (10x plus rapide)
- **Image** (reference parmi les ligues IDF)
- **Interlocuteur unique** (vs jongler entre 5 fournisseurs)

**Avec subvention Region IDF (30%) :**

| | Calcul |
|--|--------|
| Investissement refonte | 8 000 - 15 000 EUR |
| Subvention Region IDF (30%) | -2 400 a -4 500 EUR |
| Reste a charge | **5 600 - 10 500 EUR** |
| Economie annuelle | ~1 050 EUR/an |
| ROI avec subvention | Rembourse en **5 - 10 ans** |

### Le vrai argument financier

Avec un budget de 2.6M EUR/an, la Ligue IDF depense :
- **Actuellement** : ~2 250 EUR/an pour un site lent, fragile et risque
- **Avec la refonte** : 1 212 EUR/an pour un site rapide, securise et moderne
- **Investissement** : 8-15K EUR = **0.3-0.6% de leur budget annuel** pour une transformation complete

C'est l'equivalent de **2 licences de joueur** pour moderniser toute leur presence numerique.

---

## 7. Ton modele economique en tant que freelance

### Revenus sur ce projet

| Phase | Montant |
|-------|---------|
| Refonte (one-shot) | 8 000 - 15 000 EUR |
| Maintenance mensuelle | 100 EUR/mois = **1 200 EUR/an** |

### Projection sur 3 ans

| Annee | Revenu |
|-------|--------|
| Annee 1 | 8 000 - 15 000 EUR (refonte) + 1 200 EUR (maintenance) = **9 200 - 16 200 EUR** |
| Annee 2 | **1 200 EUR** |
| Annee 3 | **1 200 EUR** |
| **Total 3 ans** | **11 600 - 18 600 EUR** |

### Scalabilite

Si tu dupliques ce modele sur d'autres ligues sportives IDF :

| Nombre de clients | Revenu maintenance/mois | Revenu maintenance/an |
|-------------------|------------------------|----------------------|
| 1 (Basket IDF) | 100 EUR | 1 200 EUR |
| 3 (+ Handball + Volley) | 300 EUR | 3 600 EUR |
| 5 ligues | 500 EUR | 6 000 EUR |
| 10 ligues/federations | 1 000 EUR | 12 000 EUR |

A 100 EUR/mois par client, il faut **10 clients** pour generer 1 000 EUR/mois de revenu recurrent. Le basket IDF serait le premier domino — ta reference pour demarcher les autres.

### Cout reel pour toi

| Poste | Cout/mois |
|-------|-----------|
| Vercel (free tier jusqu'a ~100K pages vues/mois) | 0 EUR |
| CMS headless (Sanity free tier) | 0 EUR |
| Domaine (si tu geres) | ~1 EUR/mois |
| Temps de maintenance reel (~2-3h/mois) | Ton temps |
| **Marge sur le forfait 100 EUR** | **~95%** (quasi tout est marge) |

---

## 8. Resume en une phrase pour le pitch

> "Aujourd'hui, votre site vous coute environ 2 000 EUR par an de facon imprevisible, avec des urgences et des plugins qui cassent. Je vous propose un site 10x plus rapide et inviolable, avec un forfait fixe de 100 EUR par mois tout inclus — soit 1 000 EUR d'economie annuelle, un seul interlocuteur, et zero mauvaise surprise. Le tout avec 30% potentiellement finance par la Region Ile-de-France."
