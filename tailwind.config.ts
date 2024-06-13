import type { Config } from "tailwindcss";
const defaultTheme = require('tailwindcss/defaultTheme')

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        grandSlang: ['var(--grandSlang)', 'cursive'],
        neueMontreal: ['var(--neueMontreal)', 'sans-serif'],
      },
      screens: {
        'xs': '320px',
        ...defaultTheme.screens,
      },
    },
  },
  plugins: [function({ addUtilities }: { addUtilities: Function }) {
    const newUtilities = {
      '.heroHeadings': {
        'font-size': '50px',
        'line-height': '25px',
        '@screen sm': {
          'font-size': '60px',
        },
        '@screen md': {
          'font-size': '120px',
          'line-height': '60px',
        },
        '@screen lg': {
          'font-size': '160px',
          'line-height': '90px',
        },
        '@screen xl': {
          'font-size': '180px',
        },
        'margin-top': '0.5rem', // Equivalent to mt-2
        'font-family': 'var(--grandSlang), cursive',
      },
      '.paddingX': {
        'padding-left': '1.5rem', // Equivalent to px-6
        'padding-right': '1.5rem', // Equivalent to px-6
        '@screen sm': {
          'padding-left': '4rem', // Equivalent to sm:px-16
          'padding-right': '4rem', // Equivalent to sm:px-16
        },
      },
    }
    addUtilities(newUtilities, ['responsive'])
  }
],
};
export default config;
