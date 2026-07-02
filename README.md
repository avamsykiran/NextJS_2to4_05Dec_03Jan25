NextJS
---------------------------------------------------------------------------------------

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

        npx create-next-app app-name

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
    
    NextJS Components and Content Generation

        As already discussed, Server Components and Client Components are two types of components supported. NextJS
        has a unique Content Generation strategy.

        1. Static Rendering (Server Side Rendering / Static Site Generation)
            Static rendering means the HTML is generated once (either at build time or cached in the background) and served to every single user instantly. It’s like a pre-printed newspaper.

                How it works: When a user requests a page, Next.js instantly hands them a fully pre-rendered HTML file from a Content Delivery Network (CDN).

                Pros: Blazing fast performance, incredible SEO, and zero database load per user request.

                Cons: Not great for highly personalized or real-time data (e.g., a user dashboard or a live crypto ticker).

                Best for: Landing pages, blogs, documentation, and product catalog pages.

        2. Server Components (React Server Component)
            In Next.js (App Router), every component is a Server Component by default. These components fetch data and render into HTML strictly on the server.

                How it works: The component runs on your server. If it needs data from a database, it fetches it directly (no API layer needed). It then streams the rendered UI to the browser.

                The Catch: They have zero browser footprint. They cannot use React state (useState), effects (useEffect), or browser APIs (like window or localStorage).

                Pros: Keeps your JavaScript bundle size tiny (external libraries used here stay on the server) and secures your API keys/database credentials.

                Best for: Data fetching, layouts, main page structures, and static content.

        3. Client Components (React Client Component)
            Client Components are the traditional React components you are used to. They are opted into by placing the "use client" directive at the very top of the file.

            How it works: Contrary to the name, Client Components are still pre-rendered into HTML on the server for SEO, but their JavaScript bundle is sent to the browser. Once in the browser, they "hydrate" and become interactive.

            Pros: Full access to interactivity, state, effects, and browser-only APIs.

            Cons: Increases the JavaScript bundle size that the user has to download, which can slow down initial page performance.

            Best for: Search bars, toggle switches, checkout forms, modals, and anything that requires a user click to change the UI.

        Automagical Strategy Switch 

            Next.js scans the component during the production build (next build). 
            It switches a route from Static to SSR if we use any Dynamic Features or make an Uncached Data Request.

            Triggers, that automatically switch a page to SSR from SSG:
                Reading user headers or cookies: If your component calls headers() or cookies(), Next.js realizes it cannot pre-render this at build time (since it needs the visitor's specific browser request).

                Reading URL search parameters: If a page component reads the searchParams prop (e.g., /?search=shoes), it has to render on demand.

        Forced Strategy Switch

            When we simply want to lock a page into SSR mode regardless of what code is written inside it, you can use Segment Config Options.

            // THIS FORCES THE PAGE TO BE SSR (Server-Side Rendered) NO MATTER WHAT
            export const dynamic = 'force-dynamic'

        Other override options

            export const dynamic = 'auto'           The default behavior. Next.js decides automagically
            
            export const dynamic = 'force-dynamic'  Forces SSR. The page is always rendered per request.  
            
            export const dynamic = 'force-static'   Forces Static Generation. It ignores cookies, headers, 
                                                    and uncached fetches, locking the page into a snapshot built during deployment.
            
            export const dynamic = 'error'          Mostly used for debugging. It forces the page to be static 
                                                    and throws an error if any dynamic feature accidentally 
                                                    creeps into the code.

        
        Rule of Thumb for Next.js
            Don't make everything an RCC. In Next.js, the best practice is to keep the layout, data fetching, and static structure in Server Components (RSC), and leaf out the specific interactive elements (like a search bar, a mobile menu toggle, or a submit button) into isolated Client Components (RCC).

        When to Use Server vs. Client Components

            Use Case / Requirement	                            Server Component (RSC)	    Client Component (RCC)
            =======================================================================================================
            Fetch data directly from databases, APIs, or SDKs	            Yes	                    No
            Keep sensitive credentials (API keys, tokens) secure	        Yes	                    No
            Render large HTML layouts with heavy npm packages               Yes (0KB Client JS)	    No            
            Attach UI event listeners (onClick, onChange, onSubmit)	        No	                    Yes
            Manage local UI state (useState, useReducer)	                No	                    Yes
            Hook into component life cycles (useEffect, useLayoutEffect)	No	                    Yes
            Access browser-exclusive APIs (window, localStorage, document)	No	                    Yes

        Component Composition: The Golden Rule

            1. Never shall we include a server component inside a client component.        
            2. If done so, the server-component loses its server-side processing ability.
            3. In senarios where a parent is a client-component and a child is a server component,
                the server-component must be passed as a 'prop' to the client-component. Meaning
                the client-component must be designed as a HOC.

    NextJS built-in Components

        1. <Link>
            What it replaces: The standard HTML <a> anchor tag.
            Use Case: Client-side navigation between pages in your application.
            Why use it: It automatically prefetches the linked page code in the background when the link enters the user's viewport. This makes transitions between pages feel instantaneous without a full browser reload.
        
        2. <Image>
            What it replaces: The standard HTML <img> tag.
            Use Case: Displaying any local or remote images.
            Why use it: It acts as an automatic image optimizer. It serves WebP/AVIF formats, resizes images dynamically based on device size, prevents layout shifts (CLS), and lazy-loads images by default so they only download when scrolled into view.

        3. <Script>
            What it replaces: The standard HTML <script> tag.
            Use Case: Loading third-party scripts like Google Analytics, Stripe, ads, or tracking pixels.
            Why use it: It gives you a strategy prop to control exactly when the script loads (e.g., lazyOnload for background tasks or afterInteractive for analytics), ensuring third-party scripts never block your main page from loading quickly.
        
        4. <Form>
            What it replaces: The standard HTML <form> tag (introduced in recent Next.js 15 updates).
            Use Case: Search bars, filters, and standard form submissions.
            Why use it: For GET forms (like search fields), it pre-fetches the results page and updates the URL without a full browser refresh, combining standard HTML form behavior with single-page app speed.
    
        5. <Suspense> (from React)
            Use Case: Handling loading states for dynamic data fetching.
            Why use it: You wrap slow data-fetching components inside <Suspense fallback={<LoadingSkeleton/>}>. Next.js will stream the rest of the page instantly while showing a loading state for just the slow component until it finishes rendering on the server.

            <Suspense fallback={<p>Please wait while loading...!</p>}>
                <ContactsList />
            </Suspense>
    
            <Suspense fallback={<LoadingSkeleton/>}>
                <ContactsList />
            </Suspense>
    
    NextJS Metadata API

        <Head />    to control the meta-data in reactjs 14 or earlier versions.
                    that is replaced with Metadata API.                    

        Static Metadata Config
            // app/about/page.tsx
            import type { Metadata } from 'next';

            export const metadata: Metadata = {
                title: 'About Us',
                description: 'Learn more about our logistics platform.',
                openGraph: {
                    title: 'About Us | TrackTruck',
                    description: 'The premier goods transport tracker.',
                    images: ['/og-about.jpg'],
                },
            };           

            export default function AboutPage() {
                return <main>About Content</main>;
            }

        Dynamic Metadata (generateMetadata)
            // app/products/[id]/page.tsx
            import type { Metadata } from 'next';

            type Props = {
                params: Promise<{ id: string }>; 
            };

            export async function generateMetadata({ params }: Props): Promise<Metadata> {
                const { id } = await params;
            
                // Fetch product information directly from your database/API
                const product = await fetch(`https://api.example.com/products/${id}`).then(res => res.json());

                return {
                    title: product.name,
                    description: product.shortSummary,
                    openGraph: {
                      images: [product.imageUrl],
                    },
                };
            }

            export default async function ProductPage({ params }: Props) {
                const { id } = await params;
                return <main>Product Details for {id}</main>;
            }
   
    Integrating Bootstrap On NextJS
            Bootstrap is a responsive web design library
            Bootstrap-Icons is a resposnive bootstrap friendly icon library.

        Option1
            
            npm i bootstrap bootstrap-icons

            import the css and js files from bootstrap and bootstrap-icons in the layout.tsx file.

            bootstrap related JS files can not be optimized by nextjs and creates a heavy piggy-back
            on each request of the application.

        Option2
            
            npm i bootstrap bootstrap-icons react-bootstrap

            import the css  files alone from bootstrap and bootstrap-icons in the layout.tsx file.

    Server Only

        npm i server-only

        this library allows a dev to mark
        a .ts file as server only, ensuring that that .ts
        never ever leaves the server.
