// console.log("Hello JS!");
// Object: key:value
const student = {
    "name": "ram Sharma",
    roll: 123,
    graduated: false,
    mobile: [777777777, 888888888888],
    address: {
        city: "BBSR",
        state: "Odisha"
    },
    getName : function(){
        console.log(this.name);
        
    }
}

// console.log(student);
// console.log(student.name);
// console.log(student.roll);
// console.log(student.name);
// console.log(student.mobile[0]);
// console.log(student.address.state);
// student.getName();



// function add(a,b){
//     return a+b
// }

// Function Expression
// const add = function(a, b){
//     return a+b
// }

// console.log(add(1,2));


// function add(a,b){
//     return a+b
// }

// function display(data){
//     console.log("Your data is "+data);
// }

// let c = add(10, 20)
// display(c)

// Display: Callback function
// add: higher order function
function add(a, b, func){
    let c = a+b
    func(c)
}

// function display(data){
//     console.log("Your data is "+data);
// }

// add(3,4, display)

add(30, 40, function(x){
    console.log(x);
})