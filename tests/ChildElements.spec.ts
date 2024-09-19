import{test} from '@playwright/test'
test('First Test 5',async ({page})=>{
    await page.goto("http://localhost:4200/")
    await page.getByTitle('Forms').click()
    await page.getByTitle('Form Layout').click()
    await page.locator('nb-card nb-radio :text-is("Option 1")').click()
})