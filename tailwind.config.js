/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#21543d", // Custom primary color
        secondary: "#779688", // Custom secondary color
        ternary: "#ECE6FO",
      },
    },
  },
  plugins: [],
};
