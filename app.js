//for express js
var express = require("express");
var app     = express();
app.use( express.static(   "public" ) );
app.set('view engine' , 'ejs');
app.get( "/" , function(req,res){
    res.render("home");
});
app.get( "/contact" , function(req,res){
    res.render("contact");
});
//other page not found handler
app.get('*', function(req, res, next){
	res.status(404);
	res.send('<h1>YOU ARE LOOKING FOR 404 <span style="color : red ; "> NOT FOUND </span></h1>');
});
app.listen(process.env.PORT,process.env.IP);
// app.listen("3001","localhost",function(){
//     console.log("localhost:3001");
// });