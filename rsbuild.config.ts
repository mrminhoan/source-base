import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import path from 'node:path';

export default defineConfig({
  plugins: [pluginReact()],
  source: {
    alias: {
      '@components': path.resolve(__dirname, "src/components"),
      '@constants': path.resolve(__dirname, "src/constants"),
      '@models': path.resolve(__dirname, "src/models"),
      '@service': path.resolve(__dirname, "src/service"),
      '@utils': path.resolve(__dirname, "src/utils"),
      '@pages': path.resolve(__dirname, "src/pages"),
      '@routes': path.resolve(__dirname, "src/routes"),
    },
  },
});
