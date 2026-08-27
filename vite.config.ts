import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";

// Library build. The demo app builds with vite.demo.config.ts instead.
export default defineConfig({
  plugins: [
    react(),
    dts({ include: ["src"], insertTypesEntry: true, rollupTypes: true }),
  ],
  build: {
    lib: {
      entry: "src/index.ts",
      formats: ["es"],
      fileName: "lozenge-react",
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"],
    },
  },
});
