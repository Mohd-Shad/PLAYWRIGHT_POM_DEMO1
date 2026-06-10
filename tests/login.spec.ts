import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/login";
import { LogoutPage } from "../pages/logout";
import config from "../config/configReader";

test("Login test", async ({ page }) => {
  const Login = new LoginPage(page);

  await Login.gotoLoginPage();
  await Login.login(config.username, config.password);
  await Login.verifySuccessfulLogin();

  // await page.goto("https://the-internet.herokuapp.com/login");
  // await page.getByRole("textbox", { name: "Username" }).click();
  // await page.getByRole("textbox", { name: "Username" }).fill("tomsmith");
  // await page.getByRole("textbox", { name: "Password" }).click();
  // await page
  //   .getByRole("textbox", { name: "Password" })
  //   .fill("SuperSecretPassword!");
  // await page.getByRole("button", { name: " Login" }).click();
});

test("LOGIN with invalid credentials", async ({ page }) => {
  const Login = new LoginPage(page);
  await Login.gotoLoginPage();
  await Login.login("invalidUser", "invalidPassword");
  await Login.verifyInvalidLogin();
});

test("Logout test", async ({ page }) => {
  const Login = new LoginPage(page);
  await Login.gotoLoginPage();
  await Login.login("tomsmith", "SuperSecretPassword!");
  const Logout = new LogoutPage(page);
  await Logout.logout();
});

test("Login with blank fields", async ({ page }) => {
  const Login = new LoginPage(page);
  await Login.gotoLoginPage();
  await Login.login("", "");
  await Login.verifyInvalidLogin();
});


/*
await page.goto('https://the-internet.herokuapp.com/login');
  await page.locator('html').click();
  await expect(page.getByRole('heading', { name: 'This is where you can log' })).toBeVisible();

  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('tomsmith');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('SuperSecretPassword!');
  await page.getByRole('button', { name: ' Login' }).click();
  await expect(page.getByRole('link', { name: '×' })).toBeVisible();

  await page.getByText('You logged into a secure area').click();
*/

/*
Page Object Model (POM) in Playwright – Easy Interview Explanation

What is POM?

Page Object Model (POM) is a design pattern where we keep all page locators and page actions in a separate class/file instead of writing them directly in test scripts.

This makes the framework:

Easy to maintain
Reusable
More readable
Less code duplication
Without POM
test('Login Test', async ({ page }) => {
  await page.fill('#username', 'admin');
  await page.fill('#password', 'admin123');
  await page.click('#loginBtn');
});

If the login button locator changes, you'll need to update it in every test.

With POM

LoginPage.js

export class LoginPage {
  constructor(page) {
    this.page = page;
    this.username = page.locator('#username');
    this.password = page.locator('#password');
    this.loginBtn = page.locator('#loginBtn');
  }

  async login(user, pass) {
    await this.username.fill(user);
    await this.password.fill(pass);
    await this.loginBtn.click();
  }
}

Test File

const loginPage = new LoginPage(page);

await loginPage.login('admin', 'admin123');

Now if a locator changes, you update it only in the page class.

Interview Answer (1–2 Minutes)

Page Object Model (POM) is a framework design pattern in Playwright where page elements and page actions are stored in separate page classes. Test scripts only call methods from these page classes. This improves code reusability, readability, and maintainability. If any UI locator changes, we only update it in one place instead of multiple test files.

Real-World Example
LoginPage.js → Login-related locators and methods
DashboardPage.js → Dashboard actions
ProfilePage.js → Profile actions

Tests simply use these page objects, keeping test cases clean and easy to understand.
*/
