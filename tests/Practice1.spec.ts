import{test} from '@playwright/test'
test('Clicking on email box',async ({page})=>{
    await page.goto('http://localhost:4200/"')
    await page.locator('.ng-tns-c140-2').getByTitle('Forms').click()
    await page.getByTitle('Form Layouts').click()
    const  horizontalForm=page.locator('nb-card').filter({hasText:'Horizontal form'})
    await horizontalForm.getByPlaceholder('Email').fill('test.com')
    await horizontalForm.getByPlaceholder('Password').fill('12345677')
    await horizontalForm.getByText('Remember me').click()
    await horizontalForm.getByRole('button').click()

})

test('Extracting values',async({page})=>{
    const  horizontalForm=page.locator('nb-card').filter({hasText:'Horizontal form'})
    const textContent=await horizontalForm.getByRole('button').textContent()
    console.log(textContent)

})
