import {expect, Page } from "@playwright/test";

export class LoginPage {
  readonly page;
  readonly username_textbox;
  readonly password_textbox;
  readonly login_button;
  readonly success_message;
  readonly invalid_login_message;

  constructor(page: Page) {
    this.page = page;
    this.username_textbox = page.getByRole("textbox", { name: "Username" });
    this.password_textbox = page.getByRole("textbox", { name: "Password" });
    this.login_button = page.getByRole("button", { name: "Login" });
    this.success_message = page.getByText("You logged into a secure area!");
    this.invalid_login_message = page.getByText("Your username is invalid!");
  }

  async login(username: string, password: string): Promise<void> {
    await this.username_textbox.fill(username);
    await this.password_textbox.fill(password);
    await this.login_button.click();
  }
}
