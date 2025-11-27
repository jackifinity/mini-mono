import type { Linter } from 'eslint';

import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';

const GLOB_JSX = '**/*.?([cm])jsx';
const GLOB_TSX = '**/*.?([cm])tsx';

export function react(): Array<Linter.Config> {
  return [
    {
      name: 'react/setup',
      files: [GLOB_JSX, GLOB_TSX],
      plugins: {
        react: reactPlugin,
      },
      settings: {
        version: 'detect',
      },
      languageOptions: {
        parserOptions: {
          ecmaFeatures: {
            jsx: true,
          },
        },
      },
      rules: {
        ...reactPlugin.configs.recommended.rules,
      },
    },
    {
      name: 'react/hooks',
      files: [GLOB_JSX, GLOB_TSX],
      plugins: {
        'react-hooks': reactHooksPlugin as any,
      },
      rules: {
        ...reactHooksPlugin.configs.recommended.rules,
      },
    },
  ];
}
