module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: "Playfair Display, serif",
        hind: "Hind, sans-serif",
        poppins: "Poppins, sans-serif",
        oswald: "Oswald, sans-serif",
        parisienne: "Parisienne, cursive",
      },
      fontSize: {
        "2.25xl": "2.25rem",
        "3.5xl": "3.5rem",
      },
      lineHeight: {
        "3.125xl": "3.125rem",
        "5xl": "5rem",
      },
      boxShadow: {
        outline: "0px 0px 15px 2px rgba(0, 0, 0 / 0.1)",
      },
      backgroundImage: {
        targeting: "url('/targeting.jpg')",
      },
      colors: {
        dark: "#777777",
        mobile: "#1B1D1F",
        header: "#0052fe",
        values: "#eff1fe",
        sidebar: "rgb(0, 0, 0, 0.9)",
      },
    },
  },
  plugins: [],
}
