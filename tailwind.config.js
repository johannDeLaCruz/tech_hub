/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      body: ["SourceSans3", "sans-serif"],
      heading: ["MuseoModerno", "sans-serif"],
    },
    fontSize: {
      h1: [
        "3rem",
        {
          lineHeight: "1.5em",
          letterSpacing: "0em",
          fontWeight: "600",
        },
      ],
      heading: [
        "2rem",
        {
          lineHeight: "1.5em",
          letterSpacing: "0em",
          fontWeight: "400",
        },
      ],
      h2: [
        "1.5rem",
        {
          lineHeight: "1.2em",
          letterSpacing: "0em",
          fontWeight: "600",
        },
      ],
      h3: [
        "1.125rem",
        {
          // lineHeight: "1.5em",
          // letterSpacing: "-0.01em",
          fontWeight: "500",
        },
      ],
      h4: [
        "1rem",
        {
          // lineHeight: "2rem",
          // letterSpacing: "-0.01em",
          fontWeight: "700",
        },
      ],
      body1: [
        "1rem",
        {
          // lineHeight: "2rem",
          // letterSpacing: "-0.01em",
          fontWeight: "400", //or 500 "normal"???
        },
      ],
      body2: [
        "0.875rem",
        {
          lineHeight: "1.3em",
          // letterSpacing: "-0.01em",
          fontWeight: "400", //or 500 "normal"???
        },
      ],
      button: [
        "0.875rem",
        {
          // lineHeight: "2rem",
          // letterSpacing: "-0.01em",
          fontWeight: "700",
        },
      ],
      tag: [
        "0.875rem",
        {
          // lineHeight: "2rem",
          // letterSpacing: "-0.01em",
          fontWeight: "400", // or 500
        },
      ],
      caption: [
        "0.75rem",
        {
          // lineHeight: "2rem",
          // letterSpacing: "-0.01em",
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
      gray: {
        50: "#f6f6f6",
        100: "#e7e7e7",
        200: "#d1d1d1",
        300: "#b0b0b0",
        400: "#888888",
        500: "#6d6d6d",
        600: "#5d5d5d",
        700: "#4f4f4f",
        800: "#454545",
        900: "#3d3d3d",
        950: "#2b2b2b",
      },
      white: "#fafafa",
      black: "#161616",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1rem",
        md: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
  },
  plugins: [],
};
