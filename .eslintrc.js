module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
  ],
  parserOptions: {
    ecmaVersion: 12,
  },
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    'comma-dangle': ['error', 'always-multiline'],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
  },
  overrides: [
    {
      files: [
        '**/*.ts?(x)',
      ],
      extends: [
        'plugin:@typescript-eslint/recommended',
      ],
      parser: '@typescript-eslint/parser',
      rules: {
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/no-use-before-define': 'off',
      },
    },
    {
      files: [
        '**/*.spec.ts?(x)',
      ],
      env: {
        jest: true,
      },
    },
    {
      files: [
        '*.js',
      ],
      env: {
        node: true,
      },
    },
  ],
}
