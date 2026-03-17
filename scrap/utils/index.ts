import puppeteer from "puppeteer";
import { ligues } from "./data";
import { getComites } from "./getComites";
import { getClubs } from "./getClubs";
import { getDataFromClub } from "./getDataFromClub";
import { ResultExpected } from "./types";

 class Data {
  private result: ResultExpected[] = [];

  constructor() {}

  async getData(): Promise<ResultExpected[]> {
    if (this.result.length > 0) {
      return Promise.resolve(this.result);
    } else {
      const results = await this.script();
      this.result = results;
      return this.result;
    }
  }

  private async script(): Promise<ResultExpected[]> {
    const browser = await puppeteer.launch({
      headless: false,
      defaultViewport: { width: 1800, height: 1200 },
    });
    const results: ResultExpected[] = [];

    const page = await browser.newPage();
    const comites = await getComites(browser, page, ligues);
    const clubs = await getClubs(browser, page, comites);

    for (const club of clubs) {
      const clubData = await getDataFromClub(
        browser,
        page,
        club
      );
      results.push(clubData);
    }
    return results;
  }
}

export const data = new Data();