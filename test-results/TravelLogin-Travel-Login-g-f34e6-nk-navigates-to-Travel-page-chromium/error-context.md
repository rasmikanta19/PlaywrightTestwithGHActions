# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: TravelLogin.spec.js >> Travel Login >> get started link navigates to Travel page
- Location: PlaywrightTestwithGHActions\tests\TravelLogin.spec.js:7:3

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('button', { name: 'Sign On', exact: true })
Expected: visible
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByRole('button', { name: 'Sign On', exact: true })

```

# Test source

```ts
  1  | // @ts-check
  2  | const { test, expect } = require('@playwright/test');
  3  | 
  4  | test.describe('Travel Login', () => {
  5  |   
  6  | 
  7  |   test('get started link navigates to Travel page', async ({ page }) => {
  8  | 
  9  |     const username="#cds-input-1";
  10 |     const password="#cds-input-0";
  11 |     const signInButton="[idstr='signInBtn']";
  12 |     const MMBIcon="mmb-icon-button";
  13 | 
  14 |     // page.getByRole('button', { name: 'Sign On' })
  15 |     await page.goto('https://uat01.citi.com/citi-partner/cititravel/login');
  16 | 
  17 |     // Click the "Get started" link
> 18 |     await expect(page.getByRole('button', { name: 'Sign On',exact: true })).toBeVisible();
     |                                                                             ^ Error: expect(locator).toBeVisible() failed
  19 |     console.log("Sign On button is visible");
  20 |     await page.locator(username).fill('tycUAT1_73159');
  21 |     await page.locator(password).fill('Test@1234');
  22 |     console.log("Entered username and password");
  23 |     await page.locator(signInButton).click();
  24 |     console.log("Clicked on Sign On button");
  25 |     console.log("Waiting for MMB Icon to be visible");
  26 |     await page.waitForSelector(`[data-testid='${MMBIcon}']`, { state: 'visible' });
  27 |     await expect(page).toHaveURL(/travel\.citi\.com/);
  28 |     console.log("Navigated to Travel page successfully");
  29 |     console.log("MMB Icon is visible");
  30 |     await expect(page.getByTestId(MMBIcon)).toBeVisible();
  31 |     await page.getByTestId(MMBIcon).click();
  32 |     console.log("Clicked on MMB Icon");
  33 |     await page.close();
  34 |     // Expect the URL to contain /docs/intro
  35 | 
  36 |   
  37 |   });
  38 | 
  39 |   
  40 | });
  41 | 
```