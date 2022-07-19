const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const teamArray = [];

const workforce = ({Employee,Engineer,Intern,Manager}) => {
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
        
    </div>
    
</body>
</html>`
};

function createManager(){
    inquirer
    .prompt([
        {
        type: 'input',
        message:'Who is the manager?',
        name:'Manager',
        },
        {
            type: 'input',
            message:'What is the managers id number?',
            name:'Manager'
        },
        {
            type: 'input',
            message: 'What is the managers office number?',
            name:'Manager',
        },
        {
            type: 'input',
            message: 'What is the managers email address?',
            name:'Manager',
        },
    ]).then((answers) => {
        const manager = new Manager(answers);
        console.log(manager)
    });
}

function createTeam(){
    inquirer
    .prompt([
        
    ])
}