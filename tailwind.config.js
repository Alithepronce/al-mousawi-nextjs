module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#8B0000',
          gold: '#D4A843',
          dark: '#111111',
          light: '#F5F5F5',
        }
      }
    },
  },
  plugins: [],
}