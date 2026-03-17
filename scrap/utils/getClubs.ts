import { Browser, Page } from "puppeteer";
import { ligues } from "./data";

export async function getClubs(
  browser: Browser,
  page: Page,
  comites: string[]
): Promise<string[]> {
  const clubs: string[] = [];
  await page.setViewport({ width: 1800, height: 1200 });

  for (let i = 0; i < comites.length; i++) {
    await page.goto(
      `https://competitions.ffbb.com/${comites[i]}`
    );
    const links = await page.$$("div#clubs a ");

    for (const link of links) {
      const href = await link.evaluate((el) =>
        el.getAttribute("href")
      );
      if (href) {
        clubs.push(href);
      }
    }
  }
  console.log("🚀 ~ getClubs ~ clubs:", clubs);
  return clubs;
}
