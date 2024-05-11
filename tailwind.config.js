/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {

		borderWidth:{
			DEFAULT: '1px',
			'0':'0',
			'1':'1px',
			'2':'2px',
			'3':'3px',
			'4':'4px',
			'6':'6px',
			'8':'8px',
			'60':'60px',
		},

		extend: {
			backgroundImage: {
				"image-form-in":
					"url('/src/img/img_inicio_sesion.jpg')",
				"image-1-login":
					"url('/src/img/imagen_1_login.jpg')",
				"image-primary":
					"url('/src/img/img_inicio.jpg')",
			},
			colors: {
				"amarillo-sazon": "#f3c332",
				"amarillo-sazon-2":"#dbb130",

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
