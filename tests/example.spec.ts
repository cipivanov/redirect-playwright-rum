import { test, expect } from '@playwright/test';

test('goto with redirect', async ({ page }) => {
  await page.goto("/");

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
