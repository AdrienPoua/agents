import { chromium } from "playwright";
import { exportToExcel } from "../utils/excelWriter.js";
import { AssociationData } from "../utils/data.type.js";

export async function scrapArgenteuil() {

  const { browser, page } = await getPage();

  const allData: AssociationData[] = [];
  const URL =
    "https://www.argenteuil.fr/fr/annuaire-des-associations-sportives?categories%5B143%5D=143&multiselect-dataid-edit-categories--3--wrapper-697111760=143&region=All";
  let currentPage = 1;
  let goToNextPage = true;

  try {
    await page.goto(URL);
    while (goToNextPage) {
      console.log(`\n--- Scraping page ${currentPage} ---`);
      const articles = await page.locator("li:has(h3 a[href*='annuaire-des-associations'])").all();

      for (let i = 0; i < articles.length; i++) {
        try {
          const article = articles[i];

          // Récupérer le nom de l'association dans h3 > a
          const nomLocator = article.locator("h3 a").first();
          const nom = (await nomLocator.textContent()) || "N/A";
          // Récupérer le numéro de téléphone
          let telephone = "N/A";
          const telLocator = article.locator('a[href^="tel:"]').first();
          if ((await telLocator.count()) > 0) {
            const telText = await telLocator.textContent();
            if (telText) {
              // Extraire seulement le premier numéro (car le texte est dupliqué)
              const match = telText.match(/\d{2}\s?\d{2}\s?\d{2}\s?\d{2}\s?\d{2}/);
              telephone = match ? match[0] : telText.trim();
            }
          }

          // Récupérer l'email
          let email = "N/A";
          const emailLocator = article.locator('a[href^="mailto:"]').first();
          if ((await emailLocator.count()) > 0) {
            const href = await emailLocator.getAttribute("href");
            if (href) {
              // Nettoyer l'email (enlever "mailto:" et les doublons)
              email = href.replace(/^mailto:/gi, "").trim();
            }
          }

          allData.push({
            nom: nom.trim(),
            telephone: telephone,
            email: email,
          });

          console.log(`    ✓ Tel: ${telephone}, Email: ${email}`);
        } catch (error) {
          console.error(`  ✗ Erreur sur l'article ${i + 1}:`, error);
        }
      }

      // Chercher le bouton "Suivant" dans la pagination
      const nextButton = page.locator('li a:has-text("Suivant")').first();
      const hasNextButton = (await nextButton.count()) > 0;

      console.log(`Vérification de la pagination...`);

      if (hasNextButton) {
        console.log(`\n→ Bouton "Suivant" trouvé, navigation vers page ${currentPage + 1}...`);
        await nextButton.click();

        // Attendre que la page soit chargée (URL change)
        await page.waitForLoadState("networkidle");
        await page.waitForTimeout(1500);

        currentPage++;
      } else {
        console.log("\n✓ Dernière page atteinte (pas de bouton Suivant)");
        goToNextPage = false;
      }
    }

    // Afficher le résumé
    console.log("\n=== RÉSUMÉ DU SCRAPING ===");
    console.log(`Total d'associations: ${allData.length}`);
    console.log(`Pages parcourues: ${currentPage}`);
    console.log(`Associations avec email: ${allData.filter((d) => d.email !== "N/A").length}`);
    console.log(`Associations avec téléphone: ${allData.filter((d) => d.telephone !== "N/A").length}`);

    // Exporter vers Excel
    if (allData.length > 0) {
      const filename = `argenteuil_associations_${new Date().toISOString().split("T")[0]}`;
      exportToExcel(allData, filename, "Associations Sportives");
      console.log(`\n✓ Données exportées vers Excel`);
    } else {
      console.log("\n⚠ Aucune donnée à exporter");
    }
  } catch (error) {
    console.error("\n✗ Erreur lors du scraping:", error);
    throw error;
  } finally {
    // Toujours fermer le navigateur
    await browser.close();
    console.log("\n✓ Navigateur fermé");
  }

  return allData;
}

const getPage = async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();
  return { browser, page };
};
// Exécuter le script
scrapArgenteuil();
