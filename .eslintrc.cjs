const vitestFiles = ['app/**/__tests__/**/*', 'app/**/*.{spec,test}.*']

module.exports = {
  extends: [
    '@remix-run/eslint-config',
    '@remix-run/eslint-config/node',
    'prettier',
  ],
  plugins: ['simple-import-sort'],
  rules: {
    '@typescript-eslint/consistent-type-imports': [
      'warn',
      {
        prefer: 'type-imports',
        disallowTypeAnnotations: true,
        fixStyle: 'inline-type-imports',
      },
    ],
    'simple-import-sort/imports': [
      'warn',
      {
        groups: [
          ['^\\u0000', '^(react|react-dom)', '^node:', '^@?\\w', '^', '^\\.'],
        ],
      },
    ],
    'simple-import-sort/exports': 'warn',
    'import/no-duplicates': ['warn', { 'prefer-inline': true }],
  },
  overrides: [
    {
      extends: ['@remix-run/eslint-config/jest-testing-library'],
      files: vitestFiles,
      rules: {
        'testing-library/no-await-sync-events': 'off',
        'jest-dom/prefer-in-document': 'off',
      },
      // we're using vitest which has a very similar API to jest
      // (so the linting plugins work nicely), but it means we have to explicitly
      // set the jest version.
      settings: {
        jest: {
          version: 28,
        },
      },
    },
  ],
}
