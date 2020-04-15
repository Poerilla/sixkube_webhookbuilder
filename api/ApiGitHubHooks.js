const fs = require('fs');
module.exports = function(app) {
	app.post('/ci', function(req, res) {
		console.log(req.body)
		sixkubeBuilder = new (require(__dirname + `/SixkubeBuilder.js`))();
		sixkubeBuilder.build()
	});
	app.get('/*', function(req, res) {
		res.sendStatus(404);
	});
}
