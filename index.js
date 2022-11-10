module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    es2022: true,
    node: true,
  },
  plugins: ['prettier', 'import', '@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:import/typescript',
    'plugin:import/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    'prettier/prettier': 'error',
    // override configuration set by extending "eslint:recommended"
    'no-cond-assign': 'off',
    'no-control-regex': 'off',
    'no-debugger': 'off',
    'no-empty': 'off',
    'no-ex-assign': 'off',
    'no-extra-boolean-cast': 'off',
    'no-extra-semi': 'off',
    'no-fallthrough': 'off',
    'no-irregular-whitespace': 'off',
    'no-loss-of-precision': 'off',
    'no-misleading-character-class': 'off',
    'no-mixed-spaces-and-tabs': 'off',
    'no-octal': 'off',
    'no-regex-spaces': 'off',
    'no-setter-return': 'off',
    'no-sparse-arrays': 'off',
    'no-undef': 'off',
    'no-unreachable': 'off',
    'no-unsafe-finally': 'off',
    'no-useless-backreference': 'off',
    'no-useless-catch': 'off',
    'valid-typeof': 'off',
    'no-case-declarations': 'off',
    // custom setting
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['warn', { args: 'none', argsIgnorePattern: '_|req|res|next' }],
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/tsx-props-no-spreading': 'off',
    '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/triple-slash-reference': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-unnecessary-type-constraint': 'off',
    // override configuration set by extending "import/*"
    'import/order': [
      'warn',
      {
        groups: ['builtin', 'external', 'internal'],
        pathGroups: [
          {
            pattern: '{react,react-native}',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '@@*/**',
            group: 'internal',
            patternOptions: { partial: true, nocomment: true },
          },
        ],
        pathGroupsExcludedImportTypes: ['react', 'react-native'],
        alphabetize: { order: 'asc' },
        'newlines-between': 'always',
      },
    ],
    'import/no-unresolved': 'off',
    'import/namespace': 'off',
    'import/no-named-as-default': 'off',
    'import/no-named-as-default-member': 'off',
    'import/named': 'off',
  },
};
