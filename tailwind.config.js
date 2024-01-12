/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins"],
        PoppinsBold: ["PoppinsBold"],
        Sans: ["Sans"],
        SansBold: ["SansBold"],
      },
    },
  },
  plugins: [],
};
