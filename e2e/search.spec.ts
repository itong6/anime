import { test, expect } from '@playwright/test'

let urlHome = "http://localhost:3000";
let urlSearch = "http://localhost:3000/search";

test.beforeAll(async () => {
    console.log('Before tests');
});

test.afterAll(async () => {
    console.log('After tests');
});

test.describe('Header area', () => {
    test('The title tag', async({ page }) => {
        await page.goto(urlHome)

        await expect(page).toHaveTitle('Anime App');
    })

    test('The meta tag', async ({ page }) => { 
        // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
        await page.goto(urlSearch)
        
        const metaDescriptionOne = page.locator('meta[name="anime"]')
        await expect(metaDescriptionOne).toHaveAttribute("content", "Animes to Watch")

        const metaDescriptionTwo = page.locator('meta[property="og:title"]');
        await expect(metaDescriptionTwo).toHaveAttribute('content', 'Assignment #2 - Filter Page')

        const metaDescriptionThree = page.locator('meta[property="og:description"]');
        await expect(metaDescriptionThree).toHaveAttribute('content', 'Anime Recommendations')
    })

    test('The link tag', async ({ page }) => {
        await page.goto(urlHome)

        const linkTag = page.locator('link[rel="icon"]');
        await expect(linkTag).toHaveAttribute('href', '/favicon.ico')
    })
})


test.describe('Main area', () => {
    test('Count number of buttons', async({ page }) => {
        await page.goto(urlSearch)

        await expect(page.locator('div > button')).toHaveCount(10);
    })

    test('a tag', async({ page }) => {
        await page.goto(urlSearch)

        await expect(page.locator('a')).toContainText('⬅');
    })

    test('Count number of a tags', async({ page }) => {
        await page.goto(urlSearch)

        await expect(page.locator('main > a')).toHaveCount(1);
    })
})