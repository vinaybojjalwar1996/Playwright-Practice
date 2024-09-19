import { Page } from "@playwright/test";
import { FormLayoutspage } from "./formLayoutspage";
import { NavigationPage } from "./NavigationPage";

export class PageManger{
    page:Page
    formLayoutspage:FormLayoutspage
    navigationPage:NavigationPage
    constructor(page:Page){
        this.page=page
        this.formLayoutspage=new FormLayoutspage(this.page)
        this.navigationPage=new NavigationPage(this.page)

    }
    formLayoutspages(){
        return this.formLayoutspage
    }
    onNavigation(){
        return this.navigationPage
    }

}

