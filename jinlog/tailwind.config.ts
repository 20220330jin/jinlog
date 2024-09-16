import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backgroundColor: {
        'custom-red': '#FF1828',
        'custom-red-hover':'#E31420',
        'custom-disabled-button':'#CCCCCC',
      },
      colors: {
        'custom-red': '#FF1828',
        'custom-blue': '#1E90FF',
        // Add more custom colors as needed
      },
    },
  },
  plugins: [],
}
export default config
