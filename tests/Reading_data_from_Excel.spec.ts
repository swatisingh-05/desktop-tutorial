import { test, expect } from '@playwright/test';
import * as XLSX from 'xlsx';

const workbook = XLSX.readFile('./test-data.xlsx');
const worksheet = workbook.Sheets['URLs'];
const urlRows = XLSX.utils.sheet_to_json(worksheet);

test('Validate URLs from Excel', async ({ page }) => {
  test.setTimeout(60000);

  expect(urlRows.length).toBeGreaterThan(0);

  for (const row of urlRows as any[]) {
    const response = await page.goto(row.URL);

    expect(response).not.toBeNull();
    expect(response?.ok()).toBeTruthy();

    await expect(page).toHaveURL(row.URL);
  }
});
