import { fontFamily } from 'tailwindcss/defaultTheme';
import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';
// import tailwindcssAnimate from 'tailwindcss-animate';

const config: Config = {
	darkMode: ['class'],
	content: ['./src/**/*.{html,js,svelte,ts}'],
	safelist: ['dark'],
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border) / <alpha-value>)',
				input: 'hsl(var(--input) / <alpha-value>)',
				ring: 'hsl(var(--ring) / <alpha-value>)',
				bark: {
					DEFAULT: 'hsl(var(--bark-background) / <alpha-value>)'
				},
				background: 'hsl(var(--background) / <alpha-value>)',
				foreground: 'hsl(var(--foreground) / <alpha-value>)',
				primary: {
					DEFAULT: 'hsl(var(--primary) / <alpha-value>)',
					foreground: 'hsl(var(--primary-foreground) / <alpha-value>)'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary) / <alpha-value>)',
					foreground: 'hsl(var(--secondary-foreground) / <alpha-value>)',
					dimmed: 'hsl(var(--secondary-dimmed) / <alpha-value>)',
					'foreground-dimmed': 'hsl(var(--secondary-foreground-dimmed) / <alpha-value>)'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive) / <alpha-value>)',
					foreground: 'hsl(var(--destructive-foreground) / <alpha-value>)',
					dimmed: 'hsl(var(--destructive-dimmed) / <alpha-value>)',
					'foreground-dimmed': 'hsl(var(--destructive-foreground-dimmed) / <alpha-value>)'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted) / <alpha-value>)',
					foreground: 'hsl(var(--muted-foreground) / <alpha-value>)'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent) / <alpha-value>)',
					foreground: 'hsl(var(--accent-foreground) / <alpha-value>)'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover) / <alpha-value>)',
					foreground: 'hsl(var(--popover-foreground) / <alpha-value>)'
				},
				card: {
					DEFAULT: 'hsl(var(--card) / <alpha-value>)',
					foreground: 'hsl(var(--card-foreground) / <alpha-value>)'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				xl: 'calc(var(--radius) + 4px)',
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			fontFamily: {
				sans: [...fontFamily.sans],
				mono: ['JetBrains Mono', ...fontFamily.mono],
				display: ['ShadowHand', ...fontFamily.sans]
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--bits-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--bits-accordion-content-height)' },
					to: { height: '0' }
				},
				'caret-blink': {
					'0%,70%,100%': { opacity: '1' },
					'20%,50%': { opacity: '0' }
				},
				jello: {
					'0%, 11.1%, 100%': { transform: 'translate3d(0, 0, 0)' },
					'22.2%': { transform: 'skewX(-12.5deg) skewY(-12.5deg)' },
					'33.3%': { transform: 'skewX(6.25deg) skewY(6.25deg)' },
					'44.4%': { transform: 'skewX(-3.125deg) skewY(-3.125deg)' },
					'55.5%': { transform: 'skewX(1.5625deg) skewY(1.5625deg)' },
					'66.6%': { transform: 'skewX(-0.78125deg) skewY(-0.78125deg)' },
					'77.7%': { transform: 'skewX(0.390625deg) skewY(0.390625deg)' },
					'88.8%': { transform: 'skewX(-0.1953125deg) skewY(-0.1953125deg)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'caret-blink': 'caret-blink 1.25s ease-out infinite',
				jello: 'jello 0.9s infinite'
			}
		}
	},
	plugins: [
		/*tailwindcssAnimate*/ plugin(function ({ addUtilities }) {
			addUtilities({
				'.outline-debug': {
					outline: '1px solid red !important'
				},
				'.bg-debug': {
					background: 'rgba(255, 0, 0, 0.1) !important'
				}
			});
		})
	]
};

export default config;
