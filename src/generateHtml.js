const generateManager = (manager) => {
    return `<div><h3>${manager.getName()}</h3><h4>${manager.getofficeNumber()}</h4></div>`
}
const generateIntern = (intern) => {
    return `<div><h3>${intern.getName()}</h3><h4>${intern.getSchool()}</h4></div>`
}

const workforce = (team) => {
    let Manager = [],  Intern = [], Engineer = "";

    let allManagers = team.filter(employee => employee.getRole() == 'Manager');

    for(let i = 0; i < allManagers.length; i++){
        Manager.push(generateManager(allManagers[i]));
    }

    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./style.css">
    <title>Team Profile Generator</title>
</head>
<body>
    <nav class="team" id="heading">
        <h1>My Team</h1>
    </nav>

    <div id="Cards">
        <span>${Manager.join("")}</span>
        <span>${Intern}</span>
        <span>${Engineer}</span>
    </div>
    
</body>
</html>`
};

module.exports = team => workforce(team);