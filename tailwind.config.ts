import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      'gray-dark': '#1E1E1E',
      'gray-light': '#6B6B6B',
      'white': '#FFFFFF',
      'green':'#C7FDD0',
      'black': '#000000',
      'red': '#ff6961',
      'light-red':'rgba(255, 105, 97, 0.60)'
    },
  },
  plugins: [],
}
export default config
