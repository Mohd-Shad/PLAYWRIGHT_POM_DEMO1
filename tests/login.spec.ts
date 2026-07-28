import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/login";
import { LogoutPage } from "../pages/logout";
import config from "../config/configReader";
import userData from "../test-data/userData.json";
import { GoToLoginPage } from "../pages/goToLoginPage";


console.log(userData.user1.email);
console.log(userData.user2.email);
test.beforeEach("Go To Login Page", async ({ page})=>{
  const goToLoginPage = new GoToLoginPage(page);
  await goToLoginPage.goToLoginPage()

});

test("Login test", async ({ page }) => {
  const Login = new LoginPage(page);
  await Login.login(config.username, config.password);
  await Login.verifySuccessfulLogin();
});

test("LOGIN with invalid credentials", async ({ page }) => {
  const Login = new LoginPage(page);
  await Login.login("invalidUser", "invalidPassword");
  await Login.verifyInvalidLogin();
});

test("Logout test", async ({ page }) => {
  const Login = new LoginPage(page);
  await Login.login("tomsmith", "SuperSecretPassword!");
  await Login.verifySuccessfulLogin();
  const Logout = new LogoutPage(page);
  await Logout.logout();
  await Logout.verifyLogoutSuccessfully();
});

test("Login with blank fields", async ({ page }) => {
  const Login = new LoginPage(page);
  await Login.login("", "");
  await Login.verifyInvalidLogin();
});
