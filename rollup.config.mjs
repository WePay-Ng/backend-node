import alias from '@rollup/plugin-alias';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
import run from '@rollup/plugin-run';
import path from 'path';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { terser } from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2';

const dev = process.env.NODE_ENV !== 'production';

import { fileURLToPath } from 'url';
import { dirname } from 'path';

export function fileDirName(meta) {
  const __filename = fileURLToPath(meta.url);

  const __dirname = dirname(__filename);

  return { __dirname, __filename };
}

const { __dirname } = fileDirName(import.meta);

const r = path.resolve;
const ROOT = r(__dirname);

export default {
  input: 'src/server.ts',
  output: {
    dir: 'dist',
    format: 'esm',
    sourcemap: !dev ? false : 'inline',
  },
  onwarn(warning, warn) {
    // suppress eval warnings
    if (warning.code === 'EVAL') return;
    // warn(warning)
  },
  plugins: [
    peerDepsExternal({ includeDependencies: true }),
    commonjs({
      ignoreDynamicRequires: true,
    }),
    typescript({
      rollupCommonJSResolveHack: true,
      exclude: ['*.d.ts', '**/*.d.ts', '**/__tests__/**'],
      clean: true,
      check: !dev, //? true : false,
      // abortOnError: dev ? false : false,
    }),
    dev && run({ execArgv: ['-r', 'dotenv/config'] }),
    !dev && terser(),
    alias({
      entries: [
        // { find: '@extensions', replacement: r(ROOT, 'src/extensions') },
        { find: '@helpers', replacement: r(ROOT, 'src/helpers') },
        { find: '@modules', replacement: r(ROOT, 'src/modules') },
        { find: '@types', replacement: r(ROOT, 'src/types') },
      ],
      customResolver: resolve({
        extensions: ['.js', '.ts', '.json'],
      }),
    }),
    json(),
    resolve(),
  ],
};
