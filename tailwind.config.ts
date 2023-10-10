import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/flowbite/**/*.js',
    './node_modules/flowbite-react/**/*.js',
    
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'skeleton-pattern': "url('/skeleton.svg')",
        'carousel-pattern': "url('/carousel-pattern.svg')",
      },
      backgroundPosition: {
        'right-top-4': 'right -8rem top -1.5rem',
      },
      colors: {
        'button-blue': 'var(--primary-color)',
        'button-green': 'var(--secondary-color)',
        'carousel-primary': 'var(--carousel-color-primary)',
        'carousel-secondary': 'var(--carousel-color-secondary)',
        'OurTeam-green': 'var(--secondary-color)',
        'underline-yellow': 'var(--underline-yellow)',
      },
      
    },
    
    borderRadius: {
      'lg': '2.5rem',
    }
  },
  corePlugins: {
    container: false
  },
  plugins: [
    require('flowbite/plugin'),
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen sm': {
            maxWidth: '640px',
          },
          '@screen md': {
            maxWidth: '768px',
          },
          '@screen lg': {
            maxWidth: '1280px',
          },
          '@screen xl': {
            maxWidth: '1400px',
          },
        }
      })
    },       
  ],

}
export default config
