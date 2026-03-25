import pluginJs from "@eslint/js";
import globals from "globals";
import jestPlugin from "eslint-plugin-jest";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    ignores: ["node_modules/", "coverage/"]
  },
  pluginJs.configs.recommended,
  {
    files: ["**/*.test.js", "**/*.spec.js"],
    plugins: { jest: jestPlugin },
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest,
      }
    },
    rules: {
      ...jestPlugin.configs.recommended.rules,
    }
  },
  {
    languageOptions: {
      globals: {
        ...globals.node,
      }
    },
    rules: {
      "no-unused-vars": ["warn", { "argsIgnorePattern": "^next$" }],
      "no-console": "off",
    }
  }
];
