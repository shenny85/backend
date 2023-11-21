//express makes node projects easier
//setup
const express = require("express")
//activate or tells app variable to be an express server
const app = express()  
const router = express.Router() //Now turn this into an API, will route to different things

//start the webserver ....app.listen(portnumber, function)
app.listen(3000, function () {
    console.log("Listening on port 3000")
})

//making an api using routes
//routes are used to hander browser requests.  They look like URLs.  The difference is that when a browser requests a route
// it is dynamically handled by using a function.

//make a GET or a regular request whe someone goes to http://localhost:3000/hello. When using function in a route can expect to handle response and request parameters
app.get("/hello", function(req,res) {
    res.send("<h1>Hello Express</h1>")
})

app.get("/goodbye", function(req,res) {
    res.send("<h1>Goodbye Express</h1>")
})