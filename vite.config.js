import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";

export default defineConfig({
  plugins: [tailwindcss()],
  server: {
    allowedHosts: ["0ccc1b2d0ca7.ngrok-free.app"],
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        beyond: resolve(__dirname, "./nested/beyond.html"),
        journey: resolve(__dirname, "./nested/journey.html"),
        stats: resolve(__dirname, "./nested/stats.html"),
      },
    },
  },
});
