import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    plugins: [
      react(),
      federation({
        name: "sbhEmpty",
        filename: "remoteEntry.js",
        shared: ["react", "react-dom"],
        remotes: {},
        exposes: {
          "./Empty": "./src/components/Empty",
        },
      }),
    ],
    build: {
      modulePreload: false,
      target: "esnext",
      minify: false,
      cssCodeSplit: false,
    },
  };
});
