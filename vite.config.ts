import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import fs from "fs";

export default defineConfig(({ mode }) => ({
  base: "/",
  plugins: [
    react(),
    mode === "development" && componentTagger(),

    // Creates 404.html for GitHub Pages routing
    {
      name: "copy-index-to-404",
      closeBundle() {
        const dist = "dist";
        fs.copyFileSync(`${dist}/index.html`, `${dist}/404.html`);
      },
    },

    // Adds CNAME for custom domain
    {
      name: "add-cname",
      closeBundle() {
        const dist = "dist";
        fs.writeFileSync(`${dist}/CNAME`, "heessfoundation.com");
      },
    },
  ].filter(Boolean),

  resolve: {
    alias: { "@": path.resolve(__dirname, "./src") },
  },
}));
