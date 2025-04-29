import {KnownDevices} from 'puppeteer';
const iPhone = KnownDevices['iPhone 15 Pro'];

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.emulate(iPhone);
  await page.goto('https://www.google.com');
  // other actions...
})();
