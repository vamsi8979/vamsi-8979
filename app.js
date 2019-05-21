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
	res.send('<h1>THE PAGE YOU ARE LOOKING FOR  <span style="color : blue ; "> 404 NOT FOUND </span></h1><h2> SMall H2 tag is here </h2>');
});
app.listen(process.env.PORT,process.env.IP);
// app.listen("3001","localhost",function(){
//     console.log("localhost:3001");
// });