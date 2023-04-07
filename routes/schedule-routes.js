const express = require('express');
const router = express.Router();
const scheduleController = require('../controllers/scheduleController');

router
    .route('/meals')
    .get(scheduleController.getAllMeals);

router
    .route('/meals/:id')
    .get(scheduleController.singleMeal);

router
    .route('/exercises')
    .get(scheduleController.getAllExercises);

module.exports = router;