let nums = [4, 1, 5, 6, 9, 3, 8, 7, 30, 33, 44]
// for(let i=0; i<nums.length; i++){
//     console.log(nums[i]);
// }

// forEach
// nums.forEach(function(data, index){
//     console.log(`${index} -> ${data}`);
// })
// nums.forEach((data, index) => {
//     console.log(`${index} -> ${data}`);
// })
// nums.forEach((data, index) => {
//     console.log(`${index} -> ${data*10}`);
// })

// map
// let newArr = nums.map((data)=>{
//     return data*10
// })
// console.log(newArr);


// filter
// let evenArr = nums.filter((n)=>{
//     if(n%2 == 0){
//         return true
//     } else {
//         return false
//     }
// })
// let evenArr = nums.filter((n)=> n%2 == 0)
// let evenArr = nums.filter((n)=> n != 9)

// console.log(evenArr);


// sort
// nums.sort()
// nums.sort((a,b)=>{
//     if(a>b){
//         return 1
//     } else if( b>a) {
//         return -1
//     } else {
//         return 0
//     }
// })
// nums.sort((a, b)=>a-b)
// console.log(nums);

// Reduce
// let sum = 0
// for(let i=0; i<nums.length; i++){
//     sum = sum + nums[i]
// }

// nums.forEach(n=>{
//     sum += n
// })
// let sum = nums.reduce((sum,num)=>{
//     return sum+num
// }, 0) 

// console.log(sum);
// let l = nums[0]
// let l = nums.reduce((l, n)=>{
//     if(n>l){
//         return n
//     } else {
//         return l
//     }
// },nums[0])
let l = nums.reduce((l, n)=> n>l ? n : l ,nums[0])
console.log(l);
