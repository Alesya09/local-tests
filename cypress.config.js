const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://localcoding.us',

    viewportWidth: 1280,
    viewportHeight: 720,
  },
});
