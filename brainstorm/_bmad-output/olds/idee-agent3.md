# 20 Idees de Projets Full Stack - IA, LLM, Agents & Automation

> **Stack cible**: Next.js, TypeScript, Node.js, PostgreSQL, Docker, Redis
> **Date**: Fevrier 2026
> **Objectif**: Projets impressionnants CV + vraie valeur marche + potentiel commercial

---

## Vue d'ensemble du marche

Selon les dernieres recherches:
- Le marche des agents IA a depasse **7.6 milliards $** en 2025, projete a **50 milliards $ d'ici 2030**
- **40% des applications enterprise** integreront des agents IA d'ici fin 2026 (Gartner)
- **67% des organisations** ont adopte des LLM pour leurs operations
- Les systemes multi-agents ont vu une **augmentation de 1445%** des demandes (Q1 2024 - Q2 2025)
- Le marche de l'automatisation de facturation passera de **2.87 a 8.91 milliards $** d'ici 2031

---

## 1. DocuMind - RAG Enterprise pour Documentation Interne

### Probleme resolu
Les employes passent en moyenne **2.5h/jour** a chercher des informations internes. 36% des plateformes manquent de recherche contextuelle. Perte de productivite estimee a **$25,000/employe/an**.

### Description
Plateforme RAG qui indexe toute la documentation d'entreprise (Confluence, Notion, Google Drive, Slack) et permet des requetes en langage naturel avec reponses sourcees.

### Pourquoi c'est impressionnant techniquement
- **Architecture**: Microservices avec orchestration d'embeddings (pgvector dans PostgreSQL)
- **Patterns**: CQRS pour la separation lecture/ecriture, Event Sourcing pour l'historique
- **Technologies**: LangChain/LlamaIndex, vector search hybride (semantic + keyword), chunking intelligent avec overlap
- **Challenges**: Gestion des permissions multi-sources, incremental indexing, cache intelligent avec Redis

### Potentiel commercial
- **Cible**: PME 50-500 employes (IT, conseil, legal)
- **Pricing**: $15-50/utilisateur/mois
- **Marche**: Knowledge management = $13.7B en 2025, projete $32B en 2030 (CAGR 18.6%)
- **Reference concurrents**: Glean ($4B valorisation), Guru, Tettra

### Complexite: 4/5

---

## 2. CodeSentinel - Agent de Review de Code Securite

### Probleme resolu
**45% du code genere par IA contient des failles de securite** (Veracode 2025). Les reviews manuelles sont lentes et inconsistantes. Cout moyen d'une breche de securite: **$4.45M**.

### Description
Agent IA qui analyse automatiquement les PRs, detecte les vulnerabilites OWASP, suggere des fixes, et apprend des patterns specifiques de chaque codebase.

### Pourquoi c'est impressionnant techniquement
- **Architecture**: Worker pool avec Bull/Redis, analyse AST multi-langages
- **Patterns**: Chain of Responsibility pour les differents types de scan, Strategy pour les langages
- **Technologies**: Tree-sitter pour parsing, fine-tuning sur bases de vulnerabilites, integration GitHub API
- **Challenges**: Analyse contextuelle du code, reduction des false positives, explanation generation

### Potentiel commercial
- **Cible**: Equipes dev 5-100 devs, startups series A+
- **Pricing**: $30-100/dev/mois (modele Snyk-like)
- **Marche**: DevSecOps = $6B en 2025
- **Reference concurrents**: Snyk DeepCode ($8.5B), CodeAnt AI, Codacy

### Complexite: 5/5

---

## 3. MeetingPilot - Agent Autonome Post-Meeting

### Probleme resolu
En moyenne, **73% des action items de reunion ne sont jamais completes**. Les notes manuelles prennent 30min/reunion. Les equipes perdent **$15,000/employe/an** en meetings inefficaces.

### Description
Agent qui transcrit les meetings, extrait automatiquement les decisions/action items, les assigne aux bonnes personnes, cree les tickets Jira/Linear, et fait le suivi automatique.

