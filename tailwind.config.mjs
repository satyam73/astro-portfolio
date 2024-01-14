/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: [
					'InterVariable, Inter, sans-serif', {
						fontFeatureSettings: '"liga" 1, "calt" 1',
					}
				]
			}
		},
	},
	plugins: [],
}
