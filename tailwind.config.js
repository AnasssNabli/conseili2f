const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",  // Adjust to your project's structure
  ],
  theme: {
    extend: {},
  },
  plugins: [],
});
