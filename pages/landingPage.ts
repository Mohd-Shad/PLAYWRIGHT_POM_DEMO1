import {Page} from "@playwright/test";

export class LandingPage{
    readonly page : Page;
    readonly pageOpenConfirmation;

    constructor(page:Page){
        this.page = page;
        this.pageOpenConfirmation = page.getByText("Login Page");
    }

    async loginPage(){  
        // This automatically opens global environment URL.
        await this.page.goto('/login'); 
    }
}