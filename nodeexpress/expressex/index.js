const express = require("express")
const path = require('path')

const server = express()

server.use(express.static(path.join(__dirname, "public")))

server.get("/", (req, res)=>{
    // res.send("<h1>Hello From Express Server</h1>")
    res.sendFile(path.join(__dirname, "public", "index.html"))
})

server.get("/about", (req, res)=>{
    res.send("<h1>About Us Page</h1>")
})

server.get("/signup", (req, res)=>{
    res.send("<h1>Sign Up Page</h1>")
})



server.listen(3000, ()=>console.log("Server Started"))