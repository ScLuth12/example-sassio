/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        'primary': '#32C89A',
        'primary1': '#183553',
        'primary2': '#183553',
        'primar' : '#1732A5',
        'primary3': '#4E5790',
        'primary4': '#F4F7FE',
        'merahi': '#FEEDF5',
        'ijo' : '#D4F8F8',
        'kuning' : '#FFF3DD',
        'placehl' : '#303030',
        'cyan' : '#31C89B',
      },
      animation: {
        'spiner': 'spin 10s linear infinite',
      },
    },
  },
  plugins: [],
}

