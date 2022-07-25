const generateManager = (manager) => {
    return `<div class="col-5 bg-light rounded text-center">
    <h3>${manager.getName()}</h3>
    <h4>${manager.getId()}</h4>
    <p><b>Email:</b> ${manager.getEmail()}</p>
    <p><b>Spec:</b> ${manager.getofficeNumber()}</p>
</div>`
}
const generateIntern = (intern) => {
    return `<div class="col-5 bg-light rounded text-center">
    <h3>${intern.getName()}</h3>
    <h4>${intern.getId()}</h4>
    <p><b>Email:</b> ${intern.getEmail()}</p>
    <p><b>Spec:</b> ${intern.getSchool()}</p>
</div>`
}

const generateEngineer = (engineer) => {
    return ` <div class = " col-5 bg-light rounded text-center">
    <h3>${engineer.getName()}</h3>
    <h4>${engineer.getId()}</h4>
    <p><b>Email:<b>${engineer.getEmail()}</p>
    <p><b>Spec:<b>${engineer.getGithub()}</p>
</div> `
    
}

const workforce = (team) => {
    let Manager = [],  Intern = [], Engineer = [];

    let allManagers = team.filter(employee => employee.getRole() == 'Manager');

    for(let i = 0; i < allManagers.length; i++){
        Manager.push(generateManager(allManagers[i]));
    }

    let allInterns = team.filter(employee => employee.getRole() == 'Intern');

    for(let i = 0; i < allInterns.length; i++){
        Intern.push(generateIntern(allInterns[i]));
    }

    let allEngineers = team.filter(employee => employee.getRole() == 'Engineer');

    for(let i = 0; i < allEngineers.length; i++){
        Engineer.push(generateEngineer(allEngineers[i]));
    }
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./dist/style.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css">
    <title>Team Profile Generator</title>
</head>
<body class ="bg-dark" >
    <nav class="team bg-primary text-center" id="heading">
        <h1>My Team</h1>
    </nav>

    <div id="Cards" class="row justify-content-between" >
        ${Manager.join("")}
        ${Intern.join("")}
        ${Engineer.join("")}
    </div>
    <script src="./generateHtml.js"></script>
</body>
</html>`
};

module.exports = team => workforce(team);