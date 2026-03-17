# Guide Complet des Sélecteurs Playwright

## Vue d'ensemble

Playwright offre des méthodes puissantes pour sélectionner des éléments sur une page web. Ce guide se concentre sur les techniques les plus utiles pour le scraping.

---

## 1. Locators Recommandés (Built-in)

### 1.1 `getByRole()` - Par rôle ARIA
Sélectionne des éléments selon leur rôle d'accessibilité (boutons, liens, etc.)

```typescript
// Bouton avec un nom spécifique
await page.getByRole('button', { name: 'Sign in' }).click();

// Lien
await page.getByRole('link', { name: 'Contact' }).click();

// Tous les éléments de liste
const items = await page.getByRole('listitem').all();
```

**Rôles courants:**
- `button`, `link`, `textbox`, `checkbox`, `radio`
- `heading`, `listitem`, `table`, `row`, `cell`
- `img`, `navigation`, `main`, `article`

### 1.2 `getByText()` - Par contenu textuel
Trouve des éléments contenant du texte spécifique

```typescript
// Texte exact
await page.getByText('Welcome').click();

// Texte partiel (substring)
await page.getByText('Welc', { exact: false });

// Regex
await page.getByText(/welcome/i);

// Important: le whitespace est normalisé automatiquement
await page.getByText('Hello World'); // trouve "Hello   World" aussi
```

### 1.3 `getByLabel()` - Par label de formulaire
Idéal pour les champs de formulaire

```typescript
await page.getByLabel('Email').fill('test@example.com');
await page.getByLabel('Password').fill('secret');
```

### 1.4 `getByPlaceholder()` - Par placeholder
```typescript
await page.getByPlaceholder('Enter your email').fill('test@example.com');
```

### 1.5 `getByAltText()` - Par texte alternatif (images)
```typescript
await page.getByAltText('Profile picture').click();
```

### 1.6 `getByTitle()` - Par attribut title
```typescript
await page.getByTitle('Close dialog').click();
```

### 1.7 `getByTestId()` - Par data-testid
```typescript
await page.getByTestId('submit-button').click();

// Personnaliser l'attribut (dans playwright.config.ts)
use: {
  testIdAttribute: 'data-qa-id'
}
```

---

## 2. Sélecteurs CSS et XPath (Fallback)

### 2.1 CSS Selectors
```typescript
// Syntaxe de base
await page.locator('button').click();
await page.locator('.my-class').click();
await page.locator('#my-id').click();

// Sélecteurs complexes
await page.locator('div.container > button:first-child');
await page.locator('input[type="email"]');
await page.locator('a[href*="contact"]');

// Pseudo-classes
await page.locator('button:hover');
await page.locator('li:nth-child(2)');
```

### 2.2 XPath
```typescript
// Syntaxe de base
await page.locator('xpath=//button').click();
await page.locator('//button'); // Forme courte

// XPath complexe
await page.locator('//div[@class="product"]//h2');
await page.locator('//a[contains(text(), "More")]');
```

**⚠️ Attention:** CSS et XPath sont fragiles et déconseillés. Privilégiez les locators recommandés.

---

## 3. Filtrage d'Éléments

### 3.1 Filter par texte
```typescript
// Contient un texte
await page.getByRole('listitem')
  .filter({ hasText: 'Product 2' })
  .click();

// Regex
await page.getByRole('listitem')
  .filter({ hasText: /Product \d+/ });

// Ne contient PAS un texte
await page.getByRole('listitem')
  .filter({ hasNotText: 'Out of stock' });
```

### 3.2 Filter par élément enfant
```typescript
// A un élément enfant spécifique
await page.getByRole('listitem')
  .filter({
    has: page.getByRole('heading', { name: 'Product 2' })
  });

// N'a PAS un élément enfant
await page.getByRole('listitem')
  .filter({
    hasNot: page.getByText('Sold out')
  });
```

### 3.3 Filter par visibilité
```typescript
// Seulement les éléments visibles
await page.locator('button').filter({ visible: true });
```

---

## 4. Opérateurs de Locator

### 4.1 Chaînage (Chaining)
Combine plusieurs locators pour affiner la recherche

```typescript
// Navigation dans la structure DOM
await page
  .getByRole('article')
  .getByRole('button', { name: 'Buy' })
  .click();

// Recherche dans un conteneur spécifique
const container = page.locator('.product-list');
await container.getByText('iPhone 15').click();
```

### 4.2 Opérateur `.and()`
Les deux conditions doivent être vraies

```typescript
await page
  .getByRole('button')
  .and(page.getByTitle('Subscribe'))
  .click();
```

### 4.3 Opérateur `.or()`
L'une ou l'autre condition

```typescript
await page
  .getByRole('button', { name: 'Login' })
  .or(page.getByRole('button', { name: 'Sign in' }))
  .click();
```

---

## 5. Manipulation de Listes

### 5.1 Sélection par position
```typescript
// Premier élément
await page.getByRole('listitem').first().click();

// Dernier élément
await page.getByRole('listitem').last().click();

// N-ième élément (0-indexed)
await page.getByRole('listitem').nth(2).click(); // 3ème élément
```

