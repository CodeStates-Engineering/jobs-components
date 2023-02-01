import react from 'react';
import reactDom from 'react-dom';

import autoprefixer from 'autoprefixer';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import copy from 'rollup-plugin-copy';
import resolve from 'rollup-plugin-node-resolve';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';
import url from 'rollup-plugin-url';

import json from '@rollup/plugin-json';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import svgr from '@svgr/rollup';

import pkg from './package.json' assert { type: 'json' };

const extensions = ['.js', '.jsx', '.ts', '.tsx', '.jsxs'];

process.env.BABEL_ENV = 'production';

export default {
  input: './src/index.tsx',
  plugins: [
    peerDepsExternal(),
    resolve({ extensions }),
    commonjs({
      include: 'node_modules/**',
      namedExports: {
        react: Object.keys(react),
        'react-dom': Object.keys(reactDom),
        'react/jsx-runtime': ['jsx', 'jsxs'],
      },
    }),
    babel({ extensions, include: ['src/**/*'], runtimeHelpers: true }),
    url(),
    svgr(),
    typescript(),
    postcss({
      plugins: [autoprefixer()],
      extract: true,
      minimize: true,
    }),
    copy({
      targets: [{ src: 'package.json', dest: 'dist/package' }],
    }),
    json(),
    nodeResolve(),
    terser(),
  ],
  output: [
    {
      file: pkg.module,
      format: 'cjs',
    },
  ],
};
