import {test, expect} from 'playwright/test';
test('login test', async ({page}) => {
    await page.goto('https://demowebshop.tricentis.com/');
     await page.locator('#small-searchterms').fill("Laptop")
});