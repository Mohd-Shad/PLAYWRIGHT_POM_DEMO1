import { type Page, type Locator } from "@playwright/test";
import path from "path";

export class UploadDownloadPage {
  // Define types for the page context and web element locators
  readonly page: Page;
  readonly downloadButton: Locator;
  readonly chooseFileButton: Locator;
  readonly successMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.downloadButton = page.getByRole('button', { name: 'Download' });
    this.chooseFileButton = page.getByRole('button', { name: 'Choose File' });
    this.successMessage = page.getByText("Updated Excel Data Successfully.");
  }

  
  async navigateToPage(): Promise<void> {
    await this.page.goto("https://rahulshettyacademy.com/upload-download-test/");
  }

  
  async downloadExcelFile(customFolder: string): Promise<void> {

    const downloadPromise = this.page.waitForEvent("download");
    await this.downloadButton.click();
    
    const download = await downloadPromise;
    const outputPath = path.join(customFolder, download.suggestedFilename());
    
    // save the file to your local computer
    await download.saveAs(outputPath);
  }

  
  async uploadExcelFile(filePath: string): Promise<void> {
    // Remove any previously attached files 
    await this.chooseFileButton.setInputFiles([]);
    // Attach the new file
    await this.chooseFileButton.setInputFiles(filePath);
  }
}