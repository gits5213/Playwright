import { test, expect } from '@playwright/test';
import homePage from './pageObjects/homePage';
import registrationPage from './pageObjects/registrationPage';
const {utils} = require ('./uiUtils/utils');

test.describe('LamdaTest registration page assertion', () => {

    test('test', async ({ page }) => {
        const util = new utils(page);
    
        await util.goto('https://ecommerce-playground.lambdatest.io');
        await util.mouseHover(homePage.getMyAccount);
        await util.clickOnElement("[class='mz-sub-menu-96 dropdown-menu'] li:nth-of-type(2) .title");
        await util.clickOnElement(registrationPage.getFirstname);
    //await page.goto('https://ecommerce-playground.lambdatest.io');
    //await page.locator(homePage.getMyAccount).hover();
    //await page.getByRole('link', { name: 'Register' }).click();
    //await page.locator(registrationPage.getFirstname).click();
    //await page.locator(registrationPage.getFirstname).fill('md');
    // utils.fillInputField(registrationPage.getFirstname, "mohammed");
    // await page.getByPlaceholder('Last Name').fill('zaman');
    // await page.getByPlaceholder('E-Mail').fill('md.zaman@gmail.com');
    // await page.getByPlaceholder('Telephone').fill('9175616554');
    // await page.getByPlaceholder('Password Confirm').fill('Shahnewaz1@');
    // await page.getByText('I have read and agree to the Privacy Policy').click();
    });

});
  