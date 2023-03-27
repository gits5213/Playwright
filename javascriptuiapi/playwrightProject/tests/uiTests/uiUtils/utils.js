import { page } from '@playwright/test';

const utils = {

    // constructor(page) {
    //     this.page = page;
    //   },

    async goto(url) {
        await page.goto(url);
    },
    async mouseHover(identifier) {
        await page.locator(identifier).hover();
    },
    async clickOnElement(identifier) {
        await page.locator(identifier).click();
    },
    async fillInputField(identifier, txt) {
        await page.locator(identifier).fill(txt);
    },
}
module.exports = utils;