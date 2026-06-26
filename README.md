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

    is a UI-SPA framework based on React Router 7.

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

        npm create vite

            and choose NextJS for framework,
            and Typescipt for Variant,
            and None/Bootstrap/TailWind for CSS.

    NextJS Routing

        We have two routers to handle routing in nextJS

        Both routers depend on file system based routing that means 
                    based on the physical path of the component, the routing path is assumed.

        AppRouter       engages for server side (by default)
                        
                        the 'app' folder is the root folder that is expected to contain folders and components, and each folder inside the 'app' maps to one path same as the folder name
                        
                        Assuming the server is running on localhost:8888

                        'app'               is considered as the context-root 'http://localhost:8888/'
                        'app/emps'          is considered as  'http://localhost:8888/emps'
                        'app/depts'         is considered as  'http://localhost:8888/depts'
                        'app/emps/dashbord' is considered as  'http://localhost:8888/emps/dashboard'

                        Each folder including 'app' can have
                            layout.tsx      as the layout of that component
                            error.tsx       to serve as the error content of the component
                            page.tsx        to serve the content of the component

                        All these components are consedered as server-side components by default.

        PageRouter      engages for client side (by default)

                        the 'pages' folder is the root folder for PageRouter
                        each file of the pages folder is mapped to a url

                        pages/emps.tsx          http://localhost:8888/emps
                        pages/depts.tsx         http://localhost:8888/depts
                        pages/projects.tsx      http://localhost:8888/projects

                        All these components are consedered as client-side components by default.

        Conflict Resolution

                        1. In real-time, we will NOT engage both routers in the same application.
                            So, no question of conflict.(99% only AppRouter is used)

                        2. But if done (If both AppRouter and PageRouter are both engaged in the same app)
                            AppRouter has priority over PageRouter.
                            Only when a resource is not found on AppRouter, PageRouter is asked for the resource.

        An anology for pathmappings or file-based routing.
     
            hr-app
                |- public       is used to hold all static files like images, videos ..etc.,
                |- src
                    |-app                   is refered to the context-root ("/")
                        |-global.css        is the global style sheet (equivalent to 'index.css' in reactjs)
                        |-layout.tsx        root-layout. And layout controls the structure of the page
                        |-error.tsx         provides the error-content of the page.
                        |-page.tsx          provides the content of the root-page.
                        |
                        |-departments       is accessable as /departments
                        |   |-page.tsx      provides the content of the departments-page.
                        |
                        |-employees         is accessable as /employees
                        |   |-layout.tsx 
                        |   |-page.tsx      provides the content of the employees-page.
                        |   |-list          is accessable as /employees/list
                        |   |   |-page.tsx  provides the content of the employees-list-page.
                        |   |-save          is accessable as /employees/save
                        |   |   |-page.tsx  provides the content of the employees-save-page.
                        |
                        |-projects          is accessable as /projects
                        |   |-page.tsx      provides the content of the projects-page.
                        |
                        |-api
                            |-route.ts      will be a rest api responding to /api
                            |-depts
                                |-route.ts  will be a rest api responding to /api/depts
                            |-emps
                                |-route.ts  will be a rest api responding to /api/emps
                    |                
                    |- lib                  put all .ts files holding bussiness logic
                    |- ui                   put all .tsx files for reusable components. 
                    |                       (not directly accessable using any url, 
                    |                       ment to be used in routed-components)
                    |
                    |-pages
                        |-about.tsx         http://localhost:3000/about
                        |-home.tsx          http://localhost:3000/home
                        |-contactUs.tsx     http://localhost:3000/contactUs
                        |-api
                            |-titles.ts     will be a rest api responding to /api/titles
                            |-desgs.ts      will be a rest api responding to /api/desgs

    AppRouter vs PageRouter Comparision

         Features            AppRouter               PagesRouter
        ----------------------------------------------------------        
        Components          By default              By Default
                            Server Components       Client Components

                            "use server" and "use client" instructions can change
                            the default behaviour of a component

        Layout              Layouts can be          Layouts are static
                            nested and dynamic

        Priority            App router has higher   PagesRouter has the 
                            priority                fallback priority.
        
        File-based          Folders are             Files are directly mapped
        routing             mapped as routes        as routes.
        
    App Router Folder Naming Conventions / Rules

        1. folderName           is mapped to a route segment
            
            app
            |- depts
                |-page.tsx            /depts
                                
        2. [folderName]         is mapped to a url-parameter

            app
            |- welcome
                |-[userName]
                    |-page.tsx          /welcome/vamsy
                                        /welcome/suresh
                                        /welcome/murhty
                                        ...etc.,
        
        3. [...folderName]       is mapped to a list of url-parameter

            app
            |- welcome
                |-[...userNames]
                   |-page.tsx           /welcome/vamsy
                                        /welcome/suresh/vamsy
                                        /welcome/murthy/vamsy/suresh
                                        ...etc.,

        4. [[...folderName]]      is mapped to a optional list of url-parameters

            app
            |- welcome
                |-[[...userName]]
                   |-page.tsx           /welcome
                                        /welcome/vamsy
                                        /welcome/vamsy/murthy
                                        /welcome/vamsy/murthy/suresh
                                        ...etc.,
        
        5. _folderName           is not mapped to any route or url, it is consedered as a private folder

        6. (folderName)          is not mapped to any route or url, it is used to group urls for organized pattern.

            app
            |- (adminRoutes)
            |      |-addUser
            |      |   |-page.tsx      /addUser
            |      |-userList
            |      |   |-page.tsx      /usersList
            |
            |- (consumerRoutes)         
            |      |-addOrder
            |      |   |-page.tsx      /addOrder
            |      |-invoicesList
            |      |   |-page.tsx      /invoiceList
            |
            |- (employeeRoutes)
            |      |-addProduct
            |      |   |-page.tsx      /addProduct
            |      |-inventory
            |      |   |-page.tsx      /inventory
    
    Integrating Bootstrap On NextJS

        Bootstrap is a responsive web design library
        Bootstrap-Icons is a resposnive bootstrap friendly icon library.

        npm i bootstrap bootstrap-icons

        import the css and js files from bootstrap and bootstrap0icons in the layout.tsx file.


