// require(`dotenv`).config();

//Require Express Package
const express = require('express');
const mysql = require(`mysql2`);
//Require Sequelize for connection.js
// const sequelize = require('sequelize');

//Requires prompt function for user data
const { init } = require('./prompt');
// const { connection } = require('./db/connection');

const app = express();
const PORT = process.env.PORT || 3001;

//Express Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const connection = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL Username
      user: 'root',
      // TODO: Add MySQL Password
      password: process.env.DBPASSWORD,
      database: 'company'
    },
    console.log(`Connected to the company database.`)
  );


// Connect to the database before starting the Express.js server
const runner = async () => {
    try {
        await connection.sync();
        app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
    } catch (err) {
        console.error(err)
    }
}

runner();

init();