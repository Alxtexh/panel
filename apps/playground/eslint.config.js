import stylistic from '@stylistic/eslint-plugin';
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript';
import prettier from 'eslint-config-prettier/flat';
import importPlugin from 'eslint-plugin-import';
import vue from 'eslint-plugin-vue';

const controlStatements = [
    'if',
    'return',
    'for',
    'while',
    'do',
    'switch',
    'try',
    'throw',
];
const paddingAroundControl = [
    ...controlStatements.flatMap((stmt) => [
        { blankLine: 'always', prev: '*', next: stmt },
        { blankLine: 'always', prev: stmt, next: '*' },
    ]),
];

export default defineConfigWithVueTs(
    vue.configs['flat/essential'],
    vueTsConfigs.recommended,
    {
        plugins: {
            import: importPlugin,
        },
        settings: {
            'import/resolver': {
                typescript: {
                    alwaysTryTypes: true,
                    project: './tsconfig.json',
                },
                node: true,
            },
        },
        rules: {
            'vue/multi-word-component-names': 'off',
            '@typescript-eslint/no-explicit-any': 'off',
            '@typescript-eslint/consistent-type-imports': [
                'error',
                {
                    prefer: 'type-imports',
                    fixStyle: 'separate-type-imports',
                },
            ],
            'import/order': [
                'error',
                {
                    groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
                    alphabetize: { order: 'asc', caseInsensitive: true },
                },
            ],
            'import/consistent-type-specifier-style': [
                'error',
                'prefer-top-level',
            ],
            /*
             | A LEADING UNDERSCORE IS THE DESTRUCTURE-TO-EXCLUDE IDIOM: pulling
             | a key out of an object specifically to leave it out of the rest
             | (`const { secret: _secret, ...safe } = value`) has no other way to
             | discard it without a separate delete call. The default rule
             | cannot tell that apart from a genuine unused binding, so it
             | flagged the exact pattern that names its own intent.
             */
            '@typescript-eslint/no-unused-vars': [
                'error',
                { varsIgnorePattern: '^_', argsIgnorePattern: '^_' },
            ],
        },
    },
    {
        plugins: {
            '@stylistic': stylistic,
        },
        rules: {
            '@stylistic/brace-style': ['error', '1tbs', { allowSingleLine: false }],
            '@stylistic/padding-line-between-statements': [
                'error',
                ...paddingAroundControl,
            ],
        },
    },
    /*
     | THE SHIPPED PACKAGE IS LINTED TOO.
     |
     | `packages/ui` sits outside this config's directory, so every file in it
     | was reported as "ignored because outside of base path" — which reads like
     | a warning and means "not checked at all". The component code that
     | actually ships to consumers was the one part of the repository with no
     | lint coverage, while the playground that consumes it had full coverage.
     |
     | `basePath` (ESLint 9.30+) lifts the root for this block only, so the same
     | rules apply without moving the config or adding a root package.
     */
    /*
     | BOTH HALVES, AND THE SECOND ONE IS THE POINT. `src` is the component
     | library; `inertia` is the resource list, the form, the record page and
     | every packaged screen - the code most consumers actually see.
     |
     | THIS BLOCK NAMED A DIRECTORY THAT NO LONGER EXISTED. 0.8.0 merged
     | `packages/inertia` into `packages/ui/inertia`, and the config kept
     | pointing at the old path: ESLint resolved it to nothing, reported no
     | error, and left the packaged screens the LEAST checked code in the
     | repository for three releases. A lint pass that exits zero over a
     | directory that is not there is indistinguishable from a clean one.
     */
    {
        basePath: '../../packages/ui',
        files: ['{src,inertia}/**/*.{ts,vue}'],
    },
    {
        ignores: [
            'vendor',
            'node_modules',
            'public',
            'bootstrap/ssr',
            // Chrome for Testing, downloaded by `npx @puppeteer/browsers install`
            // for the Dusk suite. Gitignored and not source; ESLint has no
            // notion of .gitignore on its own, so it has to be told here too.
            'chrome/**',
            'tailwind.config.js',
            'vite.config.ts',
            'resources/js/actions/**',
            'resources/js/components/ui/*',
            'resources/js/routes/**',
            'resources/js/wayfinder/**',
        ],
    },
    prettier,
    {
        plugins: {
            '@stylistic': stylistic,
        },
        rules: {
            curly: ['error', 'all'],
            '@stylistic/brace-style': ['error', '1tbs', { allowSingleLine: false }],
        },
    },
);
