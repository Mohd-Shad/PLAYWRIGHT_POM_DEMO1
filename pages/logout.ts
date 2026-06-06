import { Page, expect } from "@playwright/test";

export class LogoutPage {
  readonly page;
  readonly logout_button;
  readonly success_message;

  constructor(page: Page) {
    this.page = page;
    this.logout_button = page.getByRole("link", { name: "Logout" });
    this.success_message = expect(
      page.getByText("You logged out of the secure area!"),
    );
  }

  async logout(): Promise<void> {
    await this.logout_button.click();
    await this.success_message.toBeVisible();
  }
}
