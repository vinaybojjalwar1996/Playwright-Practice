
    import { Page } from "@playwright/test"
 
    
    export class FormLayoutspage {
        page:Page
    
      constructor(page: Page) {
        this.page = page; 


        
      }
      async fillingTheGridOptionForm(email:string,password:string,optinTest:string){
        const gridLocator=this.page.locator('nb-card',{hasText:"Using the Grid"})
        await gridLocator.getByPlaceholder("Email").fill(email)
        await gridLocator.getByPlaceholder("Password").fill(password)
        await gridLocator.getByText(optinTest).check()
        await gridLocator.getByText("Sign in").click()

      }
    
      
    }
    
