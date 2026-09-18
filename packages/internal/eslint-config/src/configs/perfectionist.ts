import type { Linter } from 'eslint';

import plugin from 'eslint-plugin-perfectionist';

const GLOB_SRC = '**/*.?([cm])[jt]s?(x)';

export function perfectionist(): Linter.Config[] {
  return [
    {
      files: [GLOB_SRC],
      name: 'perfectionist/setup',
      plugins: { perfectionist: plugin },
      rules: {
        'perfectionist/sort-exports': [
          'error',
          {
            order: 'asc',
            type: 'natural',
          },
        ],
        'perfectionist/sort-imports': [
          'error',
          {
            environment: 'node',
            groups: [
              ['type-external', 'named-type-builtin'],
              ['named-type-parent', 'named-type-sibling', 'named-type-index'],
              ['named-type-internal'],
              'builtin',
              'external',
              'internal',
              ['parent', 'sibling', 'index'],
              'side-effect',
              'side-effect-style',
              'style',
              'unknown',
            ],
            internalPattern: ['^#/.+'],
            newlinesBetween: 1,
            order: 'asc',
            type: 'natural',
          },
        ],
        'perfectionist/sort-modules': 'off',
        'perfectionist/sort-named-exports': [
          'error',
          {
            order: 'asc',
            type: 'natural',
          },
        ],
        'perfectionist/sort-objects': [
          'off',
          {
            customGroups: {
              items: 'items',
              list: 'list',
              children: 'children',
            },
            groups: ['unknown', 'items', 'list', 'children'],
            ignorePattern: ['children'],
            order: 'asc',
            type: 'natural',
          },
        ],
      },
    },
  ];
}
