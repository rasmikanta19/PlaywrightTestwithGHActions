// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('Travel Login', () => {
  

  test('get started link navigates to Travel page', async ({ page }) => {

    const username="#cds-input-1";
    const password="#cds-input-0";
    const signInButton="[idstr='signInBtn']";
    const MMBIcon="mmb-icon-button";

    // page.getByRole('button', { name: 'Sign On' })
    await page.goto('https://uat02.citi.com/citi-partner/cititravel/login');

    // Click the "Get started" link
    await expect(page.getByRole('button', { name: 'Sign On',exact: true })).toBeVisible();
    await page.locator(username).fill('tycUAT2_27361');
    await page.locator(password).fill('Test@1234');
    await page.locator(signInButton).click();

    await page.waitForSelector(`[data-testid='${MMBIcon}']`, { state: 'visible' });

    await expect(page.getByTestId(MMBIcon)).toBeVisible();
    await page.getByTestId(MMBIcon).click();
    // Expect the URL to contain /docs/intro
  
  });

  
});
