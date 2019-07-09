const path = require('path');

// check environment mode
var environment = process.env.NODE_ENV === 'production' ? 'production' : 'development';

function devProd(development, production) {
    if(environment === "development") {
        return development
    } else {
        return production 
    }
}

module.exports = {
    entry: {
        demo:  './src/index.ts',
        initial: './src/experiments/initial.ts',
        JAA:  './src/experiments/JAA.ts',
        JAB:  './src/experiments/JAB.ts',
        JAC:  './src/experiments/JAC.ts',
        JAD:  './src/experiments/JAD.ts',
        JSA:  './src/experiments/JSA.ts',
        JSB:  './src/experiments/JSB.ts',
        JSC:  './src/experiments/JSC.ts',
        JSD:  './src/experiments/JSD.ts',
        SAA:  './src/experiments/SAA.ts',
        SAB:  './src/experiments/SAB.ts',
        SAC:  './src/experiments/SAC.ts',
        SAD:  './src/experiments/SAD.ts',
        SSA:  './src/experiments/SSA.ts',
        SSB:  './src/experiments/SSB.ts',
        SSC:  './src/experiments/SSC.ts',
        SSD:  './src/experiments/SSD.ts',
    },
    devtool: devProd('inline-source-map', false),
    mode: devProd("development", "production"),
    // Typescript
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.ts$/,
                loader: 'string-replace-loader',
                options: {
                    search: "__API_URL__",
                    replace: devProd("http://localhost:9001/", "https://www.cs.technik.fhnw.ch/lostintransition/logger/"),
                }
            }
        ]

    },
    resolve: {
        extensions: [ '.ts', '.js' ]
    },
    output: {
        filename: '[name]/main.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        contentBase: './static'
    },
};

