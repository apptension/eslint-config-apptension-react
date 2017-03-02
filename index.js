module.exports = {
  plugins: [
    'react'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  extends: [
    'apptension'
  ],
  rules: {
    'react/display-name': 2,
    'react/forbid-component-props': 0,
    'react/forbid-elements': 0,
    'react/forbid-prop-types': 0,
    'react/forbid-foreign-prop-types': 0,
    'react/no-array-index-key': 0,
    'react/no-children-prop': 0,
    'react/no-danger': 0,
    'react/no-danger-with-children': 0,
    'react/no-deprecated': 2,
    'react/no-did-mount-set-state': 0,
    'react/no-did-update-set-state': 0,
    'react/no-direct-mutation-state': 2,
    'react/no-find-dom-node': 2,
    'react/no-is-mounted': 2,
    'react/no-multi-comp': 0,
    'react/no-render-return-value': 2,
    'react/no-set-state': 0,
    'react/no-string-refs': 1,
    'react/no-unescaped-entities': 0,
    'react/no-unknown-property': 2,
    'react/no-unused-prop-types': 0,
    'react/prefer-es6-class': 0,
    'react/prefer-stateless-function': 0,
    'react/prop-types': 2,
    'react/react-in-jsx-scope': 2,
    'react/require-default-props': 0,
    'react/require-optimization': 0,
    'react/require-render-return': 2,
    'react/self-closing-comp': 0,
    'react/sort-comp': 1,
    'react/sort-prop-types': 0,
    'react/style-prop-object': 0,
    'react/void-dom-elements-no-children': 0,

    'react/jsx-boolean-value': 0,
    'react/jsx-closing-bracket-location': 1,
    'react/jsx-curly-spacing': [2, 'never'],
    'react/jsx-equals-spacing': 0,
    'react/jsx-filename-extension': 0,
    'react/jsx-first-prop-new-line': 0,
    'react/jsx-handler-names': 0,
    'react/jsx-indent': [2, 2, {indentLogicalExpressions: true}],
    'react/jsx-indent-props': 0,
    'react/jsx-key': 0,
    'react/jsx-max-props-per-line': 0,
    'react/jsx-no-bind': 0,
    'react/jsx-no-comment-textnodes': 0,
    'react/jsx-no-duplicate-props': 2,
    'react/jsx-no-literals': 0,
    'react/jsx-no-target-blank': 0,
    'react/jsx-no-undef': 2,
    'react/jsx-pascal-case': 0,
    'react/jsx-sort-props': 0,
    'react/jsx-space-before-closing': 0,
    'react/jsx-tag-spacing': 0,
    'react/jsx-uses-react': 2,
    'react/jsx-uses-vars': 2,
    'react/jsx-wrap-multilines': 0
  }
};