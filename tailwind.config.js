module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1300px",
      },
    },
    extend: {
      colors: {
        sb: {
          50: "#f2fafc",
          100: "#e4f3f7",
          200: "#c0e3ed",
          300: "#9fd1e3",
          400: "#61aacf",
          500: "#2c83ba",
          600: "#2572a8",
          700: "#19578c",
          800: "#104070",
          900: "#092b54",
          950: "#041836",
        },
        cb: {
          50: "#9D848E",
          100: "#884332",
          200: "#C3C2C3",
          300: "#B93A32",
          400: "#283243",
          500: "#3E493B",
          600: "#F2CC97",
          700: "#434135",
          800: "#928679",
          900: "#7B5427",
          950: "#041836",
          1000: "#EF4923",
          1050: "#283243",
          1100: "#9D848E",
          1150: "#F5F0E0",
          1200: "#C7BFB2",
          1250: "#666666",
          1300: "#E6E6DF",
          1350: "#CBC1AE",
          1400: "#FAF7E6",
          1450: "#8C9FA1",
          1500: "#73514F",
        },
        ct: {
          50: "#787d7b",
          100: "#ff1e9e",
          200: "#287df2",
          300: "#d3bba6",
          400: "#219368",
          500: "#ffffff",
          600: "#f97d40",
          700: "#813db8",
          800: "#000000",
          900: "#815532",
          950: "#e31b35",
          1000: "#ffe565",
        },
      },
      theme: {
        extend: {
          strokeWidth: {
            3: "3",
            4: "4",
            7: "7",
            // 필요한 굵기 추가
          },
        },
      },
    },
  },
  plugins: [],
};
