"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const puppeteer_1 = __importDefault(require("puppeteer"));
const utils_1 = require("./utils/utils");
const URL1 = 'https://ecnav.net';
const URL2 = 'https://ecnav.net/reviews';
let main_test = async () => {
    try {
        const browser = await puppeteer_1.default.launch({
            headless: false,
            executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
        });
        const page = await browser.newPage();
        page.setViewport({ height: 800, width: 1280, deviceScaleFactor: 1 });
        await page.goto(URL1, { waitUntil: 'networkidle2' });
        await (0, utils_1.randomSleep)(page, 2000, 3000);
        await (0, utils_1.takeScreenshot)(page, 'HomePageTop');
        // console.log('alive and well');
    }
    catch (e) {
        console.log('Error in main_test: ', e);
    }
};
let main = async () => {
    await main_test();
};
main();
