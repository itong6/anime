import { test, devices, expect } from '@playwright/test';

test.use({
    browserName: 'chromium',
    ...devices['iPad Air'],
    viewport: {width: 820, height: 1180}
})

test.describe("Testing for home tablet", () => {
    test("Testing for colours on tablet", async ({ page }) => {
        await page.goto('http://localhost:3000')

        const mainContainer = page.locator('#colouring');

        const checkingBackground = await mainContainer.evaluate((ele) => {
            return window.getComputedStyle(ele).getPropertyValue("background")
        })

        console.log(checkingBackground);
        expect(checkingBackground).toBe("rgb(0, 0, 255)");
    })
})