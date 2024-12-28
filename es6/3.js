// ES6 Features
/*
1. let, const
2. arrow function
3. default paramenter
4. Destructuring
5. class
6. spread and rest operator
7. Promise
8. async/await
9. String Literal
*/
// String Literal
let name = "John"
let age = 20
// "Jhon is 20 years old"
// console.log(name+" is "+age+" years old");
/*
"", '', ``
*/
// console.log(`${name} is ${age} years old`);
// console.log(`Sum of 2 and 3 is ${2+3}`);



// Arrow Functions
// function add(a, b){
//     return a+b
// }

// const add = function(a,b){
//     return a+b
// }

// const add = (a,b) => {
//     return a+b
// }
// const add = (a,b) => (
//      a+b
// )
// const add = (a,b) => a+b // lambda expression

// console.log(add(4,5));

// function evenOdd(num){
// const evenOdd = (num) => {
//     if(num%2==0){
//         console.log("Even");
//     } else {
//         console.log("Odd");
//     }
// }


// evenOdd(212)

// Deafult Arguments
// function add(a=0,b=0,c, d){
// function add(a,b,c=0, d=0){
//     return a+b+c+d
// }


// function add(a,b, ...nums){ // rest operator
//     // return a+b+c+d
//     // console.log(nums);
//     let sum = a+b
//     for(let i=0; i<nums.length; i++){
//         sum += nums[i]
//     }
//     return sum
// }

// console.log(add(2,3))
// console.log(add(2,3, 4))
// console.log(add(2,3, 4, 5))
// console.log(add(2,3, 4, 5, 6))
// console.log(add(2,3, 4, 5, 6, 7))


// let a = [1, 2, 3]
// b = a
// b = [...a] // spread operator
// b = [...a, 1000, 2000, 3000]
// b = [1000, 2000, 3000, ...a]
// // b[1] = 1000
// console.log(a);
// console.log(b);

let arr = [10, 20]
// let b = arr[0]
// let c = arr[1]

// let [b, c] = arr // Destructureing

// console.log(b, c);

// let [a, b] = [20, 30]
// console.log(a, b);

// let std = {
//     roll: 1,
//     sname: "sam"
// }
// console.log(std.name);
// console.log(std.roll);

// let {roll, sname} = std
// console.log(roll, sname);

