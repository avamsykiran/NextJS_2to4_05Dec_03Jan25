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
                const swap = (a:any,b:any) : void => {
                    var temp:any = a;
                    a = b;
                    b = temp;
                }

        unknown

                const howIsTheTemparature(t:unknown) : string => {
                    if(typeOf(t) === "number") {
                        if(t>=100)  return "Unbarable";
                        else if(t>=50)  return "Managable";
                        else)  return "Moderate";
                    }else (typeOf(t) === "string") {
                        if(t==="High")  return "Unbarable";
                        else if(t==="Low")  return "Moderate";
                        else)  return "Did Not Understand";
                    }
                }

                howIsTheTemparature(180)
                howIsTheTemparature(80)
                howIsTheTemparature("High")
                howIsTheTemparature("Low")
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
            interface Employee {
                empId:number;
                fullName:string;
                salary:number;
            }

            function computeTax(e:Employee) : number {                
                return e.salary*0.10;
            }

            //this works
            var tax1 = computeTax({empId:101,fullName:"Vamsy",salary:12000});
            
            //thess will not work
            var tax2 = computeTax({empId:101,fullName:"Vamsy",salary:12000,deptId:10});
            var tax3 = computeTax({empId:102,salary:12000,deptId:10});
            var tax3 = computeTax({empId:102,salary:12000});

        class
            1. the name of the constructor is "constructor"
            2. we can have one and only one "constructor"
            3. access specifiers are supported (private,public and protected)
            4. a constructor-arg will applied an access specifer, becomes a field.

                class Point2D {
                    private xAxis:number;
                    private yAxis:number;

                    constructor(xAxis:number,yAxis:number) {
                        this.xAxis=xAxis;
                        this.yAxis=yAxis;
                    }
                }

                class Point2D {                 
                    constructor(private xAxis:number,private yAxis:number) {
                    }
                }
        
        unions

            var itemCode : number | string;
            itemCode = 1001;
            itemCode = "LAP12345"
            
            var temp : number | string;
            temp = 100;
            temp = "High"
        
            var gender : "GIRL" | "BOY";
            gender = "GIRL";
            gender = "BOY";

        aliases
            providing a new name to an exiting data type.

            type num = number;
            var x : num = 90;

            type alphaOrNumeric = number | string
            var itemCode : alphaOrNumeric;
            itemCode = 1001;
            itemCode = "LAP12345"
            
            var temp : alphaOrNumeric;
            temp = 100;
            temp = "High"
        
            type Gender = "GIRL" | "BOY";
            var gender : Gender;
            gender = "GIRL";
            gender = "BOY";
        
        types
            type ComplexNumber = {
                real:number;
                imaginary:number;
            };

            Types vs Interfaces
                1. Merger
                    Multipel interface declaratiosn are merged, but multiple declaratiosn on types is not allowed.

                    interface Student {
                        studentId:number;
                        fullName:string;
                    }

                    interface Student {
                        age:number;
                    }

                    finalluy we ended up creating a Student model with three fields studentId,fullName and age.

                    type Dept = {deptId:number; }
                    type Dept = {deptName:string; } //this is not allowed 
                                                    //and flagged as duplicate

                2. Interfaces are inheritable using "extends" keyword, and is not possible on types

                3. Interfaces has modelling an entity as a primary purpose.
                    and Types are used for assigning user-friendly names on unions, or for 
                    defining in-line dataTypes (dataTypes needed only at that line of code).

        enums
            are simalar to enums in C# or Java.
            but are not recommended to be used as they pos a unsudpportive syntax when
            attempted to convert into JS.



