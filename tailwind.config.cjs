/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				retrobrownnavbar: {
					800: '#772100'
				},
				retrobrownheader: {
					800: '#81351f'
				},
				retrobrowntittle: {
					800: '#822c00'
				}
			},
			fontFamily: {
				PODIUMSharp: ['PODIUMSharp', 'sans-serif'],
				Skie: ['Skie Condensed', 'sans-serif'],
				NothBlock: ['North Block', 'sans-serif']
			}
		}
	},
	plugins: [
		plugin(function ({ addUtilities }) {
			addUtilities({
				'.scrollbar-hide': {
					/* IE and Edge */
					'-ms-overflow-style': 'none',

					/* Firefox */
					'scrollbar-width': 'none',

					/* Safari and Chrome */
					'&::-webkit-scrollbar': {
						display: 'none'
					}
				}
			})
		}),
		require('tailwind-scrollbar')
	]
}
