import { chromium } from "playwright";
import { exportToExcel } from "../utils/excelWriter.js";
import { AssociationData } from "../utils/data.type.js";

export async function scrapAuversSurOise() {
  const browser = await chromium.launch({
    headless: false,
    // Ignorer les erreurs de certificat SSL
    ignoreHTTPSErrors: true
  });
  const page = await browser.newPage();

  const allData: AssociationData[] = [];
  const URL = "http://www.ville-auverssuroise.fr/vie-locale/les-associations/180-sports";

  try {
    console.log("Navigation vers la page...");
    await page.goto(URL, { waitUntil: "domcontentloaded" });
    console.log("✓ Page chargée");

    // Attendre un peu pour voir la structure de la page
    await page.waitForTimeout(2000);

    // Prendre une capture d'écran pour debug
    await page.screenshot({ path: "output/auvers-debug.png" });
    console.log("✓ Capture d'écran sauvegardée dans output/auvers-debug.png");

    // Essayer de détecter la structure de la page
    // On va chercher les éléments les plus communs pour des listes d'associations
    const possibleSelectors = [
      "article",
      ".association",
      ".item",
      ".entry",
      "li.association",
      ".content-item",
      "div[class*='association']",
      "div[class*='sport']"
    ];

    let associations: any[] = [];
    let workingSelector = "";

    // Tester chaque sélecteur pour trouver celui qui fonctionne
    for (const selector of possibleSelectors) {
      const elements = await page.locator(selector).all();
      if (elements.length > 0) {
        console.log(`✓ Trouvé ${elements.length} éléments avec le sélecteur: ${selector}`);
        associations = elements;
        workingSelector = selector;
        break;
      }
    }

    if (associations.length === 0) {
      console.log("⚠ Aucun sélecteur automatique n'a fonctionné");
      console.log("Extraction du HTML de la page pour analyse manuelle...");

      // Extraire le HTML de la page
      const htmlContent = await page.content();
      console.log("\nPremiers 2000 caractères du HTML:");
      console.log(htmlContent.substring(0, 2000));

      throw new Error("Veuillez analyser la structure HTML manuellement et adapter le script");
    }

    console.log(`\nUtilisation du sélecteur: ${workingSelector}`);
    console.log(`Nombre d'associations trouvées: ${associations.length}\n`);

    // Pour chaque association, essayer d'extraire les données
    for (let i = 0; i < associations.length; i++) {
      try {
        const assoc = associations[i];

        // Essayer différents sélecteurs pour le nom
        let nom = "N/A";
        const nameSelectors = ["h2", "h3", "h4", ".title", ".name", "strong", "b"];
        for (const sel of nameSelectors) {
          const nameEl = assoc.locator(sel).first();
          if ((await nameEl.count()) > 0) {
            nom = (await nameEl.textContent()) || "N/A";
            if (nom !== "N/A" && nom.trim().length > 0) break;
          }
        }

        // Récupérer le téléphone
        let telephone = "N/A";
        const telLink = assoc.locator('a[href^="tel:"]').first();
        if ((await telLink.count()) > 0) {
          const telText = await telLink.textContent();
          if (telText) {
            const match = telText.match(/\d{2}\s?\d{2}\s?\d{2}\s?\d{2}\s?\d{2}/);
            telephone = match ? match[0] : telText.trim();
          }
        }

        // Récupérer l'email
        let email = "N/A";
        const emailLink = assoc.locator('a[href^="mailto:"]').first();
        if ((await emailLink.count()) > 0) {
          const href = await emailLink.getAttribute("href");
          if (href) {
            email = href.replace(/^mailto:/gi, "").trim();
          }
        }

        // Si on a au moins un nom, on ajoute
        if (nom !== "N/A" && nom.trim().length > 0) {
          allData.push({
            nom: nom.trim(),
            telephone: telephone,
            email: email,
          });

          console.log(`  ✓ Association ${i + 1}: ${nom.trim()}`);
          console.log(`    Tel: ${telephone}, Email: ${email}`);
        }
      } catch (error) {
        console.error(`  ✗ Erreur sur l'association ${i + 1}:`, error);
      }
    }

    // Afficher le résumé
    console.log("\n=== RÉSUMÉ DU SCRAPING ===");
    console.log(`Total d'associations: ${allData.length}`);
    console.log(`Associations avec email: ${allData.filter((d) => d.email !== "N/A").length}`);
    console.log(`Associations avec téléphone: ${allData.filter((d) => d.telephone !== "N/A").length}`);

    // Exporter vers Excel
    if (allData.length > 0) {
      const filename = `auvers-sur-oise_associations_${new Date().toISOString().split("T")[0]}`;
      exportToExcel(allData, filename, "Associations Sportives");
      console.log(`\n✓ Données exportées vers Excel`);
    } else {
      console.log("\n⚠ Aucune donnée à exporter");
    }
  } catch (error) {
    console.error("\n✗ Erreur lors du scraping:", error);
    throw error;
  } finally {
    await browser.close();
    console.log("\n✓ Navigateur fermé");
  }

  return allData;
}

// Exécuter le script
scrapAuversSurOise();
