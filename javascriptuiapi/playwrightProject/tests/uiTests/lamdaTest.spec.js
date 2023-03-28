import { test, expect } from '@playwright/test';
import homePage from './pageObjects/homePage';
import registerPage from './pageObjects/registerPage';
import registrationPageData from '../uiTests/testData/registrationPageData.json';
import sharedData from '../uiTests/testData/sharedData.json';

const {utils} = require('./uiUtils/utils');

//DRY and KISS
test('test', async ({ page }) => {

    const util = new utils(page);

    await util.goto(sharedData.serviceEndpointUrl);
    await util.mouseHover(homePage.getMyAccountLocator);
    await util.clickOnElement(homePage.getRegisterLinkLocator);
    await util.fillInputField(registerPage.getFirstName, registrationPageData.firstName);


//   await page.goto(sharedData.serviceEndpointUrl);
//   await page.locator(homePage.getMyAccountLocator).hover();
//   await page.locator(homePage.getRegisterLinkLocator).click();
//   await page.locator(registerPage.getFirstName).fill(registrationPageData.firstName);


  await page.getByPlaceholder('Last Name').click();
  await page.getByPlaceholder('Last Name').fill('dafa');
  await page.getByPlaceholder('E-Mail').click();
  await page.getByPlaceholder('E-Mail').fill('sdfa');
  await page.getByPlaceholder('Telephone').click();
  await page.getByPlaceholder('Telephone').fill('sdafa');
  await page.getByPlaceholder('Password', { exact: true }).fill('a');
  await page.getByPlaceholder('Password', { exact: true }).click();
  await page.getByPlaceholder('Password', { exact: true }).fill('asdfa');
  await page.getByPlaceholder('Password Confirm').click();
  await page.getByPlaceholder('Password Confirm').fill('asdfa');
});