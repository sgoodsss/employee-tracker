require("dotenv").config();
// Packages needed for this application
const inquirer = require('inquirer');
const cTable = require('console.table');
const mysql = require('mysql2');
const connection = require("./db/connection")

function init() {
    return inquirer
        .prompt([
            {
                type: 'list',
                name: `main_menu`,
                message: 'What would you like to do?',
                choices: [`View All Departments`, `View All Roles`, `View All Employees`, `Add a Department`, `Add A Role`, `Add an Employee`, `Update an Employee Role`]
            }
        ])
        .then(selection => {
            switch (selection.main_menu) {
                //if user selects `View All Departments`
                case `View All Departments`:
                    connection.query(`SELECT * FROM departments`, function (err, results) {
                        if (err) {
                            console.log(err)
                        } else {
                            console.table(results);
                            init();
                        }
                    })
                    break;
                //if user selects `View All Roles`
                case `View All Roles`:
                    connection.query(`SELECT * FROM roles`, function (err, results) {
                        if (err) {
                            console.log(err)
                        } else {
                            console.table(results);
                            init();
                        }
                    })
                    break;
                //if user selects `View All Employees`
                case `View All Employees`:
                    connection.query(`SELECT * FROM employees`, function (err, results) {
                        if (err) {
                            console.log(err)
                        } else {
                            console.table(results);
                            init();
                        }
                    })
                    break;
                //if user selects `Add a Department`
                case `Add a Department`:
                    return inquirer
                        .prompt([
                            {
                                type: 'input',
                                name: `dept_name`,
                                message: 'What is the name of the Department you would like to add?',
                            }
                        ])
                        .then(deptName => {
                            const name = deptName.dept_name;
                            connection.query(`INSERT INTO departments (name) VALUES ("${name}")`, (err, results) => {
                                if (err) {
                                    console.log(err)
                                } else {
                                    console.log(`${name} was added to Departments`)
                                    init();
                                }
                            })
                        })
                    break;

                //if user selects `Add a Role`
                case `Add a Role`:
                    connection.query(`SELECT name FROM departments`, async (err,results) => {
                        if (err) {
                            console.log(err)
                        } else {
                            const results = await results
                            const deptArray = []
                            console.log(results)
                        }
                    })
                    return inquirer
                        .prompt([
                            {
                                type: 'input',
                                name: `role_name`,
                                message: 'What is the name of the Role you would like to add?',
                            },
                            {
                                type: 'input',
                                name: `role_salary`,
                                message: 'What is the name of the Role you would like to add?',
                            }
                        ])
                        .then(deptName => {
                            const name = deptName.dept_name;
                            connection.query(`INSERT INTO departments (name) VALUES ("${name}")`, (err, results) => {
                                if (err) {
                                    console.log(err)
                                } else {
                                    console.log(`${name} was added to Departments`)
                                    init();
                                }
                            })
                        })
                    break;
                //if user selects `Add an Employee`
                
                //if user selects `Update an Employee Role`

                //End of switch statement
            }

        })
        .then(() => console.log(`Completed user request`))
        .catch((error) => {
            console.log(error)
        });
}

// Function call to initialize app
init();

//DELETE example
// connection.query(`DELETE FROM course_names WHERE id = ?`, 3, (err, result) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log(result);
//   });