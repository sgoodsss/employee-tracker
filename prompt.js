require("dotenv").config();
// Packages needed for this application
const inquirer = require('inquirer');
const mysql = require('mysql2');
const connection = require("./db/connection")

function init() {
    return inquirer
        .prompt([
            {
                type: 'list',
                name: `main_menu`,
                message: 'What would you like to do?',
                choices: [`View All Departments`, `View All Roles`, `View All Employees`, `Add a Department`, `Add a Role`, `Add an Employee`, `Update an Employee Role`]
            }
        ])
        .then(selection => {
            switch (selection.main_menu) {
                //if user selects `View All Departments`
                case `View All Departments`:
                    viewDepartments();
                    break;

                //if user selects `View All Roles`
                case `View All Roles`:
                    viewRoles();
                    break;

                //if user selects `View All Employees`
                case `View All Employees`:
                    viewEmployees();
                    break;

                //if user selects `Add a Department`
                case `Add a Department`:
                    addDepartment();
                    break;

                //if user selects `Add a Role`
                case `Add a Role`:
                    addRole();
                    break;

                //if user selects `Add an Employee`
                case `Add an Employee`:
                    addEmployee();
                    break;

                //if user selects `Update an Employee Role`
                case `Update an Employee Role`:
                    updateEmployeeRole();
                    break;
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

function viewDepartments() {
    connection.query(`SELECT * FROM departments`, function (err, results) {
        if (err) {
            console.log(err)
        } else {
            console.table(results);
            init();
        }
    })
}

function viewRoles() {
    connection.query(`SELECT * FROM roles`, function (err, results) {
        if (err) {
            console.log(err)
        } else {
            console.table(results);
            init();
        }
    })
}

function viewEmployees() {
    connection.query(`SELECT * FROM employees`, function (err, results) {
        if (err) {
            console.log(err)
        } else {
            console.table(results);
            init();
        }
    }) 
}

function addDepartment() {
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
}

function addRole() {
    connection.query(`SELECT * FROM departments`, function (err, results) {
        if (err) {
            console.log(err);
        } else {
            console.table(results);
            return inquirer
            .prompt([
                {
                    type: "input",
                    name: `role_name`,
                    message: "What is the name of the Role you would like to add?",
                },
                {
                    type: "input",
                    name: `role_salary`,
                    message: "What is the salary of the Role you would like to add?",
                },
                {
                    type: "list",
                    name: `role_dept`,
                    message: "What department does this Role belong to?",
                    choices: results.map(({ id, name }) => ({
                        name: name,
                        value: id
                      })),
                  },
            ])
            .then((answers) => {
                const roleName = answers.role_name;
                const roleSalary = answers.role_salary;
                const roleDept = answers.role_dept;
                connection.query(`INSERT INTO roles (title, salary, department_id) VALUES ("${roleName}", "${roleSalary}", "${roleDept}")`, function (err, results) {
                    if (err) {
                        console.log(err)
                    } else {
                        console.log(`${roleName} was added to Roles`)
                        init();
                    }
                })
            })
        }
    })
}

function addEmployee () {
    connection.query(`SELECT * FROM roles`, function (err, results) {
        if (err) {
            console.log(err);
        } else {
            console.table(results);
            return inquirer
            .prompt([
                {
                    type: "input",
                    name: `first_name`,
                    message: "What is the first name of the Employee you would like to add?",
                },
                {
                    type: "input",
                    name: `last_name`,
                    message: "What is the last name of the Employee you would like to add?",
                },
                {
                    type: "list",
                    name: `employee_role`,
                    message: "What role is assigned to this Employee?",
                    choices: results.map(({ id, title }) => ({
                        title: title,
                        value: id
                      })),
                  },
                  {
                    type: "list",
                    name: `employee_manager`,
                    message: "What manager is assigned to this Employee?",
                    choices: results.map(({ id, manager_id }) => ({
                        manager_id: manager_id,
                        value: id
                      })),
                  },
            ])
            .then((answers) => {
                const employeeFirstName = answers.first_name;
                const employeeLastName = answers.last_name;
                const empRole = answers.employee_role;
                const empManager = answers.employee_manager;
                connection.query(`INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ("${employeeFirstName}", "${employeeLastName}", "${empRole}", "${empManager}")`, function (err, results) {
                    if (err) {
                        console.log(err)
                    } else {
                        console.log(`${employeeFirstName} ${employeeLastName} was added to Employees`)
                        init();
                    }
                })
            })
        }
    })
}

function updateEmployeeRole () {
    console.log(`Updated Employee Role`)
}