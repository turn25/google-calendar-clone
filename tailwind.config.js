const LabelsGroup = [
  "red",
  "amber",
  "green",
  "blue",
  "indigo",
  "purple",
  "gray",
];

module.exports = {
  purge: {
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    safelist: [
      ...LabelsGroup.map((lbl) => `bg-${lbl}-500`),
      ...LabelsGroup.map((lbl) => `bg-${lbl}-200`),
      ...LabelsGroup.map((lbl) => `text-${lbl}-400`),
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto"],
      },
      gridTemplateColumns: {
        "1/5": "1fr 5fr",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
