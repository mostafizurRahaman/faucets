/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./src/**/*.{js,jsx,ts,tsx}"],
   daisyui: {
      themes: [
        {
          mytheme: {
            primary: "#9c1fe6",
            secondary: "#fff",
            accent: "#000",
            neutral: "#2d29fb",
            "base-100": "#ffffff",
            info: "#6d7380", 
            warning: "#EEF2FE", 
          },
        },
      ],
    },
   theme: {
      extend: {},
   },
   plugins: [require("daisyui")],
};
