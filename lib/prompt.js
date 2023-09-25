//user starts application
// user is presented a menu:
// what would you like to do?
// --view all employees, view all employees by department, view all employees by manager, update employee managers, view all employees by department, add an employee, delete an employee, update an employee
// -- view total utilized budget
// -- view all departments
// -- add a department
// -- delete a department
// -- view all roles, add a role, delete a role
// user selects menu and is then presented data or prompted information
// user is then presented menu again

// Packages needed for this application
// Inquirer
const inquirer = require('inquirer');
const fetch = require('node-fetch');
const cTable = require('console.table');



// TODO: Create an array of questions for user input
// const questions = [
//     {
//         type: 'input',
//         message: 'What is the title of your project?',
//         name: 'title',
//         validate: titleInput => {
//             if (!titleInput) {
//                 console.log(`Please enter your title!`)
//                 return false;
//             } else {
//                 return true;
//             }
//         },
//     },
//     {
//         type: 'input',
//         message: 'Provide a short description explaining the what, why, and how of your project.',
//         name: 'description',
//     },
//     {
//         type: 'input',
//         message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
//         name: 'installation',
//     },
//     {
//         type: 'input',
//         message: 'Provide instructions and examples for use.',
//         name: 'usage',
//     },
//     {
//         type: 'input',
//         message: 'List your collaborators, if any, with links to their GitHub profiles.  If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.  If you followed tutorials, include links to those here as well.',
//         name: 'contributors',
//     },
//     {
//         type: 'input',
//         message: 'Write tests for your application. Provide examples on how to run them.',
//         name: 'tests',
//     },
//     {
//         type: 'list',
//         message: 'Choose a license for your application:',
//         choices: [`MIT`, `GPLv2`, `Apache`, `GPLv3`, `Other`, `None`],
//         name: 'license',
//         validate: licenseInput => {
//             if (!licenseInput) {
//                 console.log(`Please select a license!`)
//                 return false;
//             } else {
//                 return true;
//             }
//         },
//     },
//     {
//         type: 'input',
//         message: 'What is your GitHub username?',
//         name: 'github',
//         validate: githubInput => {
//             if (!githubInput) {
//                 console.log(`Please enter your GitHub username!`)
//                 return false;
//             } else {
//                 return true;
//             }
//         },
//     },
//     {
//         type: 'input',
//         message: 'What is your email?',
//         name: 'email',
//         validate: emailInput => {
//             if (!emailInput) {
//                 console.log(`Please enter your email!`)
//                 return false;
//             } else {
//                 return true;
//             }
//         },
//     }
//     // End of array of questions
// ];

// TODO: Create a function to write README file
// const writeToFile = (fileName, data) => {
//     return writeFile(fileName, data)
// }



// TODO: Create a function to initialize app
function init() {
    return inquirer
        .prompt([
            {
                type: 'list',
                name: `menu`,
                message: 'What would you like to do?',
                choices: [`View All Departments`, `View All Roles`, `View All Employees`, `Add a Department`, `Add A Role`, `Add an Employee`, `Update an Employee Role`]
            }
        ])
        .then(selection => {
            switch (selection.menu) {
                //if user selects `View All Departments`
                case `View All Departments`:
                    fetch(`http://localhost:3001`)
                //if user selects `View All Roles`
                //if user selects `View All Employees`
                //if user selects `Add a Department`
                //if user selects `Add a Role`
                //if user selects `Add an Employee`
                //if user selects `Update an Employee Role`

            //End of switch statement
            }
            
            writeToFile(`Generated-README.md`, generateMarkdown(answers));
        })
        .then(() => console.log(`Created Generated README`))
        .catch((error) => {
           console.log(error)
        });
}

// Function call to initialize app
init()

module.exports = { init };