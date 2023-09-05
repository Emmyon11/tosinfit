import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './assets/**/*.{js,ts,jsx,tsx,mdx,svg}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'custom-brown-1': '#F8F0E5',
        'custom-brown-2': '#F8F0E5',
        'custom-brown-3': '#DAC0A3',
        'custom-navy': '#102C57',
      },
      fontFamily: {
        inconsolata: ['var(--font-inconsolata)'],
        pacifito: ['var(--font-pacifito)'],
        roboto_mono: ['var(--font-roboto_mono)'],
      },
    },
  },
  plugins: [],
};
export default config;
