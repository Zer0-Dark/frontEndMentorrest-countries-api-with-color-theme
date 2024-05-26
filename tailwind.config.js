/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'main': ['Nunito Sans'],
      'body': ['Roboto']
    },
    extend: {
      colors: {
        'dark-mode-elements': '#2b3945',
        'dark-mode-background': 'hsl(207, 26%, 17%)',
        'light-mode-text': 'hsl(200, 15%, 8%)',
        'light-mode-input': "hsl(0, 0%, 52%)",
        'dark-mode-text': "hsl(0, 0%, 100%)",
        'light-mode-background': "hsl(0, 0%, 98%)"

      }
    },
  },
  plugins: [],
  darkMode: "class"
}

