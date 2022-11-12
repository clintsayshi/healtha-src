/** @type {import('tailwindcss').Config} */
module.exports = {
  safelist: [
    {
      pattern: /./,
      variants: ["md", "lg", "xl"], // you can add your variants here
    },
  ],
  content: ["./public/**/*.html"],
  theme: {
    container: false,
    extend: {},
  },
  variants: { extend: {} },
  plugins: [],
};
