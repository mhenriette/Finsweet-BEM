/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./*html'],
    theme: {
        extend: {
            fontFamily: {
                Roboto: ['Roboto']
            },
            colors: {
                ourblue: '#1D2130',
                lightviolet: '#E0E4FC',
                lightrose: ' #D798E126',
                lightblack: '#2B2E3C;',
                bordercolor: '#D8D8D8',
                indigocolor: '#6B7CFF',
                darkwhite: '#f8fafd',
                btnindigo: '#6b7cff'

            },
        },
    },
    // plugins: [],
    // safelist: [{
    //     pattern: /.*/,
    // }, ],
}