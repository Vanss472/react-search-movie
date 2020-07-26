module.exports = {
  parser: `@typescript-eslint/parser`,
  extends: [
    `plugin:@typescript-eslint/recommended`,
    `plugin:prettier/recommended`,
    `prettier/@typescript-eslint`,
    `plugin:react/recommended`, // Uses the recommended rules from @eslint-plugin-react
    `plugin:testing-library/recommended`,
    `plugin:testing-library/react`,
    `plugin:jest-dom/recommended`,
  ],
  plugins: [`@typescript-eslint`, `prettier`, `testing-library`, `jest-dom`],
  parserOptions: {
    ecmaVersion: 2019, // Allows for the parsing of modern ECMAScript features
    sourceType: `module`, // Allows for the use of imports
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: `detect`, // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
  env: {
    browser: true,
    node: true,
  },
  rules: {
    quotes: `off`,
    "@typescript-eslint/quotes": [
      2,
      `backtick`,
      {
        avoidEscape: true,
      },
    ],
    indent: [`error`, 2, { SwitchCase: 1 }],
    "prettier/prettier": [
      `error`,
      {
        trailingComma: `es5`,
        semi: false,
        singleQuote: false,
        printWidth: 120,
      },
    ],
    "@typescript-eslint/explicit-function-return-type": `off`,
    "@typescript-eslint/no-explicit-any": `off`,
    "@typescript-eslint/camelcase": `off`,
  },
}
