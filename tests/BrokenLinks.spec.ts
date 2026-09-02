import { test, expect } from '@playwright/test';

test('Check Broken Links', async ({ page, request }) => {
    //page is used to interact with the browser page.
    //request is Playwright's APIRequestContext used to send HTTP requests.

  await page.goto('http://www.deadlinkcity.com/');

  const links = page.locator('a');//Locate all anchor tags on the page
  //This finds all <a> elements on the page.
  const totalLinks = await links.count();//Count the total number of links

  for (let i = 0; i < totalLinks; i++) {

    const href = await links.nth(i).getAttribute('href');//Get the href value

    if (href) {
    const url = new URL(href, page.url()).href;//Convert relative URL to absolute URL

      try {
        const response = await request.get(url);

        if (response.status() >= 400) {
          console.log(`Broken Link: ${url} | Status Code: ${response.status()}`);
        } else {
          console.log(`Valid Link: ${url} | Status Code: ${response.status()}`);
        }
      } catch (error) {
        console.log(`Broken Link: ${url}`);
      }
    }
  }
});