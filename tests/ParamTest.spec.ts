import {test, expect} from 'playwright/test';
test('login test', async ({page}) => {
    await page.goto('https://demowebshop.tricentis.com/');
     await page.locator('#small-searchterms').fill("Laptop");

});


const searchItems:string[]=['laptop', 'Gift card', 'smartphone', 'monitor'];
//using for loop to iterate through the searchItems array and create a test for each item
for(const item of searchItems)
{
test(`search test ${item}`,async ({ page }) => {
await page.goto('https://demowebshop.tricentis.com/');
await page.locator('#small-searchterms').fill(item);  
await page.locator("input[value='Search']").click();      
await expect.soft(page.locator('h2 a').nth(0)).toContainText(item, { ignoreCase: true }); 
});
}