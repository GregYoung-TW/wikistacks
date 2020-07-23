const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/stylesheets'));

app.get("/", function(req,res){
    res.send("<h1>Hello World!</h1>");
});

app.listen(3000, function(){
    console.log("Hello World! Server started on port 3000!");
});