/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/screens/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
	theme: {
		fontFamily: {
			heading: 'Nunito, sans-serif',
			body: 'Poppins, sans-serif'
		}
	},
	plugins: []
}
