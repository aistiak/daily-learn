- what is bable 
- how to use it with nodejs
- how to use it with webpack 


## eslint 
- bable is a compiler / transpiler 
- it lets us use latest featurs of javascript in out node project 
- its dependencies are `npm install --save-dev @babel/cli @babel/core @babel/preset-env` 
- bable configs are put in `.bablerc` file 

- sample `.bablerc` file 

  ```
    {
        "presets": [
            ["@babel/env", {
            "targets": {
                "node": "current"
            }
            }]
        ],
        "plugins": [
            "@babel/plugin-proposal-class-properties",
            "@babel/plugin-proposal-object-rest-spread"
        ]
    }
  ```
- running project with bable 

  ```

    "scripts": {
    +   "build": "babel index.js -d dist",
        "start": "npm run build && node dist/index.js"
    }

  ```

- with nodemon 
  ```
    "scripts": {
        "build": "babel index.js -d dist",
        "start": "npm run build && nodemon dist/index.js"
    }
  ```