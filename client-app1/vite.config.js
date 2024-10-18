import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// const isCodeSandbox = 'SANDBOX_URL' in process.env || 'CODESANDBOX_HOST' in process.env

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: "src/",
  publicDir: "../public/",
  base: "./",
  server: {
    proxy: {
      "/api/v1": "http://localhost:5000/",
      "/api/survey1": "http://localhost:5000/",
      "/api/survey1/create": "http://localhost:5000/",
    },
    host: true,
    open: true, //!isCodeSandbox (Open if it's not a CodeSandbox)
  },
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    sourcemap: true,
  },
});
