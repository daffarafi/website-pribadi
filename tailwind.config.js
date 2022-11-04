/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			keyframes: {
				spin6: {
					'0%': {
						transform: 'rotate(6deg)',
					},
					'100%': {
						transform: 'rotate(366deg)',
					},
				},
				spin12: {
					'0%': {
						transform: 'rotate(12deg)',
					},
					'100%': {
						transform: 'rotate(372deg)',
					},
				},
				reversespin6: {
					'0%': {
						transform: 'rotate(-6deg)',
					},
					'100%': {
						transform: 'rotate(-366deg)',
					},
				},
				reversespin12: {
					'0%': {
						transform: 'rotate(-12deg)',
					},
					'100%': {
						transform: 'rotate(-372deg)',
					},
				},
				wiggle: {
					'0% 100%': {
						transform: 'rotate(-45deg)',
					},
					'50%': {
						transform: 'rotate(135deg)',
					},
				},
				clocking: {
					'100%': {
						transform: 'rotate(90deg)',
					},
				},
				shrink: {
					'0%, 100%': {
						width: '100%',
					},
					'50%': {
						width: '65%',
					},
				},
				pointbounce: {
					'0%': {
						transform: 'translate(0, 0)',
					},
					'100%': {
						transform: 'translate(-10px, 0)',
					},
				},
			},
		},
		fontFamily: {
			Josefin_Sans: [
				'Josefin Sans',
				'Verdana',
				'Geneva',
				'Tahoma',
				'sans-serif',
			],
		},
		container: {
			padding: {
				DEFAULT: '1rem',
				sm: '2rem',
				lg: '4rem',
				xl: '5rem',
				'2xl': '6rem',
			},
			center: true,
		},
	},
	plugins: [],
};
