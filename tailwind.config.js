module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      zIndex: {
        100: "100",
        500: "500",
        1000: "1000",
        2000: "2000",
      },
      animation: {
        marquee: "marquee 25s linear infinite ",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [],
};
