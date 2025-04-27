const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 60000,
  e2e: {
    //For html report using mochawesome reporter
    reporter: 'cypress-mochawesome-reporter',
    baseUrl: 'https://www.automationexercise.com/',
    setupNodeEvents(on, config) {
      // implement node event listeners here

      //For html report using mochawesome reporter
      require('cypress-mochawesome-reporter/plugin')(on);
      screenshotOnRunFailure=true;
      includeShadowDom: true;
    },
  },
});
