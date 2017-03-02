module.exports = {
  plugins: [
    'react',
    'redux-saga',
    'import'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  extends: [
    'apptension',
    'plugin:react/recommended'
  ]
};