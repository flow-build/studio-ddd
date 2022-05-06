module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ["eslint:recommended", "plugin:react/recommended", "plugin:@typescript-eslint/recommended", "plugin:react-hooks/recommended"],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: "latest",
        sourceType: "module",
    },
    plugins: ["react", "@typescript-eslint", "eslint-plugin-import-helpers"],
    rules: {
        indent: ["error", 4],
        "linebreak-style": ["error", "unix"],
        quotes: ["error", "double"],
        semi: ["error", "always"],
        "react/jsx-uses-react": "off",
        "react/react-in-jsx-scope": "off",
        indent: ["error", 4, { SwitchCase: 1 }],
        "react/prop-types": "off",
        'import-helpers/order-imports': [
            'warn',
            {
                newlinesBetween: 'always',
                groups: [
                    '/^react/',
                    'module',
                    '/^@mui/',
                    '/^@reduxjs/',
                    '/^react-redux/',
                    '/^lodash/',
                    '/^~/core/',
                    '/^~/domain/',
                    '/^~//',
                    '/^./styles/',
                    ['parent', 'sibling', 'index'],
                ],
                alphabetize: { order: 'asc', ignoreCase: true },
            },
        ],
    },
};
