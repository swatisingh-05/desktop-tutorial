import { test, expect } from '@playwright/test';
 
test('validate Poduct Table', async ({page}) => {
 
  // Open the webpage
  await page.goto('https://sdetqa.vercel.app/autoplay.html');
 
  //Functional validations
  const table = page.locator('table').first();
  const headers = table.locator('thead th');
  const rows = table.locator('tbody tr');
 
  console.log("Number of rows:", await rows.count());
  console.log("Number of columns:", await headers.count());
 
  // 1 & 2. Verify row and column count
  await expect(headers).toHaveCount(5);
  await expect(rows).toHaveCount(4);
 
  // 3. Read all data from 3rd row
 
  const thirdRowCells = rows.nth(2).locator('td');
  console.log("Third row data:", await thirdRowCells.allTextContents());
  await expect(thirdRowCells).toHaveText(['Keyboard', 'Electronics', '$79', '0', 'Out of Stock']);
 
  // 4. Read all data from the table (excluding header)
 
  const tableData: string[][] = [];
  const rowCount = await rows.count();
 
  for (let r = 0; r < rowCount; r++) {
    const cellValues = await rows.nth(r).locator('td').allInnerTexts(); // Get all cell values for the current row
    tableData.push(cellValues); // Store the cell values in the tableData array
    console.log(`Row ${r + 1}:`, cellValues);
  }
 
});