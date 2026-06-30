import {Page, expect} from "@playwright/test";
import config from "../config/configReader";

export class LandingPage{
    readonly page : Page;
    readonly pageOpenConfirmation;

    constructor(page:Page){
        this.page = page;
        this.pageOpenConfirmation = page.getByText("Login Page");
    }

    async loginPage(){
        // await this.page.goto("https://the-internet.herokuapp.com/login");
        //await this.page.goto(config.url);

        // 🌟 This automatically opens your global environment URL (e.g., dev, qa, or prod)
        await this.page.goto('/login'); 
        await expect(this.pageOpenConfirmation).toBeVisible();
    }
}