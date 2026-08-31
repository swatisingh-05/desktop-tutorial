
import { test, expect, chromium } from '@playwright/test';
test("Cookies demo", async ()=>{
    const browser = await chromium.launch()
    const context = await browser.newContext()
    const page = await context.newPage();
 
    await page.goto('https://playwright.dev');
 
    //Add cookies
    await context.addCookies([
        {
            name: 'username',
            value: 'Pavan',
            domain: 'playwright.dev',
            path: '/',
            httpOnly: false,
            secure: true,
            sameSite: 'Lax'
        },
        {
            name: 'auth_token',
            value: 'xyz123secret',
            url: 'https://example.com'
        }
    ])
 
    //Get all the cookies
    let cookies=await context.cookies()
    console.log("Cookies=====>", cookies)
 
    //Clear the cookies

     await context.clearCookies();
 
    //Verify cookies are cleared
    let cookiesAfterClear = await context.cookies();
    console.log("Cookies after clear=====>", cookiesAfterClear);
 
    await browser.close();
});