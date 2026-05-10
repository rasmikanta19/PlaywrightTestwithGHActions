// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('Playwright Website', () => {
  test('has title', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Playwright/);
  });

  test('get started link navigates to intro page', async ({ page }) => {
    await page.goto('/');

    // Click the "Get started" link
    await page.getByRole('link', { name: 'Get started' }).click();

    // Expect the URL to contain /docs/intro
    await expect(page).toHaveURL(/.*\/docs\/intro/);
  });

  test('docs page has search', async ({ page }) => {
    await page.goto('/docs/intro');

    // Check that the search bar is visible
    const searchButton = page.getByLabel('Search');
    await expect(searchButton).toBeVisible();
  });
});
