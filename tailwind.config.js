/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		extend: {
			colors: {
				"amarillo-sazon": "#f3c332",

				// -----------------------------------------------------------
				// "amarillo-sazon": {
				// 	900: "#F2E0C9",
				// 	800: "#D5C5B1",
				// },
				// ------------------------------------------------------------
				// "amarillo-sazon": "#F2CC85", 3
				// "amarillo-sazon": "#D9CA82",4
				// "amarillo-sazon": "#D1D9B4",5
				// "amarillo-sazon": "#A0A603",6
				// "amarillo-sazon": "#F2F2F2",7
				// -------------------------------------------------------
				"negro-sazon": "#0a0a0a",

				// "negro-sazon": "#40322A",
				// 	"negro-sazon": "#594736",3
				// "negro-sazon": "#172601",4
				// "negro-sazon": "#2B402C",5
				// "negro-sazon": "#0D0D0D",6
				// "negro-sazon": "#593F28",7
			},
		},
	},
	plugins: [],
};
