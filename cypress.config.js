const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000/",
    retries: 2,
    viewportWidth: 1366,
    viewportHeight: 768,
    setupNodeEvents(on, config) {
    },
  },
});
