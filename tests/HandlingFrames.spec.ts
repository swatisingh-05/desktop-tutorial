import {test, expect} from '@playwright/test';
test('Handling frames', async ({ page }) => {
  const noOfFrames = page.frames();
  console.log(`No of frames present are : ${noOfFrames.length}`);
 
  // using name or url or locator or index
 
  const frame1 = page.frame({name : 'left'});
 
  //frame1.waitForSelector("h1", {state : 'visible'})
  if ( frame1 )
  {
  const ele = await frame1.waitForSelector("h1", { state : 'visible'})
  const text = frame1.locator("h1");
  await expect(text).toHaveText("Left");
 
  }
  else
  {
    console.error("The left named frame is not present on the page");
  }
});