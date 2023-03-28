const { defineConfig, devices } = require('@playwright/test');
module.exports = defineConfig({
  testDir: './tests',
  /* Maximum time one test can run for. */
   // change the default data-testid to a custom attribute
   // testIdAttribute: 'data-pw'
   // Each test is given 30 seconds
   // timeout: 30000,
  timeout: 30 * 1000,
  expect: {
    /**
     * Maximum time expect() should wait for the condition to be met.
     * For example in `await expect(locator).toHaveText();`
     */
    timeout: 5000
  },
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 1 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  // reporter: 'html',
  // reporter: "allure-playwright",

  // Here is an example output in the middle of a test run. Failures will be listed at the end.
  // reporter: 'list',
  // reporter: 'line',
  // reporter: 'dot',
  reporter: [
    ['line'],
    ['list'],
    [
      "allure-playwright",
      {
        detail: true,
        outputFolder: "my-allure-results",
        suiteTitle: false,
      },
    ],
  ],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    //baseURL: process.env.STAGING === '1' ? 'https://playwright.dev/' : 'https://playwright.dev/',
    // baseURL: 'http://localhost:3000/app/',
    // storageState: 'state.json',
    /* Maximum time each action such as `click()` can take. Defaults to 0 (no limit). */
    // actionTimeout: 0,
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://localhost:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    // trace: 'on-first-retry', //trace: 'retain-on-failure',
    // screenshot: 'only-on-failure',
    // video: 'on-first-retry',
    // launchOptions: {
    //   slowMo: 50,
    // },
    //ignoreHTTPSErrors: true,
    //userAgent: 'some custom ua',

    baseURL: 'https://reqres.in',
    extraHTTPHeaders: {
      'Content-type': 'application/json; charset=UTF-8'
    }
    
  },

  /* Configure projects for major browsers */
  
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { channel: 'chrome' },
    // },
  ],

  /*
  //Different tests, different configuration
  projects: [
    {
      name: 'Smoke',
      testMatch: /.*smoke.spec.ts/,
      retries: 0,
    },
    {
      name: 'Default',
      testIgnore: /.*smoke.spec.ts/,
      retries: 2,
    },
  ],
  //You can run all projects or just a single one:
    # Run both projects
      npx playwright test

    # Run a single project
      npx playwright test --project=Smoke
  */

  /* Folder for test artifacts such as screenshots, videos, traces, etc. */
  // outputDir: 'test/test-results/',

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   port: 3000,
  // },
});

