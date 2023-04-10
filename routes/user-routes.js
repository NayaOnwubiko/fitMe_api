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

router
    .route('/currentuser')
    .get(authorize, usersController.approve);

router
    .route('/currentuser/:id/meals')
    .get(usersController.userMeals);

module.exports = router;