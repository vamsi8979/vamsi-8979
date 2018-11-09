//for express js
var express = require("express");
var app     = express();
var ngrok = require("ngrok");
const expressip = require('express-ip');
app.use( express.static(   "public" ) );
app.set('view engine' , 'ejs');
app.use(expressip().getIpInfoMiddleware);
app.get( "/" , function(req,res){
    res.render("home");
});
app.get( "/contact" , function(req,res){
    res.render("contact");
});
app.get("/ip",function(req,res){
  const ipInfo = req.ipInfo;
  var message = `Hey, you are browsing from ${ipInfo.city}, ${ipInfo.country}`;
  res.send(req.ipInfo);
});
app.listen(process.env.PORT,process.env.IP);
// app.listen("3001","localhost",function(){
//     console.log("localhost:3001");
// });