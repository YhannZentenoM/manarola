/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'primary': '#89919F',
				'secondary': '#DAB89A',
				'accent': '#141414',
				'overlay': '#16243F',
				'hover': '#85eaff',
				'background': '#F9F4F1'
			},
		},
	},
	plugins: [
		require("tailwindcss-animation-delay"),	
	],
}
