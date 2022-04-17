
- what is typescript 
- what is `tsconfig`
- how does typescript work with webpack for a nodejs project 
- basics 

# typescript 
typescript provides all the features of js and an additional layer on top of those which is TypeScripts type system 

# what is a tsconfig file (tsconfig.json)
- the presence of a tsconfig file in a directory indicates that it is the root of a typescript project 
- it specifies the root files and compiler options required to compile the project 
- javascript projects can use jsconfig.json files which holds js compiler options 
-  by invoking `tsc` with no input file , it looks for tsconfig file to compile the project , the config file can be explicitly specified with -p / --project flag 
- example of tsconfig file 

    ```
    {
        "compilerOptions": {
            "module": "commonjs",
            "noImplicitAny": true,
            "removeComments": true,
            "preserveConstEnums": true,
            "sourceMap": true
        },
        "files": [
            "core.ts",
            "sys.ts",
            "types.ts",
            "scanner.ts",
            "parser.ts",
            "utilities.ts",
            "binder.ts",
            "checker.ts",
            "emitter.ts",
            "program.ts",
            "commandLineParser.ts",
            "tsc.ts",
            "diagnosticInformationMap.generated.ts"
        ]
    }
    ```


- files to be compiled can be specified by `files` , `include` or can be excluded with `exclude` 

    ```

    {
        "compilerOptions": {
            "module": "system",
            "noImplicitAny": true,
            "removeComments": true,
            "preserveConstEnums": true,
            "outFile": "../../built/local/tsc.js",
            "sourceMap": true
        },
        "include": ["src/**/*"],
        "exclude": ["node_modules", "**/*.spec.ts"]
    }

    ```

- base config files can be extended with `extends`

    ```
    {
        "extends": "@tsconfig/node12/tsconfig.json",
        "compilerOptions": {
            "preserveConstEnums": true
        },
        "include": ["src/**/*"],
        "exclude": ["node_modules", "**/*.spec.ts"]
    }

    ```
- Refs 
    - https://www.typescriptlang.org/docs/handbook/tsconfig-json.html#handbook-content 
    

