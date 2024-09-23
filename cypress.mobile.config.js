const { defineConfig } = require('cypress');

module.exports = defineConfig({
  viewportWidth: 375,
  viewportHeight: 667,
  e2e: {
    baseUrl:'http://localhost:3000',
    retries: 2,
    setupNodeEvents(on, config) {
      // Implement node event listeners here
    },
  },
});