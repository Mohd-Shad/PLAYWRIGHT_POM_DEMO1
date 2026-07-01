import { test } from "../../fixtures/pageFixtures";
import config from "../../config/configReader";

test.beforeEach(async ({ landingPage }) => {
  await landingPage.loginPage();
});

test("Login test", async ({ loginPage }) => {
  await loginPage.login(config.username, config.password);
  await loginPage.verifySuccessfulLogin();
});

test("LOGIN with invalid credentials", async ({ loginPage }) => {
  await loginPage.login("invalidUser", "invalidPassword");
  await loginPage.verifyInvalidLogin();
});

test("Login with blank fields", async ({ loginPage }) => {
  await loginPage.login("", "");
  await loginPage.verifyInvalidLogin();
});

test("Logout test", async ({ loginPage, logoutPage }) => {
  await loginPage.login("tomsmith", "SuperSecretPassword!");
  await loginPage.verifySuccessfulLogin();

  await logoutPage.logout();
  await logoutPage.verifyLogoutSuccessfully();
});