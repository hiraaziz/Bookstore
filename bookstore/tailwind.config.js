/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '320',
      'sm': '450px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    fontFamily:{
      'monserrat': ['Montserrat', 'sans-serif'],
      'gloock': ['Gloock', 'sans-serif'],
      'poppins' : ['Poppins', 'sans-serif']
    },
    extend: {
      fontSize:{
        base: '16px',
        lg: '12px'
      },
      colors:{
        'light': {
          'primary': '#E54B4B',
          'secondary': '#FFFFFF',
          'textlight': '#727272',
          'text': '#1A1A1A',
        },
        'dark': {
          'primary': '#ffa8a8',
          'secondary': '#1A1A1A',
          'textlight': '#e54b4b',
          'text': '#F7FAFC',
        },
      },
      spacing:{
        '05': '500px',
        '400': '40%',
        '500': '50%',
        '600': '60%',
        '700': '70%',
        '800': '80%',
        '900': '90%',
        '1000': '100%'
      }
    },
  },
  plugins: [],
}
