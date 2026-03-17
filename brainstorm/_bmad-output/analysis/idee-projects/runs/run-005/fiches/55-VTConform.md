# Fiche Enrichie - VTConform (#55)

**Run :** 005
**Phase :** 2 - Approfondissement
**Score Phase 1b :** 16.5/20

---

## 1. CONTEXTE METIER

### C'est quoi ce metier/secteur ?

Les **chauffeurs VTC (Voiture de Transport avec Chauffeur)** et **taxis** sont des transporteurs de personnes independants. En France, le secteur a explose avec l'arrivee d'Uber (2012) et compte aujourd'hui **134 000+ chauffeurs** (71 300 VTC + 63 000 taxis). Les VTC sont en croissance de +27%/an.

La majorite des VTC sont des **micro-entrepreneurs** ou des **SASU unipersonnelles** : un seul individu, sans service administratif, sans comptable dedie pour les questions reglementaires. Ils passent 8-12h/jour a conduire et gerer l'admin le soir/week-end.

### Pourquoi il y a un probleme maintenant ?

1. **Explosion du nombre de VTC** : +27%/an = des dizaines de milliers de NOUVEAUX chauffeurs decouvrent le labyrinthe administratif chaque annee (39 800 nouvelles cartes pro en 2024)
2. **Multiplicite des echeances** : 6-8 obligations reglementaires avec des periodicites differentes (5 ans, 2 ans, annuel), chacune avec ses propres documents
3. **Aucun outil existant** : les chauffeurs gerent avec Google Agenda, papier, ou rien
4. **35% d'anomalies** lors des controles DGCCRF = un tiers des chauffeurs ne sont pas en regle

### Contexte reglementaire

- **Loi Thevenoud (2014)** : cadre reglementaire VTC
- **Loi Grandguillaume (2016)** : renforcement des obligations
- **Code des transports** (art. L3120-1 et suivants) : obligations de carte pro, formation, assurance
- **Sanctions** : jusqu'a 15 000 EUR d'amende + 1 an d'emprisonnement pour exercice sans carte pro valide

---

## 2. LA DOULEUR (precis et chiffre)

### Qui souffre exactement ?
- **50 000 a 70 000 chauffeurs VTC independants** (micro-entreprise ou SASU unipersonnelle)
- **63 000 chauffeurs de taxi** (artisans independants)
- Profil type : homme, 30-50 ans, smartphone-first, pas d'assistant administratif

### De quoi ?
Un chauffeur VTC/taxi doit gerer seul **6-8 echeances reglementaires** :

| Echeance | Periodicite | Consequence si oubliee |
|----------|-------------|----------------------|
| Carte professionnelle | 5 ans | 15 000 EUR + 1 an prison |
| Formation continue | 5 ans (avant renouvellement carte) | Refus renouvellement = arret activite |
| Controle technique | Annuel (VTC) / 2 ans (taxi) | 135 EUR + immobilisation vehicule |
| Assurance RC Pro | Annuel | 3 750 EUR + suspension permis + confiscation |
| Visite medicale | Variable (au renouvellement) | Refus renouvellement carte |
| Inscription registre VTC | Continue (chgt vehicule/adresse) | Radiation du registre |
| Kbis / extrait RNE | A jour pour toute demarche | Blocage des demarches |
| Vignette Crit'Air | Chgt vehicule | Amende 68 EUR |

### Combien ca coute ?
- **Amende carte expiree** : 15 000 EUR + potentiel prison
- **Amende assurance expiree** : 3 750 EUR + suspension permis
- **Immobilisation vehicule** = perte de revenus immediate (150-300 EUR/jour)
- **Dossier incomplet au renouvellement** = 3-5 mois de retard, multiples allers-retours prefecture
- **Temps perdu** : 4-8h pour preparer un renouvellement de carte pro (reunir tous les documents)

---

## 3. LA SOLUTION (maquette textuelle)

### Ce que fait l'application

