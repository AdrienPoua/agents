import { Browser, Page } from "puppeteer";

export async function getComites(
  browser: Browser,
  page: Page,
  ligueUrl: string[]
): Promise<string[]> {
  const comites: string[] = [];
  await page.setViewport({ width: 1800, height: 1200 });

  for (let i = 0; i < ligueUrl.length; i++) {
    await page.goto(
      `https://competitions.ffbb.com/ligues/${ligueUrl[i]}`
    );
    const links = await page.$$("div#comites a ");

    for (const link of links) {
      const href = await link.evaluate((el) =>
        el.getAttribute("href")
      );
      if (href) {
        comites.push(href);
      }
    }
  }

  console.log("🚀 ~ getComites ~ comites:", comites);
  return comites;
}
