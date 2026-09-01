import { Page } from '@playwright/test';

export async function dismissCookiePopup(page: Page): Promise<void> {
  const cookieButton = page.locator('#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowallSelection');
  if (await cookieButton.isVisible({ timeout: 5000 })) {
    await cookieButton.click();
  }
}
