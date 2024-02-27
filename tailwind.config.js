/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "background-dark": "#1D1F29",
        "background-light": "#FFF",
        "blue-gray": "#8C98C6",
        "dark-blue": "#252B42",
        "background-header": "#20222F",
        "background-header-light": "#F7F9FF",
        "green-start": "#40DB82",
        "green-stop": "#388FE7",
        black: "#1D1F29",
        "pure-gray": "#63687D",
        "light-bg-button": "#AEB3CB",
        "light-gray": "#848BAB",
        "card-bg": "#252B42",
        green: "#1EB589",
        red: "#DC414C",
        "facebook-color": "#178FF5",
      },
      borderRadius: {
        header: "0rem 0rem 1.25rem 1.25rem",
      },
    },
  },
  plugins: [],
};
