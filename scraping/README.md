# Projet de Scraping avec Playwright

Projet simple de scraping web utilisant Playwright et exportation des données vers Excel.

## Structure du projet

```
scraping/
├── src/
│   ├── scripts/          # Vos scripts de scraping
│   │   └── exampleScraper.js
│   └── utils/            # Fonctions utilitaires
│       ├── browserHelper.js
│       └── excelWriter.js
├── output/               # Fichiers Excel générés
├── package.json
└── README.md
```

## Installation

Les dépendances sont déjà installées. Si besoin de réinstaller :

```bash
npm install
npx playwright install
```

## Utilisation

### Exécuter le script d'exemple

```bash
node src/scripts/exampleScraper.js
```

### Créer un nouveau script

1. Créez un nouveau fichier dans `src/scripts/`
2. Copiez le template de `exampleScraper.js`
3. Modifiez selon vos besoins

### Exemple de script personnalisé

```javascript
const { initBrowser, closeBrowser, wait } = require('../utils/browserHelper');
const { exportToExcel } = require('../utils/excelWriter');

async function monScraper() {
  let browser;
  try {
    const { browser: browserInstance, page } = await initBrowser({ headless: true });
    browser = browserInstance;

    await page.goto('https://votresite.com');

    // Votre logique de scraping ici
    const data = await page.evaluate(() => {
      // Extraction de données
    });

    exportToExcel(data, 'mon_fichier', 'MaFeuille');
  } finally {
    await closeBrowser(browser);
  }
}

monScraper();
```

## Fonctions utilitaires

### browserHelper.js
- `initBrowser(options)` - Initialise un navigateur
- `closeBrowser(browser)` - Ferme le navigateur
- `wait(ms)` - Attend un délai
- `autoScroll(page, scrolls, delay)` - Scroll automatique

### excelWriter.js
- `exportToExcel(data, filename, sheetName)` - Exporte vers Excel
- `exportMultipleSheetsToExcel(sheets, filename)` - Export multi-feuilles

## Notes

- Les fichiers Excel sont sauvegardés dans le dossier `output/`
- Utilisez `headless: false` pour voir le navigateur pendant le développement
- Utilisez `headless: true` pour l'exécution en production
