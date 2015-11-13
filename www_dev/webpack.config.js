module.exports = {
    entry: "./index.js",
    output: {
        path: __dirname + '/../static/',
        filename: "script.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    }
};
