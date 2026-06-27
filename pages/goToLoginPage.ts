import {Page, expect} from "@playwright/test";
import config from "../utils/configReader";

export class GoToLoginPage{
    readonly page : Page;
    readonly pageOpenConfirmation;

    constructor(page:Page){
        this.page = page;
        this.pageOpenConfirmation = page.getByText("Login Page");
    }

    async goToLoginPage(){
        // await this.page.goto("https://the-internet.herokuapp.com/login");
        await this.page.goto(config.url);
        await expect(this.pageOpenConfirmation).toBeVisible();
    }
}