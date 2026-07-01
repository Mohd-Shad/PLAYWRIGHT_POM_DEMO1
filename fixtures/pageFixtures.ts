import { test as base } from "@playwright/test";
import { LoginPage } from "../pages/login";
import { LogoutPage } from "../pages/logout";
import { LandingPage } from "../pages/landingPage";
import { RegistrationPage } from "../pages/registrationPage";
import { UploadDownloadPage } from "../pages/uploadDownloadPage";

type MyFixtures = {
  loginPage: LoginPage;
  logoutPage: LogoutPage;
  landingPage: LandingPage;
  registrationPage: RegistrationPage;
  upLoadDownloadPage: UploadDownloadPage;
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

  registrationPage: async ({ page }, use) => {
    await use(new RegistrationPage(page));
  },

  upLoadDownloadPage: async ({ page}, use) =>{
    await use(new UploadDownloadPage(page));
  },
});

export { expect } from "@playwright/test";