/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: 'jit',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './layout/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './page-components/**/*.{js,ts,jsx,tsx}',
    './utils/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      xl: '1280px',
      smOnly: { max: '767.98px' },
      mdOnly: { min: '768px', max: '1279.98px' },
      notXl: { max: '1279.98px' },
    },
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1.25rem',
          sm: '1.25rem',
          md: '2rem',
          xl: '2rem',
        },
      },
      backgroundImage: {
        cardBg:
          'linear-gradient(290.55deg, #2565D0 15.48%, #2769B3 53.63%, #3CC9CD 93.52%, #42E8E0 102.2%)',
        contacts: "url('/images/contacts.svg')",
      },
      colors: {
        dark: '#212B36',
        primary: '#2565D0',
        hover: '#0054E0',
        secondary: '#18B2A3',
        gray_light: '#637381',
        white_light: '#F8F8F8',
        blue_light: '#DAE3FF',
        disabled: '#D6DFE6',
        white_gray: '#F5F6F9',
        error: '#F43F5E',
      },
      fontFamily: {
        sans: ['Nunito Sans', 'sans-serif'],
      },
      boxShadow: {
        sticky: 'inset 0 -1px 0 0 rgba(0, 0, 0, 0.1)',
        header: '1px 2px 8px rgba(37, 101, 208, 0.14)',
        card: '1px 2px 8px rgba(37, 101, 208, 0.14)',
        card_hover: '6px 8px 12px rgba(37, 101, 208, 0.18)',
        button_hover: '1px 2px 8px rgba(255, 255, 255, 0.54)',
      },
      animation: {
        enter: 'enter 200ms ease-out',
        'slide-in': 'slide-in 1.2s cubic-bezier(.41,.73,.51,1.02)',
        leave: 'leave 150ms ease-in forwards',
      },
      keyframes: {
        enter: {
          '0%': { transform: 'scale(0.9)', opacity: 0 },
          '100%': { transform: 'scale(1)', opacity: 1 },
        },
        leave: {
          '0%': { transform: 'scale(1)', opacity: 1 },
          '100%': { transform: 'scale(0.9)', opacity: 0 },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@headlessui/tailwindcss')],
};
