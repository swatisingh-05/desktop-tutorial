import { test, expect } from '@playwright/test';

test('Verify static dropdown selection', async ({ page }) => {
	await page.goto('https://rahulshettyacademy.com/angularpractice/');

	const genderDropdown = page.getByLabel('Gender');
	await genderDropdown.selectOption('Female');

	await expect(genderDropdown).toHaveValue('Female');
});




test('Verify multi-window handling', async ({ browser }) => {
	const context = await browser.newContext();
	const page = await context.newPage();

	try {
		await page.goto('https://demoqa.com/browser-windows');

		const [newPage] = await Promise.all([
			context.waitForEvent('page'),
			page.getByRole('button', { name: 'New Window' }).click(),
		]);

		await newPage.waitForLoadState();
		await expect(newPage.getByRole('heading', { name: 'This is a sample page' })).toBeVisible();
	} finally {
		await context.close();
	}
});

test('Validate hidden and visible elements with expect', async ({ page }) => {
	await page.goto('https://demoqa.com/dynamic-properties');

	const visibleButton = page.getByRole('button', { name: 'Color Change' });
	const hiddenButton = page.getByRole('button', { name: 'Visible After 5 Seconds' });

	await expect(visibleButton).toBeVisible();
	await expect(hiddenButton).toBeHidden();
	await expect(hiddenButton).toBeVisible({ timeout: 10000 });
});

test('Use explicit waits at config, test, and step levels', async ({ page }) => {
	test.setTimeout(20000);
	await page.goto('https://demoqa.com/dynamic-properties');

	await test.step('Wait for the delayed button to become visible', async () => {
		const delayedButton = page.getByRole('button', { name: 'Visible After 5 Seconds' });

		await delayedButton.waitFor({ state: 'visible', timeout: 10000 });
		await expect(delayedButton).toBeVisible();
	}, { timeout: 12000 });
});

test('Wait explicitly for dynamically loaded content', async ({ page }) => {
	test.setTimeout(30000);
	await page.goto('https://the-internet.herokuapp.com/dynamic_loading/1');

	await test.step('Start loading and wait for the result', async () => {
		await page.getByRole('button', { name: 'Start' }).click();

		const result = page.locator('#finish h4');
		await result.waitFor({ state: 'visible', timeout: 15000 });
		await expect(result).toHaveText('Hello World!', { timeout: 5000 });
	}, { timeout: 20000 });
});
