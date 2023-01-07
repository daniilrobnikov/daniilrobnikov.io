/** @type {import("prettier").Config} */
module.exports = {
  arrowParens: "always",
  printWidth: 80,
  singleQuote: false,
  jsxSingleQuote: false,
  semi: true,
  trailingComma: "all",
  tabWidth: 2,
  plugins: [
    require.resolve("prettier-plugin-organize-imports"),
    require.resolve("prettier-plugin-tailwindcss"),
  ],
  pluginSearchDirs: false,
  organizeImportsSkipDestructiveCodeActions: true,
};
