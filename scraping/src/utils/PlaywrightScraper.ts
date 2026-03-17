import { chromium, firefox, webkit, Browser, BrowserContext, Page } from 'playwright';
import { exportToExcel, exportMultipleSheetsToExcel } from './excelWriter.js';

export interface ScraperOptions {
  headless?: boolean;
  viewport?: { width: number; height: number };
  userAgent?: string | null;
  browserType?: 'chromium' | 'firefox' | 'webkit';
  timeout?: number;
}

export interface NavigationOptions {
  waitUntil?: 'load' | 'domcontentloaded' | 'networkidle' | 'commit';
  timeout?: number;
}

export interface ScreenshotOptions {
  fullPage?: boolean;
  path?: string;
  type?: 'png' | 'jpeg';
  quality?: number;
}

/**
 * Classe principale pour le scraping avec Playwright
 * Contient toutes les méthodes utilitaires pour naviguer, extraire et exporter des données
 */
export default class PlaywrightScraper {
  private browser: Browser | null = null;
  private context: BrowserContext | null = null;
  public page: Page | null = null;
  private options: Required<ScraperOptions>;

  constructor(options: ScraperOptions = {}) {
    this.options = {
      headless: options.headless !== undefined ? options.headless : true,
      viewport: options.viewport || { width: 1920, height: 1080 },
      userAgent: options.userAgent || null,
      browserType: options.browserType || 'chromium',
      timeout: options.timeout || 30000
    };
  }

  /**
   * Initialise et lance le navigateur
   */
  async init(): Promise<void> {
    try {
      // Sélectionner le type de navigateur
      let browserEngine;
      switch (this.options.browserType) {
        case 'firefox':
          browserEngine = firefox;
          break;
        case 'webkit':
          browserEngine = webkit;
          break;
        default:
          browserEngine = chromium;
      }

      // Lancer le navigateur
      this.browser = await browserEngine.launch({
        headless: this.options.headless
      });

      // Créer un contexte
      this.context = await this.browser.newContext({
        viewport: this.options.viewport,
        userAgent: this.options.userAgent || undefined
      });

      // Créer une page
      this.page = await this.context.newPage();
      this.page.setDefaultTimeout(this.options.timeout);

      console.log(`✓ Navigateur ${this.options.browserType} initialisé`);
    } catch (error) {
      console.error('Erreur lors de l\'initialisation du navigateur:', error);
      throw error;
    }
  }

  /**
   * Navigue vers une URL
   */
  async goto(url: string, options: NavigationOptions = {}): Promise<void> {
    if (!this.page) {
      throw new Error('Le navigateur n\'est pas initialisé. Appelez init() d\'abord.');
    }

    const navOptions = {
      waitUntil: options.waitUntil || 'domcontentloaded' as const,
      timeout: options.timeout || this.options.timeout
    };

    console.log(`Navigation vers: ${url}`);
    await this.page.goto(url, navOptions);
    console.log('✓ Page chargée');
  }

