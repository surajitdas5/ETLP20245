// let myPromise = new Promise(function(resolve, reject){
//     let success = true
//     if(success){
//         resolve("promise is resolved")
//     } else {
//         reject("promise is rejected")
//     }
// })

let myPromise = new Promise(function(resolve, reject){
    setTimeout(() => {
        let success = false
        if(success){
            resolve("promise is resolved")
        } else {
            reject("promise is rejected")
        }
    }, 2000);
})


// let x = myPromise
// console.log(x);

// myPromise
//     .then(function(data){
//         console.log("Then executed");
//         console.log(data);
//     })
//     .catch(function(err){
//         console.log("Catch executed");
//         console.log(err);
//     })

// async/await
async function handlePromise(){
    try{
        let res = await myPromise
        console.log("O/P: "+res);
    }catch(err){
        console.log("error: "+err);
    }
}

handlePromise()
