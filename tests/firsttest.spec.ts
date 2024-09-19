import { test } from '@playwright/test';

// Runs before each test in the suite
test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test.describe('test suite 1', () => {

  test('has title', async ({ page }) => {
    // Navigate and interact with elements using XPath
    await page.locator("(//a[@title='Forms'])[1]").click();
    await page.locator("(//a[@title='Form Layouts'])[1]").click();
  });

  test('date picker', async ({ page }) => {
    // Navigate and interact with elements using XPath
    await page.locator("(//a[@title='Forms'])[1]").click();
    await page.locator("//a[@title='Datepicker']").click();
  });

});