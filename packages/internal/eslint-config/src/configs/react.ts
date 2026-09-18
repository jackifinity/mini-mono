import type { Linter } from 'eslint';

import reactPlugin from '@eslint-react/eslint-plugin';
import reactHooksPlugin from 'eslint-plugin-react-hooks';

const GLOB_JSX = '**/*.?([cm])jsx';
const GLOB_TSX = '**/*.?([cm])tsx';

export function react(): Array<Linter.Config> {
  return [
    {
      name: 'react/setup',
      files: [GLOB_JSX, GLOB_TSX],
      plugins: {
        '@eslint-react': reactPlugin,
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
