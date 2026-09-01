import { test, expect, FrameLocator } from '@playwright/test';
 
test('Handling Date picker', async ({ page }) => {
 
      await page.goto('https://jqueryui.com/datepicker/');
    const frame: FrameLocator = page.frameLocator('.demo-frame');
    await frame.locator('#datepicker').click();
 
    const targetYear = 2028;
    const targetMonth = "May";
    const targetDay = "2";
    const targetDate = `${targetMonth} ${targetDay}, ${targetYear}`;
    console.log('Searching for date:', targetDate);
 
    // this is navigation to the correct year ---
    while (true) {
        const displayedYearText = await frame.locator('.ui-datepicker-year').textContent();
        const displayedYear = parseInt(displayedYearText ?? '0', 10);
 
        if (displayedYear === targetYear) {
            break;
        }
 
        if (displayedYear < targetYear) {
            await frame.locator('.ui-datepicker-next').click();
        } else {
            await frame.locator('.ui-icon-circle-triangle-w').click(); // prev
        }
    }
 
    // this is navigation to the correct month ---
    while (true) {
        const displayedMonth = await frame.locator('.ui-datepicker-month').textContent();
 
        if (displayedMonth === targetMonth) {
            break;
        } else {
            await frame.locator('.ui-datepicker-next').click();
        }
    }
 
    await frame
        .locator('.ui-datepicker-calendar a')
        .getByText(targetDay, { exact: true })
        .click();
 
    await page.waitForTimeout(5000); 
});
 