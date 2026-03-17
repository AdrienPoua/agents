# YETI.live — Design System

**Date :** 2026-02-27
**Objectif :** Definir l'identite visuelle du site vitrine YETI.live

---

## 1. Philosophie — D'ou vient ce design system ?

### Ce que le client a aime (ADN du portfolio adrienpoua.fr)

En analysant le portfolio et les mots du client — **"propre, clean, doux, ca se deroule comme une histoire"** — on extrait 5 principes fondateurs :

| Principe | Ce qu'on voit sur le portfolio | Traduction pour YETI.live |
|----------|-------------------------------|---------------------------|
| **Dark-first** | Fond quasi-noir, surfaces elevees sombres | Meme approche — le dark evoque la precision, le labo, la tech premium |
| **Douceur** | Pas de contrastes brutaux, couleurs attenuees, pas de blanc pur | Transitions douces entre sections, couleurs desaturees, lumieres diffuses |
| **Storytelling vertical** | Le site se "deroule" section par section, un sujet par ecran | Chaque section = 1 idee, fullscreen, scroll fluide |
| **Hierarchie typographique claire** | Labels small caps orange > Titre gros bold > Body gris attenue | Meme pattern : label accent > titre blanc > corps muted |
| **Respirations** | Espacement genereux entre elements, sections qui "respirent" | Minimum 80-120px entre sections, contenu centre, pas de surcharge |

### Ce que le paysage concurrentiel revele

| Concurrent | Esthetique | Ce qu'on evite | Ce qu'on retient |
|------------|-----------|----------------|------------------|
| **Catapult** | Noir + orange vif, agressif, "elite sport" | Trop brutal, trop "performance brute" | Le noir fonctionne pour le B2B sport |
| **WHOOP** | Bleu electrique, aspirationnel, lifestyle | Trop "wellness consumer", pas assez serieux pour un industriel | Les data viz epurees |
| **Oura** | Blanc minimal, luxe, sobre | Trop froid et distant, pas de storytelling | La sophistication typographique |
| **Movesense** | Bleu clinique, blanc, medical | Trop "hopital", pas engageant | La credibilite scientifique |

**Positionnement design YETI.live :** A mi-chemin entre la sophistication d'Oura et l'energie de Catapult, avec la douceur narrative du portfolio.

### La dualite corps-esprit comme principe visuel

L'insight central : le nom **YETI.live** contient deja la dualite du produit :
- **YETI** = glace, montagne, froid, precision, mystere → **tons froids (ice blue)**
- **.live** = vivant, temps reel, pouls, chaleur humaine → **tons chauds (amber/pulse)**

Cette dualite chaud/froid EST la traduction visuelle du concept **somatopsychique** (corps + esprit). On ne choisit pas un accent — on en utilise deux, et leur rencontre (gradient) represente l'innovation YETI.live.

---

## 2. Palette de couleurs

### Couleurs de base

| Token | Hex | Usage |
|-------|-----|-------|
| `--bg-primary` | `#09090B` | Fond principal (quasi-noir) |
| `--bg-surface` | `#131316` | Surfaces elevees (cards, nav) |
| `--bg-elevated` | `#1C1C21` | Elements sureleves (code blocks, tooltips) |
| `--border-subtle` | `#1F1F26` | Bordures tres discretes |
| `--border-default` | `#2A2A33` | Bordures visibles |

### Couleurs de texte

| Token | Hex | Usage |
|-------|-----|-------|
| `--text-primary` | `#EDEDF0` | Titres, texte principal (pas blanc pur = douceur) |
| `--text-secondary` | `#8B8B96` | Corps de texte, descriptions |
| `--text-muted` | `#5A5A66` | Labels secondaires, metadata |

### Accents — La dualite

| Token | Hex | Symbolisme | Usage |
|-------|-----|------------|-------|
| `--accent-warm` | `#D4885A` | Corps, physique, pouls, .live | Labels de section, liens, CTA secondaire |
| `--accent-warm-soft` | `#D4885A26` | — | Backgrounds subtils chauds (10% opacite) |
| `--accent-cool` | `#5AB8D4` | Esprit, precision, data, YETI | Data viz, metriques, highlights science |
| `--accent-cool-soft` | `#5AB8D426` | — | Backgrounds subtils froids (10% opacite) |
| `--gradient-bridge` | `linear-gradient(135deg, #D4885A, #5AB8D4)` | La connexion corps-esprit | Hero glow, CTA principal, moments cles |

