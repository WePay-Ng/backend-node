import alias from '@rollup/plugin-alias';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
import run from '@rollup/plugin-run';
import path from 'path';
import { terser } from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2';

const dev = process.env.NODE_ENV?.toLowerCase() !== 'production';

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
    format: 'es', // Changed to ES modules
    sourcemap: !dev ? false : 'inline',
  },
  external: (id) => {
    // Don't bundle built-in Node.js modules
    if (
      id.startsWith('node:') ||
      [
        'fs',
        'path',
        'crypto',
        'http',
        'https',
        'url',
        'util',
        'stream',
        'events',
        'buffer',
        'os',
        'child_process',
      ].includes(id)
    ) {
      return true;
    }

    // Bundle problematic CommonJS modules that don't play well with ESM
    const bundledModules = ['debug', 'nanoid', 'otp-generator'];
    if (bundledModules.some((mod) => id === mod || id.startsWith(mod + '/'))) {
      return false; // Bundle these
    }

    // Keep other node_modules as external
    return /node_modules/.test(id);
  },
  onwarn(warning, warn) {
    // suppress eval warnings
    if (warning.code === 'EVAL') return;
    // warn(warning)
  },
  plugins: [
    resolve({
      preferBuiltins: true,
      exportConditions: ['node'],
      browser: false,
    }),
    commonjs({
      ignoreDynamicRequires: true,
      requireReturnsDefault: 'auto',
      // Help with ESM to CommonJS conversion
      transformMixedEsModules: true,
      // Specify which modules need special handling
      namedExports: {
        debug: ['debug'],
        'otp-generator': ['generate'],
      },
    }),
    typescript({
      rollupCommonJSResolveHack: true,
      exclude: ['*.d.ts', '**/*.d.ts', '**/__tests__/**'],
      clean: true,
      tsconfig: './tsconfig.json',
      check: !dev,
    }),
    dev && run({ execArgv: ['-r', 'dotenv/config'] }),
    !dev && terser(),
    alias({
      entries: [
        { find: '@helpers', replacement: r(ROOT, 'src/helpers') },
        { find: '@modules', replacement: r(ROOT, 'src/modules') },
        { find: '@types', replacement: r(ROOT, 'src/types') },
      ],
      customResolver: resolve({
        extensions: ['.js', '.ts', '.json'],
      }),
    }),
    json(),
  ],
};
