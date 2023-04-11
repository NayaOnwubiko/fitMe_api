const knex = require('knex')(require('../knexfile'));
require('dotenv').config();


exports.getAllMeals = async (req, res) => {
        await knex("meals")
        .select("*")
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) => res.status(400).send("Error retrieving meals")); 
};

exports.getAllExercises = async (req, res) => {
        await knex("exercises")
        .select("*")
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) => res.status(400).send("Error retrieving exercises"));
};

exports.singleMeal = async (req, res) => {
        await knex("meals")
            .where({ id: req.params.id })
            .then((meals) => {
                if(meals.length === 0) {
                    return res.status(404).json({
                        message: `Unable to find meal with id: ${req.params.id}`,  
                    });
                }
                res.json(meals[0]);
            })
            .catch((error) => {
                return res.status(400).json({
                    message: "There was an issue with the request",
                    error,
                });
            });
};

exports.singleExercise = async (req, res) => {
        await knex("exercises")
            .where({ id: req.params.id })
            .then((exercise) => {
                if(exercise.length === 0) {
                    return res.status(404).json({
                        message: `Unable to find exercise with id: ${req.params.id}`,  
                    });
                }
                res.json(exercise[0]);
            })
            .catch((error) => {
                return res.status(400).json({
                    message: "There was an issue with the request",
                    error,
                });
            });
};