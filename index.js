// package includes
const inquirer = require('inquirer');
// Class includes
const Employee = require('./lib/Employee.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const Manager = require('./lib/Manager.js');

inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'Enter the team manager\'s name:',
        validate: data => {
            if (data) { return true; }
            else {
                console.log('Name cannot be blank.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: 'Enter the team manager\'s ID number:',
        validate: data => {
            if (data) { return true; }
            else {
                console.log('ID cannot be blank.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter the team manager\'s email address:',
        validate: data => {
            if (data) { return true; }
            else {
                console.log('Email address cannot be blank.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'office',
        message: 'Enter the team manager\'s office number:',
        validate: data => {
            if (data) { return true; }
            else {
                console.log('Office number cannot be blank.');
                return false;
            }
        }
    }
])