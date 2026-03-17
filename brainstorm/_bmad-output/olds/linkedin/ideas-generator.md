# Générateur d'Idées de Posts LinkedIn

## Objectif

Générer des idées de posts LinkedIn personnalisées basées sur le profil source.

---

## PROMPT À UTILISER

```
Tu es un expert en personal branding LinkedIn.

## CONTEXTE
Je vais te donner mon profil personnel. Génère 10 idées de posts LinkedIn basées sur mes expériences uniques, mes compétences et mon parcours.

## MON PROFIL
[COLLE ICI LE CONTENU DE linkedin-profil-source.md]

## CONSIGNES

Pour chaque idée, fournis :
1. **Titre** : Résumé en 5 mots max
2. **Catégorie** : (IA/Productivité | Reconversion | Projet/Technique | Opinion)
3. **Accroche** : La première phrase qui arrête le scroll (percutante, intrigante)
4. **Angle** : Ce que le post va raconter/enseigner
5. **CTA** : Question finale pour engager

## FORMAT DE SORTIE

Pour chaque idée :

### [Numéro]. [Titre]
**Catégorie :** [catégorie]
**Accroche :** "[première phrase]"
**Angle :** [description du contenu]
**CTA :** "[question finale]"

---

## CRITÈRES DE QUALITÉ

Les idées doivent :
- ✅ Être basées sur des expériences RÉELLES du profil
- ✅ Avoir une accroche qui arrête le scroll
- ✅ Apporter de la valeur (insight, tip, histoire)
- ✅ Être variées (mix des 4 catégories)
- ✅ Pouvoir être développées en 1200 caractères max

Les idées NE doivent PAS :
- ❌ Être génériques (applicables à n'importe qui)
- ❌ Être trop techniques sans contexte humain
- ❌ Être auto-promotionnelles sans valeur
```

---

## OUTPUT ATTENDU

Le fichier généré sera sauvegardé dans :
`_bmad-output/templates/linkedin-10-idees-posts.md`

---

## EXEMPLE D'IDÉE GÉNÉRÉE

### 1. Arbitrage = Debugging
**Catégorie :** Reconversion
**Accroche :** "En arbitrage, tu as 0.5 seconde pour décider si c'est faute ou pas. Le code m'a appris autre chose."
**Angle :** Parallèle entre la prise de décision instantanée sur le terrain et l'analyse méthodique en debugging. Les deux compétences se complètent.
**CTA :** "Quel autre métier vous a préparé au dev sans que vous le sachiez ?"
