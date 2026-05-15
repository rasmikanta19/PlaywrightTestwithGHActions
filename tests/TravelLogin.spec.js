// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('Travel Login', () => {
  

  test('get started link navigates to Travel page', async ({ page }) => {

    const username="#cds-input-1";
    const password="#cds-input-0";
    const signInButton="[idstr='signInBtn']";
    const MMBIcon="mmb-icon-button";

    // page.getByRole('button', { name: 'Sign On' })
    await page.goto('https://uat01.citi.com/citi-partner/cititravel/login');

    // Click the "Get started" link
    await expect(page.getByRole('button', { name: 'Sign On',exact: true })).toBeVisible();
    console.log("Sign On button is visible");
    await page.locator(username).fill('tycUAT1_73159');
    await page.locator(password).fill('Test@1234');
    console.log("Entered username and password");
    await page.locator(signInButton).click();
    console.log("Clicked on Sign On button");
    console.log("Waiting for MMB Icon to be visible");
    await page.waitForSelector(`[data-testid='${MMBIcon}']`, { state: 'visible' });
    await expect(page).toHaveURL(/travel\.citi\.com/);
    console.log("Navigated to Travel page successfully");
    console.log("MMB Icon is visible");
    await expect(page.getByTestId(MMBIcon)).toBeVisible();
    await page.getByTestId(MMBIcon).click();
    console.log("Clicked on MMB Icon");
    await page.close();
    // Expect the URL to contain /docs/intro

  
  });

  
});
