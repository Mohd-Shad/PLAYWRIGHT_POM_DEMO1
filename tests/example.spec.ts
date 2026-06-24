import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
 // await page.pause();
  await expect(page).toHaveTitle(/Playwright/);
  //await page.close();
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test("Handling Auto-Suggest Dropdowns", async ({page}) =>{
await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
await page.locator("#autocomplete").fill("auS");
//await page.getByText("Australia", { exact: true }).click(); //line 25,26 both are correct
await page.locator(".ui-menu-item div").getByText("Australia", { exact: true }).click();
// Verify total count of items in a dropdown list
await expect(page.locator('li[class="ui-menu-item"] div')).toHaveCount(2);
// Verify all text options available inside a standard dropdown list
await expect.soft(page.locator(".ui-menu-item div")).toHaveText(['Australia','Austria']);
// Verify the currently selected option value
await expect(page.getByRole('textbox', { name: 'Type to Select' })).toHaveValue('Australia');
});

