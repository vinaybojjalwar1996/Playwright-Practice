import { Page } from "@playwright/test";
export class NavigationPage {
    page:Page
    constructor(page:Page){
        this.page=page
    }
    async formsLayoutPage(){
        await this.page.goto("http://localhost:4200/")
        await this.page.getByTitle('Forms').click()
        
        await this.page.getByTitle('Form Layouts').click()
        await this.page.waitForTimeout(1000)

    }
    async datePickerPage(){
        //await this.page.goto("http://localhost:4200/")
        await this.page.getByTitle('Forms').click()
        await this.page.getByTitle('Datepicker').click()
        
    }

    async chartsPage(){
        await this.page.goto("http://localhost:4200/")
        await this.page.getByText('Charts',{ exact: true }).click()
        
       
    }
       
       

    


    async groupMenu(formName:string){
        const formNav=await this.page.getByTitle(formName)
        const expandedState=await formNav.getAttribute('aria-expanded')
        if(expandedState=="false"){
            await formNav.click()
        }
            
        
        
    }
   



}
