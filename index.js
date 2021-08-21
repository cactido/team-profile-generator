// package includes
const inquirer = require('inquirer');
const fs = require('fs')
//include HTML template helper
const template = require('./src/create-from-template.js');
// Class includes
const Employee = require('./lib/Employee.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const Manager = require('./lib/Manager.js');


function addManager() {
    //prompt the user for team manager information 
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
            name: 'officeNumber',
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
    //add the manager to the team, then return the team to add additional members
    .then((data) => {
        team.manager = [];
        team.manager.push(data);
        return team;
    })
}

function addEngineer(team) {
    //adds an engineer to the team, prompts if there are more to add, finally returns
    //team with new engineer members
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
        //add engineer to the team
        team.engineers.push(data);
        //if user wants to add another engineer, start over
        if (data.addAnother) { return addEngineer(team); }
        //if not, return the team for more additions
        else { return team; }
    })
}

function addIntern(team) {
    //prompts user for intern information, adds them to the team, returns team information
    if (!team.interns) { team.interns = [] };

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter the intern\'s name:',
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
            message: 'Enter the intern\'s ID number:',
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
            message: 'Enter the intern\'s email address:',
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
            name: 'school',
            message: 'Enter the intern\'s school:',
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
            message: 'Would you like to add another intern to the team?',
            default: false
        }
    ]).then((data) => {
        //add intern to the team
        team.interns.push(data);
        //if the user wanted to add more, starts from a new prompt
        if (data.addAnother) { return addIntern(team); }
        //if not, returns the team 
        else { return team; }
    })
}

function writeToFile(data) {
    //writes the template provided by create-from-template.js to an index.html file
    fs.writeFile('./dist/index.html', data, (err) => { 
        if (err) throw err;
        console.log('File saved.');
    })
   console.log(data);
}

var team = [];

//start by adding the manager
addManager(team)
//prompt for engineers
.then(addEngineer)
//then for interns
.then(addIntern)
//sends the objects to create-from-template.js to generate HTML
.then(data => template(data))
//sends generated html to be written to a file
.then(templated => writeToFile(templated))
.catch(err => { console.log(err) });