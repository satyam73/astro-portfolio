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
		animation: {
            'infinite-scroll': 'infinite-scroll 20s linear infinite',
         },
         keyframes: {
            'infinite-scroll': {
               from: { transform: 'translateX(-10%)' },
               to: { transform: 'translateX(-55%)' },
               false: { transform: 'translateX(0)' },
            },
         },
	},
	plugins: [require("@tailwindcss/typography")],
}
