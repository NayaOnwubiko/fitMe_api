# Project name and introduction

fitMe

fitMe is a web application that provides exercise routines & meal plans for users looking to improve their physical fitness.
This is my capstone project for my Software Engineering Bootcamp with BrainStation.

# Table of contents

-Requirements
-Installation
-Configuration

# Requirements

This app requires the following modules and dependencies -[Node Package Modules] -[Express Framework] -[Axios Library] -[CORS] -[DotEnv] -[Knex Query Builder] -[Database Access & Configuration] -[Bcrypt Library] -[JSON Web Token] -[UUID] -[MySQL2]

# Installation

1. Clone the repo from Git Hub
2. Run npm install to install the node modules
3. Install Knex, Axios, CORS, dotenv, bcrypt, jsonwebtoken, uuid (npm install <package_name>)

# Configuration

1.Create a database and configure as required (MySQL2 recommended)
2.Run knex migrate:latest to create database tables. 3. Run knex seed:run to populate the tables created. 4. Run node server.js to start the server.
