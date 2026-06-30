import {test} from "@playwright/test";
import { RegistrationPage } from "../pages/registrationPage";


test("Registration Form", async ({page})=>{
    const registrationPage = new RegistrationPage(page);
    await registrationPage.landingPage();
    await registrationPage.verifyTitle();
    await registrationPage.formFilling();
    await registrationPage.verifySuccessMessage();
})
















// test("Sample Form Filling", async ({page}) => {
//     await page.goto("https://rahulshettyacademy.com/angularpractice/");


//     await page.locator('form input[name="name"]').fill("Test User1");
//     await page.locator('//input[@name="email"]').fill("test1@yopmail.com");
//     await page.locator("#exampleInputPassword1").fill("Test12345@");
//     await page.locator("input#exampleCheck1").check();
//     await page.locator("id=exampleFormControlSelect1").selectOption({label:"Female"});
//     await page.locator('[id="inlineRadio2"]').check();
//     await page.locator('input[type="date"]').fill('2000-04-15');
//     await page.locator('input[type="submit"]').click();
    
// })