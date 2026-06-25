import {Page, expect} from "@playwright/test";
import config from "../config/configReader";

export class GoToLoginPage{
    readonly page : Page;
    readonly pageOpenConfirmation;

    constructor(page:Page){
        this.page = page;
        this.pageOpenConfirmation = page.getByText("Login Page");
    }

    async goToLoginPage(){
        // await this.page.goto("https://the-internet.herokuapp.com/login");
        // await this.page.goto(config.url);

        // Playwright expands this to: https://herokuapp.com
        await this.page.goto('');
        
        //await this.page.goto('/forgot_password');  //If you ever add a page extension later, you only provide the sub-path
        // This verifies that the page URL strictly matches your global baseURL
        await expect(this.page).toHaveURL(''); 

        await expect(this.pageOpenConfirmation).toBeVisible();
    }
}