module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    'no-null',
  ],
  extends: [
    'airbnb-base',
    'plugin:@typescript-eslint/recommended', // uses typescript-specific linting rules
    'prettier/@typescript-eslint',  // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    'plugin:prettier/recommended', // enables eslint-plugin-prettier and eslint-config-prettier
  ],
  parserOptions: {
    ecmaVersion: 2018,  // Allows for the parsing of modern ECMAScript features
    sourceType: 'module',  // Allows for the use of imports
    ecmaFeatures: {
      jsx: true,  // Allows for the parsing of JSX
    },
  },
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g. '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-function-return-type': ['error', { allowExpressions: true, allowTypedFunctionExpressions: true }], // force to define function return type
    '@typescript-eslint/indent': 'off', // done by prettier
    'class-methods-use-this': ['error', { 'exceptMethods': ['componentDidCatch', 'componentDidAppear', 'componentDidDisappear'] }],
    'import/no-unresolved': ['error', { ignore: ['@app', '.'] }], // ignore import with @app & .
    'import/prefer-default-export': 'off', // don't prefer default export
    'import/extensions': 'off',
    'indent': 'off', // disable default indent check
    'max-len': ['error', 220], // change mex length for a line to 120
    'no-console': 'error', // don't allow console
    'no-param-reassign': ['error', { props: true, ignorePropertyModificationsFor: ['draft', 'draftState', 'context'] }], // no params reassigned
    'no-unused-expressions': ['error', { 'allowShortCircuit': true }], // don't use unused expressions except short circut
    'no-unused-vars': ['error', { 'argsIgnorePattern': '^_' }], // don't use unused var except with _ prefix
    'object-curly-newline': ['error', {
      'ObjectExpression': { 'multiline': true, 'minProperties': 2 },
      'ObjectPattern': { 'multiline': true },
      'ImportDeclaration': { 'multiline': true },
      'ExportDeclaration': { 'multiline': true }
    }], // let prettier do its job,
    '@typescript-eslint/no-explicit-any': ['error'],
    'no-null/no-null': ['error'],
    'no-underscore-dangle': ["error", { "allow": ["_id", "__resolveType", "__v"] }],
    'react/prop-types': 'off',
  },
  settings: {
    react: {
      version: 'detect',  // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
  env: {
    jest: true,
  }
};
