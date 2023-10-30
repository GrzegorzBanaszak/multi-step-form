import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/

const isDev = process.env.NODE_ENV === "development";

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  base: isDev ? "" : "/multi-step-form/",

  server: {
    port: 3000,
  },
});
