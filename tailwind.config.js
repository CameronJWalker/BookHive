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
    screens: {
      "sm" : "640px",
          // => @media (min-width: 640px) { ... }
      "md" : "768px",
      "lg" : "1024px",
      "xl" : "1280px"
    },
    extend: {
      colors: {
        "almond" : "#D98338",
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