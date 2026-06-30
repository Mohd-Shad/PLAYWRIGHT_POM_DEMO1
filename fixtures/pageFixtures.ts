import { test as base } from "@playwright/test";
import { LoginPage } from "../pages/login";
import { LogoutPage } from "../pages/logout";
import { LandingPage } from "../pages/landingPage";

type MyFixtures = {
  loginPage: LoginPage;
  logoutPage: LogoutPage;
  landingPage: LandingPage;
};

export const test = base.extend<MyFixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },

  logoutPage: async ({ page }, use) => {
    await use(new LogoutPage(page));
  },

  landingPage: async ({ page }, use) => {
    await use(new LandingPage(page));
  },
});

export { expect } from "@playwright/test";