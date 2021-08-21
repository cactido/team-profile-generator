// package includes
const inquirer = require('inquirer');
// Class includes
const Employee = require('./lib/Employee.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const Manager = require('./lib/Manager.js');


function addManager() {
    return inquirer.prompt([
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
    .then((data) => {
        team.manager = [];
        team.manager.push(data);
        return team;
    })
}

function addEngineer(team) {
    if (!team.engineers) { team.engineers = [] };

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter the engineer\'s name:',
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
            message: 'Enter the engineer\'s ID number:',
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
            message: 'Enter the engineer\'s email address:',
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
            name: 'github',
            message: 'Enter the engineer\'s GitHub username:',
            validate: data => {
                if (data) { return true; }
                else {
                    console.log('Username cannot be blank.');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'addAnother',
            message: 'Would you like to add another engineer to the team?',
            default: false
        }
    ]).then((data) => {
        team.engineers.push(data);
        if (data.addAnother) { return addEngineer(team); }
        else { return team; }
    })
}

var team = [];

addManager(team)
.then(addEngineer)
.then(data => console.log(data));