### Pourquoi c'est impressionnant techniquement
- **Architecture**: Event-driven avec webhooks, pipeline de traitement async
- **Patterns**: Saga pattern pour les workflows multi-etapes, State Machine pour le suivi
- **Technologies**: Whisper/Deepgram pour transcription, GPT-4 pour extraction, integrations multiples (Zoom, Teams, Jira, Slack)
- **Challenges**: Speaker diarization, detection de contexte implicite, matching intelligent des assignees

### Potentiel commercial
- **Cible**: Equipes 10-200 personnes, managers, PMs
- **Pricing**: $20-40/utilisateur/mois
- **Marche**: Meeting productivity tools = $3B en 2025
- **Reference concurrents**: Otter.ai ($1B+), Fireflies, Fellow

### Complexite: 4/5

---

## 4. InvoiceFlow - IDP pour PME

### Probleme resolu
Le traitement manuel des factures coute **$15-25/facture**. Les PME traitent 50-500 factures/mois avec 4% d'erreurs moyennes. L'IA reduit le temps de traitement de **80%** et les erreurs de **90%**.

### Description
Plateforme d'extraction intelligente de factures avec OCR/LLM, validation automatique, matching avec bons de commande, et export vers les ERP/comptabilite.

### Pourquoi c'est impressionnant techniquement
- **Architecture**: Pipeline de traitement document avec queue management
- **Patterns**: Template Method pour les differents formats, Factory pour les extracteurs
- **Technologies**: Document AI/Textract, validation rules engine, PostgreSQL JSONB pour schema flexible
- **Challenges**: Multi-format handling (PDF, scan, email), extraction de tableaux, apprentissage des patterns client

### Potentiel commercial
- **Cible**: PME 10-200 employes, cabinets comptables
- **Pricing**: $0.50-2/facture ou $200-1000/mois
- **Marche**: Invoice automation = $2.87B (2023) -> $8.91B (2031)
- **Reference concurrents**: Rossum, Cradl.ai, Nanonets

### Complexite: 4/5

---

## 5. OutreachGPT - Agent Commercial Autonome

### Probleme resolu
Les SDRs passent **60% de leur temps** sur des taches non-commerciales. Le taux de reponse moyen cold email est de **1-5%**. L'IA peut augmenter les reply rates de **32.7%** et liberer **40% du temps**.

### Description
Agent qui genere des sequences d'emails personnalisees basees sur le profil LinkedIn/site web du prospect, gere les follow-ups automatiques, et qualifie les reponses.

### Pourquoi c'est impressionnant techniquement
- **Architecture**: Multi-tenant SaaS avec isolation des donnees, job scheduler distribue
- **Patterns**: Pipeline pattern pour la sequence, Observer pour les events de tracking
- **Technologies**: Scraping ethique avec rate limiting, generation conditionnelle, warmup automatique
- **Challenges**: Deliverability management, personalisation a echelle, detection d'intent des reponses

### Potentiel commercial
- **Cible**: Startups B2B, agences, equipes sales
- **Pricing**: $50-200/utilisateur/mois
- **Marche**: Sales engagement = $5B en 2025
- **Reference concurrents**: Reply.io, Instantly.ai, Smartlead

### Complexite: 4/5

---

## 6. CompeteWatch - Intelligence Competitive IA

### Probleme resolu
Les entreprises manquent **67% des mouvements competitifs** importants. L'analyse manuelle prend 20h+/semaine. Les decisions basees sur la data en temps reel generent **30% de revenus en plus**.

### Description
Plateforme qui monitore automatiquement les concurrents (prix, features, hiring, news, reviews), detecte les changements significatifs, et genere des briefs strategiques.

### Pourquoi c'est impressionnant techniquement
- **Architecture**: Crawlers distribues avec Puppeteer/Playwright, detection de changement intelligent
- **Patterns**: Observer pour les notifications, Composite pour les sources multiples
- **Technologies**: Web scraping resilient, NLP pour extraction d'entites, diff semantique
- **Challenges**: Anti-bot bypass ethique, deduplication cross-source, scoring de pertinence

### Potentiel commercial
- **Cible**: Equipes produit/marketing, C-level PME
- **Pricing**: $200-1000/mois selon nombre de concurrents
- **Marche**: Competitive intelligence = $3.5B en 2025
- **Reference concurrents**: Crayon, Klue, WatchMyCompetitor

