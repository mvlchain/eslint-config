# @mvlchain/eslint-config

Common ESLint config used in MVL FE projects.

- [Install](#install)
- [Usage](#usage)
  - [.eslintrc.js](#eslintrcjs)
  - [package.json](#packagejson)
- [With Husky & Lint Staged](#with-husky--lint-staged)

## Install

```bash
$ yarn add -D @mvlchain/eslint-config
```

## Usage

### .eslintrc.js

1. Add the following to `.eslintrc.js`

```js
module.exports = {
  extends: ['@mvlchain/eslint-config'], // or @mvlchain/eslint-config/react
};
```

> If you use `@mvlchain/eslint-config/react`, you don't need to use `@mvlchain/eslint-config`.

<br />

### package.json

1. Add the following to `package.json`

```json
{
  "eslintConfig": {
    "extends": "@mvlchain/eslint-config" // or @mvlchain/eslint-config/react
  }
}
```

## With Husky & Lint Staged

1. Install [husky](https://github.com/typicode/husky), [lint-staged](https://github.com/okonet/lint-staged):

```
$ yarn add -D husky lint-staged
```

2. Add the following to `package.json`:

```
{
  "scripts": {
    // ...
    "prepare": "husky install",
    "lint-staged": "lint-staged",
    "lint:fix": "./node_modules/.bin/eslint --fix",
    // ...
  },
  "lint-staged": {
    "**/*.{ts,tsx}": [
      "yarn run lint:fix"
    ]
  }
}
```

3. Set up pre-commit

```
$ yarn run prepare
$ npx husky add .husky/pre-commit "yarn run lint-staged"
$ git add .husky/pre-commit
```
