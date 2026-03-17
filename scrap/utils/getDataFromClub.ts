import { Browser, Page } from "puppeteer";
import { ResultExpected, clubInformations } from "./types";

export async function getDataFromClub(
  browser: Browser,
  page: Page,
  clubUrl: string
): Promise<ResultExpected> {
  try {
    await page.goto(
      `https://competitions.ffbb.com/${clubUrl}`
    );

    const id = clubUrl.split("/").pop()?.toLocaleUpperCase();
    if (!id) throw new Error("Club id not found");
    await page
      .locator("div::-p-text('Afficher les informations')")
      .click();

    const clubData = await getClubData(page);
    if (!clubData) throw new Error("Club data not found");
    const clubInformations = await scrapClubInformations(
      page
    );
    if (!clubInformations)
      throw new Error("Club informations not found");

    return {
      id,
      ...clubData,
      clubInformations,
    };
  } catch (error) {
    console.error("Error getting data from club", error);
    await browser.close();
    throw error;
  }
}

const getClubData = async (page: Page) => {
  try {
    return await page.evaluate(() => {
      const name =
        document?.querySelector("h1")?.textContent || "UNKNOWN";

      let logo_url =
        document
          ?.querySelector(
            "div[data-onboarding='club'] div.flex.flex-col img"
          )
          ?.getAttribute("src") || undefined;

      if (logo_url && logo_url.includes("_next/static/")) {
        logo_url =
          "https://competitions.ffbb.com" + logo_url;
      }

      return {
        name,
        logo_url,
      };
    });
  } catch (error) {
    console.error("Error getting club data", error);
    return null;
  }
};

async function scrapClubInformations(
  page: Page
): Promise<clubInformations> {
  const info: clubInformations = {};

  // Fonction helper pour extraire une valeur après un label
  const getValueAfterLabel = async (
    labelText: string
  ): Promise<string | undefined> => {
    try {
      const value = await page.evaluate((label) => {
        // Trouve le span contenant le label
        const labelSpan = Array.from(
          document.querySelectorAll("span.text-\\[11px\\]")
        ).find((el) => el.textContent?.trim() === label);

        if (!labelSpan) return undefined;

        // Remonte au parent et trouve le span suivant
        const container = labelSpan.closest(
          "div.flex.flex-col"
        );
        const valueSpan = container?.querySelector(
          "span.text-\\[14px\\].font-medium"
        );

        return valueSpan?.textContent?.trim();
      }, labelText);

      return value || undefined;
    } catch (error) {
      return undefined;
    }
  };

  // Scraping Contact
  info.contact_telephone = await getValueAfterLabel(
    "Téléphone"
  );

  // Pour l'email dans Contact, il faut chercher dans une autre section
  const contactEmail = await page.evaluate(() => {
    const sections = Array.from(
      document.querySelectorAll(
        ".flex.flex-col.gap-\\[10px\\]"
      )
    );
    const contactSection = sections.find(
      (section) =>
        section.querySelector(".text-base.font-bold")
          ?.textContent === "Contact"
    );

    const emailLabel = Array.from(
      contactSection?.querySelectorAll(
        "span.text-\\[11px\\]"
      ) || []
    ).find((el) => el.textContent?.trim() === "E-mail");

    const container = emailLabel?.closest(
      "div.flex.flex-col"
    );
    return container
      ?.querySelector("span.text-\\[14px\\].font-medium")
      ?.textContent?.trim();
  });
  info.contact_email = contactEmail;

  // Scraping Président(e)
  const presidentData = await page.evaluate(() => {
    const sections = Array.from(
      document.querySelectorAll(
        ".flex.flex-col.gap-\\[10px\\]"
      )
    );
    const presidentSection = sections.find(
      (section) =>
        section.querySelector(".text-base.font-bold")
          ?.textContent === "Président(e)"
    );

    if (!presidentSection) return {};

    const getField = (label: string) => {
      const labelSpan = Array.from(
        presidentSection.querySelectorAll(
          "span.text-\\[11px\\]"
        )
      ).find((el) => el.textContent?.trim() === label);
      const container = labelSpan?.closest(
        "div.flex.flex-col"
      );
      return container
        ?.querySelector("span.text-\\[14px\\].font-medium")
        ?.textContent?.trim();
    };

    return {
      name: getField("Nom"),
      phone: getField("Téléphone")?.split(" ").join(""),
      email: getField("E-mail"),
    };
  });

  info.president_name = presidentData.name;
  info.president_phone = presidentData.phone
    ?.split(" ")
    .join("");
  info.president_email = presidentData.email;

  // Scraping Correspondant(e)
  const correspondantData = await page.evaluate(() => {
    const sections = Array.from(
      document.querySelectorAll(
        ".flex.flex-col.gap-\\[10px\\]"
      )
    );
    const corrSection = sections.find(
      (section) =>
        section.querySelector(".text-base.font-bold")
          ?.textContent === "Correspondant(e)"
    );

    if (!corrSection) return {};

    const getField = (label: string) => {
      const labelSpan = Array.from(
        corrSection.querySelectorAll("span.text-\\[11px\\]")
      ).find((el) => el.textContent?.trim() === label);
      const container = labelSpan?.closest(
        "div.flex.flex-col"
      );
      return container
        ?.querySelector("span.text-\\[14px\\].font-medium")
        ?.textContent?.trim();
    };

    return {
      name: getField("Nom"),
      phone: Array.from(
        corrSection.querySelectorAll("span.text-\\[11px\\]")
      )
        .filter(
          (el) => el.textContent?.trim() === "Téléphone"
        )
        .map((el) => {
          const container = el.closest("div.flex.flex-col");
          return container
            ?.querySelector(
              "span.text-\\[14px\\].font-medium"
            )
            ?.textContent?.trim();
        })
        .filter(Boolean),
      email: getField("E-mail"),
    };
  });

  info.correspondant_name = correspondantData.name;
  // Prend le 2ème téléphone (index 1)
  info.correspondant_phone = correspondantData.phone?.[1];
  info.correspondant_email = correspondantData.email;

  return info;
}
