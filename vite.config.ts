import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler",
        quietDeps: true,
        // global scss, this will be injected in every scss file that will be compiled
        additionalData: '@use "@/styles/_breakpoints.scss" as *;',
      },
    },
  },
});
