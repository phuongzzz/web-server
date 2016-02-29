// use module exports 

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

module.exports = middleware;