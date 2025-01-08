Node JS Intro
-----------------------------------------------------------------

    is an non-gui runtime for JavaScript.

    This allows javascript programs or application to execute in a standalone mode. This allowed to create
    various tools using javascript, tools like compilers, build tools, code analyzers, servers, testing tools ..et.,

    Javascript can be used for both server-side progamming and client side programming.

    We are using javascript to create power SPA using frameworks like angular and react to execute in a browser (client).

    We can now use javascript to develop dynamic-web-apps or rest api using frameworks like expressjs ..etc., to run on NodeJS.

    node --version

    Node comes with a build tool called Node Package Maanger (npm).

    Creating a Node Project
    ------------------------------

        md app-name
        cd app-name
        npm init -y

        a build file called 'package.json' is created. This contains project meta-data, list of
        dependencies and a few scripts

        npm scripts - 
                'start'     used to start executing a node project.

                npm start

                'test'      used to start the testing script of our project

                npm test

                'abcd'      can be a custom script.

                npm run abcd

    Managing Dependencies
    ----------------------------------

        npm i package-name      is sued to isntall thrid party packages
                                that package (library) is sownloaded into ./node_modules

                                npm i jquery
                                npm i bootstrap

        npm i -g package-name   is used to isntall thrid party packages globally in that machine
                                that package (library) is sownloaded into 'node_modules' under current user folder
                                tools like typscript compiler or angular cli ...etc., are installed globally

                                C:\Users\<currentUserName>\AppData\Roaming\npm\node_modules

        npm uninstall package-name

        npm i                   will reinstall all the packages listed in 'package.json'

    JavaScript Modules
    ------------------------------------------

        A modules is a store of reusable shared artifacts of a project.

        Java has packages to play the role of modules
        .NET languages have namespaces to play the role of modules

        Javascript has no built-in uspport for modules concept until ES6

        Earlier to ES6
            1. NodeJS introduced require.js, that manages each .js file as a module called requireJS-modules
            2. CommonJS is also a library to manage each .js file as a module called common-modules
        
        ES6 has introduced built-in support for modules, here each .js file is a module called ESM (ECMAScript Modules)

        by default nodejs is set to use requirejs, but we will override it to use ESM

            in package.json, 'type":"commonjs"  to use commonjs moduels
            in package.json, 'type":"module"  to use ESM

        import keywoerd is used to import any artifact from a .js file into another
        export keyword is used to share an artifact from a .js file.

        artifact that are not marked as export can not be imported.
        
    NodeJS Built-In Modules
    -------------------------------------

        fs   FileSystem
                readFile(fileName,data, (err,data) => { } )
                    read data from file asynchronously.
                    on failure, data will be null and err holds the error
                    on success, data will hold the content of the file and err will be null

                writeFile(fileName,data, err => { } )
                    write data into file asynchronously.
                    on failure, err holds the error
                    on success, err will be null

                var content = readFileSync(fileName)
                    read a file synchronously, throws an error on failure, returns the content on success

                writeFileSync(fileName,data)
                    write a file synchronously, throws an error on failure

        url 

            var parsedURL = url.parse('http://localhost:8080/default.htm?year=2017&month=february');

            parsedURL.host ---> 'localhost:8080'
            parsedURL.pathname ---> '/default.htm'
            parsedURL.search ---> '?year=2017&month=february'

            parsedURL.query ---> { year: 2017, month: 'february' }

        http

            is sued to create our own http server.

            cosnt requestHandler = (req,resp) => {
                //the request can be parsed and resp can be filled in 
            }

            const PORT = 9999;
            var server = http.createServer( requestHandler );
            server.listen(PORT);

            req.url -------> the current url from the client
            req.body    -------> to access the requst body

            resp.writeHead(httpStatusCode,headersAsJsonObj);
            resp.write(contentOrResponseBody);
            resp.end(); ----------> seal the resp and sends it to the client

    ExpressJS
    --------------------------------------------

        is a framework used to develop rest-api or dynamic web applications.

        var app = express();   //creates an http server.

        app.use(interceptor);    //configs a interceptor to be executed on every incomiong req or outgoing resp.

        app.get("url", reqHandler );
        app.put("url", reqHandler );
        app.post("url", reqHandler );
        app.delete("url", reqHandler );

        app.listen(portNumber, () => { //execute on successful start of the server */ } );

        cors library and bodyPraser library as interceptors.

        npm i body-parser cors express

        Request Object Properties form expressJS
            url         retrives the current url
            params      retrives the queryParams and pathParams
            body        retrives the req body

        Response Object API from expressJS
            status(statusCode)
            contentType(contentType)
            header("headerName","headerValue")
            send(responseBody)

        