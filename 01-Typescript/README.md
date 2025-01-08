Typescript
--------------------------------------------------------------------------------------------

    Typescript = JavaScript + Types

    Lab Setup

        tsc         typescript compiler

        compiling .ts into .js is called transpelling

    Creating a project:

        npm init -y
        npm i typescript

        npx tsc --init

        npx tsc filename.ts 

    Datatypes

        number
        string
        boolean
        bigint
        symbol

    Special Datatypes

        any
        unknown
        void
        undefined
        null

    Standard tsconfig

        {
            "compilerOptions": {
                "module": "commonjs",
                "esModuleInterop": true,
                "target": "es6",
                "moduleResolution": "node",
                "sourceMap": false,
                "outDir": "dist"
            },
            "lib": ["es2015"]
        }

    functions

        function funName(param1:type,param2:type) : returntype {

        }

        const funName = function(param1:type,param2:type) : returntype {

        }
        
    OOP

        interface
        class
        aliases
        enums


