import { test, expect } from "../fixtures/pageFixtures";
import config from "../config/configReader";
import userData from "../test-data/userData.json";

console.log(userData.user2.firstname);

test.beforeEach(async ({ goToLoginPage }) => {
  await goToLoginPage.goToLoginPage();
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