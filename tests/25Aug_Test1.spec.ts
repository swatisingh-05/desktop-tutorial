import { test, expect, Locator } from "@playwright/test";

//fixture -global variable : page,browser

// test("title",asnyc({page})=>{})

test("Verify title of the page", async ({ page }) => {

    await page.goto("https://www.toolsqa.com");
    await expect(page).toHaveTitle("Tools QA");
});

test.only("text Field is enabled and visible", async ({ page }) => {
    await page.goto("https://www.amazon.in");
    const searchBox = page.locator('#twotabsearchtextbox');
    await expect(searchBox).toBeVisible();
    await expect(searchBox).toBeEnabled();
});


test("seach an item and click", async ({ page }) => {
    await page.goto("https://www.amazon.in");
    await page.locator('#twotabsearchtextbox').fill("iphone");
    await page.locator('#nav-search-submit-button').click();
    //await page.pause();
});


test('Child windows hadling', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const userName = page.locator('#username');
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const documentLink = page.locator("[href*='documents-request']");

    const [newPage] = await Promise.all(
        [
            context.waitForEvent('page'),
            documentLink.click(),

        ])
});

// test.('Drop down IRCTC', async ({ page }) => {
//     await page.goto("https://www.irctc.co.in/nget/train-search");

// });

//https://www.irctc.co.in/nget/train-search


test('Add item to Amazon cart', async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://www.amazon.in');
    await page.locator('#twotabsearchtextbox').fill('iphone');
    await page.locator('#nav-search-submit-button').click();
    // await page.waitForLoadState('networkidle');

    const clickOnFirstItem = await page.locator("(//div[@data-component-type='s-search-result'])[1]");
    const addToCart = await page.locator("(//div[@data-csa-c-action-name='addToCart'])[1]");
    await addToCart.click();
    // const [newPage] = await Promise.all([
    //     context.waitForEvent('page'),
    //     addToCart.click(),
    // ])

});