### Regles d'utilisation des accents

```
WARM (#D4885A)                    COOL (#5AB8D4)
├─ Labels de section              ├─ Chiffres / metriques
├─ Links hover                    ├─ Data visualizations
├─ CTA secondaire (outline)       ├─ Highlights scientifiques
├─ Quotes du fondateur            ├─ Tags techno
└─ Fond de section "produit"      └─ Fond de section "science"

GRADIENT (warm → cool)
├─ CTA principal ("Devenir partenaire")
├─ Glow diffus derriere le hero
├─ Ligne de separation entre sections
└─ Element 3D / illustration hero
```

**Regle d'or :** Les deux accents ne sont JAMAIS utilises en meme temps a forte saturation sur le meme element. L'un domine, l'autre apparait en subtilite. Le gradient est reserve aux moments cles (hero, CTA final).

---

## 3. Typographie

### Choix de polices

| Role | Police | Pourquoi |
|------|--------|----------|
| **Display / Titres** | **Satoshi** (Bold, Black) | Geometrique mais chaleureuse, moderne sans etre froide, tres lisible en grand. Alternatives : Cabinet Grotesk, General Sans |
| **Corps** | **Inter** (Regular, Medium) | Standard de lisibilite, proven en FR/EN, excellents chiffres |
| **Mono / Data** | **JetBrains Mono** (Regular) | Pour les metriques, specs techniques, donnees chiffrees |

### Echelle typographique

```
Label       : Satoshi Medium   | 12-13px | uppercase | tracking +0.08em | accent-warm
Overline    : Inter Medium     | 14px    | uppercase | tracking +0.05em | text-muted
Body        : Inter Regular    | 16-18px | normal    | line-height 1.6  | text-secondary
Body large  : Inter Regular    | 20px    | normal    | line-height 1.6  | text-secondary
H3          : Satoshi Bold     | 24-28px | normal    | line-height 1.3  | text-primary
H2          : Satoshi Bold     | 36-48px | normal    | line-height 1.2  | text-primary
H1 / Hero   : Satoshi Black   | 56-72px | normal    | line-height 1.1  | text-primary
Metric      : JetBrains Mono  | 32-48px | normal    | line-height 1.0  | accent-cool
```

### Pattern typographique des sections (herite du portfolio)

Chaque section suit le meme rythme :

```
LABEL EN SMALL CAPS                    ← accent-warm, 12px, uppercase, tracked

Titre principal de la section          ← text-primary, 36-48px, bold

Paragraphe descriptif qui explique      ← text-secondary, 16-18px, regular
le sujet de cette section en 2-3
lignes maximum.
```

Ce pattern cree le **rythme narratif** que le client a aime — on le reconnait a chaque section sans y penser.

---

## 4. Spacing & Layout

### Grille

```
Max-width contenu    : 1200px (centre)
Colonnes             : 12 colonnes
Gouttiere            : 24px (desktop) / 16px (mobile)
Marge laterale       : 48px (desktop) / 24px (mobile)
```

### Espacement vertical

| Token | Valeur | Usage |
|-------|--------|-------|
| `--space-section` | 120-160px | Entre deux sections |
| `--space-block` | 64-80px | Entre deux blocs dans une section |
| `--space-element` | 24-32px | Entre elements relies |
| `--space-tight` | 8-16px | Entre label et titre, titre et body |

**Philosophie :** Toujours plus d'espace que ce qui semble necessaire. Le vide EST le design. C'est ce qui cree le "doux" et le "clean".

### Layouts par section

```
Hero           : Centrer / ou split 60-40 (texte gauche, visuel droit)
Probleme       : Centrer (texte + schema quadrant)
Produit        : Split 50-50 (texte gauche, visuel produit droit)
Science        : Grille de metriques (2x2 ou 3 colonnes)
Fondateur      : Split 40-60 (photo gauche, bio droite)
Marche         : Chiffres cles en grille + mini chart
Cas d'usage    : Grid cards (2x3 ou scroll horizontal)
Timing         : Timeline verticale ou horizontale
Partenariat    : Centrer (texte + CTA)
Contact        : Centrer (formulaire)
```

---

## 5. Motion & Animation

### Principes (herites du portfolio)

