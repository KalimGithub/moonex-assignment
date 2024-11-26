// @type {import('tailwindcss').Config}

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        shadow: "2px 2px 52px -38px rgba(255,255,255,5)",
      },
    },
  },
  plugins: [],
};
