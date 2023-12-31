/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["@repo/eslint-config/react-internal.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.lint.json",
  },
  ignorePatterns: ["tailwind.config.js", "postcss.config.js"],
  rules: {
    "no-html-link-for-pages": "off",
  },
};
