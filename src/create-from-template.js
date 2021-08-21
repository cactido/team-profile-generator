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
    current = new Manager(manager[0], manager[0].officeNumber);

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
    
    engineers.forEach(function(engineer) {
        current = new Engineer(engineer, engineer.github);
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

    interns.forEach(function(intern) {
        current = new Intern(intern, intern.school);
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

    rendered += `
    </div>
    </main>
</body>

</html>`

    return rendered;
}

module.exports = createFromTemplate;