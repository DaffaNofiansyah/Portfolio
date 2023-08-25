/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        CustomBlack: "#252734",
        CustomGray: "#333646",
        CustomYellow: "#FFC25C",
		CustomLightGray: "#BCBABC",
      },

      fontFamily: {
        custom: ["Rubik", "sans-serif"],
      },
    },
  },
  plugins: [],
};
