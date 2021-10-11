import puppeteer from 'puppeteer';

const URL1 = 'https://ecnav.net';
const URL2 = 'https://ecnav.net';

let main_test = async () => {
  try {
    console.log('alive and well');
  } catch (e) {
    console.log('Error in main_test: ', e);
  }
};

let main = async () => {
  await main_test();
};
