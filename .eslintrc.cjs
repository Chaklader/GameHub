module.exports = {
    root: true,
    env: {browser: true, es2020: true},
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
        'plugin:react/recommended',
        'plugin:prettier/recommended', // Add this line
        'plugin:@react-three/recommended',
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    parser: '@typescript-eslint/parser',
    plugins: ['react-refresh', 'react', 'prettier'], // Add 'react' and 'prettier'
    settings: {
        react: {
            version: 'detect',
        },
    },
    rules: {
        '@typescript-eslint/no-explicit-any': 'off',
        'react-refresh/only-export-components': ['warn', {allowConstantExport: true}],
        '@typescript-eslint/no-unused-vars': [
            'error',
            {argsIgnorePattern: '^_', varsIgnorePattern: '^_'},
        ],
        'prettier/prettier': 'error', // Add this line
        'react/react-in-jsx-scope': 'off', // Optional: turn off if using React 17+ with automatic JSX transform
        'react/no-unknown-property': ['off', {ignore: ['args']}],
        // 'react-hooks/exhaustive-deps': 'off',
    },
};
