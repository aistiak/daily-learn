# webpack 

- what is webpack 
- what are the use cases 
- how is it configured 
- core concepts 
- polyfill 
### webpack 
- webpack is a module bundler 
- we can interact with webpack from cli and api 
- `npm install webpack webpack-cli --save-dev`
- it is more convenient to use a config file rather then cli as it comes with more options 
- `webpack.config.js` is the default file name for webpack config 
- from version 4 webpack does not require a config file as it expects a certain folder structure convention of source code 
- webpack only manipulates import export parts of es6 code for other features we have to use bable loader 


### core concepts 

1. Entry 
2. Output 
3. Loaders 
4. Plugins 
5. Mode 
6. Browser Compatibility 

_Entry_ 

- an entry point indicates where webpack should start bundling 
- it figures out the dependencies and builds a dependency graph 
-  `webpack.config.js`

    ```
    module.exports = {
        entry: './path/to/my/entry/file.js',
    };

    ```

_Output_ 

- tells webpack where to put the bundled files and what to name them 
- by default it is `./dist/main.js` 
- `webpack.config.js`
    
    ```
    const path = require('path');

    module.exports = {
        entry: './path/to/my/entry/file.js',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'my-first-webpack.bundle.js',
        },
    };
    ```


_Loaders_

- by default webpack only understands JS and JSON files 
- loaders allow webpack to process other types of files and convert them into modules 
- an example is `import` of `.css` files 
- loaders have two properties `test` and `use` 
- `test` defines which files should be transformed and `use` defines which loaders to use 
- `webpack.config.js`

    ```
    const path = require('path');

    module.exports = {
        output: {
            filename: 'my-first-webpack.bundle.js',
        },
        module: {
            rules: [{ test: /\.txt$/, use: 'raw-loader' }],
        },
    };
    ```


_Plugins_

- plugins can performs winder range to tasks compared to loaders 
- in order to use a plugin it needs to be required and and object needs to be created with `new` , and extend the plugins array 
- `webpack.config.js`


    ```
    const HtmlWebpackPlugin = require('html-webpack-plugin');
    const webpack = require('webpack'); //to access built-in plugins

    module.exports = {
        module: {
            rules: [{ test: /\.txt$/, use: 'raw-loader' }],
        },
        plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
    };
    ```
- `html-webpack-plugin` generates an HTML file and automatically inject all the dependencies 


_Mode_

- mode can be `development` or `production` or `none`
- by default its `production` 
- each mode has different level of optimization 

_Browser compatibility_

- Webpack supports all browsers that are ES5-compliant



# polyfill 

- In web development, a polyfill is code that implements a feature on web browsers that do not support the feature