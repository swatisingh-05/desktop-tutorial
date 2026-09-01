import { test, expect } from '@playwright/test';
test('Alert with OK button', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('alert');
        expect(dialog.message()).toContain('I am an alert box!');
        //console.log(`Dialog message: ${dialog.message()}`);
        await dialog.accept();
    });
    await page.locator('#alertBtn').click();
});

test('confirmation dialog alert with OK button and cancel button', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('confirm');
        expect(dialog.message()).toContain('Press a button!');
        //console.log(`Dialog message: ${dialog.message()}`);
        await dialog.accept();
    });
    await page.locator('#confirmBtn').click();
    await expect(page.locator('#demo')).toHaveText('You pressed OK!');
    await page.waitForTimeout(5000);
});

test('Prompt alert dialog with user input', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('prompt');
        expect(dialog.message()).toContain('Please enter your name:');
        //console.log(`Dialog message: ${dialog.message()}`);
        await dialog.fill('John Doe');
        await dialog.accept();
    });
    await page.locator('#promptBtn').click();
    await expect(page.locator('#demo')).toContainText('John Doe');
    await page.waitForTimeout(5000);
});