### Complexite: 4/5

---

## 7. PromptForge - Plateforme de Prompt Engineering Enterprise

### Probleme resolu
**80% des prompts** en entreprise ne sont pas optimises. Les equipes reinventent la roue. Pas de versioning, pas de tests, pas de collaboration. Cout des mauvais prompts: tokens gaspilles + resultats mediocres.

### Description
IDE collaboratif pour creer, tester, versionner et deployer des prompts. Inclut A/B testing, analytics de performance, bibliotheque partagee, et API de serving.

### Pourquoi c'est impressionnant techniquement
- **Architecture**: Monorepo avec workspace isolation, edge deployment pour faible latence
- **Patterns**: Repository pattern pour les prompts, Decorator pour les middlewares (caching, logging)
- **Technologies**: Prompt templating avance (Jinja-like), evaluation framework, multi-provider (OpenAI, Anthropic, local)
- **Challenges**: Evaluation automatique de qualite, gestion des variables dynamiques, rollback safe

### Potentiel commercial
- **Cible**: Equipes data/IA, entreprises avec usage LLM significatif
- **Pricing**: $50-200/utilisateur/mois ou enterprise
- **Marche**: MLOps/LLMOps = $4B en 2025
- **Reference concurrents**: PromptLayer, Weights & Biases, Humanloop

### Complexite: 3/5

---

## 8. LegalAssist - RAG pour Cabinets d'Avocats

### Probleme resolu
La recherche juridique prend **30-50% du temps** d'un avocat junior. Les erreurs de jurisprudence coutent cher. Un avocat facture **$200-500/h**, donc optimiser 5h/semaine = $5000/mois economies.

### Description
Assistant IA specialise legal: recherche de jurisprudence, analyse de contrats, generation de documents, suivi des deadlines reglementaires.

