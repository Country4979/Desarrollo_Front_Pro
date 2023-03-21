module.exports = {
    entry: {
        index: './src/index.js',
        app: './src/app.js'
    },
    mode: 'development',
    output: {
        filename: 'bundle.js',
        path: __dirname + '/dist',
    },

};