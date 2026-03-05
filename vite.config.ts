import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@configs": path.resolve(__dirname, "./src/configs"),
      "@constants": path.resolve(__dirname, "./src/constants"),
      "@containers": path.resolve(__dirname, "./src/containers"),
      "@context": path.resolve(__dirname, "./src/context"),
    },
  },
});