### Pourquoi c'est impressionnant techniquement
- **Architecture**: RAG avec embeddings specialises legal, citation verification
- **Patterns**: Chain of Thought pour le raisonnement juridique, Validator pattern pour la conformite
- **Technologies**: Fine-tuning sur corpus legal, extraction de clauses avec NER, PDF generation
- **Challenges**: Precision critique (pas d'hallucination), sources verifiables, confidentialite extreme

### Potentiel commercial
- **Cible**: Cabinets 5-50 avocats, juristes d'entreprise
- **Pricing**: $200-500/utilisateur/mois (prix avocat)
- **Marche**: LegalTech = $27B en 2025
- **Reference concurrents**: Harvey AI ($2B), Casetext (Thomson Reuters), Lexis+AI

### Complexite: 5/5

---

## 9. CustomerVoice - Analyse Automatisee des Feedbacks

### Probleme resolu
Les entreprises recoivent des feedbacks sur **15+ canaux** (reviews, support, social, surveys). 90% ne sont jamais analyses. Insight moyen = 3 semaines de retard.

### Description
Plateforme qui agregge tous les feedbacks clients, les categorise automatiquement, detecte les tendances et sentiments, et genere des rapports actionnables.

### Pourquoi c'est impressionnant techniquement
- **Architecture**: Ingestion multi-source avec CDC (Change Data Capture), streaming analytics
- **Patterns**: Aggregator pattern, Strategy pour les differentes sources
- **Technologies**: Sentiment analysis multi-langue, topic clustering, anomaly detection
- **Challenges**: Normalisation cross-platform, detection de signaux faibles, alerting intelligent

### Potentiel commercial
- **Cible**: Equipes produit, customer success, marketing
- **Pricing**: $300-1500/mois selon volume
- **Marche**: Voice of Customer = $2.5B en 2025
- **Reference concurrents**: Medallia, Qualtrics, MonkeyLearn

### Complexite: 4/5

---

## 10. DevOnboard - Agent d'Onboarding Developpeur

### Probleme resolu
L'onboarding d'un dev prend **3-6 mois** pour atteindre la pleine productivite. Cout moyen: **$50,000** par nouvel employe. Les devs posent les memes questions repetitivement.

### Description
Agent IA qui connait tout le codebase, repond aux questions contextuelles, guide a travers l'architecture, suggere des premiers tickets adaptes, et accelere la montee en competence.

### Pourquoi c'est impressionnant techniquement
- **Architecture**: RAG sur codebase avec indexation Git, context window management intelligent
- **Patterns**: Adapter pour les differents langages/frameworks, Memento pour l'historique de conversation
- **Technologies**: Code embeddings (CodeBERT), graph de dependances, integration IDE
- **Challenges**: Comprehension du code legacy, mise a jour incrementale, personnalisation par role

### Potentiel commercial
- **Cible**: Scale-ups tech, equipes 20-200 devs
- **Pricing**: $30-100/dev/mois
- **Marche**: Developer tools = $25B en 2025
- **Reference concurrents**: Swimm, Stepsize, Source (YC)

### Complexite: 4/5

---

## 11. AgentOrchestra - Framework Multi-Agents Low-Code

### Probleme resolu
Construire des systemes multi-agents est complexe. **72% des projets IA echouent** a passer en production. Les devs passent 70% du temps sur l'infrastructure, 30% sur la logique metier.

### Description
Plateforme low-code pour creer des workflows d'agents IA: designer visuel, bibliotheque d'agents pre-construits, monitoring, et deploiement one-click.

### Pourquoi c'est impressionnant techniquement
- **Architecture**: Orchestration avec DAG (Directed Acyclic Graph), execution distribuee
- **Patterns**: Interpreter pour le DSL visuel, Command pour les actions reversibles
- **Technologies**: Workflow engine custom, sandboxing d'execution, observability native
- **Challenges**: Error handling complexe, retry strategies, human-in-the-loop

### Potentiel commercial
- **Cible**: Equipes operations/IT, consultants IA
- **Pricing**: $500-2000/mois selon usage
- **Marche**: Workflow automation = $10B en 2025
- **Reference concurrents**: n8n, Zapier, LangGraph

### Complexite: 5/5

---

## 12. HealthCheck AI - Monitoring Patient via Wearables

### Probleme resolu
Les maladies chroniques non surveillees coutent **$3.7 trillions/an** au systeme de sante US. Les alertes arrivent trop tard. L'IA peut reduire les hospitalisations de **30%**.

### Description
Plateforme qui agregge les donnees de wearables (Apple Watch, Fitbit, CGM), detecte les anomalies via ML, alerte les soignants, et genere des rapports medicaux structures.

### Pourquoi c'est impressionnant techniquement
- **Architecture**: Time-series database (TimescaleDB), streaming processing, HIPAA compliant
- **Patterns**: Observer pour les alertes, Threshold avec hysteresis
- **Technologies**: Anomaly detection ML, integration HL7/FHIR, encryption at rest/transit
- **Challenges**: False positive minimization, battery/connectivity handling, compliance stricte

### Potentiel commercial
- **Cible**: Cliniques de suivi chronique, assurances sante, telemedecine
- **Pricing**: $50-200/patient/mois (rembourse par assurances)
- **Marche**: Remote patient monitoring = $5.5B en 2025
- **Reference concurrents**: Livongo (Teladoc), Biofourmis, Current Health

### Complexite: 5/5

---

## 13. ContentPilot - Agent de Content Marketing

### Probleme resolu
Creer du contenu de qualite prend **3-5h par article**. Les marketers passent 50% de leur temps sur la creation. L'IA peut reduire ce temps de **70%** tout en maintenant la qualite.

### Description
Agent qui genere des articles optimises SEO, les adapte pour chaque canal (blog, LinkedIn, Twitter), suggere des images, et planifie la publication.

### Pourquoi c'est impressionnant techniquement
- **Architecture**: Pipeline de generation avec validation multi-etapes, integration headless CMS
- **Patterns**: Template Method pour les formats, Chain of Responsibility pour les validations
- **Technologies**: SEO analysis API, plagiarism detection, brand voice learning
- **Challenges**: Maintien du style/ton unique, factualite, originalite vs templates

### Potentiel commercial
- **Cible**: Equipes marketing PME, agences, freelances
- **Pricing**: $100-500/mois selon volume
- **Marche**: Content marketing software = $10B en 2025
- **Reference concurrents**: Jasper, Copy.ai, Writer

### Complexite: 3/5

---

## 14. SupplyPredict - Prevision de Demande IA pour Retail

### Probleme resolu
Les retailers perdent **$1.1 trillion/an** en sur-stock et ruptures. Les previsions traditionnelles ont 30% d'erreur. L'IA peut reduire les pertes de **40%**.

### Description
Plateforme de forecasting qui integre les donnees ventes, meteo, events, tendances social, et genere des previsions granulaires avec recommendations de reappro.

### Pourquoi c'est impressionnant techniquement
- **Architecture**: Feature store, model registry, batch + real-time predictions
- **Patterns**: Strategy pour les differents modeles de forecast
- **Technologies**: Time-series ML (Prophet, N-BEATS), external data enrichment, simulation Monte Carlo
- **Challenges**: Cold start pour nouveaux produits, explainability, integration ERP

### Potentiel commercial
- **Cible**: Retailers mid-market, e-commerce $1-50M CA
- **Pricing**: 0.1-0.5% du CA ou $500-5000/mois
- **Marche**: Demand forecasting = $7B en 2025
- **Reference concurrents**: Blue Yonder, Lokad, Anaplan

### Complexite: 5/5

---

## 15. TalentMatch - Agent de Pre-screening Candidats

### Probleme resolu
Les recruteurs passent **23h/embauche** sur le screening. 75% des CVs recus sont non qualifies. Cout moyen d'un mauvais recrutement: **$15,000-50,000**.

### Description
Agent qui analyse les CVs/LinkedIn, evalue le fit avec la fiche de poste, pose des questions de pre-qualification par chat, et genere un score avec explication.

### Pourquoi c'est impressionnant techniquement
- **Architecture**: NLU pipeline, scoring engine avec explainability, integration ATS
- **Patterns**: Specification pattern pour les criteres, Composite pour l'evaluation multi-criteres
- **Technologies**: Resume parsing, skills extraction, bias detection/mitigation
- **Challenges**: Eviter les biais algorithmiques, gerer les parcours atypiques, transparence RGPD

### Potentiel commercial
- **Cible**: Equipes RH 2-20 recruteurs, agences de recrutement
- **Pricing**: $50-200/recruteur/mois ou $5-20/candidat
- **Marche**: HR Tech = $35B en 2025
- **Reference concurrents**: HireVue, Paradox (Olivia), Eightfold

### Complexite: 4/5

---

## 16. RepoDoc - Documentation Automatique de Code

### Probleme resolu
**70% des projets** ont une documentation obsolete ou inexistante. Les devs passent 20% de leur temps a comprendre du code. La dette technique de documentation coute **$85B/an** globalement.

### Description
Agent qui analyse le codebase, genere automatiquement la documentation (README, API docs, architecture diagrams), la maintient a jour a chaque commit.

### Pourquoi c'est impressionnant techniquement
- **Architecture**: AST analysis multi-langage, Git hooks integration, incremental updates
- **Patterns**: Visitor pour le parsing de code, Builder pour la generation de docs
- **Technologies**: Code understanding LLM, Mermaid/PlantUML generation, MDX rendering
- **Challenges**: Inference d'intent vs implementation, gestion des changements breaking, style consistency

### Potentiel commercial
- **Cible**: Equipes dev, open source maintainers, API providers
- **Pricing**: $20-50/repo/mois ou par taille de codebase
- **Marche**: Documentation tools = $1.5B en 2025
- **Reference concurrents**: Readme.io, GitBook, Mintlify

### Complexite: 4/5

---

## 17. GovAssist - IA pour Collectivites Locales

### Probleme resolu
Les **90,000+ collectivites US** sont submergees de demandes citoyennes. Les temps de reponse moyens sont de 5-10 jours. Budget IT moyen d'une mairie: $50K/an.

### Description
Plateforme qui automatise les reponses aux demandes citoyennes (permis, questions administratives), route intelligemment les cas complexes, et genere des rapports d'activite.

### Pourquoi c'est impressionnant techniquement
- **Architecture**: Multi-tenant strict, audit logging complet, disaster recovery
- **Patterns**: State Machine pour les workflows administratifs, Facade pour les systemes legacy
- **Technologies**: RAG sur reglementations locales, integration systemes heritage, accessibility compliance
- **Challenges**: Terminologie administrative precise, integration sans API (scraping de vieux systemes), compliance stricte

### Potentiel commercial
- **Cible**: Mairies, departements, regions
- **Pricing**: $500-5000/mois selon population
- **Marche**: GovTech = $31B en 2025, cycles longs mais retention extreme
- **Reference concurrents**: Granicus, CivicPlus, OpenGov

### Complexite: 4/5

---

## 18. MedSpaSuite - CRM IA pour Medecine Esthetique

### Probleme resolu
Les med spas generent **$1.4-2M/an** avec des clients a **$6,000+ LTV**, mais perdent 30% de rebooking par manque de suivi. Le marche est sous-digitalise.

### Description
CRM specialise med spa avec rappels de traitement IA, recommendations personnalisees, booking intelligent, et campagnes de retention automatisees.

### Pourquoi c'est impressionnant techniquement
- **Architecture**: Event sourcing pour l'historique patient, recommendation engine
- **Patterns**: Observer pour les triggers de communication, Strategy pour les canaux
- **Technologies**: Cycle de traitement ML (Botox = 3-4 mois), integration calendrier, SMS/WhatsApp automation
- **Challenges**: Compliance HIPAA light, timing optimal des relances, upsell non-agressif

### Potentiel commercial
- **Cible**: Med spas, cliniques esthetiques (20,000+ en US)
- **Pricing**: $300-800/mois + % sur rebooking
- **Marche**: Medspa software = $500M en 2025, croissance 15%/an
- **Reference concurrents**: Vagaro, Zenoti, AestheticsPro

### Complexite: 3/5

---

## 19. TestGen - Agent de Generation de Tests

### Probleme resolu
La couverture de test moyenne est de **40-60%**. Ecrire des tests prend **30% du temps de dev**. Le code non teste coute 10x plus cher a maintenir.

### Description
Agent qui analyse le code, genere automatiquement les tests unitaires/integration pertinents, identifie les edge cases, et maintient les tests a jour avec le code.

### Pourquoi c'est impressionnant techniquement
- **Architecture**: Code analysis pipeline, mutation testing pour valider la qualite
- **Patterns**: Factory pour les differents frameworks de test, Template pour les patterns de test
- **Technologies**: AST manipulation, symbolic execution, fuzzing intelligent
- **Challenges**: Tests qui testent vraiment quelque chose, mocking intelligent, tests lisibles

### Potentiel commercial
- **Cible**: Equipes dev, CI/CD pipelines, QA
- **Pricing**: $30-100/dev/mois
- **Marche**: Testing tools = $8B en 2025
- **Reference concurrents**: Diffblue, Codium, Ponicode (CircleCI)

### Complexite: 5/5

---

## 20. DataNarrator - Rapports Automatiques depuis Dashboards

### Probleme resolu
Les executives passent **4h/semaine** a analyser des dashboards. Les insights sont souvent mal interpretes. Les data analysts passent 30% de leur temps a generer des rapports.

### Description
Agent qui se connecte aux outils BI (Metabase, Tableau, PowerBI), analyse les metriques, detecte les anomalies, et genere des narratifs explicatifs personnalises par audience.

### Pourquoi c'est impressionnant techniquement
- **Architecture**: Connecteurs multi-BI, natural language generation pipeline
- **Patterns**: Adapter pour chaque source BI, Interpreter pour le query building
- **Technologies**: Anomaly detection statistique, causal inference basique, templating NLG avance
- **Challenges**: Explanation de correlations sans causalite, personnalisation par role, timing des rapports

### Potentiel commercial
- **Cible**: Equipes data, executives, operations
- **Pricing**: $200-1000/mois selon connecteurs/users
- **Marche**: BI & Analytics = $33B en 2025
- **Reference concurrents**: Narrative Science (Salesforce), Automated Insights, Yseop

### Complexite: 4/5

---

## Tableau Recapitulatif

| # | Projet | Complexite | Marche ($B) | Pricing mensuel | Quick Win |
|---|--------|------------|-------------|-----------------|-----------|
| 1 | DocuMind | 4/5 | 32.0 | $15-50/user | Non |
| 2 | CodeSentinel | 5/5 | 6.0 | $30-100/dev | Non |
| 3 | MeetingPilot | 4/5 | 3.0 | $20-40/user | Oui |
| 4 | InvoiceFlow | 4/5 | 8.9 | $200-1000 | Oui |
| 5 | OutreachGPT | 4/5 | 5.0 | $50-200/user | Oui |
| 6 | CompeteWatch | 4/5 | 3.5 | $200-1000 | Non |
| 7 | PromptForge | 3/5 | 4.0 | $50-200/user | Oui |
| 8 | LegalAssist | 5/5 | 27.0 | $200-500/user | Non |
| 9 | CustomerVoice | 4/5 | 2.5 | $300-1500 | Non |
| 10 | DevOnboard | 4/5 | 25.0 | $30-100/dev | Oui |
| 11 | AgentOrchestra | 5/5 | 10.0 | $500-2000 | Non |
| 12 | HealthCheck AI | 5/5 | 5.5 | $50-200/patient | Non |
| 13 | ContentPilot | 3/5 | 10.0 | $100-500 | Oui |
| 14 | SupplyPredict | 5/5 | 7.0 | $500-5000 | Non |
| 15 | TalentMatch | 4/5 | 35.0 | $50-200/user | Oui |
| 16 | RepoDoc | 4/5 | 1.5 | $20-50/repo | Oui |
| 17 | GovAssist | 4/5 | 31.0 | $500-5000 | Non |
| 18 | MedSpaSuite | 3/5 | 0.5 | $300-800 | Oui |
| 19 | TestGen | 5/5 | 8.0 | $30-100/dev | Non |
| 20 | DataNarrator | 4/5 | 33.0 | $200-1000 | Non |

---

## Recommandations par Profil

### Pour commencer (MVP en 2-3 mois)
1. **PromptForge** (3/5) - Besoin evident, peu de concurrence directe, stack simple
2. **ContentPilot** (3/5) - Marche valide, integration LLM directe
3. **MedSpaSuite** (3/5) - Niche peu servie, high-ticket clients

### Pour impressionner techniquement (Portfolio senior)
1. **CodeSentinel** (5/5) - Securite + IA = tres demande
2. **AgentOrchestra** (5/5) - Multi-agents = bleeding edge
3. **SupplyPredict** (5/5) - ML + time series + impact business

### Meilleur ratio effort/impact commercial
1. **InvoiceFlow** (4/5) - ROI facile a prouver, PME pretes a payer
2. **MeetingPilot** (4/5) - Douleur universelle, SaaS classique
3. **OutreachGPT** (4/5) - Vente directe aux equipes sales

---

## Sources

- [Gartner - AI Agents Predictions 2026](https://www.gartner.com/en/newsroom/press-releases/2025-08-26-gartner-predicts-40-percent-of-enterprise-apps-will-feature-task-specific-ai-agents-by-2026-up-from-less-than-5-percent-in-2025)
- [McKinsey - State of AI 2025](https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai)
- [Machine Learning Mastery - Agentic AI Trends](https://machinelearningmastery.com/7-agentic-ai-trends-to-watch-in-2026/)
- [AWS - What is RAG](https://aws.amazon.com/what-is/retrieval-augmented-generation/)
- [Squirro - State of RAG 2025](https://squirro.com/squirro-blog/state-of-rag-genai)
- [Augment Code - AI Code Vulnerability Audit](https://www.augmentcode.com/guides/ai-code-vulnerability-audit-fix-the-45-security-flaws-fast)
- [Dialzara - AI Invoice Automation for SMBs](https://dialzara.com/blog/ai-invoice-automation-for-smbs-2025-guide)
- [TTMS - AI Knowledge Management Tools](https://ttms.com/10-best-ai-tools-for-knowledge-management-in-large-enterprises-2025/)
- [Korra - AI Knowledge Base Guide](https://korra.ai/ai-knowledge-base-complete-guide-2025/)
- [Browse AI - Price Monitoring 2025](https://www.browse.ai/blog/price-monitoring-in-2025-ai-powered-automation-for-scalable-competitor-tracking)
- [AIFire - AI Automation Agency Niches](https://www.aifire.co/p/6-ai-automation-agency-niches-for-recurring-revenue-2025)
