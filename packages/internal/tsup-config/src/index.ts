import type { Options } from 'tsup';

import { defineConfig } from 'tsup';

export const defaultOptions = {
  outDir: 'dist',
  dts: true,
  clean: true,
  format: 'esm',
  treeshake: true,
} satisfies Options;

export const mergeConfig: (
  custom: Options,
) => ReturnType<typeof defineConfig> = (custom = {}) => {
  return defineConfig((options) => ({
    ...options,
    ...defaultOptions,
    splitting: !options.watch,
    sourcemap: !options.watch,
    ...custom,
  }));
};
