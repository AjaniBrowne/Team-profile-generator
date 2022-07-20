const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const Employee = require('./lib/Employee');
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
        console.log(manager);
        teamArray.push(manager);
    });

}

function createTeam(){
    inquirer
    .prompt([
        {
          type: 'rawlist',
          message: 'Please select employee type.',
          name: 'role' ,
          choices: ['Engineer','Intern']

        },
        {
         type:'input',
         message: 'Please enter your employees id.',
         name: 'id',
        },
        {
        type:'input',
        message: 'Please enter the employee github url.',
        name:'github'
        },
        {
        type: 'input',
        message: 'Please enter employee email.',
        name: 'email',
        },
    ]).then((answers) => {
        const engineer = new Engineer(answers);
        console.log(engineer);
        teamArray.push(engineer);
        });
    }

function addIntern(){
    inquirer
    .prompt([
        {
        type: 'input',
        message: 'Please enter interns name.',
        name:  'name',  
        },
        {
        type: 'input',
        message: 'What school did the intern attend?',
        name:'school',    
        },    
    ]).then((answers) => {
        const intern = new Intern(answers);
        console.log(intern);
        teamArray.push(intern);
    });
}

function buildTeam(){
    inquirer
    .prompt([{
      type: 'rawlist',
      message: 'Would you like to add more members to the team?' ,
      choices:[Manager,Intern,Engineer,Employee],
    }
    ]).then((createTeam) => {
        const team = workforce(data);
        fs.writeFile('./src/generateHtml.js', team, (err) => err ? console.log(err) : console.log('Your team is made.'))
    });
};

createManager();