Le site "se deroule comme une histoire". Chaque section **apparait** au scroll, elle ne saute pas.

| Principe | Implementation |
|----------|---------------|
| **Reveal progressif** | Chaque element entre en `fade-up` (opacity 0→1, translateY 20px→0) au scroll |
| **Stagger** | Dans une meme section, les elements apparaissent en sequence (label → titre → body → visuel) avec 100ms de delai entre chaque |
| **Douceur** | Easing : `cubic-bezier(0.22, 1, 0.36, 1)` — depart rapide, arrivee tres douce |
| **Duree** | 600-800ms par animation. Jamais < 400ms (trop brusque) ni > 1000ms (trop lent) |
| **Pas de parallax agressif** | Leger parallax sur les visuels (0.05-0.1 ratio max), jamais sur le texte |

### Animations specifiques a YETI.live

| Element | Animation |
|---------|-----------|
| **Ligne ECG dans le hero** | Trace SVG animee qui se dessine (path drawing) de gauche a droite, lente et fluide |
| **Chiffres de marche** | Count-up anime quand ils entrent dans le viewport (ex: 0 → 87 Mds USD) |
| **Quadrant concurrentiel** | Les points apparaissent un par un, YETI.live apparait en dernier avec un glow |
| **Gradient glow hero** | Pulsation subtile et lente (8-12s cycle) — evoque un "pouls" |
| **Transition entre sections** | Ligne fine horizontale qui se dessine (de centre vers les bords) |

### Interactions

| Element | Hover | Active |
|---------|-------|--------|
| **CTA principal** | Glow du gradient s'intensifie | Scale 0.98 |
| **CTA secondaire** | Border passe de subtle a accent-warm | Scale 0.98 |
| **Cards cas d'usage** | Legere elevation (translateY -4px) + border s'eclaire | — |
| **Liens texte** | Underline se dessine de gauche a droite | — |

---

## 6. Composants

### Navigation (Pill Nav)

Identique au portfolio : navigation flottante en haut, pills arrondies, fond surface avec blur.

```
Container  : bg-surface/80 + backdrop-blur-lg, rounded-full, border border-subtle
Items      : padding 8px 16px, text-secondary
Item actif : bg-elevated, text-primary, rounded-full
Position   : fixed top center, z-50
```

### Boutons

```
Primary (gradient) :
  bg: gradient-bridge (warm → cool)
  text: #09090B (dark on gradient)
  padding: 16px 32px
  border-radius: 12px
  font: Satoshi Bold 16px

Secondary (outline warm) :
  bg: transparent
  border: 1px solid accent-warm
  text: accent-warm
  padding: 14px 28px
  border-radius: 12px
  font: Satoshi Medium 16px

Ghost :
  bg: transparent
  text: text-secondary
  hover: text-primary
  padding: 8px 16px
```

### Cards

```
Base card :
  bg: bg-surface
  border: 1px solid border-subtle
  border-radius: 16px
  padding: 32px
  hover: border → border-default

Metric card (pour chiffres marche) :
  Meme base +
  Chiffre en accent-cool, JetBrains Mono, 32-48px
  Label en text-muted, Inter, 14px uppercase
```

### Tags / Pills

```
Tag default :
  bg: bg-elevated
  border: 1px solid border-subtle
  text: text-secondary
  padding: 6px 14px
  border-radius: 9999px
  font: Inter Medium 13px

Tag accent :
  bg: accent-warm-soft (10%)
  border: 1px solid accent-warm/30%
  text: accent-warm
```

### Separateur de section

```
Ligne fine horizontale :
  height: 1px
  bg: linear-gradient(90deg, transparent, border-default, transparent)
  width: 80%
  margin: auto

  OU (option premium) :
  bg: linear-gradient(90deg, transparent, accent-warm/20%, accent-cool/20%, transparent)
```

---

## 7. Visuels & Iconographie

### Motif visuel principal : la ligne ECG

Le heartbeat (trace ECG) est le **motif signature** du site. Il apparait :
- En hero : trace animee grande echelle, subtile en arriere-plan
- En separateur : entre certaines sections, une ligne ECG fine remplace la ligne droite
- En favicon : picto simplifie

C'est un motif universellement reconnu (sante, tech, vitalite) qui connecte au produit sans avoir besoin de photo du prototype.

### Illustration hero / 3D

