'use strict';

//The Admin controller
var AdminController = {
	index: function(req, res) {
		res.status(200).json({ message: 'Welcome to the admin area ' + req.user.username + '!' });
	}
};

module.exports = AdminController;