### 5.2 Récupérer tous les éléments
```typescript
// Récupérer un tableau de locators
const items = await page.getByRole('listitem').all();

for (const item of items) {
  const text = await item.textContent();
  console.log(text);
}
```

### 5.3 Compter les éléments
```typescript
const count = await page.getByRole('listitem').count();
console.log(`Nombre d'items: ${count}`);
```

### 5.4 Extraire tous les textes
```typescript
// Méthode 1: avec evaluateAll
const texts = await page.getByRole('listitem')
  .evaluateAll(list => list.map(el => el.textContent));

// Méthode 2: avec allTextContents
const texts = await page.getByRole('listitem').allTextContents();
```

---

## 6. Techniques Avancées pour le Scraping

### 6.1 Extraction de données complexes
```typescript
// Extraire plusieurs attributs d'une liste de produits
const products = await page.locator('.product-card').evaluateAll(cards => {
  return cards.map(card => ({
    title: card.querySelector('h3')?.textContent?.trim(),
    price: card.querySelector('.price')?.textContent?.trim(),
    image: card.querySelector('img')?.getAttribute('src'),
    link: card.querySelector('a')?.getAttribute('href')
  }));
});
```

### 6.2 Combiner plusieurs filtres
```typescript
// Produits disponibles avec rating > 4
const topProducts = await page
  .getByRole('article')
  .filter({ hasNotText: 'Out of stock' })
  .filter({ has: page.locator('.rating[data-score="5"]') })
  .all();
```

### 6.3 Scraping de tableaux
```typescript
// Extraire toutes les lignes d'un tableau
const rows = await page.locator('table tbody tr').evaluateAll(rows => {
  return rows.map(row => {
    const cells = Array.from(row.querySelectorAll('td'));
    return cells.map(cell => cell.textContent?.trim());
  });
});

// Avec getByRole (meilleure approche)
const tableRows = await page.getByRole('row').all();
for (const row of tableRows) {
  const cells = await row.getByRole('cell').allTextContents();
  console.log(cells);
}
```

### 6.4 Sélection d'attributs spécifiques
```typescript
// Récupérer tous les liens d'une page
const links = await page.locator('a').evaluateAll(anchors =>
  anchors.map(a => a.href)
);

// Récupérer toutes les images
const images = await page.locator('img').evaluateAll(imgs =>
  imgs.map(img => ({
    src: img.src,
    alt: img.alt
  }))
);
```

### 6.5 Navigation dans les Shadow DOM
```typescript
// Playwright traverse automatiquement les Shadow DOM
// (sauf pour XPath)
await page.locator('my-component').locator('button').click();
```

---

## 7. Patterns Utiles pour le Scraping

### 7.1 Pagination
```typescript
async function scrapAllPages() {
  const allData = [];
  let hasNextPage = true;

  while (hasNextPage) {
    // Extraire les données de la page courante
    const pageData = await page.locator('.item').allTextContents();
    allData.push(...pageData);

    // Vérifier s'il y a une page suivante
    const nextButton = page.getByRole('button', { name: 'Next' });
    hasNextPage = await nextButton.isVisible();

    if (hasNextPage) {
      await nextButton.click();
      await page.waitForLoadState('networkidle');
    }
  }

  return allData;
}
```

### 7.2 Lazy Loading / Scroll Infini
```typescript
async function scrapInfiniteScroll() {
  let previousHeight = 0;
  let currentHeight = await page.evaluate(() => document.body.scrollHeight);

  while (previousHeight !== currentHeight) {
    previousHeight = currentHeight;

    // Scroll vers le bas
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

    // Attendre le chargement
    await page.waitForTimeout(2000);

    currentHeight = await page.evaluate(() => document.body.scrollHeight);
  }

  // Extraire toutes les données
  return await page.locator('.item').all();
}
```

### 7.3 Attendre un élément spécifique
```typescript
// Attendre qu'un élément soit visible
await page.getByText('Products loaded').waitFor();

// Attendre avec timeout personnalisé
await page.getByRole('button').waitFor({ timeout: 5000 });

// Attendre qu'un élément disparaisse
await page.getByText('Loading...').waitFor({ state: 'hidden' });
```

### 7.4 Gestion des pop-ups et modales
```typescript
// Fermer une modale si elle apparaît
const modal = page.getByRole('dialog');
if (await modal.isVisible()) {
  await modal.getByRole('button', { name: 'Close' }).click();
}
```

---

## 8. Sélecteurs CSS Avancés

### 8.1 Attributs
```typescript
// Attribut exact
page.locator('[data-product-id="123"]')

// Contient
page.locator('[href*="product"]')

// Commence par
page.locator('[href^="https://"]')

// Se termine par
page.locator('[href$=".pdf"]')

// Plusieurs attributs
page.locator('a[href*="contact"][class*="button"]')
```

### 8.2 Pseudo-classes utiles
```typescript
// Premier/dernier enfant
page.locator('li:first-child')
page.locator('li:last-child')

// N-ième enfant
page.locator('li:nth-child(2)')
page.locator('li:nth-child(odd)')  // Éléments impairs
page.locator('li:nth-child(even)') // Éléments pairs

