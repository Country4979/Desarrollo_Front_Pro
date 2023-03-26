/*  common Js   /   ESModules
    require         exports-imports
*/
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        home: './src/home.js',
        projectsPage: './src/projectsPage.js'
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
    ],
};