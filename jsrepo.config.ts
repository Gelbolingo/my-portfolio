import { defineConfig } from 'jsrepo';

export default defineConfig({
  registries: [
    {
      name: 'reactbits',
      url: 'https://reactbits.dev/r',
    },
  ],
  paths: {
    component: './src/components',
  },
});