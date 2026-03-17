# Idee #17 : PlanifDiag

**Angle d'attaque :** 5 - Decideur unique
**Date :** 2026-02-06
**Run :** 002

---

## Resume

| Champ | Detail |
|-------|--------|
| **Nom du projet** | PlanifDiag |
| **Angle** | 5 - Decideur unique (un seul mec decide et paye) |
| **Cible** | Diagnostiqueurs immobiliers independants (TPE, souvent solo ou 2-3 personnes) |
| **Douleur** | Le diagnostiqueur perd 1 a 2 heures par jour en gestion administrative (devis, planning, relances impayees, suivi dossiers) au lieu de faire des diagnostics facturables, avec des outils fragmentes (Excel, agenda papier, logiciel technique separe). |
| **Declencheur d'achat** | Premiere relance impayee oubliee (perte seche de 200-500 EUR), surcharge de dossiers non factures en fin de mois, ou perte d'un client agence immobiliere par manque de reactivite sur un devis. |
| **Score** | **14/20** |
| **Verdict** | **ELIMINEE** -- Concurrence trop etablie (GestionDiag, Sogexpert, Liciel, OBBC, AnalysImmo). Le marche est deja couvert par des acteurs specialises. |

---

## 1. La cible (qui paye)

### Profil type : Marc, 42 ans, diagnostiqueur immobilier independant

Marc est certifie pour 6 diagnostics (DPE, amiante, plomb, electricite, gaz, termites). Il travaille seul depuis 4 ans. Son chiffre d'affaires est de 75 000 EUR/an (dans la fourchette 60-90K typique). Il intervient principalement pour des agences immobilieres et des particuliers vendeurs.

**Son probleme concret :**
- Le matin, il prepare ses devis sur Word/Excel
- Il part en intervention avec son logiciel technique (Liciel ou OBBC) pour produire les rapports
- Le soir, il facture manuellement, relance les impayees par email
- Son planning est un mix de Google Agenda + carnet papier + appels entrants non traces
- Il rate regulierement des relances de factures impayees (ses clients agences reglent a 30-60 jours)
- Quand une agence l'appelle a 9h pour un diagnostic urgent, il met 10 minutes a verifier sa dispo

### Le marche en chiffres

| Metrique | Valeur | Source |
|----------|--------|--------|
| Entreprises de diagnostic immobilier | ~8 600 | Modelesdebusinessplan.com, Sonelo |
| Diagnostiqueurs certifies | ~11 500 - 16 000 | Diagactu, estimations 2025 |
| Part d'independants / petites structures | ~80% | Estimations secteur |
| **Cible directe (independants)** | **~6 800 - 7 000** | Calcul |
| CA moyen independant | 60 000 - 90 000 EUR | Propulsebyca.fr |
| Marge nette moyenne | 30-40% | Estimations secteur |

---

## 2. La douleur (precise)

### Problemes documentes

Les diagnostiqueurs se plaignent regulierement de :

1. **Fragmentation des outils** : logiciel technique (Liciel, OBBC) pour les rapports, Excel pour les devis, Google Agenda pour le planning, boite email pour les relances. Aucune vue centralisee.
2. **Modules de croquis/plans mal performants** dans les logiciels existants -- critique recurrente dans les avis.
3. **Support technique insuffisant** des editeurs historiques.
4. **Interruptions terrain** : recevoir un appel pour un devis pendant qu'on fait un diagnostic, devoir verifier sa dispo manuellement.
5. **Relances impayees manuelles** : les agences immobilieres reglent souvent a 30-60 jours, et sans automatisation, les relances sont oubliees.
6. **Devis non standardises** : chaque devis est refait de zero ou copie-colle depuis un ancien fichier Word.

### Cout de l'inaction

| Perte | Estimation |
|-------|------------|
| 1 facture impayee oubliee / mois | 200-500 EUR/mois = 2 400 - 6 000 EUR/an |
| 1h/jour de gestion admin evitable | ~250h/an x 40 EUR/h = 10 000 EUR d'interventions non realisees |
| 1 client agence perdu par manque de reactivite | 5 000 - 15 000 EUR de CA recurrent/an |

---

## 3. Les concurrents

| Concurrent | Type | Forces | Faiblesses |
|-----------|------|--------|------------|
| **GestionDiag** | SaaS specialise | 450+ avis, 4.8/5. CRM complet, prise de RDV en ligne, facturation, app mobile. Leve 1.2M EUR. | Leader emergent, en forte croissance. Difficile de le deloger. |
| **Sogexpert** | Extranet gratuit + options payantes | Gratuit pour les bases, couverture fonctionnelle correcte | Gratuit = difficile de concurrencer sur le prix |
| **Liciel** | Logiciel technique + gestion | Reference historique, mises a jour reglementaires quotidiennes | Focus rapport technique, gestion commerciale basique |
| **OBBC / WinDiagnostic** | Logiciel technique | Couverture reglementaire solide | Gestion commerciale secondaire |
| **AnalysImmo** | Logiciel individuel ou equipe | Polyvalent | Moins connu |
| **Diag'Immo** | Logiciel economique | Simple, prise en main rapide, modeles pre-formates | Fonctionnalites limitees |

### Analyse concurrentielle

