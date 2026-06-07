const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1280, height: 900 });

  console.log('Navigating to http://localhost:3001...');
  await page.goto('http://localhost:3001', { waitUntil: 'networkidle', timeout: 15000 });

  // Screenshot 1: Hero
  await page.screenshot({ path: '/tmp/krevon_hero.png' });
  console.log('Hero screenshot saved');

  // Check hero text
  const heroText = await page.locator('h1').first().textContent();
  console.log('H1 text:', heroText);

  const gradientText = await page.locator('.gradient-text').first().textContent();
  console.log('Gradient text:', gradientText);

  // Check badge
  const badge = await page.locator('[class*="border-primary"]').first().textContent().catch(() => 'NOT FOUND');
  console.log('Badge class element:', badge?.substring(0, 50));

  // Check navbar logo
  const logoSrc = await page.locator('img[alt="Krevon Media Agency Logo"]').getAttribute('src').catch(() => 'NOT FOUND');
  console.log('Logo src:', logoSrc);

  // Check for orange/yellow colors in page source
  const pageSource = await page.content();
  const hasOrangeColor = pageSource.includes('#FFAA00') || pageSource.includes('#FFD000');
  const hasAmazingMahesana = pageSource.includes('Amazing Mahesana') && !pageSource.includes('krevon');
  console.log('Has orange/yellow hardcoded colors:', hasOrangeColor);
  console.log('Has Amazing Mahesana text:', pageSource.includes('Amazing Mahesana'));

  // Check violet theme
  const hasViolet = pageSource.includes('8B5CF6') || pageSource.includes('primary');
  console.log('Has violet primary color reference:', hasViolet);

  // Scroll to services
  await page.evaluate(() => document.querySelector('#services')?.scrollIntoView());
  await page.waitForTimeout(800);
  await page.screenshot({ path: '/tmp/krevon_services.png' });
  console.log('Services screenshot saved');

  const servicesHeader = await page.locator('#services h2').textContent().catch(() => 'NOT FOUND');
  console.log('Services header:', servicesHeader);

  // Count service cards in services grid
  const serviceCardCount = await page.locator('#services [class*="group"]').count();
  console.log('Service cards count:', serviceCardCount);

  // Scroll to packages
  await page.evaluate(() => document.querySelector('#packages')?.scrollIntoView());
  await page.waitForTimeout(800);
  await page.screenshot({ path: '/tmp/krevon_packages.png' });
  console.log('Packages screenshot saved');

  const packagesHeader = await page.locator('#packages h2').textContent().catch(() => 'NOT FOUND');
  console.log('Packages header:', packagesHeader);

  // Scroll to footer
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await page.waitForTimeout(600);
  await page.screenshot({ path: '/tmp/krevon_footer.png' });
  console.log('Footer screenshot saved');

  const footerText = await page.locator('footer').textContent();
  console.log('Footer has Krevon Media Agency:', footerText.includes('Krevon Media Agency'));
  console.log('Footer has Amazing Mahesana:', footerText.includes('Amazing Mahesana'));

  // Check Get Started button  
  const getStartedBtn = page.locator('text=Get Started').first();
  const btnExists = await getStartedBtn.count() > 0;
  console.log('Get Started button exists:', btnExists);

  // Check contact form
  const formExists = await page.locator('#contact form').count() > 0;
  console.log('Contact form exists:', formExists);

  // Check podcast section
  const podcastExists = await page.locator('#podcast').count() > 0;
  console.log('Podcast section exists:', podcastExists);

  await browser.close();
  console.log('Verification complete!');
})().catch(err => {
  console.error('Error:', err.message);
  process.exit(1);
});
