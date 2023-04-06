const mealsData = require("../seed_data/meals");
const exerciseData = require("../seed_data/exercises");

exports.seed = function (knex) {
    return knex("meals")
        .del()
        .then(function () {
            return knex("meals").insert(mealsData);
        })
        .then(() => {
            return knex("exercises").del();
        })
        .then(() => {
            return knex("exercises").insert(exerciseData);
        });
};