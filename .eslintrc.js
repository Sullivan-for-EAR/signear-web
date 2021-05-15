module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  root: true,
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['@typescript-eslint'],
  rules: {
    'no-console': 'warn',
    'no-alert': 'warn',
    // Best Practices
    eqeqeq: 'error',
    'no-else-return': ['error', { allowElseIf: false }],
    yoda: 'error',
    // Variables
    'no-shadow': 'error',
    'no-undef-init': 'error',
    'no-use-before-define': 'off',
    // ES6
    'no-var': 'error',
    'prefer-const': 'error',
    // React
    'react/react-in-jsx-scope': 'off',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', 'src/'],
      },
    },
  },
  overrides: [
    {
      files: ['**/*.tsx'],
      rules: {
        'react/prop-types': 'off',
      },
    },
  ],
};
