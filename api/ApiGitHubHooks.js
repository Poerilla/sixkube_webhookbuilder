const fs = require('fs');
module.exports = function(app) {
	app.post('/ci', function(req, res) {
		console.log(req.body)
	});
}
