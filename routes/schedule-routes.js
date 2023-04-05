const express = require('express');
const router = express.Router();
require('dotenv').config();
const authorize = require('../middleware/authorize');
const knex = require('knex')(require('../knexfile'));

/*
    Response:
        -200 [schedule] for meals and exercise
*/

router.get("/", authorize, (req, res) => {
    knex()
});

module.exports = router;