# 🔒 Security Policy

## Supported Versions

Le projet Argenteuil Basketball est activement maintenu. Voici les versions supportées :

| Version | Supportée          |
| ------- | ------------------ |
| Latest  | ✅ Oui             |
| Older   | ❌ Non             |

Nous recommandons d'utiliser toujours la dernière version déployée sur [argenteuilbasketball.com](https://argenteuilbasketball.com).

## Reporting a Vulnerability

### 🚨 Comment signaler une vulnérabilité

Si vous découvrez une vulnérabilité de sécurité, **ne la divulguez pas publiquement**. Suivez ces étapes :

#### 1. Contact Direct

Envoyez un email à : **adrien@adrienpoua.fr**

Incluez dans votre rapport :
- Description détaillée de la vulnérabilité
- Étapes pour reproduire le problème
- Impact potentiel
- Version affectée
- Suggestions de correctif (si vous en avez)

#### 2. Délai de Réponse

- **Accusé de réception** : sous 48 heures
- **Analyse initiale** : sous 7 jours
- **Correctif ou plan d'action** : sous 30 jours (selon la sévérité)

#### 3. Processus de Divulgation

1. Vous signalez la vulnérabilité en privé
2. Nous confirmons la réception et évaluons la sévérité
3. Nous travaillons sur un correctif
4. Nous testons et déployons le correctif
5. Nous vous informons de la résolution
6. Divulgation publique coordonnée (si applicable)

### 🏆 Remerciements

Les personnes qui signalent des vulnérabilités de manière responsable seront remerciées publiquement (sauf si elles préfèrent rester anonymes) dans :
- Ce fichier SECURITY.md
- Les notes de version
- Le README.md

## Security Best Practices

### Pour les Contributeurs

Lors de vos contributions, veillez à :

- ✅ **Ne jamais commit de secrets** (API keys, tokens, passwords)
- ✅ **Utiliser les variables d'environnement** pour les données sensibles
- ✅ **Valider toutes les entrées utilisateur** avec Zod
- ✅ **Utiliser les Server Actions** pour les mutations sensibles
- ✅ **Implémenter la Row Level Security (RLS)** dans Supabase
- ✅ **Échapper les données** dans les templates
- ✅ **Utiliser HTTPS** pour toutes les communications
- ✅ **Mettre à jour les dépendances** régulièrement

### Pour les Utilisateurs

- 🔐 Utilisez des mots de passe forts et uniques
- 🔄 Mettez à jour votre navigateur régulièrement
- ⚠️ Signalez tout comportement suspect
- 📧 Vérifiez l'authenticité des emails

## Known Security Considerations

### Technologies Utilisées

Le projet utilise les technologies suivantes avec leurs considérations de sécurité :

#### Supabase
- ✅ Row Level Security (RLS) activée
- ✅ Authentification gérée par Supabase Auth
- ✅ API Keys séparées (anon key vs service role key)

#### Next.js
- ✅ Server Components par défaut (réduction de la surface d'attaque)
- ✅ CSRF protection intégrée
- ✅ Headers de sécurité configurés

#### Sanity CMS
- ✅ Token API avec permissions limitées
- ✅ Validation des données à l'entrée

#### Resend (Email)
- ✅ API Key sécurisée
- ✅ Validation des destinataires

### Dépendances

Nous utilisons :
- **Dependabot** pour les mises à jour automatiques hebdomadaires
- **npm audit** pour détecter les vulnérabilités connues
- **GitHub Security Advisories** pour les alertes

## Security Tools & Automation

### CI/CD Checks

Chaque Pull Request est automatiquement vérifiée pour :
- ✅ Vulnérabilités dans les dépendances (`security-audit.yml`)
- ✅ Analyse de code statique (SonarCloud)
- ✅ Linting et qualité du code
- ✅ Tests de build

### Environment Variables

Les variables suivantes sont considérées comme **sensibles** et ne doivent **jamais** être commitées :

```bash
SUPABASE_SERVICE_ROLE_KEY
SANITY_API_TOKEN
RESEND_API_KEY
```

Les variables **publiques** suivantes peuvent être commitées dans `.env.example` :

```bash
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY
NEXT_PUBLIC_SANITY_PROJECT_ID
NEXT_PUBLIC_SANITY_DATASET
NEXT_PUBLIC_SITE_URL
```

## Compliance

### RGPD (GDPR)

Le site respecte le RGPD :
- 📄 Politique de confidentialité disponible
- 🍪 Gestion du consentement des cookies
- 🗑️ Droit à l'effacement des données
- 📥 Droit à la portabilité des données

Pour exercer vos droits RGPD : **adrien@adrienpoua.fr**

## Additional Resources

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [Next.js Security Best Practices](https://nextjs.org/docs/pages/building-your-application/configuring/security-headers)
- [Supabase Security](https://supabase.com/docs/guides/platform/security)
- [GitHub Security Best Practices](https://docs.github.com/en/code-security)

---

**Dernière mise à jour** : 2025-11-01

Merci de contribuer à la sécurité d'Argenteuil Basketball ! 🏀🔒