// Pas (négation)
page.locator('button:not(.disabled)')

// Contient du texte (CSS)
page.locator('div:has-text("Welcome")')
```

### 8.3 Combinateurs
```typescript
// Enfant direct
page.locator('div > button')

// Descendant
page.locator('div button')

// Frère adjacent
page.locator('label + input')

// Tous les frères suivants
page.locator('h2 ~ p')
```

---

## 9. Bonnes Pratiques

### ✅ À FAIRE
1. **Privilégier les locators sémantiques**
   - `getByRole()`, `getByLabel()`, `getByText()`

2. **Utiliser les data-testid pour les cas complexes**
   ```typescript
   <button data-testid="checkout-btn">Checkout</button>
   await page.getByTestId('checkout-btn').click();
   ```

3. **Chaîner les locators pour plus de précision**
   ```typescript
   await page
     .getByRole('article')
     .filter({ hasText: 'Product Name' })
     .getByRole('button')
     .click();
   ```

4. **Utiliser `.all()` pour itérer sur des listes**
   ```typescript
   const items = await page.getByRole('listitem').all();
   for (const item of items) {
     // Traiter chaque item
   }
   ```

### ❌ À ÉVITER
1. **Sélecteurs CSS basés sur la structure**
   ```typescript
   // ❌ Fragile
   page.locator('div.container > div:nth-child(3) > button')

   // ✅ Meilleur
   page.getByRole('button', { name: 'Submit' })
   ```

2. **XPath complexes**
   ```typescript
   // ❌ Fragile et illisible
   page.locator('//div[@class="x"]//div[2]//button')

   // ✅ Plus robuste
   page.locator('.x').getByRole('button').nth(1)
   ```

3. **Sélecteurs trop larges sans filtrage**
   ```typescript
   // ❌ Peut matcher plusieurs éléments
   page.locator('button').click()

   // ✅ Plus spécifique
   page.getByRole('button', { name: 'Login' }).click()
   ```

---

## 10. Strictness et Gestion d'Erreurs

### Mode Strict
Par défaut, Playwright exige qu'un seul élément corresponde au locator.

```typescript
// ❌ Erreur si plusieurs boutons
await page.locator('button').click();

// ✅ Solutions:
// 1. Être plus spécifique
await page.getByRole('button', { name: 'Submit' }).click();

// 2. Sélectionner le premier
await page.locator('button').first().click();

// 3. Itérer sur tous
const buttons = await page.locator('button').all();
```

### Vérifier l'existence
```typescript
// Vérifier si un élément existe
const isVisible = await page.getByText('Welcome').isVisible();

// Compter les éléments
const count = await page.locator('.item').count();

if (count > 0) {
  // Traiter les éléments
}
```

---

## 11. Exemples Pratiques Complets

### Exemple 1: Scraper une liste de produits
```typescript
const products = await page.locator('.product-card').evaluateAll(cards => {
  return cards.map(card => {
    const getTextContent = (selector: string) =>
      card.querySelector(selector)?.textContent?.trim() || '';

    const getAttribute = (selector: string, attr: string) =>
      card.querySelector(selector)?.getAttribute(attr) || '';

    return {
      name: getTextContent('h3.product-name'),
      price: getTextContent('.price'),
      rating: getAttribute('.stars', 'data-rating'),
      image: getAttribute('img', 'src'),
      inStock: !card.querySelector('.out-of-stock')
    };
  });
});
```

### Exemple 2: Scraper un tableau avec en-têtes
```typescript
// Récupérer les en-têtes
const headers = await page
  .getByRole('table')
  .locator('thead th')
  .allTextContents();

// Récupérer les données
const rows = await page
  .getByRole('table')
  .locator('tbody tr')
  .all();

const data = [];
for (const row of rows) {
  const cells = await row.locator('td').allTextContents();
  const rowData: Record<string, string> = {};

  headers.forEach((header, index) => {
    rowData[header] = cells[index];
  });

  data.push(rowData);
}
```

### Exemple 3: Scraper avec plusieurs pages
```typescript
async function scrapMultiplePages(maxPages: number = 5) {
  const allProducts = [];

  for (let i = 1; i <= maxPages; i++) {
    console.log(`Scraping page ${i}...`);

    // Extraire les produits de la page courante
    const products = await page.locator('.product').allTextContents();
    allProducts.push(...products);

    // Cliquer sur "Next" si disponible
    const nextBtn = page.getByRole('link', { name: 'Next' });
    const hasNext = await nextBtn.isVisible();

    if (!hasNext || i === maxPages) break;

    await nextBtn.click();
    await page.waitForLoadState('networkidle');
  }

  return allProducts;
}
```

---

## Résumé: Ordre de Préférence

1. **getByRole()** - Le plus robuste et accessible
2. **getByLabel()** - Pour les formulaires
3. **getByText()** - Pour le contenu textuel
4. **getByTestId()** - Pour les éléments de test dédiés
5. **CSS Selectors** - En dernier recours
6. **XPath** - À éviter si possible

**Principe général:** Sélectionnez les éléments comme un utilisateur les percevrait, pas comme un développeur voit le DOM.
