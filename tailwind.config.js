/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'section': '#8A8A8A',
        'main-background': '#0C0318',
        'light': '#e1e1e1',
        'dark': '#999999',
        'error': '#FF0000',
        'electric-blue': '#3F7FFF',
        'gunmetal-gray': '#363636',
        'neon-green': '#00FF00',
        'deep-purple': '#7D26CD',
        'titanium-silver': '#C0C0C0',
      },
    },
    container: {
      center: true,
    }
  },
  plugins: [],
}