Le probleme est clair : **GestionDiag est deja positionne exactement sur ce creneau**. Avec 450+ avis a 4.8/5, une levee de fonds de 1.2M EUR, et une app mobile fonctionnelle, il occupe la position que PlanifDiag voudrait occuper. Sogexpert propose meme une version gratuite.

Le marche n'est pas un ocean bleu. C'est un marche avec un leader emergent bien etabli et des alternatives gratuites.

---

## 4. La differenciation (tentative)

Differenciation possible mais faible :
- **Prix agressif** : 9 EUR/mois vs GestionDiag (prix non public mais probablement 30-80 EUR/mois)
- **UX mobile-first** : concu pour le terrain, interface ultra-simple
- **Integration Liciel/OBBC** : pont automatique entre le logiciel technique et la gestion commerciale
- **Automatisation relances** : sequences email automatiques pour les impayees agences

**Probleme** : GestionDiag fait deja tout ca ou presque, avec une longueur d'avance et une communaute etablie.

---

## 5. Score rapide /20

| Critere | Note | Justification |
|---------|------|---------------|
| **Intensite douleur** | 4/5 | Douleur reelle et quotidienne. Le diagnostiqueur perd du temps et de l'argent sur la gestion admin. Mais ce n'est pas une urgence legale (pas d'amende). |
| **Facilite acquisition** | 3/5 | Annuaire public des diagnostiqueurs sur data.gouv.fr (scrapable). Forums specialises (Diagactu). SEO possible sur "logiciel diagnostiqueur immobilier". Mais marche de niche, volume SEO faible. |
| **Simplicite vente** | 3/5 | La valeur est comprise ("gerez vos devis et relances en un clic"). Mais il faut convaincre de switcher depuis GestionDiag ou Excel. Decideur unique = bon. |
| **Faisabilite solo** | 4/5 | CRUD classique : devis, factures, planning, relances. Stack standard Next.js + Supabase. MVP en 6-8 semaines. |
| **TOTAL** | **14/20** | |

---

## 6. Verification criteres eliminatoires

| Critere eliminatoire | Passe ? | Commentaire |
|---------------------|---------|-------------|
| Marketplace two-sided | OUI | Outil SaaS pur |
| Demarchage tel permanent | OUI | Cold email + SEO + annuaire public |
| Cycle vente > 1 mois | OUI | Self-service, essai gratuit, decideur unique |
| Marche < 500 cibles France | OUI | ~6 800 - 7 000 independants |
| Concurrent dominant 100M$+ | OUI | Aucun concurrent a 100M$+. GestionDiag a leve 1.2M EUR seulement. |
| Aucun canal acquisition en ligne | OUI | Annuaire public + SEO + forums specialises |
| Architecture complexe pour MVP | OUI | CRUD standard |
| Responsabilite metier | OUI | Outil de gestion, pas de contenu reglementaire |

**Aucun critere eliminatoire n'est declenche.**

---

## 7. Verdict final

### ELIMINEE

**Raison : concurrence trop etablie et positionnement deja occupe.**

GestionDiag occupe exactement le creneau vise (CRM + planning + facturation pour diagnostiqueurs independants) avec :
- 450+ avis a 4.8/5
- Levee de fonds de 1.2M EUR
- App mobile fonctionnelle
- Communaute active

Sogexpert offre une alternative gratuite.

Le score de 14/20 est insuffisant pour justifier l'investissement de 6-8 semaines de dev face a un concurrent deja bien implante. Le marche (6 800 cibles) est trop etroit pour coexister avec un leader emergent. La differenciation possible (prix, UX, integrations) est trop faible pour compenser l'avance de GestionDiag.

**Lecon :** un marche de niche avec un concurrent bien finance et bien note est plus dangereux qu'un marche large avec des concurrents mediocres.

---

## Sources

- [Analyse du marche du diagnostic immobilier - Modelesdebusinessplan.com](https://modelesdebusinessplan.com/blogs/infos/marche-diagnostic-immobilier)
- [Marche du diagnostic immobilier - Sonelo](https://www.sonelo.com/le-marche-du-diagnostic-immobilier/)
- [Diagnostiqueurs immobiliers ce qui vous attend en 2025 - Diagactu](https://www.diagnostiqueur-immobilier.fr/profession/diagnostiqueurs-immobiliers-ce-qui-vous-attend-en-2025/)
- [GestionDiag](https://gestiondiag.fr/)
- [GestionDiag LinkedIn](https://fr.linkedin.com/company/un-avenir-meilleur-pour-les-diagnostiqueurs)
- [Sogexpert](https://www.sogexpert.com/logiciels.php)
- [Liciel Diagnostics](https://www.liciel.fr/)
- [OBBC Developpement](https://obbc.fr/)
- [Top 5 logiciels diagnostic immobilier - 3ehabitat](https://www.3ehabitat.fr/le-top-5-des-meilleurs-logiciels-de-diagnostic-immobilier/)
- [Les 5 meilleurs logiciels diagnostic immobilier - Appvizer](https://www.appvizer.com/services/realestatediagnosis)
- [Annuaire diagnostiqueurs - data.gouv.fr](https://www.data.gouv.fr/datasets/annuaire-des-diagnostiqueurs-immobiliers)
- [Diagnostiqueur immobilier entre crise et evolutions - MonImmeuble](https://monimmeuble.com/actualite/diagnostiqueur-immobilier-entre-crise-et-evolutions-reglementaires)

---

*Analyse realisee le 2026-02-06 -- Run 002, Angle 5*
