/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: [
        "Helvetica",
        "Arial",
        "sans-serif",
        "Roboto",
        "Apple Color Emoji",
        "system-ui",
        "-apple-system",
        "Noto Sans",
      ],
      serif: ["ui-serif", "Georgia", "Cambria", "Times New Roman", "serif"],
      mono: [
        "Menlo",
        "Monaco",
        "Consolas",
        "Liberation Mono",
        "Courier New",
        "monospace",
      ],
      mediumSerifItalic: ["CharterItalic"],
      mediumSerif: ["Charter"],
    },
    extend: {},
  },
  plugins: [],
};
