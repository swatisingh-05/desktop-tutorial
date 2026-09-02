import { test, expect } from '@playwright/test';
import path from 'path';

test('Upload a text file', async ({ page }) => {
	await page.goto('https://the-internet.herokuapp.com/upload');

	const filePath = path.join(__dirname, '..', 'testData', 'sample.txt');
	await page.locator('#file-upload').setInputFiles(filePath);
	await page.locator('#file-submit').click();

	await expect(page.locator('#uploaded-files')).toHaveText('sample.txt');
});

test('Upload a PDF file', async ({ page }) => {
	await page.goto('https://the-internet.herokuapp.com/upload');

	const filePath = path.join(__dirname, '..', 'testData', 'sample.pdf');
	await page.locator('#file-upload').setInputFiles(filePath);
	await page.locator('#file-submit').click();

	await expect(page.locator('#uploaded-files')).toHaveText('sample.pdf');
});
