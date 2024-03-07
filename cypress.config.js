const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://www.nobl9.com",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
    testIsolation: false,
    chromeWebSecurity: false,
    experimentalModifyObstructiveThirdPartyCode: true
  },  
});
