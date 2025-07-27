import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react-swc";

const alias = {
  "@/components": "/src/components",
  "@/hooks": "/src/hooks",
  "@/pages": "/src/pages",
  "@/utils": "/src/utils",
  "@/layout": "/src/layout",
  "@/lib": "/src/lib",
  "@/constants": "/src/constants",
  "@/assets": "/src/assets",
  "@/redux": "/src/redux",
  "@/routes": "/src/routes",
};

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
        drop_console: true,
        pure_funcs: ["console.log"],
      },
    },
  },
});
