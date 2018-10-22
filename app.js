//for express js
var express = require("express");
var app     = express();
app.set('view engine' , 'ejs');
app.get( "/" , function(req,res){
    res.render("home");
});
app.get( "/contact" , function(req,res){
    res.render("contact");
});
app.listen(process.env.PORT,process.env.IP);
// app.listen("3001","localhost",function(){
//     console.log("localhost:3001");
// });