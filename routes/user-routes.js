const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const knex = require('knex')(require('../knexfile'));
require('dotenv').config();
const jwt = require('jsonwebtoken');

/*
    Request:
        -email
        -password
    
    Response:
        -200 { token: jwtToken }
        -401 email and password don't match a user
        -400 email or password are missing
*/

router.post("/login", (req, res) => {
    if (!req.body.email || !req.body.password) {
        return res.status(400).json({
            error: "Email and password fields are required"
        })
    }

    knex("user")
        .where({ email: req.body.email })
        .then(users => {
            if (users.length !==1) {
                return res.status(401).json({
                    error: "Invalid login credentials."
                })
            }

            const foundUser = users[0];
            // based on this user we found, we need the password
            const isValidPassword = bcrypt.compareSync(req.body.password, foundUser.password)

            if (!isValidPassword) {
                return res.status(401).json({
                    error: "Invalid login credentials."
                })
            }

        })
})