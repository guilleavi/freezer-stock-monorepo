module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'prettier',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/strict',
    'plugin:testing-library/react',
    'plugin:jest-dom/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'prettier/prettier': 'error',
    'react/prop-types': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'max-len': [
      'error',
      {
        code: 80,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],
    'sort-imports': ['error', { ignoreDeclarationSort: true }],
  },
  settings: {
    react: {
      // Tells `eslint-plugin-react` to detect the version of React to use.
      version: 'detect',
    },
  },
}
