import path from "path";
import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
      webpackConfig: {
        resolve: {
          alias: {
            "react-icons/fa": path.resolve(__dirname, "cypress/mocks/react-icons-fa.tsx"),
          },
        },
      },
    },
  },
});
