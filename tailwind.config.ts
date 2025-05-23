import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        '13': 'repeat(13, minmax(0, 1fr))',
      },
      colors: {
        blue: {
          100: '#D6E4FF',
          200: '#ADC8FF',
          300: '#84A9FF',
          400: '#2589FE',
          500: '#0070F3',
          600: '#2F6FEB',
          700: '#2A5EE4',
          800: '#244DD4',
          900: '#1A34B8',
        },
        gree: {
          400: '#0b8647',
          500: '#087538',
          600: '#066428',
        }
      },
    },
    keyframes: {
      shimmer: {
        '100%': {
          transform: 'translateX(100%)',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
export default config;
