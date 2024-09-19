import{test} from '@playwright/test'
test.beforeEach(async ({page})=>{
    await page.goto("http://localhost:4200/")
    await page.locator("(//a[@title='Forms'])[1]").click()
    await page.locator("(//a[@title='Form Layouts'])[1]").click()
    await page.locator('nb-card nb-radio :text-is("Option1")').click()
    

})

/**test('Locator',async({page})=>{
    //find by ta name
    page.locator('input')
    //find by ID (should be with # prefix_)
    page.locator('#input email')
    //by class value(shoud be with . prefix)
   


})**/