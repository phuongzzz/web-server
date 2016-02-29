var express = require('express');
var app = express();
var port = 3000;
var middleware = {
	requireAuthentication: function(req, res, next) {
		console.log("private route hit");
		next();
	},
	logger: function(req, res, next) {
		var date = new Date().toString();
		console.log(req.method + ' at ' + date + req.originalUrl);
		next();
	}
};
app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication, function(req, res) {
	res.send('about us!');
});

app.use(express.static(__dirname + '/public'));


app.listen(port, function() {
	console.log('express server started at ' + port);
});