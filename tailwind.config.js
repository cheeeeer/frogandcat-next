const plugin = require("tailwindcss/plugin");
module.exports = {
    plugins: [
        plugin(function({addVariant}){
            addVariant('theme-ukraine', ':is(.theme-ukraine &)')
        })
    ],
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}'
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: "#5052B6",
                    ukraine: "#0057b8"
                },
                background: {
                    DEFAULT: "#E4E1EC",
                    ukraine: "#ffd700"
                },
                darker: "#47464f"
            }
        }
    }
}