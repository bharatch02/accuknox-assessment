/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pie-blue': '#5478ff',  // Add your custom color here
        'pie-light-blue': '#e1ebff',
        'failed': '#b9140e',
        'warning':'#fad733', 
        'na': '#cad7db',
        'pass' : '#19a45a',
        'critical': '#6e130a',
        'high' : '#ca2a1d' , 
        'medium' : '#ee9134' , 
        'low' : '#f4c644',
      },
    },
  },
  plugins: [],
}

