module.exports = function(app) {
	return {
		githubHooks: require(__dirname + '/ApiGitHubHooks.js')(app),
	};
};
