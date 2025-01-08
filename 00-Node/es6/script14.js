//Template Literals

let c1 = {cid:101,name:'Vamsy',mobile:'9052224753',email:'vamsy@gmail.com',dob:new Date('1987-01-01')};
console.log("Hello "+c1.name+"! It is good to call you at "+c1.mobile);
console.log(`Hello ${c1.name}! It is good to call you at ${c1.mobile}`);

//Destructured assignment

//let name = c1.name;
//let mobile = c1.mobile;

let {name,mobile} = c1;
console.log(`Hello ${name}! It is good to call you at ${mobile}`);

/*const printAge = (c) => {
    let age = (new Date()).getFullYear()-c.dob.getFullYear();
    console.log(`Hello ${c.name}! You are ${age} years old`);
};*/

const printAge = ({name,dob}) => {
    let age = (new Date()).getFullYear()-dob.getFullYear();
    console.log(`Hello ${name}! You are ${age} years old`);
};

printAge(c1);

var a1 = [100,200,300];

var [n1,n2] = a1;

console.log(`n1 is ${n1}`)
console.log(`n2 is ${n2}`)