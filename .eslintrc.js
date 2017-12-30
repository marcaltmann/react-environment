const config = {
  globals: {
    '__VERSION__': false,
    'process': false,
    'module': false,
    '__dirname': true,
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
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
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
