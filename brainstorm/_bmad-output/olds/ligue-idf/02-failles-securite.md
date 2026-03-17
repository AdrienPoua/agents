# Failles de Securite — basketidf.com

> Date : 16/02/2026
> Methode : Informations publiquement accessibles uniquement (CVE, code source visible, API publique)
> AUCUNE intrusion, AUCUN test de penetration, AUCUNE exploitation

---

## 1. Surface d'attaque WordPress

### Le probleme fondamental
WordPress represente **~43% du web mondial**, ce qui en fait la cible #1 des attaques automatisees. Les bots scannent en permanence les sites WordPress pour detecter des plugins vulnerables.

basketidf.com utilise **au minimum 15 plugins actifs** (detectes via API REST). Chaque plugin est un vecteur d'attaque potentiel.

---

## 2. CVE publiques des plugins utilises

### The Events Calendar (installe sur basketidf.com)

| CVE | CVSS | Description | Versions affectees |
|-----|------|-------------|-------------------|
| **CVE-2025-9807** | 7.5 HIGH | Injection SQL sans authentification — extraction base de donnees. **150 000+ sites cibles activement** | <= 6.15.1 |
| CVE-2024-8275 | HIGH | Injection SQL sans authentification via parametre `order` | <= 6.6.4 |

### Essential Addons for Elementor / EAEL (installe sur basketidf.com)

| CVE | CVSS | Description | Versions affectees |
|-----|------|-------------|-------------------|
| **CVE-2025-24752** | CRITICAL | XSS reflete — **2 millions de sites affectes** | < 6.0.15 |
| CVE-2024-3733 | MEDIUM | Extraction de posts prives/brouillons sans authentification | <= 5.9.15 |
| CVE-2024-9994 | MEDIUM | XSS stocke via widget Pricing Table | <= 6.1.12 |
| CVE-2026-1004 | MEDIUM | Exposition de donnees produits prives | <= 6.5.5 |

### JetMenu / Crocoblock (installe sur basketidf.com)

| CVE | CVSS | Description | Versions affectees |
|-----|------|-------------|-------------------|
| **CVE-2025-26953** | 7.5 HIGH | Contournement de controle d'acces sans authentification | <= 2.4.9 |
| CVE-2025-53987 | MEDIUM | Extraction d'informations sensibles (Subscriber+) | <= 2.4.11.1 |

### Elementor (installe sur basketidf.com)

| CVE | CVSS | Description | Versions affectees |
|-----|------|-------------|-------------------|
| **CVE-2024-8275** | HIGH | Injection SQL sans authentification | <= 6.6.4 |
| Multiples XSS 2024-2025 | MEDIUM | XSS stocke DOM-Based, XSS reflete, lecture fichier arbitraire | Versions variees |

### Astra Theme (installe sur basketidf.com)

| CVE | CVSS | Description | Versions affectees |
|-----|------|-------------|-------------------|
| CVE-2024-2347 | MEDIUM | XSS stocke via display name | <= 4.6.8 |
| CVE-2024-29768 | 3.5 LOW | XSS stocke via header/footer | < 4.6.5 |

### WordPress Core / REST API

| CVE | CVSS | Description |
|-----|------|-------------|
| **CVE-2024-13346** | 9.2 CRITICAL | Execution de shortcodes a distance, fuite de donnees, XSS |
| CVE-2024-27956 | HIGH | Contournement d'authentification WordPress 6.0-6.4.1 |

---

## 3. Expositions publiquement visibles (zero intrusion)

### API REST grande ouverte
N'importe qui peut acceder a ces URLs dans un navigateur :

| URL | Donnees exposees |
|-----|-----------------|
| `/wp-json/` | Architecture complete : 20 namespaces, tous les endpoints, structure interne |
| `/wp-json/wp/v2/types` | 23 types de contenu enregistres |
| `/wp-json/wp/v2/posts` | Articles publics avec contenu complet, auteurs, dates |
| `/wp-json/wp/v2/categories` | Taxonomie complete (10+ categories) |
| `/wp-json/wp/v2/tags` | 200+ tags exposes |
| `/wp-json/wp/v2/media` | Fichiers media : noms, URLs directes, tailles, dates |
| `/wp-json/wp/v2/users` | **401** (protege — bon point) |
| `/wp-json/seopress/v1` | Configuration SEO complete, strategies de mots-cles, redirections |
| `/wp-json/wordfence/v1` | Endpoints de securite : config, scan, issues (authentification requise) |

### Ce que ca signifie concretement
- Un attaquant connait **exactement quels plugins sont installes** (et leurs versions probables)
- Il peut croiser ces infos avec les bases CVE pour trouver les failles exploitables
- La configuration SEO revele la strategie de contenu et les redirections
- Les endpoints Wordfence revelent qu'un WAF est present (info utile pour un attaquant)

### Fichiers media non proteges
Les 10 derniers fichiers uploades sont accessibles publiquement :
- PDFs internes (Livret des Officiels 2025-2026, decisions disciplinaires CRD)
- Photos non optimisees (PNG 2+ MB)
- **Aucun alt text** sur aucun fichier = probleme accessibilite

---

## 4. Absence de conformite RGPD visible

- **Complianz** est installe (namespace `complianz/v1` detecte dans l'API)
- Pourtant, **aucune banniere de consentement cookies detectee** lors de l'audit
- Si Complianz est mal configure ou desactive, c'est une infraction RGPD
- Scripts de tracking (WP-Statistics) charges sans consentement explicite

---

## 5. Comparaison avec Next.js (argument commercial)

| Vecteur d'attaque | WordPress + Plugins | Next.js (SSG) |
|-------------------|--------------------|----|
| Injection SQL | Risque eleve (multiples CVE) | **Impossible** (pas de BDD exposee) |
| XSS via plugins | Risque eleve (multiples CVE) | **Quasi nul** (pas de plugins tiers) |
| API exposee | Ouverte par defaut | **Aucune API publique par defaut** |
| Brute force admin | `/wp-admin` accessible | **N'existe pas** |
| Mise a jour critique | Chaque plugin = risque | **Zero plugin** a maintenir |
| Attaque supply chain | 15+ plugins = 15+ fournisseurs | Code proprietaire dans Git |

---

## Sources

- WPScan Vulnerability Database
- Wordfence Threat Intelligence
- Patchstack Database
- GitHub Advisory Database
- OpenCVE
- BleepingComputer
- SecurityWeek
- ZATAZ
