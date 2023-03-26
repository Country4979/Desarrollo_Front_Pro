/*  common Js   /   ESModules
    require         exports-imports
*/
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        home: './src/home.js',
        projectsPage: './src/projectsPage.js',
        404: './src/404.js',
        500: './src/500.js'
    },
    mode: 'development',
    devtool: 'inline-source-map',
    output: {
        filename: '[name].[chunkhash].bundle.js',
        path: path.resolve(__dirname, 'dist'), //path: __dirname + '/dist',
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader',] //Este orden es importante, de derecha a izquierda.
            },
            {
                test: /\.(png|jpg|gif)$/i,
                type: 'asset/resource'  //Nos ahorramos instalar loaders para las imágenes. Usa no interno.
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/templates/index.html',
            filename: 'home.html',
            chunks: ['home']
        }),
        new HtmlWebpackPlugin({
            template: 'src/templates/projects.html',
            filename: 'projects.html',
            chunks: ['projectsPage']
        }),
        new HtmlWebpackPlugin({
            template: 'src/templates/404.html',
            filename: '404.html',
            chunks: ['404']
        }),
        new HtmlWebpackPlugin({
            template: 'src/templates/500.html',
            filename: '500.html',
            chunks: ['500']
        }),
    ],
};