//ESTA ES LA CONFIGURACION DE WEBPACKS PARA QUE LA APLICACION TRABAJE CON TODOS LOS NAVEGADORES POR MEDIO DE BABEL 
//IMPORTANTE: PARA ENTENDER ESTE CODIGO SEGUIR EL CURSO DE WEBPACKS

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
    },
    resolve: {
        extensions: ['.js'],
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin(
            {
                inject: true,
                template: './public/index.html',
                filename: './index.html',
            }
        ),
        new CopyWebpackPlugin([{
                from: './src/styles/styles.css',
                to: ''
            }])
    ]
}

//PARA COMPILAR CUANDO HAY NUEVOS ARCHIVOS QUE AÑADIR (COMO EL index.HTML, styles.CSS, main.JS) dentro de la carpeta dist
// SE DEBE EJECUTAR LA COMPILACION CON: npm run build