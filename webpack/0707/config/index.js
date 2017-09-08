var path = require('path');

module.exports = {
	build: {
		env: {
			NODE_ENV: '"production"'
		}
	},
	dev: {
		env: {
			NODE_ENV: '"development"'
		},
		port: 8000
	}
}