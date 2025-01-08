React JS Intro
--------------------------------------------------------------------

    is a javascript based SPA framework.

    SPA - Single Page Application. is a web application that has only one html page
    and the entire content of the page is managed and generated on the client machine.

    Static WebSite
        a folder having pre-written .html documents hosted on a HTTP SERVER.

    Dynamic Web Applications

        Http-Server                                  Client/Browser

            Server Side Programs
            (servlets/jsp/php/aspx/razor..etc.,)
                            <----------------REQ---------
                        generate html dynamically
                            ------ (generated html) RESP ------>
                            
                            <----------------REQ---------
                        generate html dynamically
                            ------ (generated html) RESP ------>

    Single Page Applications

        Http-Server                                  Client/Browser

            spa-bundle
            (index.html + .js)
                            <----------------REQ---------
                            ------ (spa-bundle) RESP ------>    index.html along with the JS will be loaded

                                                                any form submition or any event or any link
                                                                are all handled by the JS on the clietn itself.

                                                                the JS on the client will generate html dynamically
                                                                and will replace the content of the index.html
                                                                as and when neeed.
        Application Server
            
            rest-api        <--------.json/.xml------------>    spa-bundle will call the rest-api for data operations.

    Create React JS Application

        npx create-react-app app-name

        or
        
        npm create vite@latest my-app -- --template react
        npm i

    React JS Components

        A component is a reusable isolated unit that forms the html-extension of React.

        html-extension allows us to create our own html elements and attributes.

        The html-element that we create using react is called a Component.

        1. Class Components
        2. Function Components

        Class Component 
            is a javascript class that is extended from React.Component class.

            class Dashboard extends React.Component{
                constructor(props){
                    super(props);
                    this.state = {};
                }

                render(){
                    return (
                        /*an html element*/
                    );
                }
            }

            <Dashboard></Dashboard>

        Function Component

            is a javascript function that accpets the props as a parmeter and returns an html-element.

            const Banner = (props) => (/* html element */ );

            <Banner></Banner>

        JSX - JavsScript eXtended MarkUp Language / JavaScript XML.

            is a amolgamation of javascript + html.

            in other words JSX is javascript embeded with HTML.

            This is deviced to eliminate a lot of boiler plate coding while DOM manipulation is written.

            .js

                let userName = "Vamsy";
                let pObj = document.createElement("p");
                pObj.innerText = `Hello ${userName}! How Are You?`;
            
            .jsx

                let userName = "Vamsy";
                let pObj = <p>{userName}</p>;

            .js

                let friends = ['Vamsy','Rahul','Varma','Vijay'];
                let frdList = document.createElement("ol");
                
                for(let f of friends){
                    let friendItem = document.createElement("li");
                    friendItem.innerText = f;
                    frdList.append(friendItem);
                }

            .jsx

                let friends = ['Vamsy','Rahul','Varma','Vijay'];
                let frdList = (
                    <ol>
                        { friends.map( f => <li>{f}</li> ) }
                    </ol>
                );

            Rules

                1. "class" attribute is not to be used, instead 'className' is to be used.
                2. the html elements must be always written in lower-case 
                3. the entire jsx is case-sensitive.
                4. the function component or the 'render()' function of a class component can return only one top-most element.

                const Banner = () => <div></div>; 
                const Header = () => (
                    <header> 
                      <section>
                      
                      </section> 
                    </header>
                 ) ;

    Class Component

        From React.Component class, 'state','setState()','render()','componentDidMount()','componentDidUpdate()'
        and a few more life cycle methods are inhereted by a class Component.

        state       is the field of a Class Component that holds all the data to be managed by that component.
                    state is continuosly monitored and as and when the state is modified, the 'render()' method is invoekd.
                    state is immutable, state is only replacable using 'setState()' method.

        render()    is the method that returns the DOM to be displayed by this component.
                    we developes ovveride the 'render()' method to decide on the DOM.

        setState()  can take a full or partial state and replace the existing state.

    Function Component vs Class Component

        function component has no 'state' or any other life cycle methods as compared to the class Component.
        And hence, Function Components are also called state-less components.
    
    'props' is short for properties. 'props' carry data from a parent component to a child component.
            props can be passed as attributes on to the child component tag from parent component.

Shadow DOM / Virtual DOM

    is a in-memory copy of DOM managed by the react.

    Any change to the actual DOM will be very costly as it is directly linked with the screen.

    But changes to shadow DOM are much cheaper as it is not going reflect directly on the screen.

    Each time 'state' is modified, the shadow DOM is tweeked accordingly. Once all the changes
    on the shadom DOM is done, shadow DOM is superimposed on the actual DOM and only the final changes
    are shipped to the actual DOM.

    An attribute called 'key' is maintaiend on repitative DOM entries, to uniquly
    identify that DOM entry and mange changes.

ReactJS on Typescript

    npm i -g typescript

    npx create-react-app app-name --template typescript

    or
        
    npm create vite@latest app-name -- --template react-ts

Life Cycle Methods Of A Component

    constructor()
        |
        ↓
        render()
            |
            ↓
            componentDidMount()     //is used to execute any task after the first rendering..!
                        
                        /************************************************/
                            setState() has to get invoked
                            either in the componentDidMount()
                            or due to any event handler
                        /************************************************/
                                    |
                                    ↓
                                    render()
                                        |
                                        ↓
                                        componentDidUpdate()  //is used to execute any task after every rendering..!
        
