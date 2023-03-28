# Inside that directory, you can run several commands:


## Running all tests
    npx playwright test

## Run a single project - each test will be run once
    npx playwright test --project=chromium

## Running a single test file
    npx playwright test landing-page.spec.ts

## Run a set of test files
    npx playwright test tests/todo-page/ tests/landing-page/

## Run files that have landing or login in the file name
    npx playwright test landing login

## Run the test with the title
    npx playwright test -g "add a todo item"

## Running tests in headed mode
    npx playwright test landing-page.spec.ts --headed

## Running tests on a specific project
    npx playwright test landing-page.ts --project=chromium

## Running Codegen
    npx playwright codegen

## And check out the following files:
  - .\tests\example.spec.js - Example end-to-end test
  - .\tests-examples\demo-todo-app.spec.js - Demo Todo App end-to-end tests
  - .\playwright.config.js - Playwright Test configuration

## Visit https://playwright.dev/docs/intro for more information. ✨

## Debugging Tests
    Since Playwright runs in Node.js, you can debug it with your debugger of choice e.g. using console.log or inside your IDE or directly in VS Code with the VS Code Extension. Playwright comes with the Playwright Inspector which allows you to step through Playwright API calls, see their debug logs and explore locators.

## Debugging all tests:
    npx playwright test --debug

## Debugging one test file:
    npx playwright test example.spec.ts --debug

## Debugging a test from the line number where the test(.. is defined:
    npx playwright test example.spec.ts:10 --debug

# Run a single project
    npx playwright test --project=Smoke

## npx playwright codegen
    Auto generate tests with Codegen.




