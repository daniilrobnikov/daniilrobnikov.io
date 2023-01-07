module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: ["./tsconfig.json"],
  },
  plugins: ["@typescript-eslint"],
  extends: [
    "next/core-web-vitals",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:@typescript-eslint/strict",
    "plugin:react-hooks/recommended",
    "prettier",
  ],
  root: true,
  rules: {
    "@typescript-eslint/consistent-type-imports": "warn",
  },
  ignorePatterns: ["node_modules/", "build/", "dist/"],
};
