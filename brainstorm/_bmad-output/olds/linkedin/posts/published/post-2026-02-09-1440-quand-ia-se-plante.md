# Post LinkedIn - Quand l'IA Se Plante

**Date de creation :** 2026-02-09 14:40
**Idee source :** #15 - Quand l'IA Se Plante
**Categorie :** IA/Authenticite
**Statut :** [ ] Programme [ ] Publie

---

## Post (Copier-coller dans Buffer)

L'IA a casse mon app en production.

Un refactoring "simple".

L'IA a reecrit un composant.

Les tests passaient.
Le build etait vert.

Et pourtant.

Un bug subtil en prod.

Un state qui se reinitialise
a chaque navigation.

🔥 Ce qui s'est passe
→ L'IA a change la logique d'un useEffect
→ Sans comprendre le "pourquoi" original
→ Resultat : invisible en dev, visible en prod

🧠 Ce que j'ai appris

1. 𝗧𝗼𝘂𝗷𝗼𝘂𝗿𝘀 relire le code genere.

Ligne par ligne.

2. Les tests ne suffisent pas.
→ Tester le comportement, pas juste le rendu

3. L'IA ne comprend pas le 𝗰𝗼𝗻𝘁𝗲𝘅𝘁𝗲 𝗺𝗲𝘁𝗶𝗲𝗿.
→ Elle optimise le code
→ Pas la logique business

💡 L'IA est un outil.

Pas un 𝗼𝗿𝗮𝗰𝗹𝗲.

La confiance aveugle, ca se paye.

—

T'as deja eu un fail memorable avec l'IA ?

#ia #developpeur #debugging #production #claudecode

---

## Metriques Cibles

| Metrique | Score |
|----------|-------|
| Hook | 9/10 |
| Valeur ajoutee | 9/10 |
| Engagement potentiel | 9/10 |

## Premier Commentaire (Optionnel)

Le bug : un useEffect avec une dependance retiree par l'IA "pour optimiser". Le state se reset a chaque changement de route. 45 min pour trouver, 2 secondes pour fix.

---

## Post-Publication

**Publie le :**
**Impressions :**
**Likes :**
**Commentaires :**
**Apprentissages :**
