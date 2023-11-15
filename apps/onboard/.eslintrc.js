module.exports = {
  root: true,
  plugins: ['simple-import-sort', 'import'],
  extends: ['@react-native-community'],
  rules: {
    'react-native/no-inline-styles': 0,
    'no-shadow': 0,
    '@typescript-eslint/no-explicit-any': 'error',
    'react/jsx-sort-props': [
      'error',
      {
        shorthandFirst: true,
      },
    ],
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          // Packages. `react` related packages come first.
          ['^react', '^@?\\w'],
          // Internal packages.
          ['^(@|@company|@ui|components|utils|config|vendored-lib)(/.*|$)'],
          // Side effect imports.
          ['^\\u0000'],
          // Parent imports. Put `..` last.
          ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
          // Other relative imports. Put same-folder imports and `.` last.
          ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
          // Style imports.
          ['^.+\\.s?css$'],
        ],
      },
    ],
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    curly: 0,
  },
};
