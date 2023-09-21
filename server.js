//Require Express Package
const express = require('express');

//Require Sequelize for connection.js
const sequelize = require('sequelize');
require(`dotenv`).config()

const app = express();
const PORT = process.env.PORT || 3001;

//Use API routes
app.use(`/api`, )

//Express Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to the database before starting the Express.js server
const runner = async () => {
    try {
     await sequelize.sync();
     app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
    } catch (err) {
     console.error(err)
    }
   
   }
   
   runner();
   