const express = require('express');
const router = express.Router();
const authorize = require('../middleware/authorize');
const usersController = require('../controllers/usersController');


router
    .route('/signup')
    .post(usersController.signup);

router
    .route('/login')
    .post(usersController.login);

module.exports = router;