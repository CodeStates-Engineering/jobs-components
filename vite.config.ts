import path from 'node:path';

import generatePackageJson from 'rollup-plugin-generate-package-json';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { viteStaticCopy } from 'vite-plugin-static-copy';

import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
    }),
    viteStaticCopy({
      targets: [
        {
          src: 'src/styles/libs',
          dest: 'styles',
        },
        {
          src: 'src/styles/_libs.scss',
          dest: 'styles',
        },
      ],
    }),
  ],
  build: {
    outDir: 'dist/library',
    lib: {
      entry: path.resolve(__dirname, 'src/index.tsx'),
      name: '@codestates-engineering/codeship-platform-app-library',
      formats: ['es', 'umd'],
      fileName: 'index',
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      plugins: [
        generatePackageJson({
          outputFolder: 'dist/library',
          baseContents: (pkg) => ({
            ...pkg,
            module: './index.js',
            main: './index.js',
            types: './index.d.ts',
            scripts: undefined,
            optionalDependencies: {},
            eslintConfig: undefined,
          }),
        }),
      ],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
});