Comme le portfolio utilise un element 3D abstrait (la fleur/spirale), YETI.live pourrait avoir :

**Option A — Onde abstraite body-mind :**
Une forme 3D generee (type Three.js ou Spline) representant une onde/vague avec un gradient warm→cool. Evoque simultanement un signal ECG, une montagne (YETI), et une vague de donnees.

**Option B — Visualisation de la "signature" :**
Un graphique abstrait et elegant montrant des courbes personnalisees (comme un fingerprint en mouvement) avec le gradient dual.

**Option C — Le capteur simplifie :**
Si des visuels du produit existent (a confirmer avec Yann), un render 3D epure du capteur thoracique avec un glow subtil.

### Iconographie

| Style | Usage |
|-------|-------|
| **Ligne fine (stroke 1.5px)** | Icons d'interface (nav, formulaire) |
| **Pictogrammes custom** | Cas d'usage (sport, sante, exosquelette, defense, gaming) |
| **Pas d'emojis** | Contrairement au portfolio, le contexte B2B industriel demande des icones pro |

### Photographie (si disponible)

| Type | Traitement |
|------|-----------|
| Photos du fondateur | N&B ou desaturees, grain subtil, cadrage portrait classique |
| Photos HIPE Lab | Desaturees avec overlay sombre, montrer l'environnement scientifique |
| Photos sport/usage | Eviter les stock photos generiques. Si pas de vraies photos, preferer les illustrations/schemas |

---

## 8. Effets visuels specifiques

### Glow diffus (herite du portfolio)

Le portfolio a une lueur chaude diffuse en arriere-plan (visible derriere le hero). Pour YETI.live :

```
Hero glow :
  position: absolute
  width: 600px
  height: 600px
  background: radial-gradient(circle, accent-warm/15%, transparent 70%)
  mix avec un second :
  background: radial-gradient(circle, accent-cool/10%, transparent 70%)
  filter: blur(100px)
  animation: pulse lent 10s ease-in-out infinite
```

Ce glow represente le "champ" du capteur, la zone de detection body-mind. Il pulse doucement comme un pouls.

### Grain de texture

Un tres leger grain (noise) en overlay sur le fond pour eviter les aplats trop "plats" et ajouter de la matiere :

```
background-image: url(noise.svg) ou CSS noise
opacity: 0.03-0.05
mix-blend-mode: overlay
```

### Glassmorphism subtil

Pour la nav et certaines cards, un leger effet verre depoli :

```
background: bg-surface/60%
backdrop-filter: blur(20px)
border: 1px solid border-subtle
```

---

## 9. Responsive

| Breakpoint | Adaptation |
|------------|-----------|
| **Desktop (1200px+)** | Layout complet, splits 50-50, grilles multi-colonnes |
| **Tablet (768-1199px)** | Colonnes reduites, splits deviennent empiles, nav reste pill |
| **Mobile (< 768px)** | Full-width, sections empilees, nav hamburger, typo reduite 80% |

**Regle mobile :** Le storytelling vertical fonctionne MIEUX sur mobile (scroll naturel). Pas besoin de repenser — juste de reduire les espacements et la typo.

---

## 10. Resume : Les 7 regles du design YETI.live

1. **Dark-first** — Fond #09090B, jamais de sections blanches. Le dark est la marque.
2. **Dual accent** — Warm (corps) + Cool (esprit). Le gradient = l'innovation.
3. **Un sujet par ecran** — Chaque section occupe le viewport, se revele au scroll.
4. **L'espace est le design** — Plus de vide que de contenu. Le "doux" vient du vide.
5. **Label → Titre → Corps** — Le meme rythme typographique a chaque section.
6. **La ligne ECG est le motif** — Present en subtilite, jamais en force.
7. **Douceur des animations** — 600-800ms, ease-out, stagger. Rien de brusque.

---

## 11. References visuelles d'inspiration

| Reference | Ce qu'on prend |
|-----------|---------------|
| **adrienpoua.fr** (portfolio) | Le dark base, la douceur, le storytelling scroll, le rythme typo |
| **linear.app** | L'epure extreme, les glows subtils, les gradients sur dark |
| **vercel.com** | La hierarchie typo, le grid de metriques, le glassmorphism |
| **stripe.com** | Les gradients comme language visuel, la precision |
| **oura.com** | La sophistication premium d'un wearable |
