//Puppeteer library
const puppeteer = require('puppeteer')
//launch browser in headed mode
puppeteer.launch({headless:false}).then(async browser => {
   //browser new page
   const page = await browser.newPage()
   //set device to iPhone X
   const m = puppeteer.devices['iPhone X']
   //emulate iPhoneX
   await page.emulate(m)
  })
