/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Minimal, modern color palette
        'bg-primary': '#0a0a0a',
        'bg-secondary': '#111111',
        'bg-card': 'rgba(255, 255, 255, 0.03)',
        'text-primary': '#ffffff',
        'text-secondary': '#000000',
        'text-muted': '#000000',
        'accent-primary': '#ffb6e9', // light pink
        'accent-secondary': '#aeefff', // light blue
        'accent-tertiary': '#fff', // white
        'pink-main': '#ff6ec4', // main pink
        'blue-main': '#6ecbff', // main blue
        'white-main': '#ffffff',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'display': ['Poppins', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #ffb6e9 0%, #ff6ec4 50%, #aeefff 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #aeefff 0%, #ffb6e9 100%)',
        'gradient-tertiary': 'linear-gradient(135deg, #fff 0%, #ffb6e9 100%)',
        'wallet-bg': 'linear-gradient(135deg, #fff 0%, #ffb6e9 40%, #aeefff 100%)',
      },
      animation: {
        'float': 'float 8s ease-in-out infinite',
        'subtle-pulse': 'subtle-pulse 4s ease-in-out infinite',
        'fade-in': 'fadeIn 0.5s ease-in-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        subtlePulse: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [],
} 