ReactJS Hooks

    Hook is a special function that provides features to a function component.

    useState        will add state feature to a function component.

                    let [getter,setter] = useState(initalValue);

                    let [x,setX] = useState(0);

                    use 'x' to read the value
                    use 'setX' to change the value

    useEffect       will add life cycle feature to the function component

                    useEffect(callBack)

                        the callBack is executed after every rendering...!

                    useEffect(callBack,[])
                        the array here indicates dependencies.
                        and here dependencies are empty.
                        the callBack is executed only one after first rendering...!

                    useEffect(callBack,[feild1,field2])
                        the array here indicates dependencies.
                        and here field1 and field2 are dependencies
                        the callBack is executed after every rendering... if there a change in value of
                        field1 or field2.

NextJS

    is a UI framework based on ReactJs.

    Features
        Routing     is used for navigating from one component to another.

                    file system based routing is provided on top of
                    server components. These router support layouts,
                    error rendering, state rendering ..etc like features.

        Rendering   Server Components and Client Component

                    Server components will render on the server side and the 
                    cached html content is passed to the client.

                    Where as , client components can be re-rendered on the
                    client as well.

                    Server Components are employed when api-calls or 
                    authentication  or any other operation that invlove data
                    privacy or secracy has to be concerned.

                    Client Components are engaged where a user - interaction,
                    life cycle methods of component snd event handling for
                    a responsive application are needed.

        Data Feteching

                    supports aynsc/await server component and flexible fetech api
                    to talk to rest-api and perform data operations

        Styling

                    supports a vriety of styling options that include CSS, TailWind CSS,
                    CSS-in-JS.

        Optimization

                    All static resources liek images, fonts, and non static resource like
                    scripts are optimized to improve the rendering time and performence.

        Typescript

                    Supports typescript for a type-safe application building.

    Createing a NextJS application

        npx create-next-app app-name

    NextJS Routing

        We have two routers to handle routing in nextJS

        Both routers depend on file system based routing that means based on the physical path of the component, the routing
        path is assumed.

        AppRouting      engages for client side routing
                        
                        the 'app' folder is the root folder that is expected to contain folders and components, and each
                        folder inside the 'app' maps to one path same as the folder name
                        
                        Assuming the server is running on localhost:8888

                        'app'               is considered as the context-root 'http://localhost:8888/'
                        'app/emps'          is considered as  'http://localhost:8888/emps'
                        'app/depts'         is considered as  'http://localhost:8888/depts'
                        'app/emps/dashbord' is considered as  'http://localhost:8888/emps/dashboard'

                        Each folder including 'app' can have
                            layout.tsx      as the layout of that component
                            error.tsx       to serve as the error content of the component
                            page.tsx        to serve the content of the component


        PagesRouting    engages for server side routing

                        the 'pages' folder is the root folder for server side routing.
                        each file of the pages folder is mapped to a url

                        pages/emps.tsx      http://localhost:8888/emps
                        

        Api Routing     pages/api                  is mapped to http://localhost:8888/api/* 
                        pages/api/emps.ts          is mapped to http://localhost:8888/api/emps          GET/PUT/POST/DELETE
                        pages/api/emps/create.ts   is mapped to http://localhost:8888/api/emps/create   GET/PUT/POST/DELETE 
                        pages/api/emps/[empId].ts  is mapped to http://localhost:8888/api/emps/101      GET/PUT/POST/DELETE 
                        pages/api/emps/[...prm].ts is mapped to http://localhost:8888/api/emps/101      GET/PUT/POST/DELETE 
                                                   is mapped to http://localhost:8888/api/emps/a/b/c    GET/PUT/POST/DELETE 
                        
                        pages/api/emps/[[...prm]].ts 
                                                   is mapped to http://localhost:8888/api/emps          GET/PUT/POST/DELETE 
                                                   is mapped to http://localhost:8888/api/emps/a        GET/PUT/POST/DELETE 
                                                   is mapped to http://localhost:8888/api/emps/a/b      GET/PUT/POST/DELETE 
                                                   is mapped to http://localhost:8888/api/emps/a/b/c    GET/PUT/POST/DELETE 
                                                   
        The request handler method

                        is used to handle an incoming requet and issue a response.

                        const handler = async (req:NextApiRequest,res:NextApiResponse) => {

                            /*
                                req.method  ----> GET/PUT/POST/DELETE 
                                req.body    ----> a request body in json form
                                req.cookies ----> gives access to cookies of the app
                                req.query   ----> gives access to both path params and query string params
                            */

                            /*
                                res.status(statusCode)
                                res.json(jsonResponseBody)
                                res.send(statusCode,jsonResponseBody)
                                res.send()
                            */

                        }

    hr-app
        |- public       is used to hold all static files like images, videos ..etc.,
        |- src
            |-app                   is refered to the context-root ("/")
                |-global.css        is the global style sheet (equivalent to 'index.css' in reactjs)
                |-layout.tsx        root-layout. And layout controls the structure of the page
                |-page.tsx          provides the content of the page.
                |
                |-departments       is accessable as /departments
                |   |-page.tsx
                |
                |-employees         is accessable as /employees
                |   |-layout.tsx 
                |   |-page.tsx
                |   |-list          is accessable as /employees/list
                |   |   |-page.tsx
                |   |-save          is accessable as /employees/save
                |   |   |-page.tsx
                |
                |-projects          is accessable as /projects
                |   |-page.tsx    
                |
            |- lib                  put all .ts files holding bussiness logic
            |- ui                   put all .tsx files for components.
            |-pages
                |-api               represents rest-api
                    |-emps.js       http://localhost:3000/api/emps
                    |-depts.js      http://localhost:3000/api/depts
                    |-projs.js      http://localhost:3000/api/projs
    