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
      screens: {
        xs: "320px",
        xs2: "450px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },

      animation: {
        "slide-fade": "slideFade 1s ease-out forwards",
        "button-lift": "buttonLift 0.3s ease-out",
      },
      keyframes: {
        slideFade: {
          "0%": { opacity: 0, transform: "scale(0.9) translateY(-10px)" },
          "50%": { opacity: 1, transform: "scale(1.05) translateY(0px)" },
          "100%": { opacity: 0, transform: "scale(1) translateY(10px)" },
        },
        buttonLift: {
          "0%": { transform: "scale(1) translateY(0)" },
          "100%": { transform: "scale(1.1) translateY(-4px)" },
        },
      },
    },
  },
  plugins: [],
};
