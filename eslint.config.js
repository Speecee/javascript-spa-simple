export default [
  {
    ignores: ['dist/**', 'node_modules/**', 'build/**'],
    files: ['src/**/*.js'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: { window: 'readonly', document: 'readonly' }
    },
    linterOptions: {
      reportUnusedDisableDirectives: true
    },
    rules: {
      semi: ['error', 'always'],
      quotes: ['error', 'single'],
      'no-unused-vars': ['warn'],
      eqeqeq: ['error', 'always'],
      'no-console': ['warn']
    }
  }
];
