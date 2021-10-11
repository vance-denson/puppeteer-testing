import puppeteer from 'puppeteer';

// Creating random interval helper to immitate random human / network behavior and load times.

const randomInterval = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min) + max);
};

/** Wait between Min and Max seconds before proceeding on a particular page */
export const randomSleep = async (
  page: puppeteer.Page,
  min: number,
  max: number
) => {
  let sleepDuration = randomInterval(min, max);
  console.log('Waiting for ', sleepDuration / 1000, 'seconds');
  await page.waitForTimeout(sleepDuration);
};

/**Save PNG screenshot with given title to ./screenshots/ */
export const takeScreenshot = async (page: puppeteer.Page, title: string) => {
  try {
    await page.screenshot({ path: `./screenshots/${title}.png` });
    console.log(`${title}.PNG saved to ./screenshots/`);
  } catch (e) {
    console.log(`Error in utils/takeScreenshot: `, e);
  }
};
