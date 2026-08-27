import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Demo app (npm run dev / npm run build:demo).
export default defineConfig({
  plugins: [react()],
  build: { outDir: "dist-demo" },
});
