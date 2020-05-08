var exp = require("express");
var app = exp();
app.get('/players', function(req, res) {
    var query = req.query;
    console.log("query valur" + JSON.stringify(query));
    res.write("name=" + query.name);
    res.end(" lang=" + query.lang);
    res.end(JSON.stringify(query));
});
//app.use(exp.static(__dirname + "/public"));
//along with this create public folder and create one Index.html page and try to access port in web page 
var port = process.env.PORT || 5555;
app.listen(port, function(params) {
    console.log("Server is listing on port" + port);
});