import { Linter } from 'eslint';
import tseslint from 'typescript-eslint';

export function typescript(): Array<Linter.Config> {
  return [
    {
      files: ['**/*.?([cm])[jt]s?(x)'],
      languageOptions: {
        parserOptions: {
          createDefaultProgram: false,
          ecmaFeatures: {
            jsx: true,
          },
          ecmaVersion: 'latest',
          extraFileExtensions: [],
          jsxPragma: 'React',
          project: './tsconfig.*.json',
          sourceType: 'module',
        },
      },
    },
    ...tseslint.configs.recommended,
    ...tseslint.configs.strict,
  ];
}
