/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-gradient-from": "#8FCEA1", // Green 400
        "custom-gradient-to": "#6CB8D6", // Cyan 300
        darkBlue: "#082541",
        blueGradient: "#6a5acd",
        blueGradientEnd: "#25CCF7",
        darkBack:"#0B2034"
      },
      backgroundImage: (theme) => ({
        gradient:
          "linear-gradient(to right, " +
          theme("colors.custom-gradient-from") +
          ", " +
          theme("colors.custom-gradient-to") +
          ")",
        blueGradient:
          "linear-gradient(170deg, " +
          "#4859AB" +
          ", " +
         "#80B1CD" +
          ")",
      }),
    },
  },
  plugins: [],
};
