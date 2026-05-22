import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import InjectPreload from "unplugin-inject-preload/vite"; // <--- Note the /vite suffix

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    InjectPreload({
      // <--- Use capitalized InjectPreload
      files: [
        {
          match: /(syne|museomoderno|inter)-.*\.woff2$/,
          attributes: {
            type: "font/woff2",
            as: "font",
            crossorigin: "anonymous",
          },
        },
      ],
    }),
  ],
});
