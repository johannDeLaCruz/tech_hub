/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      heading: ["MuseoModerno", "sans-serif"],
      body: ["Source Code Pro", "monospace"],
    },
    fontSize: {
      h1: [
        "3rem",
        {
          // lineHeight: "2.25rem",
          letterSpacing: "0em",
          fontWeight: "600",
        },
      ],
      h2: [
        "1.5rem",
        {
          // lineHeight: "2.25rem",
          letterSpacing: "0em",
          fontWeight: "600",
        },
      ],
      h3: [
        "1.25rem",
        {
          // lineHeight: "2rem",
          letterSpacing: "-0.01em",
          fontWeight: "500",
        },
      ],
      h4: [
        "1rem",
        {
          // lineHeight: "2rem",
          letterSpacing: "-0.01em",
          fontWeight: "700",
        },
      ],
      body1: [
        "1rem",
        {
          // lineHeight: "2rem",
          letterSpacing: "-0.01em",
          fontWeight: "500",
        },
      ],
      body2: [
        "0.875rem",
        {
          // lineHeight: "2rem",
          letterSpacing: "-0.01em",
          fontWeight: "500",
        },
      ],
      button: [
        "0.875rem",
        {
          // lineHeight: "2rem",
          letterSpacing: "-0.01em",
          fontWeight: "700",
        },
      ],
      tag: [
        "0.875rem",
        {
          // lineHeight: "2rem",
          letterSpacing: "-0.01em",
          fontWeight: "400", // or 500
        },
      ],
      caption: [
        "0.75rem",
        {
          // lineHeight: "2rem",
          letterSpacing: "-0.01em",
          fontWeight: "500",
        },
      ],
    },

    colors: {
      primary: {
        50: "#eeffef",
        100: "#d7ffdc",
        200: "#b1ffbc",
        300: "#75ff88",
        400: "#32f64e",
        500: "#07db26",
        600: "#00ba1b",
        700: "#039219",
        800: "#09721a",
        900: "#0a5d19",
        950: "#003509",
      },
      grey: "#2B2B2B",
      white: {
        50: "#fafafa",
        100: "#efefef",
        200: "#dcdcdc",
        300: "#bdbdbd",
        400: "#989898",
        500: "#7c7c7c",
        600: "#656565",
        700: "#525252",
        800: "#464646",
        900: "#3d3d3d",
        950: "#292929",
      },
      black: "#161616",
    },
  },
  plugins: [],
};
