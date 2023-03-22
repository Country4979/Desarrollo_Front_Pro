module.exports = {
    entry: {
        home: './src/home.js',
        projectsPage: './src/projectsPage.js'
    },
    mode: 'development',
    devtool: 'inline-source-map',
    output: {
        filename: '[name].bundle.js',
        path: __dirname + '/dist',
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader',] //Este orden es importante, de derecha a izquierda.
            }
        ]
    }
};