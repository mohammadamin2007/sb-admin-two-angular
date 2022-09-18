/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/app/app.component.html", "./src/app/components/side-bar/side-bar.component.html", "./src/app/components/navbar/navbar.component.html", "./src/app/components/home/home.component.html", "./src/app/components/projects/projects.component.html", "./src/app/components/description/description.component.html"],
  theme: {
    extend: {
      boxShadow: {
        "primary-box-shadow": "0 0 0 0.2rem rgb(105 136 228 / 50%)",
      },
      colors: {
        "gray-o-800": "#5a5c69",
        "gray-o-300": "#dddfeb",
        "gray-o-500": "#858796"
      }
    },
    screens: {
      "sm": "576px",
      "md": "768px",
      "lg": "922px",
      "xl": "1200px",
      "xxl": "1400px"
    }
  },
  plugins: [],
}
