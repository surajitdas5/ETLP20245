const fs = require('fs')
const http = require('http')

const server = http.createServer((req, res)=>{
    res.writeHead(200, {"content-type": "text/html"})
    // res.write('Hello from node js server!')
    // res.end()
    // console.log(req.url);
    let url = req.url

    if(url === "/"){
        // res.write('<h1>Home Page</h1>')
        // res.end()
        fs.readFile("home.html", "utf8", (err, data)=>{
            if(err){
                res.write('<h1>500 Server Error</h1>')
                res.end()
            }
            res.write(data)
            res.end()
        })
    } else if (url === "/about"){
        res.write('<h1>About Us Page</h1>')
        res.end()
    }else if (url === "/contact"){
        res.write('<h1>Contact Us Page</h1>')
        res.end()
    }
    
})


server.listen(3000, ()=>console.log("server started"))