  /**
   * Attend un délai en millisecondes
   */
  async wait(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  /**
   * Attend qu'un sélecteur soit visible
   */
  async waitForSelector(selector: string, timeout: number | null = null): Promise<void> {
    if (!this.page) throw new Error('Page non initialisée');
    await this.page.waitForSelector(selector, {
      timeout: timeout || this.options.timeout
    });
  }

  /**
   * Click sur un élément
   */
  async click(selector: string): Promise<void> {
    if (!this.page) throw new Error('Page non initialisée');
    await this.page.click(selector);
  }

  /**
   * Remplit un champ de formulaire
   */
  async fill(selector: string, value: string): Promise<void> {
    if (!this.page) throw new Error('Page non initialisée');
    await this.page.fill(selector, value);
  }

  /**
   * Récupère le texte d'un élément
   */
  async getText(selector: string): Promise<string | null> {
    if (!this.page) throw new Error('Page non initialisée');
    return await this.page.textContent(selector);
  }

  /**
   * Récupère tous les éléments correspondant au sélecteur
   */
  async getElements(selector: string) {
    if (!this.page) throw new Error('Page non initialisée');
    return await this.page.$$(selector);
  }

  /**
   * Extrait le texte de plusieurs éléments
   */
  async getTextsFromElements(selector: string): Promise<string[]> {
    if (!this.page) throw new Error('Page non initialisée');
    return await this.page.$$eval(selector, elements =>
      elements.map(el => (el as HTMLElement).textContent?.trim() || '')
    );
  }

  /**
   * Extrait des attributs de plusieurs éléments
   */
  async getAttributesFromElements(selector: string, attribute: string): Promise<(string | null)[]> {
    if (!this.page) throw new Error('Page non initialisée');
    return await this.page.$$eval(
      selector,
      (elements, attr) => elements.map(el => el.getAttribute(attr)),
      attribute
    );
  }

  /**
   * Exécute du code JavaScript dans le contexte de la page
   */
  async evaluate<R, Arg>(
    pageFunction: (arg: Arg) => R,
    arg?: Arg
  ): Promise<R> {
    if (!this.page) throw new Error('Page non initialisée');
    return await this.page.evaluate(pageFunction, arg);
  }

  /**
   * Scroll automatique jusqu'au bas de la page (utile pour lazy loading)
   */
  async autoScroll(scrolls: number = 5, delay: number = 1000): Promise<void> {
    if (!this.page) throw new Error('Page non initialisée');

    for (let i = 0; i < scrolls; i++) {
      await this.page.evaluate(() => {
        window.scrollTo(0, document.body.scrollHeight);
      });
      await this.wait(delay);
      console.log(`Scroll ${i + 1}/${scrolls}`);
    }
  }

  /**
   * Scroll jusqu'à un élément spécifique
   */
  async scrollToElement(selector: string): Promise<void> {
    if (!this.page) throw new Error('Page non initialisée');

    await this.page.evaluate((sel) => {
      const element = document.querySelector(sel);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, selector);
  }

  /**
   * Prend une capture d'écran
   */
  async screenshot(screenshotPath: string, options: ScreenshotOptions = {}): Promise<void> {
    if (!this.page) throw new Error('Page non initialisée');

    await this.page.screenshot({
      path: screenshotPath,
      fullPage: options.fullPage || false,
      ...options
    });
    console.log(`✓ Capture d'écran sauvegardée: ${screenshotPath}`);
  }

  /**
   * Récupère les cookies
   */
  async getCookies() {
    if (!this.context) throw new Error('Contexte non initialisé');
    return await this.context.cookies();
  }

  /**
   * Définit des cookies
   */
  async setCookies(cookies: any[]): Promise<void> {
    if (!this.context) throw new Error('Contexte non initialisé');
    await this.context.addCookies(cookies);
  }

  /**
   * Ouvre une nouvelle page/onglet
   */
  async newPage(): Promise<Page> {
    if (!this.context) throw new Error('Contexte non initialisé');
    const newPage = await this.context.newPage();
    return newPage;
  }

  /**
   * Récupère toutes les pages ouvertes
   */
  getPages(): Page[] {
    if (!this.context) throw new Error('Contexte non initialisé');
    return this.context.pages();
  }

  /**
   * Exporte des données vers Excel
   */
  exportToExcel(
    data: Record<string, any>[],
    filename: string,
    sheetName: string = 'Données'
  ): string {
    return exportToExcel(data, filename, sheetName);
  }

  /**
   * Exporte plusieurs feuilles vers Excel
   */
  exportMultipleSheetsToExcel(
    sheets: Record<string, Record<string, any>[]>,
    filename: string
  ): string {
    return exportMultipleSheetsToExcel(sheets, filename);
  }

  /**
   * Ferme proprement le navigateur
   */
  async close(): Promise<void> {
    if (this.browser) {
      await this.browser.close();
      console.log('✓ Navigateur fermé');
      this.browser = null;
      this.context = null;
      this.page = null;
    }
  }

  /**
   * Récupère l'URL actuelle
   */
  getCurrentUrl(): string {
    if (!this.page) throw new Error('Page non initialisée');
    return this.page.url();
  }

  /**
   * Récupère le titre de la page
   */
  async getTitle(): Promise<string> {
    if (!this.page) throw new Error('Page non initialisée');
    return await this.page.title();
  }

  /**
   * Recharge la page
   */
  async reload(options: NavigationOptions = {}): Promise<void> {
    if (!this.page) throw new Error('Page non initialisée');
    await this.page.reload(options);
  }

  /**
   * Retourne à la page précédente
   */
  async goBack(): Promise<void> {
    if (!this.page) throw new Error('Page non initialisée');
    await this.page.goBack();
  }

  /**
   * Avance à la page suivante
   */
  async goForward(): Promise<void> {
    if (!this.page) throw new Error('Page non initialisée');
    await this.page.goForward();
  }
}
