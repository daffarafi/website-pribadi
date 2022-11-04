/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			keyframes: {
				'spin-6': {
					'0%': {
						transform: 'rotate(6deg)',
					},
					'100%': {
						transform: 'rotate(366deg)',
					},
				},
				'spin-12': {
					'0%': {
						transform: 'rotate(12deg)',
					},
					'100%': {
						transform: 'rotate(372deg)',
					},
				},
				'reverse-spin-6': {
					'0%': {
						transform: 'rotate(-6deg)',
					},
					'100%': {
						transform: 'rotate(-366deg)',
					},
				},
				'reverse-spin-12': {
					'0%': {
						transform: 'rotate(-12deg)',
					},
					'100%': {
						transform: 'rotate(-372deg)',
					},
				},
			},
		},
		fontFamily: {},
	},
	plugins: [],
};
