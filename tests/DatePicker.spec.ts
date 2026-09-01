import { test, expect } from '@playwright/test';

test('fill a native date input directly', async ({ page }) => {
  await page.goto('https://example.com');
});