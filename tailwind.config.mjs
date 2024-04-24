/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'primary': '#89919F',
				'secondary': '#01509e',
				'accent': '#f08435',
				'overlay': '#16243F',
				'hover': '#85eaff',
			},
		},
	},
	plugins: [],
}
