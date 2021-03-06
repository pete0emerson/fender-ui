// module.exports = {
//     entry: "./index.js",
//     output: {
//         path: __dirname + '/../static/',
//         filename: "script.js"
//     }
// };

var React = require('react');

module.exports = {
    entry: './index.js',
    output: {
    	path: __dirname + '/../static/',
        filename: 'script.js', //this is the default name, so you can skip it
        //at this directory our bundle file will be available
        //make sure port 8090 is used when launching webpack-dev-server
        // publicPath: 'http://localhost:8090/assets'
    },
    module: {
        loaders: [
            {
                //tell webpack to use jsx-loader for all *.jsx files
                test: /\.jsx$/,
                loader: 'jsx-loader?insertPragma=React.DOM&harmony'
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
}