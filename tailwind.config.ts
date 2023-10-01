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
      },
      
    },
    
    borderRadius: {
      'lg': '2.5rem',
    }
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}
export default config
