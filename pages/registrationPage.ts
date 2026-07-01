import {Page,expect} from "@playwright/test"
import userData from "../test-data/userData.json"

export class RegistrationPage{
    readonly page;
    readonly title;
    readonly heading;
    readonly name_textbox;
    readonly email_textbox;
    readonly password_textbox;
    readonly checkbox;
    readonly dropdown;
    readonly radio_button;
    readonly dob;
    readonly sub_button;
    readonly success_message;

    constructor(page:Page){
        this.page = page;
        this.title = page.title();
        this.heading = page.getByRole("heading",{name:"Protractor Tutorial"});
        this.name_textbox = page.locator('form input[name="name"]');
        this.email_textbox = page.locator('form input[name="email"]');
        this.password_textbox = page.getByRole("textbox",{name:"Password"});
        this.checkbox = page.getByRole("checkbox",{name:"Check me out if you Love IceCreams!"});
        this.dropdown = page.locator("#exampleFormControlSelect1"); //page.getByLabel("Gender")
        this.radio_button = page.getByRole("radio",{name:"Student"});
        this.dob = page.locator('input[name="bday"]');
        this.sub_button = page.getByRole("button", {name:"Submit"});
        this.success_message = page.getByText("Success! The Form has been submitted successfully!.");
    }

    async landingPage(){
        await this.page.goto("https://rahulshettyacademy.com/angularpractice");
    }
    
    async formFilling(){
        await this.name_textbox.fill(userData.user1.name);
        await this.email_textbox.fill(userData.user1.email);
        await this.password_textbox.fill(userData.user1.password);
        await this.checkbox.check();
        await expect(this.checkbox).toBeChecked();
        await this.dropdown.selectOption({label:"Male"});
        await expect(this.dropdown).toHaveValue("Male");
        await this.radio_button.check();
        await expect(this.radio_button).toBeChecked();
        await this.dob.fill("2000-04-15");
        await this.sub_button.click();
    }
}