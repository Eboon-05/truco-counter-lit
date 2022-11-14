/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {},
        fontFamily: {
            'lato': ['Lato', 'sans-serif'],
            'kolker': ['Kolker Brush', 'sans-serif'],
        }
    },
    plugins: [],
}
