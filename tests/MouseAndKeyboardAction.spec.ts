import {test, expect} from '@playwright/test';

test('Keyboard Actions', async ({page})=>
{
  await page.goto("https://www.Amazon.com/");
  await page.getByPlaceholder("Search Amazon").focus();
  await page.keyboard.type("Laptop"); // type the text
  //await page.keyboard.press('Enter'); // press enter
  await page.keyboard.press('Control+A')
  await page.waitForTimeout(3000);
  await page.keyboard.press('Backspace')
  await page.waitForTimeout(5000);
 
})

test(' More Mouse Actions', async ({page})=>{
await page.goto("https://www.tutorialspoint.com/selenium/practice/selenium_automation_practice.php");
    await page.getByPlaceholder("First Name").focus();
    await page.keyboard.type("Script And Execute");
    await page.keyboard.press('Control+A');
    await page.waitForTimeout(3000);
    await page.keyboard.press('Control+C');
    await page.waitForTimeout(3000);
    await page.getByPlaceholder("name@example.com").focus();
    await page.keyboard.press('Control+V');
    await page.waitForTimeout(5000);

})