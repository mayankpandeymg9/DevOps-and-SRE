const puppeteer = require('puppeteer');

const SCRAPE_URL = process.env.SCRAPE_URL;
if (!SCRAPE_URL) {
  console.error("SCRAPE_URL environment variable is not set.");
  process.exit(1);
}

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    executablePath: '/usr/bin/chromium',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.goto(SCRAPE_URL, { waitUntil: 'domcontentloaded' });

  const data = await page.evaluate(() => ({
    title: document.title,
    firstHeading: document.querySelector('h1')?.innerText || null
  }));

  const fs = require('fs');
  fs.writeFileSync('scraped_data.json', JSON.stringify(data, null, 2));

  await browser.close();
})();