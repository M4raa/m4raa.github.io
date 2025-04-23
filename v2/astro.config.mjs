// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";


// https://astro.build/config
export default defineConfig({
  base: '/m4raa.github.io/', // 👈 importante si usas gh-pages y no un dominio personalizado
  outDir: '../docs', 
  vite: {
    plugins: [tailwindcss()],
  },
});
