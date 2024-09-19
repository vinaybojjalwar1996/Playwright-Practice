import { test, expect } from '@playwright/test';


test('Iframes', async ({ page }) => {
  await page.goto(process.env.URL)
  //const frame=await page.frameLocator('[rel-title="Photo Manager"] iframe')
  await page.frameLocator('#post-2669 iframe').nth(2).getByRole('img', { name: 'The chalet at the Green' }).dragTo(page.frameLocator('#post-2669 iframe').nth(2).locator('#trash'))
  await expect(page.frameLocator('#post-2669 iframe').nth(2).getByText('Trash Trash High Tatras 2')).toContainText("High Tatras 2")

  
});