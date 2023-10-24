import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/

const isDev = process.env.NODE_ENV === "development";

export default defineConfig({
  base: isDev ? "" : "/multi-step-form/",
  plugins: [react()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  },
});
