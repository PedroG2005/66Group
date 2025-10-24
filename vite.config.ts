import { jsxLocPlugin } from "@builder.io/vite-plugin-jsx-loc";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import fs from "fs";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import { defineConfig } from "vite";
import { vitePluginManusRuntime } from "vite-plugin-manus-runtime";

// Obter o diretório atual de forma compatível com ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const plugins = [react(), tailwindcss(), jsxLocPlugin(), vitePluginManusRuntime()];

export default defineConfig({
  plugins,
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client", "src"), // Usar __dirname
      "@shared": path.resolve(__dirname, "shared"), // Usar __dirname
      "@assets": path.resolve(__dirname, "attached_assets"), // Usar __dirname (se essa pasta existir)
    },
  },
  envDir: path.resolve(__dirname), // Usar __dirname
  root: path.resolve(__dirname, "client"), // Usar __dirname
  build: {
    outDir: path.resolve(__dirname, "dist/public"), // Usar __dirname
    emptyOutDir: true,
  },
  server: {
    port: 3000,
    strictPort: false,
    host: true,
    allowedHosts: [
      ".manuspre.computer",
      ".manus.computer",
      ".manus-asia.computer",
      ".manuscomputer.ai",
      ".manusvm.computer",
      "localhost",
      "127.0.0.1",
    ],
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});