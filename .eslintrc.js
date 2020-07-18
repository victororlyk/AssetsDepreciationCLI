module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2020: true
  },
  extends: ['prettier', 'airbnb-base'],
  plugins: ['prettier'],
  parserOptions: {
    ecmaVersion: 2018
  },
  rules: {
    'prettier/prettier': 'error',
    quotes: [2, 'single', 'avoid-escape'],
    'no-restricted-globals': 'off',
    'no-plusplus': 'off',
    'comma-dangle': ['error', 'never'],
    'object-curly-newline': 'off',
    'no-console': 'off'
  }
};
