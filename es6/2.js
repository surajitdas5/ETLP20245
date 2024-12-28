console.log("start");

function myFunc(){
    console.log("Time Out");
}

// setTimeout(myFunc, 1000)
setTimeout(myFunc, 0)


setTimeout(function(){
    console.log("Second Time Out");
}, 3000);

console.log("End");
