module.exports = {
    extends: [
        'airbnb-typescript',
        'plugin:import/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:jest/recommended',
        'prettier',
        'prettier/react',
        'prettier/@typescript-eslint',
    ],
    plugins: ['@typescript-eslint', 'react-hooks', 'jest', 'prettier'],
    env: {
        node: true,
        browser: true,
        jest: true,
    },
    parserOptions: {
        project: './tsconfig.eslint.json',
        tsconfigRootDir: __dirname,
    },
    rules: {
        semi: 0,
        'arrow-parens': ['error', 'as-needed'],
        'react/jsx-props-no-spreading': 0,
        'react/prop-types': 0,
        'react/require-default-props': 0,
        'react/jsx-uses-react': 0,
        'react/jsx-pascal-case': 0,
        'react/react-in-jsx-scope': 0,
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'import/prefer-default-export': 0,
        'import/no-extraneous-dependencies': [
            'error',
            {
                devDependencies: [
                    '**/*.stories.tsx',
                    '**/*.test.tsx',
                    '.storybook/**/*',
                    'src/setupTests.tsx',
                ],
            },
        ],
        '@typescript-eslint/naming-convention': [
            'error',
            {
                selector: 'variable',
                format: ['PascalCase', 'camelCase', 'UPPER_CASE', 'snake_case'],
            },
        ],
        'import/namespace': ['error', { allowComputed: true }],
        'import/order': [
            'warn',
            {
                groups: [
                    ['external', 'builtin'],
                    ['internal'],
                    ['sibling', 'parent'],
                    ['index'],
                    ['object'],
                ],
                'newlines-between': 'always',
            },
        ],
    },
    settings: {
        'import/resolver': {
            node: {
                paths: ['./src/'],
            },
        },
    },
}
