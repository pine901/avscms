/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        "primary-100": "#EE396B",
        "grayish-100": "#333333",
        "grayish-200": "#848484",
        "grayish-300": "#AFAFAF",
        "grayish-400": "#F5F8FC",
        "dark-primary": '#1F1F27'
      },
      screens: {
        "xs": "360px",
        "2xl": "1440px"
      }
    },
  },
  plugins: [],
}
