module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es2020: true
  },
  extends: [
    'eslint:recommended',
    'standard',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/base',
    '@vue/prettier'
  ],
  plugins: ['@typescript-eslint', 'vue'],

  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 11,
    sourceType: 'module',
    parser: '@typescript-eslint/parser',
    extraFileExtensions: ['.vue']
    // project: './tsconfig.json'
  },
  overrides: [
    {
      files: ['*.{ts,tsx}'],
      env: {
        jest: true
      },
      parser: '@typescript-eslint/parser'
    }
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    '@typescript-eslint/member-delimiter-style': 'off',
    'prefer-promise-reject-errors': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-extra-semi': 'off',
    // quotes: ['warn', 'single'],
    '@typescript-eslint/indent': ['warn', 2],
    'no-return-assign': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off'
  }
}
