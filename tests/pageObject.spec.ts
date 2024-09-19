import { test, expect } from '@playwright/test';
import { NavigationPage } from "./Navigationpages/NavigationPage";
import { FormLayoutspage } from './Navigationpages/formLayoutspage';

test.beforeEach(async({page})=>{
    await page.goto('http://localhost:4200/"')
})

test("navigate to forms page", async ({ page }) => {
    const navigationPage = new NavigationPage(page);
    await navigationPage.formsLayoutPage()

    // Add assertions or further interactions here
    expect(await page.url()).toBe('http://localhost:4200/pages/forms/layouts');
});
test("navigate to Date Picker page", async ({ page }) => {
    const navigationPage = new NavigationPage(page);
    await navigationPage.formsLayoutPage()
    await navigationPage.datePickerPage()

    // Add assertions or further interactions here
    
});

test("navigate to Date page", async ({ page }) => {
    const datePage=new NavigationPage(page)
    await datePage.chartsPage()
})
test("GridPage",async({page})=>{
    const navigationPage = new NavigationPage(page);
    const gridPage= new FormLayoutspage(page)
    await navigationPage.formsLayoutPage()
    await gridPage.fillingTheGridOptionForm("v@test.com","pass","Option 1")


})
