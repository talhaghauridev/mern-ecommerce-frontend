/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {
         fontFamily: {
            Poppins: ["Poppins"],
            PoppinsBold: ["PoppinsBold"],
            Sans: ["Sans"],
            SansBold: ["SansBold"]
         },
         colors: {
            Read: "#edededed"
         },
         boxShadow: {
            primary: "rgba(43, 52, 69, 0.1) 0px 4px 16px"
         }
      }
   },
   plugins: []
};
