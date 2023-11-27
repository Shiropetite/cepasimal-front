/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  extends: [
    'prettier',
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting',
  ],
  overrides: [
    {
      extends: ['plugin:cypress/recommended'],
      files: ['cypress/e2e/**/*.{cy,spec}.{js,ts,jsx,tsx}'],
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  plugins: ['prettier'],
  root: true,
  rules: {
    'prettier/prettier': 'warn',
  },
};
