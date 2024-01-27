// vite.config.js
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const alias = {
  "@components": "/src/components",
  "@hooks": "/src/hooks",
  "@pages": "/src/pages", // Updated alias for @pages
  "@utils": "/src/utils",
  "@layout": "/src/layout",
  "@lib": "/src/lib",
  "@constants": "/src/constants",
  "@assets": "/src/assets",
  "@redux": "/src/redux",
  "@routes": "/src/routes",
};

export default defineConfig({
  base: "/",
  plugins: [react()],
  resolve: {
    alias,
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
