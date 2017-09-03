const config = {
  globals: {
    '__VERSION__': false,
    'process': false,
  },
  env: {
    browser: true,
    es6: true,
    'jest/globals': true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
  ],
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    indent: [
      'error',
      2,
    ],
    'linebreak-style': [
      'error',
      'unix',
    ],
    quotes: [
      'error',
      'single',
    ],
    semi: [
      'error',
      'always',
    ],
    'no-unused-vars': [
      'warn',
      'all',
    ],
    'no-console': [
      'error',
      {
        allow: [
          'warn',
          'error',
        ],
      }
    ],
  },
  plugins: [
    'react',
    'jest',
  ],
};

module.exports = config;
