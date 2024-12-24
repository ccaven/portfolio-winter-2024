import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
        gridTemplateColumns: {
            'main': '1fr 3fr'
        }
    }
  },

  plugins: []
} satisfies Config;
