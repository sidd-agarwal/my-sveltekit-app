/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		screens: {
			// there's no actual need in practice for a "small" breakpoint
			md: '720px',
			lg: '1025px',
			xl: '1484px'
		},
		colors: {
			black: 'black',
			white: 'white',
			gray: {
				150: '#252a2c',
				200: '#2f3132', // "kohle"
				450: '#697172', // "cemento"
				600: '#999',
				800: '#c3c6c8', // "acier"
				900: '#e1e2e3', // "grigio"
				950: '#f4f4f4' // "marin"
			},
			blue: '#00b8fc',
			yellow: '#dcfd00',
			purple: '#814efa',
			cyan: '#00ead0',
			green: '#0f8503',
			red: '#d62929',
			focus: '#2959d660',
			orange: '#FF5000',
			transparent: 'transparent',
			currentColor: 'currentColor'
		},
		fontSize: {
			// all line-heights should be even px numbers

			// tight line-spacing, ~1.0666 (for titles and other non-body text)
			base: ['1rem', { lineHeight: '1.125rem' }], // 16px / 18px
			10: ['0.625rem', { lineHeight: '0.75rem' }], // 10px / 12px
			11: ['0.6875rem', { lineHeight: '0.75rem' }], // 11px / 12px
			12: ['0.75rem', { lineHeight: '0.875rem' }], // 12px / 14px
			13: ['0.8125rem', { lineHeight: '0.875rem' }], // 13px / 14px
			14: ['0.875rem', { lineHeight: '1rem' }], // 14px / 16px
			15: ['0.9375rem', { lineHeight: '1rem' }], // 15px / 16px
			16: ['1rem', { lineHeight: '1.125rem' }], // 16px / 18px
			18: ['1.125rem', { lineHeight: '1.25rem' }], // 18px / 20px
			20: ['1.25rem', { lineHeight: '1.375rem' }], // 20px / 22px
			24: ['1.5rem', { lineHeight: '1.625rem' }], // 24px / 26px
			30: ['1.875rem', { lineHeight: '2rem' }], // 30px / 32px
			36: ['2.25rem', { lineHeight: '2.375rem' }], // 36px / 38px

			48: ['3rem', { lineHeight: '3.25rem' }], // 48px / 52px
			60: ['3.75rem', { lineHeight: '4rem' }], // 60px / 64px
			72: ['4.5rem', { lineHeight: '4.75rem' }], // 72px / 76px

			90: ['5.625rem', { lineHeight: '6rem' }], // 90px / 96px

			// body text line-spacing, ~1.3
			'body-12': ['0.75rem', { lineHeight: '1rem' }], // 12px / 16px
			'body-14': ['0.875rem', { lineHeight: '1.125rem' }], // 14px / 18px
			'body-16': ['1rem', { lineHeight: '1.375rem' }], // 16px / 22px (same as base, just included for consistency's sake)
			'body-18': ['1.125rem', { lineHeight: '1.5rem' }], // 18px / 24px
			'body-24': ['1.5rem', { lineHeight: '1.875rem' }], // 24px / 30px
			'body-30': ['1.875rem', { lineHeight: '2.375rem' }] // 30px / 38px

			/*

			This just wasn't working, keep needing values "in between" names like sm and xs.
			Also, title and body sizes overlap but have different line-heights.

			// copy (~1.3 line-height)
			xxs: ['0.75rem', { lineHeight: '1rem' }], // 12px / 16px
			xs: ['0.8125rem', { lineHeight: '1.125rem' }], // 13px / 18px
			sm: ['0.875rem', { lineHeight: '1.125rem' }], // 14px / 18px
			'body-lg': ['1.125rem', { lineHeight: '1.5rem' }], // 18px / 24px (lg font size, but with line-height for copy text)

			// titles (~1.06 line-height)
			'sm-title': ['0.9375rem', { lineHeight: '1rem' }], // 15px / 16px
			lg: ['1.125rem', { lineHeight: '1.25rem' }], // 18px / 20px
			xl: ['1.25rem', { lineHeight: '1.375rem' }], // 20px / 22px
			'2xl': ['1.5rem', { lineHeight: '1.625rem' }], // 24px / 26px
			'3xl': ['1.875rem', { lineHeight: '2rem' }], // 30px / 32px
			'4xl': ['2.25rem', { lineHeight: '2.375rem' }], // 36px / 38px
			'5xl': ['3rem', { lineHeight: '3.25rem' }], // 48px / 52px
			'6xl': ['3.75rem', { lineHeight: '4rem' }], // 60px / 64px
			'7xl': ['4.5rem', { lineHeight: '4.75rem' }], // 72px / 76px
			'8xl': ['5.625rem', { lineHeight: '6rem' }], // 90px / 96px
			*/
		},
		aspectRatio: {
			auto: 'auto',
			square: '1',
			'16/9': '16/9',
			'4/3': '4/3'
		},
		extend: {
			gridTemplateColumns: {
				14: 'repeat(14, minmax(0, 1fr))'
			},
			gridColumnEnd: {
				14: '14',
				15: '15'
			},
			opacity: {
				15: '0.15',
				85: '0.85'
			},
			ringOffsetWidth: {
				3: '3px' // 3px offset for form field focus outlines
			},
			spacing: {
				4.5: '1.125rem',
				sm: 'var(--spacing-sm)',
				md: 'var(--spacing-md)',
				lg: 'var(--spacing-lg)',
				xl: 'var(--spacing-xl)'
			},
			animation: {
				'spin-slow': 'spin 1.5s linear infinite',
				'shimmer': 'shimmer 3s infinite',
				'pulse-once': 'pulse 0.8s cubic-bezier(0.4, 0, 0.6, 1)',
				'ping-once': 'ping-once .8s cubic-bezier(0, 0, 0.2, 1)'
			},
			keyframes: {
				'shimmer': {
					'100%': {
						'transform': 'translateX(100%)'
					}
				},
				'ping-once': {
					'0%': {
						'transform': 'scale(1)',
						'opacity': '0.8'
					},
					'75%': {
						'transform': 'scale(2)',
						'opacity': '0'
					},
					'100%': {
						'transform': 'scale(2.5)',
						'opacity': '0'
					}
				}
			}
		}
	}
};