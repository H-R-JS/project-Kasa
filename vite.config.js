import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist", // Doit correspondre au dossier de sortie
  },
  preview: {
    port: 4173, // Port par défaut de vite preview
    open: true, // Ouvre automatiquement le navigateur
  },
});