```
┌─────────────────────────────────────────┐
│         VTCONFORM - Dashboard           │
├─────────────────────────────────────────┤
│                                         │
│  ✅ Carte pro      expire le 15/03/2029 │
│  ⚠️  Formation      a faire avant 12/28 │
│  ✅ Controle tech.  valide -> 08/2026   │
│  🔴 Assurance RC    expire dans 12j !   │
│  ✅ Visite medicale OK -> 2029          │
│                                         │
│  [Score conformite : 80%]               │
│                                         │
│  📄 Coffre-fort docs (6/8 uploades)     │
│  📋 Checklist renouvellement carte pro  │
│                                         │
└─────────────────────────────────────────┘
```

### Fonctionnalites MVP

| Priorite | Fonctionnalite | Description |
|----------|---------------|-------------|
| **P0** | Dashboard echeances | Vue d'ensemble de toutes les echeances avec code couleur (vert/orange/rouge) |
| **P0** | Alertes multi-niveaux | Notifications email + SMS a 90/60/30/15/7 jours avant echeance |
| **P0** | Checklists documentaires | Pour chaque echeance, liste exacte des documents a fournir |
| **P0** | Onboarding guide | Saisie des dates initiales lors de l'inscription (carte pro, CT, assurance...) |
| **P1** | Coffre-fort documents | Upload et stockage securise des attestations, scans, certificats |
| **P1** | Chronologie de renouvellement | Guide pas-a-pas : dans quel ordre faire les demarches |
| **P1** | Notifications push (PWA) | Rappels sur le telephone directement |
| **P2** | Multi-vehicules | Pour les chauffeurs avec 2+ vehicules |
| **P2** | Partage employeur | Le chauffeur partage son statut conformite avec sa centrale/plateforme |
| **P2** | Annuaire prestataires | Centres formation agrees, medecins agrees par departement |

### Parcours utilisateur

1. **Inscription** (3 min) : le chauffeur choisit VTC ou Taxi, renseigne ses dates cles (carte pro, CT, assurance, formation)
2. **Dashboard** : vue immediate de son statut conformite, prochaines echeances, alertes
3. **Notification** : recoit un SMS/email 90 jours avant echeance avec la checklist de documents
4. **Preparation** : suit le guide pas-a-pas pour preparer son renouvellement dans le bon ordre
5. **Upload** : stocke ses nouveaux documents dans le coffre-fort, met a jour ses dates

---

## 4. LE DECLENCHEUR D'ACHAT

| Declencheur | Moment | Urgence |
|-------------|--------|---------|
| Renouvellement carte pro (5 ans) | 3-6 mois avant expiration | CRITIQUE - pas de carte = arret activite |
| Controle routier avec anomalie | Imprevisible | EXTREME - amende + immobilisation immediate |
| Nouvelle inscription VTC | Debut activite | FORTE - debutant perdu dans les obligations |
| Changement de vehicule | Variable | MODEREE - cascade de mises a jour |
| Renouvellement assurance RC Pro | Annuel | FORTE - 3 750 EUR si oubli |
| Article/post viral sur amende VTC | Aleatoire | MODEREE - prise de conscience collective |

---

## 5. ACQUISITION CLIENT

### Comment trouver les clients ?

| Canal | Detail | Cout | Potentiel |
|-------|--------|------|-----------|
| **Groupes Facebook VTC** | Dizaines de groupes actifs (VTC de France, Chauffeurs VTC Paris, etc.) | Gratuit | FORT - communaute tres active, partage viral |
| **SEO** | "renouvellement carte VTC", "formation continue VTC obligatoire", "echeances VTC" | Gratuit | FORT - requetes a forte intention |
| **Registre VTC national** | Liste scrapable des chauffeurs enregistres | Gratuit | FORT - acquisition directe par email |
| **Centres de formation VTC** | Partenariat : ils recommandent VTConform a leurs stagiaires | Gratuit/commission | FORT - touchent les chauffeurs au moment du renouvellement |
| **YouTube/TikTok VTC** | Influenceurs VTC existants (Yassine VTC, etc.) | Gratuit/sponsoring | MOYEN - audience engagee |
| **Cold email cible** | Via registre VTC | Faible | MOYEN - volume possible mais taux conversion a valider |

