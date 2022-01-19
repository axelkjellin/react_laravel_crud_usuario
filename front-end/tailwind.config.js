const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        '12': 'repeat(12, minmax(0, 1fr))',
      },
      gridRow: {        
        'span-11': 'span 11 / span 11',      
        'span-10': 'span 10 / span 10',      
      },
      screens: {
        'sm': {'max': '800px'},
        // => @media (min-width: 640px and max-width: 767px) { ... }
  
        'md': {'min': '800px', 'max': '1400px'},
        // => @media (min-width: 1024px and max-width: 1279px) { ... }
  
        'lg': {'min': '1400px'},
        // => @media (min-width: 1280px and max-width: 1535px) { ... }
      }
    },
  },
  plugins: [
    plugin(function({ addUtilities, addComponents, e, prefix, config }) {
      // Add your custom styles here
    }),
  ],

}