// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://nourmehdidata.com',
  integrations: [tailwind(), react()],
});



// import { defineConfig } from "astro/config";
// import gh from "@astrojs/github";

// export default defineConfig({
//   output: "static",
//   base: "/kalifa-sankara/",       // Nom du repo GitHub
//   integrations: [gh()],
// });
