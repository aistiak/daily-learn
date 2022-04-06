
- what is eslint
- how to use it with nodejs
- how to use it with webpack 


## es-lint 

- linter is a computer programm that analyzes source code and flags programming errors , formatting errors , bugs etc. 
- eslint is a popular JS linter 
- its dependencies are `npm install eslint --save-dev` 
- to initialize it use `eslint --init`
- it creates a `.eslintrc` file in the directory and holds the configs 
  
  ```
    {
        "rules": {
            "semi": ["error", "always"],
            "quotes": ["error", "double"]
        }
    }
  ```
- it can be added to package.json file 
  
  ```
    "scripts": {
        ...
        "lint": "eslint .",
        ...
    }   

  ```
