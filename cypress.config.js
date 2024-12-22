const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    //baseUrl: "https://example.cypress.io/todo",
    defaultCommandTimeout: 5000,
    pageLoadTimeout:4000,
    retries: {
      runMode: 2,
      openMode: 2 
    },
  testTimeout: 10000,
    video: true,
    screenshotOnRunFailure: true,
    trashAssetsBeforeRuns: true,
    browser: 'chrome',
  },
});
 