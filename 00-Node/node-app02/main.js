/*
import { sum,dif,prd } from './arth.js'

console.log(sum(10,20));
console.log(dif(10,20));
console.log(prd(10,20));
*/

import * as arth from './arth.js'
import greetUser, { goodMorning } from './greet.js';

console.log(arth.sum(20,50));
console.log(arth.prd(20,50));
console.log(arth.rem(20,50));

console.log(goodMorning("Vamsy"));
console.log(greetUser("Vamsy"));
