import { test, expect } from "../fixtures/pageFixtures";

  test("downloadingFile", async ({ uploadDownloadPage }) => {
    const customFolder = "C:/Users/mohdusmani/OneDrive/Automation/PLAYWRIGHT_POM_DEMO1/downloads";
    // Perform business logic actions through the class instance
    await uploadDownloadPage.navigateToPage();
    await uploadDownloadPage.downloadExcelFile(customFolder);
  });

  test("uploadingFile", async ({ uploadDownloadPage }) => {
    const filePath = "C:/Users/mohdusmani/OneDrive/Automation/PLAYWRIGHT_POM_DEMO1/downloads/download.xlsx";
    await uploadDownloadPage.navigateToPage();
    await uploadDownloadPage.uploadExcelFile(filePath);
    await expect(uploadDownloadPage.successMessage).toBeVisible();
  });

















// import path from "path";

// test("downloadingfile", async ({page})=>{
//     await page.goto("https://rahulshettyacademy.com/upload-download-test/");

//     const downloadPromise = page.waitForEvent("download");
//     await page.getByRole('button', {name: 'Download'}).click();
//     const download = await downloadPromise;
//     const customFolder = "C:/Users/mohdusmani/OneDrive/Automation/PLAYWRIGHT_POM_DEMO1/downloads";
//     const outputPath = path.join(customFolder, download.suggestedFilename());
//     await download.saveAs(outputPath);
// });

// test("uploadFile", async ({page}) =>{
//     await page.goto("https://rahulshettyacademy.com/upload-download-test/");

//     const filePath = "C:/Users/mohdusmani/OneDrive/Automation/PLAYWRIGHT_POM_DEMO1/downloads/download.xlsx";
//     //Clear/Remove all selected files from the input
//     await page.getByRole('button', {name: 'Choose File'}).setInputFiles([]);
//     await page.getByRole('button', {name: 'Choose File'}).setInputFiles(filePath);
//     await expect(page.getByText("Updated Excel Data Successfully.")).toBeVisible();
// })

// npx playwright test path/to/your-file.spec.ts -g "Excel File Automation Tests"

// test.describe("Excel File Automation Tests @excel", () => {
//   // Your tests go here
// });
// npx playwright test --grep "@excel"
