/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        grey: "hsl(231, 7%, 60%)",
        tomato: "hsl(4, 100%, 67%)",
        coalGrey: "hsl(235, 18%, 26%)",
        darkGrey: "hsl(234, 29%, 20%)",
      },
    },
  },
  plugins: [],
};
