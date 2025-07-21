// https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require('eslint/config');
const expoConfig = require('eslint-config-expo/flat');

module.exports = defineConfig([
  expoConfig,
  {
    ignores: ['dist/*', 'node_modules/', '.expo/', '/assets'],
  },
  {
    rules: {
      '@typescript-eslint/no-unused-vars': 'off',
      'react-native/no-unused-styles': 'warn',
      'react/react-in-jsx-scope': 'off',
    }
  },
   {
    languageOptions: {
      globals: {
        __DEV__: true,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
  }
]);
