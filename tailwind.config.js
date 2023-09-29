/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "almond": "#D98338",
        "honey" : "#F2B13F",
        "milk" : "#FFFACD",
        "dark-honey" : "#ED9945" 
      },
      screens: {
      xs: "400px",
    },
  },
  },
  plugins: [],
}