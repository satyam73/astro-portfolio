/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: [
					'Inter, sans-serif', {
						fontFeatureSettings: '"liga" 1, "calt" 1',
						fontOpticalSizing: 'auto',
					}
				]
			}
		},
	},
	plugins: [require("@tailwindcss/typography")],
}
