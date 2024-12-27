import fs from 'fs/promises';
import path from 'node:path';

import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import tsconfigPaths from 'vite-tsconfig-paths';

import react from '@vitejs/plugin-react-swc';

import type { Plugin } from 'vite';

// Alias 목록
const ALIAS_NAME_LIST = [
  'components',
  'utils',
  'hooks',
  'contexts',
  'constants',
  'styles',
  'plugins',
];

// 커스텀 Rollup 플러그인: package.json 생성
function generatePackageJsonPlugin(): Plugin {
  return {
    name: 'generate-package-json',
    writeBundle: async (options) => {
      // 출력 디렉토리 확인
      const outputDir = path.resolve(options.dir || 'dist/library');

      // 기존 package.json 읽기
      const pkgPath = path.resolve(__dirname, 'package.json');
      const pkgContent = await fs.readFile(pkgPath, 'utf-8');
      const pkg = JSON.parse(pkgContent);

      // package.json 수정
      const modifiedPkg = {
        ...pkg,
        module: './index.js',
        main: './index.js',
        types: './index.d.ts',
        scripts: undefined,
        optionalDependencies: {},
        eslintConfig: undefined,
      };

      // undefined 속성 제거
      Object.keys(modifiedPkg).forEach(
        (key) => modifiedPkg[key] === undefined && delete modifiedPkg[key],
      );

      // 수정된 package.json을 출력 디렉토리에 작성
      await fs.writeFile(
        path.join(outputDir, 'package.json'),
        JSON.stringify(modifiedPkg, null, 2),
        'utf-8',
      );
    },
  };
}

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
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
      plugins: [generatePackageJsonPlugin()],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
  resolve: {
    alias: ALIAS_NAME_LIST.reduce((acc, name) => {
      acc[`@${name}`] = path.resolve(__dirname, `src/${name}`);
      return acc;
    }, {} as Record<string, string>),
  },
});
