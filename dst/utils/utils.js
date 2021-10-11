"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.takeScreenshot = exports.randomSleep = void 0;
// Creating random interval helper to immitate random human / network behavior and load times.
const randomInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min) + max);
};
/** Wait between Min and Max seconds before proceeding on a particular page */
const randomSleep = async (page, min, max) => {
    let sleepDuration = randomInterval(min, max);
    console.log('Waiting for ', sleepDuration / 1000, 'seconds');
    await page.waitForTimeout(sleepDuration);
};
exports.randomSleep = randomSleep;
/**Save PNG screenshot with given title to ./screenshots/ */
const takeScreenshot = async (page, title) => {
    try {
        await page.screenshot({ path: `./screenshots/${title}.png` });
        console.log(`${title}.PNG saved to ./screenshots/`);
    }
    catch (e) {
        console.log(`Error in utils/takeScreenshot: `, e);
    }
};
exports.takeScreenshot = takeScreenshot;
