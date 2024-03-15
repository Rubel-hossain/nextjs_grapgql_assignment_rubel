import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    // colors: {
    //   primary: '#FFC93E',
    //   secondary: '#111D5E',
    //   accent: '#2563EB',
    //   gray: '#617187',
    //   gray2: '#F9FAFB',
    //   background: '#CDCDCD'
    // },
    fontSize: {
      hero: '140px',
      hero_2:'100px',
      hero_3:'60px',
      heading_1: '48px',
      heading_2: '24px',
      heading_3: '20px',
      heading_4: '18px',
      heading_5: '16px',
      heading_6: '14px',
      heading_7: '12px'
    },
    extend: {
      maxWidth: {
        '8xl': '1320px'
      },
      colors: {
        primary: '#FFC93E',
        secondary: '#111D5E',
        accent: '#2563EB',
        gray: '#617187',
        gray2: '#F9FAFB',
        border_color: '#CDCDCD'  
      }
      // backgroundImage: {
      //   'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      //   'gradient-conic':
      //     'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      // },
    },
  },
  plugins: [],
}
export default config
