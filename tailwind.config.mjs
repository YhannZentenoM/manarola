/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'primary': '#89919F',
				'secondary': '#FD7E33',
				'accent': '#141414',
				'button': '#1A4899',
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
