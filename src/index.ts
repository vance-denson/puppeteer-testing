import puppeteer from 'puppeteer';
import { randomSleep, takeScreenshot } from './utils/utils';

const URL1 = 'https://ecnav.net';
const URL2 = 'https://ecnav.net/reviews';

let main_test = async () => {
  try {
    const browser = await puppeteer.launch({
      headless: false,
      executablePath:
        'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    });
    const page = await browser.newPage();

    page.setViewport({ height: 800, width: 1280, deviceScaleFactor: 1 });

    await page.goto(URL1, { waitUntil: 'networkidle2' });
    await randomSleep(page, 2000, 3000);

    await takeScreenshot(page, 'HomePageTop');

    // console.log('alive and well');
  } catch (e) {
    console.log('Error in main_test: ', e);
  }
};

let main = async () => {
  await main_test();
};

main();
