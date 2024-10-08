import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";
import { PluginOption, defineConfig, loadEnv } from "vite";
import { ViteAliases } from "vite-aliases";
import router from "vite-plugin-react-views";
import fs from 'fs/promises';

export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  return defineConfig({    
    server: {
      hmr: true,
      cors: true,
      // proxy: {
      //   "/api": {
      //     target: env.VITE_SERVER_PROXY_TARGET || 'https://api.accziom.com',
      //     changeOrigin: true,
      //     rewrite: (path) => path.replace(/^\/api/, ""),
      //   },
      // },
    },
    plugins: [
      react(),
      router(),
      ViteAliases({
        useConfig: true,
      }),
      visualizer({
        template: "treemap", // or sunburst
        open: true,
        gzipSize: true,
        brotliSize: true,
        filename: "analyse.html", // will be saved in project's root
      }) as PluginOption,
    ],
    define: { "process.env": {} },
    css: {
      // css预处理器
      preprocessorOptions: {
        scss: {
          additionalData: `@import "./src/global.scss";`,
        },
      },
    },
  });
};
