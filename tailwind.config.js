// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Ensure all components and pages are scanned for TailwindCSS usage
  ],
  theme: {
    extend: {
      colors: {
        accent: "#E54065",
        background: "#F4F5F9",
        border: "#CFD2DC",
        text: "#636363",
        filterButton: "#E1E4EA",
        readBg: "#F2F2F2",
      },
    },
  },
  plugins: [],
};
