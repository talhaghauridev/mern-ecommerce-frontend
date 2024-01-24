// vite.config.js
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  base: "/",
  plugins: [react()],
  resolve: {
    alias: {
      "@components": "/src/components",
      "@hooks": "/src/hooks",
      "@pages": "/src/pages", // Updated alias for @pages
      "@utils": "/src/utils",
      "@layout": "/src/layout",
      "@constants": "/src/constants",
      "@assets": "/src/assets",
      "@redux": "/src/redux",
      "@routes": "/src/routes",
    },
  },
  build: {
    outDir: "dist",
    terserOptions: {
      compress: {
        drop_console: true,
        pure_funcs: ["console.log"],
      },
    },
  },
});
