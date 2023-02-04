/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
          retrobrownnavbar: {
            800: "#772100"
          },
					retrobrownheader: {
            800: "#81351f"
          },
					retrobrowntittle: {
            800: "#822c00"
          },
        },
				fontFamily: {
					PODIUMSharp: ["PODIUMSharp", "sans-serif"],
					Skie: ["Skie Condensed", "sans-serif"],
					NothBlock: ["North Block", "sans-serif"],
				},
		},
	},
	plugins: [],
}
