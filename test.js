const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');

puppeteer.use(StealthPlugin());

(async () => {
  const browser = await puppeteer.launch({
    headless: false, // Show the browser
    defaultViewport: {
      width: 375,
      height: 812,
      isMobile: true,
      hasTouch: true
    },
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--window-size=375,812',
      '--user-agent=Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Mobile/15E148 Safari/604.1'
    ]
  });

  const page = await browser.newPage();

  console.log('🚀 Mobile browser launched. Enter your phishing URL manually.');
  console.log('🧯 Close the browser window when you are done.');
})();
