// Common JS Import
// Defaut
// const add = require("./calculator.js")
// const sum = require("./calculator.js")
// const sub = require("./calculator.js")

// Named
// const temp = require("./calculator.js")
// const {add, sub, PI} = require("./calculator.js")
// const { sum } = require("./calculator.js")

import add, {sub, PI} from "./calculator.js"


// ES6 Import
// Default
// import add from "./calculator.js"
// import sum from "./calculator.js"

// Named
// import {add, sub} from "./calculator.js"
// import {add as sum, sub} from "./calculator.js"

// console.log(add(10, 20));
// console.log(sum(100, 200));
// console.log(sub(2, 1));
// console.log(temp);
// console.log(temp.add(1,2));
// console.log(temp.sub(1,2));
// console.log(temp.PI);
console.log(add(1,2));
// console.log(sum(1,2));
console.log(sub(1,2));
console.log(PI);


// const std = {
//     name: "Sam",
//     roll: 123
// }

// let { sname, roll }= std

// console.log(sname, roll);
