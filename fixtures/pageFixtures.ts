import { test as base } from "@playwright/test";
import { LoginPage } from "../pages/login";
import { LogoutPage } from "../pages/logout";
import { GoToLoginPage } from "../pages/goToLoginPage";

type MyFixtures = {
  loginPage: LoginPage;
  logoutPage: LogoutPage;
  goToLoginPage: GoToLoginPage;
};

export const test = base.extend<MyFixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },

  logoutPage: async ({ page }, use) => {
    await use(new LogoutPage(page));
  },

  goToLoginPage: async ({ page }, use) => {
    await use(new GoToLoginPage(page));
  },
});

export { expect } from "@playwright/test";