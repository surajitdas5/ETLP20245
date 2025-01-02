const PI = 3.14
function add(a, b) {
    return a+b
}

function sub(a, b){
    return a-b
}

// CommonJS Export
// Default: only 1 export
// module.exports = add

// Named
// module.exports = {add: add, sub: sub, PI: PI}
// module.exports = {sum: add, sub: sub, PI: PI}
// module.exports = {add, sub, PI}


// ES6 Export
// Default
export default add

// Named
// export {add, sub, PI}
export {sub, PI}