import type { Linter } from 'eslint';

import turboPlugin from 'eslint-plugin-turbo';

const GLOB_SRC = '**/*.?([cm])[jt]s?(x)';

export function turbo(): Array<Linter.Config> {
  return [
    {
      name: 'turbo/setup',
      files: [GLOB_SRC],
      plugins: {
        turbo: turboPlugin,
      },
      rules: {
        'turbo/no-undeclared-env-vars': 'error',
      },
    },
  ];
}