### Message d'accroche
> **"Ne perdez plus jamais votre carte pro. Toutes vos echeances VTC suivies et anticipees. 4,99 EUR/mois."**

### Lead magnet possible
- **Checklist gratuite PDF** : "Les 8 echeances reglementaires du chauffeur VTC : dates, documents, sanctions"
- **Simulateur gratuit** : "Quand devez-vous renouveler votre carte pro ? Entrez votre date de delivrance"
- **Article SEO** : Guide complet du renouvellement de carte VTC etape par etape

---

## 6. BUSINESS MODEL

### Pricing

| Plan | Prix | Cible | Fonctionnalites |
|------|------|-------|-----------------|
| **Gratuit** | 0 EUR | Acquisition / lead magnet | Checklist PDF, simulateur date renouvellement |
| **Essentiel** | 4,99 EUR/mois (49 EUR/an) | Chauffeur independant | Dashboard, alertes email/SMS, checklists, coffre-fort docs |
| **Pro** | 9,99 EUR/mois (99 EUR/an) | Chauffeur multi-vehicules ou flotte | Multi-vehicules, partage employeur, annuaire prestataires |

### Comparaison avec l'alternative actuelle

| Aspect | Google Agenda | VTConform |
|--------|--------------|-----------|
| Rappels echeances | Manuels, un par un | Automatiques, toutes echeances |
| Checklists documents | Non | Oui, specifiques par echeance |
| Ordre des demarches | Non | Guide pas-a-pas |
| Stockage documents | Non | Coffre-fort securise |
| Vue d'ensemble conformite | Non | Dashboard avec score |
| Prix | Gratuit | 4,99 EUR/mois |

### ROI calcule pour le client
- **Cout VTConform** : 49 EUR/an
- **Cout d'UNE amende carte expiree** : 15 000 EUR
- **ROI** : VTConform se rembourse 306 fois en evitant UNE SEULE amende
- **Cout d'UN jour d'immobilisation** : 150-300 EUR de CA perdu
- **ROI** : VTConform se rembourse 3-6 fois en evitant UN SEUL jour d'immobilisation

### Objectif revenu
- **Cible** : 2 500-3 000 EUR/mois
- **A 4,99 EUR/mois** : besoin de **500-600 clients** payants
- **Sur 134K cibles** : taux de penetration necessaire = **0,37-0,45%** = tres atteignable

---

## 7. CONCURRENCE

| Concurrent | Pricing | Faiblesses | Angle VTConform |
|-----------|---------|------------|-----------------|
| NeedMe | ~19 EUR/mois | Gestion courses/factures, PAS d'echeances reglementaires | VTConform = complementaire |
| Gest4U | ~29 EUR/mois | Comptabilite VTC, echeances FISCALES seulement | VTConform = echeances REGLEMENTAIRES |
| Logipax | Sur devis | Gestion flotte, pas independants | VTConform = fait pour l'independant |
| Google Agenda | Gratuit | Pas de contexte reglementaire, pas de checklists | VTConform = intelligent et specifique VTC |
| Groupes Facebook | Gratuit | Information dispersee, pas personnalisee | VTConform = suivi individuel automatise |

**Angle differenciateur** : "Le seul outil concu specifiquement pour que les chauffeurs VTC/taxi ne perdent jamais leur carte pro."

---

## 8. TECHNIQUE

| Aspect | Detail |
|--------|--------|
| **Complexite** | 2/5 - Ultra-simple |
| **Temps MVP** | 2-3 semaines |
| **Stack** | Next.js + Supabase + Vercel + Twilio (SMS) + SendGrid (email) |
| **Architecture** | Monolithe simple : dashboard React + API Supabase + cron jobs pour alertes |
| **APIs externes** | Twilio (SMS alertes), SendGrid (email), Supabase Auth + Storage |
| **Points techniques** | Cron jobs pour calcul echeances et envoi alertes, PWA pour notifications push, upload/stockage documents |
| **Points CV** | PWA, cron scheduling, multi-canal notifications (email/SMS/push), SaaS B2C avec Stripe, architecture event-driven pour alertes |

---

*Fiche generee le 2026-02-11 - Phase 2 du Run 005*
