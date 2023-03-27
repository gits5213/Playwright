// todo.spec.js
import { expect, request, test } from "@playwright/test";
// const { test } = require('@playwright/test');
// const { TodoPage } = require('./todo-page');


test('Mobile and geolocation', async ({ page }) => {
  await page.goto('https://maps.google.com');
  
});


