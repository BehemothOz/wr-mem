// https://github.com/gsoft-inc/craco/blob/master/packages/craco/README.md
module.exports = {
    style: {
        postcss: {
            plugins: [
                require('tailwindcss'),
                require('autoprefixer'),
            ],
        },
    },
}
