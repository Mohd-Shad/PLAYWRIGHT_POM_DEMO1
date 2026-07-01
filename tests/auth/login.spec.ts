import { test, expect } from "../../fixtures/pageFixtures";
import config from "../../config/configReader";

test.beforeEach(async ({ landingPage }) => {
  await landingPage.loginPage();
  await expect(landingPage.pageOpenConfirmation).toBeVisible();
});

test("Login test", async ({ loginPage }) => {
  await loginPage.login(config.username, config.password);
  await expect(loginPage.success_message).toBeVisible();
});

test("LOGIN with invalid credentials", async ({ loginPage }) => {
  await loginPage.login("invalidUser", "invalidPassword");
  await expect(loginPage.invalid_login_message).toBeVisible();
});

test("Login with blank fields", async ({ loginPage }) => {
  await loginPage.login("", "");
  await expect(loginPage.invalid_login_message).toBeVisible();
});

test("Logout test", async ({ loginPage, logoutPage }) => {
  await loginPage.login("tomsmith", "SuperSecretPassword!");
  await expect(loginPage.success_message).toBeVisible();

  await logoutPage.logout();
  await expect(logoutPage.success_message).toBeVisible();
});