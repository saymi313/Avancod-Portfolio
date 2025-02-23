// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import tailwindcss from '@tailwindcss/vite'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react(), tailwindcss()],
// })


import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [
        tailwindcss({
          content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], 
          theme: {
            extend: {
              fontFamily: {
                azonix: ["Azonix", "sans-serif"],
              },
            },
          },
          plugins: [],
        }),
        autoprefixer(),
      ],
    },
  },
});
