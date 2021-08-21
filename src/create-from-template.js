const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");
const Manager = require("../lib/Manager");

function createFromTemplate(employees) {
    //destructure team into individual roles
    const { manager, engineers, interns } = employees;
    //generate a team page with the individual role objects
    var rendered = `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
        integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
    <title>Team Profile</title>
</head>

<body>
    <header>
        <div class="jumbotron jumbotron-fluid bg-warning">
            <div class="container" align="center">
                <h1 class="display-4">
                    My Team
                </h1>
            </div>
        </div>
    </header>

    <main>
        <div class="d-flex flex-row flex-wrap bd-highlight mb-3 justify-content-center">
    `
    //create a new manager object from the manager data
    current = new Manager(manager[0], manager[0].officeNumber);
    //add the manager card to the template
    rendered = rendered + `
    <div class="p-2 bd-highlight">
                <div class="card" style="width: 18rem;">
                    <div class="card-header border border-dark bg-primary">
                        <h2 class="name">${current.getName()}</h2>
                        <h5 class="role">${current.getRole()}</h5>
                    </div>
                    <ul class="list-group list-group-flush border border-dark">
                        <li class="list-group-item">ID: ${current.getId()}</li>
                        <li class="list-group-item">Email: <a href="mailto:${current.getEmail()}">${current.getEmail()}</a></li>
                        <li class="list-group-item">Office Number: ${current.getOfficeNumber()}</li>
                    </ul>
                </div>
            </div>
    `
    //iterate through engineers
    engineers.forEach(function(engineer) {
        //create engineer object with the current employee info
        current = new Engineer(engineer, engineer.github);
        //add the current engineer card to the template
        rendered = rendered + `
        <div class="p-2 bd-highlight">
                <div class="card" style="width: 18rem;">
                    <div class="card-header border border-dark bg-primary">
                        <h2 class="name">${current.getName()}</h2>
                        <h5 class="role">${current.getRole()}</h5>
                    </div>
                    <ul class="list-group list-group-flush border border-dark">
                        <li class="list-group-item">ID: ${current.getId()}</li>
                        <li class="list-group-item">Email: <a href="mailto:${current.getEmail()}">${current.getEmail()}</a></li>
                        <li class="list-group-item">GitHub Username: ${current.getGithub()}</li>
                    </ul>
                </div>
            </div>
        `
    })
    //iterate through interns
    interns.forEach(function(intern) {
        //create an intern object from the current employee info
        current = new Intern(intern, intern.school);
        //add the intern card to the template
        rendered = rendered + `
        <div class="p-2 bd-highlight">
                <div class="card" style="width: 18rem;">
                    <div class="card-header border border-dark bg-primary">
                        <h2 class="name">${current.getName()}</h2>
                        <h5 class="role">${current.getRole()}</h5>
                    </div>
                    <ul class="list-group list-group-flush border border-dark">
                        <li class="list-group-item">ID: ${current.getId()}</li>
                        <li class="list-group-item">Email: <a href="mailto:${current.getEmail()}">${current.getEmail()}</a></li>
                        <li class="list-group-item">School: ${current.getSchool()}</li>
                    </ul>
                </div>
            </div>
        `
    })
    //add the closing tags for the template page
    rendered += `
    </div>
    </main>
</body>

</html>`
    //return the complete template to be written to a file
    return rendered;
}

module.exports = createFromTemplate;