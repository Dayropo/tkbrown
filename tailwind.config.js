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
      },
      fontSize: {
        "4.5xl": "2.5rem",
      },
      backgroundImage: {
        swirl: "url(../public/swirl_t1.png)",
        about: "url(../public/about-background.png)",
      },
      colors: {
        modal: "rgb(0, 0, 0, 0.9)",
        gravy: "#FFFFFF80",
        opa: "rgb(0, 0, 0, 0.5)",
        dark: "#777777",
      },
    },
  },
  plugins: [],
}
