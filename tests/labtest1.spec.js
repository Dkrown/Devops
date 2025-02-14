// playwright.config.js
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',  // Or './e2e', './src/tests', or wherever your tests are
  reporter: 'html', // Enable the HTML reporter
  use: {
    baseURL: 'http://localhost:3000', // Replace with the base URL of your app (if applicable)
  },
});
