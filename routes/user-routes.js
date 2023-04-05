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

            /*
                -Credentials are valid
                -200 { token: jwtToken } -> how to generate the JWT?
                -Install jsonwebtoken, jwt.sign( payloadObject, SECRET_KEY);
                -Respond with the created JWT
            */
            
            const token = jwt.sign({ id: foundUser.id }, process.env.JWT_SECRET_KEY);

            res.json({
                message: "Successfully logged in",
                token: token
            })
        })
});

router.post("/signup", async (req, res) => {
    const { name, email, password } = req.body;

    if (!email || !password || !name) {
        return res.status(400).json({ error: "Sign up requires email and password fields"});
    }

    const foundUsers = await knex("user")
        .where({ email: email});

    if (foundUsers.length === 1) {
        //user not found
        return res.status(400).json({ error: "User account with this email already exists"});
    }

    const hashedPassword = bcrypt.hashSync(password, Number(process.env.BRYCPT_SALT_ROUNDS));

    const newUserIds = await knex("user")
        .insert({
            name,
            email,
            password: hashedPassword
        });
    const newUserId = newUserIds[0];

    const newUsers = await knex("user")
        .where({ id: newUserId });
    
    const newUser = newUsers[0];

    const token = jwt.sign({ id: newUser.id }, process.env.JWT_SECRET_KEY);

    res.json({ 
        message: "Successfully logged in",
        token
    })
})

module.exports = router;