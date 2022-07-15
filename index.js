module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  plugins: ["import", "@typescript-eslint"],
  extends: [
    "plugin:prettier/recommended",
    "plugin:import/typescript",
    "plugin:@typescript-eslint/recommended",
  ],
  rules: {
    "prettier/prettier": "warn",
    "import/order": [
      "warn",
      {
        groups: ["builtin", "external", "internal"],
        pathGroups: [
          {
            pattern: "react*",
            group: "external",
            position: "before",
          },
        ],
        pathGroupsExcludedImportTypes: ["react"],
        alphabetize: { order: "asc" },
        "newlines-between": "always",
      },
    ],
    "no-unused-vars": [
      "warn",
      { args: "none", argsIgnorePattern: "_|req|res|next|val" },
    ],
  },
};
