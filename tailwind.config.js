/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          cyan: '#00D4FF',
          blue: '#0d6efd',
          green: '#B8FF3C',
          purple: '#6f42c1',
        },
        dark: {
          bg: '#0C0319',
          card: '#1a1d3d',
          'card-hover': '#252850',
        },
        text: {
          primary: '#FFFFFF',
          secondary: '#A0AEC0',
          muted: '#718096',
        },
        border: {
          DEFAULT: 'rgba(255, 255, 255, 0.1)',
          light: 'rgba(255, 255, 255, 0.05)',
        }
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(177.58deg, #d400ff 27.04%, #0f91e7 94.59%)',
        'gradient-dark': 'linear-gradient(135deg, #0a0e27 0%, #1a1d3d 100%)',
        'gradient-hero': 'linear-gradient(180deg, #1a1d3d 0%, #0f1123 100%)',
      },
      fontFamily: {
        'public-sans': ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}