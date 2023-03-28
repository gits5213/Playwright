exports.utils = class utils {

    constructor(page){
        this.page = page;
    }

    async goto(url) {
        await this.page.goto(url);
    }
    async mouseHover(identifier) {
        await this.page.locator(identifier).hover();
    }
    async clickOnElement(identifier) {
        await this.page.locator(identifier).click();
    }
    async fillInputField(identifier, txt) {
        await this.page.locator(identifier).fill(txt);
    }
}
