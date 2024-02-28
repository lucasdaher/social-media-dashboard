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
        card: "#252B42",
        "card-hover": "#333A55",
        "card-light": "#F1F3FA",
        "card-light-hover": "#E1E4F0",
        green: "#1EB589",
        red: "#DC414C",
        // Social Media Colors
        "facebook-color": "#178FF5",
        "twitter-color": "#1DA1F2",
        "instagram-color-start": "#DF4896",
        "instagram-color-mid": "#EE877E",
        "instagram-color-stop": "#FDC366",
        "youtube-color": "#C4032B",
      },
      borderRadius: {
        header: "0rem 0rem 1.25rem 1.25rem",
      },
    },
  },
  plugins: [],
};
