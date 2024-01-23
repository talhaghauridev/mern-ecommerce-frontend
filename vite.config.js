// vite.config.js
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@components": "/src/components",
      "@hooks": "/src/hooks",
      "@pages": "/src/pages",
      "@utils": "/src/utils",
      "@layout": "/src/layout",
      "@constants": "/src/constants",
      "@assets": "/src/assets",
      "@redux": "/src/redux",
      "@routes":"/src/routes"
    },
  },
  build: {
    outDir: "dist", // Specify the output directory for the production build
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.log statements in production
        pure_funcs: ["console.log"], // Remove console.log function calls
      },
    },
  },
});
