/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  
  prefix: "",
  theme: {
    extend: {
      colors: {
        primary : "#ec972e" ,
        primary1 : "rgba(236, 151, 46, 0.1)" ,
        primary2 : "rgba(236, 151, 46, 0.2)" ,
        primary3 : "rgba(236, 151, 46, 0.3)" ,
        primary5 : "rgba(236, 151, 46, 0.5)" ,
        primary6 : "rgba(236, 151, 46, 0.6)" ,
        primary7 : "rgba(236, 151, 46, 0.7)" ,
        primary8 : "rgba(236, 151, 46, 0.8)" ,
        primary9 : "rgba(236, 151, 46, 0.9)" ,
      }
    },
    container: {
      center: true,      
      screens: { },
      extend: {
        colors : {
          primary : ""
        }
      }
    },
  },
  

  mode: 'jit',
}