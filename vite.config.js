import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  base: "/",
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "dist",
    terserOptions: {
      compress: {
        dead_code: true,
        drop_console: true,
        pure_funcs: ["console.log"],
      },
    },
  },
});
