import { jsxLocPlugin } from "@builder.io/vite-plugin-jsx-loc";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import fs from "fs";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import { defineConfig } from "vite";
import { vitePluginManusRuntime } from "vite-plugin-manus-runtime";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const plugins = [react(), tailwindcss(), jsxLocPlugin(), vitePluginManusRuntime()];

export default defineConfig({
  plugins,
  root: path.resolve(__dirname, "client"),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client/src"),
      "@shared": path.resolve(__dirname, "shared"),
      "@assets": path.resolve(__dirname, "attached_assets"),
    },
  },
  envDir: path.resolve(__dirname, "client"),
  build: {
    outDir: path.resolve(__dirname, "client/dist"), // ✅ build dentro de client
    emptyOutDir: true,
  },
  server: {
    port: 3000,
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
