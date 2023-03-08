/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{jsx,js,tsx,ts}"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        xs: "500px",
      },
      fontFamily: {
        Nunito: ["Nunito Sans"],
      },
      colors: {
        DM_Elements: "hsl(var(--Dark-Blue) / <alpha-value>)",
        LM_Text: "hsl(var(--Very-Dark-Blue-Txt) / <alpha-value>)",
        DM_Background: "hsl(var(--Very-Dark-Blue-Bg) / <alpha-value>)",
        LM_Input: "hsl(var(--Dark-Gray) / <alpha-value>)",
        LM_Background: "hsl(var(--Very-Light-Gray) / <alpha-value>)",
        DM_Txt_LM_Elements: "hsl(var(--White) / <alpha-value>)",
      },
      fontSize: {
        homeItems: "var(--homeItems)",
      },
    },
  },
  plugins: [],
};
