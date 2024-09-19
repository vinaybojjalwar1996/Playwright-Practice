import{test,expect} from '@playwright/test'
import { beforeEach } from 'node:test'
import {faker} from '@faker-js/faker'
test.beforeEach(async({page})=>{
    await page.goto('http://localhost:4200/')
    await page.locator('.ng-tns-c140-2').getByTitle('Forms').click()
    await page.getByTitle('Form Layouts').click()

})
test('Clicking on email box',async ({page})=>{
    
    const  horizontalForm=page.locator('nb-card').filter({hasText:'Horizontal form'})
    const randomEmail= faker.internet.email()
    const randomPassword=faker.internet.password()
    await horizontalForm.getByPlaceholder('Email').fill(randomEmail)
    await horizontalForm.getByPlaceholder('Password').fill(randomPassword)
    await horizontalForm.getByText('Remember me').click()
    await horizontalForm.getByRole('button').click()

})

test('Extracting values',async({page})=>{
    const  horizontalForm=page.locator('nb-card').filter({hasText:'Horizontal form'})
    const textContent=await horizontalForm.getByRole('button').textContent()
    expect(textContent).toEqual('Sign in')

})
//getting all text
test('Extracting all values',async({page})=>{
    const allText= await page.locator("nb-radio ").allTextContents()
    expect(allText).toContain("Option 1")
    const emailT=await page.locator(".col-md-6").filter({hasText:"Using the Grid"}).getByPlaceholder("Email")
    await emailT.fill("vinay@test.com")
    const emailValue=await emailT.inputValue()

    expect(emailValue).toEqual('vinay@test.com')

})
//assertations
test('Assertions',async({page})=>{
    //General assertion
    const value =5
    expect(value).toEqual(5)
    const textValue=await page.locator('nb-card').filter({hasText:'Block form'}).getByRole('button')
    await expect(textValue).toHaveText('Submit')
    
})
