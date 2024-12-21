console.log("Enternal JS File");

// let heading = document.getElementsByTagName("h1")
// console.log(heading);
// heading[1].innerHTML = "Cascading Style Sheet"


// let html = document.getElementById("html")
// console.log(html);

// let headings = document.getElementsByClassName("heading")
// console.log(headings);

// let html = document.getElementById("html")
// html.style.color = "red"
// html.style.backgroundColor = "yellow"
// html.style.textDecoration = "underline"

// html.classList.add("my-style")
// html.classList.remove("heading")


// function changeStyle(){
//     let html = document.getElementById("html")
//     html.classList.add("my-style")
// }

// let text = document.getElementById("text")

// function hideText(){
//     text.style.display = "none"
// }
// function showText(){
//     text.style.display = "block"
// }

// let js = document.getElementById("js")
// function changeText(){
//     js.innerHTML = "JavaScript"
// }

// function changeToOriginal(){
//     js.innerHTML = "JS"
// }


function checkEven(){
    let num = document.getElementById("num").value
    // console.log(num);
    // console.log(typeof(num));
    num = parseInt(num)
    // console.log(typeof(num));
    let msg = ""
    let className = ""
    if(num%2 == 0){
        msg = num+ " is even";
        className = "even"
    } else {
        msg = num+ " is odd";
        className = "odd"
    }
    console.log(msg);
    let res = document.getElementById("result")
    res.innerHTML = msg
    res.classList.remove("even", "odd")
    res.classList.add(className)
    document.getElementById("num").value = ""
    
}