/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
  	extend: {
  		fontFamily: {
  			circular: ['Circular Std', "sans-serif"],
  			'recoleta-alt': ['Recoleta', "sans-serif"]
  		},
  		colors: {
  			royalPurple: '#603F8B',
  			midnightPurple: '#230B34',
  			charcoalGray: '#383838',
  			darkSlateBlue: '#1E1E4B',
  			dimGray: '#656565',
  			grapePurple: '#532F82',
  			lavender: '#B6B6E5',
  			plumPurple: '#63428E',
  			gray: '#686868',
  			skyBlue: '#F8FAFD',
  			lavendarGray: '#E7EAF1',
  			violet: '#A16AE8',
  			blueGray: '#A3B1BF',
  			palePurple: '#EDDFFF'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}

