'use strict';

var router = require('express').Router();

var config = require('../config'),
	AuthController = require('../controllers/authController'),
	allowOnly = require('../services/routeHelper').allowOnly,
	UserController = require('../controllers/userController'),
	AdminController = require('../controllers/adminController');

var APIRoutes = function(passport) {
	//TODO: create API routes
	//POST Routes
	router.post('/signup', AuthController.signUp);
	router.post('/authenticate', AuthController.authenticateUser);

	//GET Routes.
	router.get('/profile', passport.authenticate('jwt', { session: false }), allowOnly(config.accessLevels.user, UserController.index));
	router.get('/admin', passport.authenticate('jwt', { session: false }), allowOnly(config.accessLevels.admin, AdminController.index));

	return router;
};

module.exports = APIRoutes;