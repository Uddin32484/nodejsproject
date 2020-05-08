var port = process.env.PORT || 4000;
var exp = require("express");
var app = exp();
app.use(exp.static(__dirname + "/public"));
//along with this create public folder and create one Index.html page and try to access port in web page 
app.listen(port, function(params) {
    console.log("Server is listing on port" + port);
});