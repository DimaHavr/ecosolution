import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '360px',
      md: '480px',
      lg: '768px',
      xl: '1280px',
    },
    fontSize: {
      xs: '0.75rem' /* 12px */,
      sm: '0.875rem' /* 14px */,
      base: '1rem' /* 16px */,
      md: '1.125rem' /* 18px */,
      lg: '1.25rem' /* 20px */,
      xl: '1.5rem' /* 24px */,
      '2xl': '2rem' /* 32px */,
      '3xl': '2.75rem' /* 44px */,
      '4xl': '5.25rem' /* 84px */,
      title: '3.5rem' /* 56px */,
      '9xl': '6.75rem' /* 108px */,
    },
    colors: {
      'primary-green': '#173D33',
      'medium-green': '#97D28B',
      'light-green': '#DCEFD8',
      'bg-menu': 'rgb(23, 61, 51, 0.75)',
      'light-red': '#D28B8B',
      'light-grey': '#EAEDF1',
      white: '#fff',
      grey: ' rgba(255, 255, 255, 0.25)',
      'mid-grey': '#92999C',
      'bg-overlay': '#173D3340',
      'pros-bg': 'rgba(248, 252, 255, 0.76)',
    },
    extend: {
      fontFamily: {
        firaSans: ['var(--font-firaSans)'],
        oswald: ['var(--font-oswald)'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
