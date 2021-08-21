// required packages
const inquirer = require('inquirer');
// required files

// require classes
const Manager = require('./lib/Manager');

function promptManager ()  {
    console.log(`
=================
New Team Profile
=================`);
    console.log(`
=================
     Manager
=================`)

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your Team Managers name?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the Manger's ID number.",
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('Please enter an ID number!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the Manager's Email.",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter an email!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'ofNum',
            message: "Please enter the Manager's office number.",
            validate: ofNumInput => {
                if (ofNumInput) {
                    return true;
                } else {
                    console.log('Please enter an office number!')
                    return false;
                }
            }
        }
    ])
}

function promptEngineer (teamsData) {
    if (!teamsData.engineers) {
        teamsData.engineers = [];
    }
    console.log(`
=================
    Engineers    
=================`);

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the Engineer's name?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the Engineer's ID number.",
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('Please enter an ID number!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the Engineer's Email.",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter an email!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'gitUserName',
            message: "Please enter the Engineer's GitHub user name.",
            validate: gitUserNameInput => {
                if (gitUserNameInput) {
                    return true;
                } else {
                    console.log('Please enter a GitHub user name!')
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAddEngineer',
            message: 'Would you like to add another Engineer?',
            default: false
        }
    ]).then(engineerData => {
        teamsData.engineers.push(engineerData);
        if (engineerData.confirmAddEngineer) {
            return promptEngineer(teamsData);
        } else {
            return teamsData;
        }
    });
};

const promptIntern = teamsData => {
    if (!teamsData.interns) {
        teamsData.interns = [];
    }
    console.log(`
=================
     Interns   
=================`);

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the Intern's name?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the Intern's ID number.",
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('Please enter an ID number!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the Intern's Email.",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter an email!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "Please enter the school the Intern is attending.",
            validate: schoolInput => {
                if (schoolInput) {
                    return true;
                } else {
                    console.log('Please enter the name of a school!')
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAddIntern',
            message: 'Would you like to add another Intern?',
            default: false
        }
    ]).then(internData => {
        teamsData.interns.push(internData);
        if (internData.confirmAddIntern) {
            return promptIntern(teamsData);
        } else {
            return teamsData;
        }
    });
};

promptManager()
    .then(promptEngineer)
    .then(promptIntern)
    .then(obj => {
        console.log(obj);
    })
    //.then(html => writeFile(html))
    .catch(err => { console.log(err) });