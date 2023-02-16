import { test, expect } from '@playwright/test'

test('should navigate to the home page', async ({ page }) => {
  // Start from the search page (the baseURL is set via the webServer in the playwright.config.ts)
  await page.goto('http://localhost:3000/search')
  // Find an element with the text 'Search Page' and click on it
  await page.click('text=⬅')
  // The new URL should be "/search" (baseURL is used there)
  await expect(page).toHaveURL('http://localhost:3000/')
  // The new page should contain an h2 with "About Page"
  await expect(page.locator('h1')).toContainText('Find an Anime to Watch!')
})

test('Test multiple tabs', async ({ browser }) => {
  const context = await browser.newContext();
  const page1 = await context.newPage();
  const page2 = await context.newPage();
  const page3 = await context.newPage();

  await page1.goto('http://localhost:3000/')
  await page2.goto('http://localhost:3000/')
  await page3.goto('http://localhost:3000/')
})