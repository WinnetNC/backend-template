import js from '@eslint/js'
import tseslint from 'typescript-eslint'

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,

  // src files -> tsconfig.json
  {
    files: ['src/**/*.ts'],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.json'],
      },
    },
    rules: {
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    },
  },

  // tests -> tsconfig.test.json
  {
    files: ['tests/**/*.ts', 'tests/**/*.tsx'],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.test.json'],
      },
    },
    rules: { 'no-unused-vars': 'warn' },
  },

  // ignore configs
  {
    ignores: ['**/jest.config.*'],
  },
]