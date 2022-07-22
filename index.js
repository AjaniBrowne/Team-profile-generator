const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager.js');
const Intern = require('./lib/Intern.js');
const Engineer = require('./lib/Engineer.js');
const Employee = require('./lib/Employee.js');
const generateHtml = require('./src/generateHtml.js');
const teamArray = [];

// const workforce = ({Employee,Engineer,Intern,Manager}) => {
//     return `
//     <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <link rel="stylesheet" href="./style.css">
//     <title>Team Profile Generator</title>
// </head>
// <body>
//     <nav class="team" id="heading">
//         <h1>My Team</h1>
//     </nav>

//     <div id="Cards">
        
//     </div>
    
// </body>
// </html>`
// };


function createManager(){
    inquirer
    .prompt([
        {
        type: 'input',
        message:'Who is the manager?',
        name:'name',
        },
        {
        type: 'input',
        message:'What is the managers id number?',
        name:'id',
        },
        {
        type: 'input',
        message: 'What is the managers office number?',
        name:'officeNumber',
        },
        {
        type: 'input',
        message: 'What is the managers email address?',
        name:'email',
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
        message: 'Please enter your employees name.',
        name: 'name',
        },
        {
         type:'input',
         message: 'Please enter your employees id.',
         name: 'id',
        },
        {
        type: 'input',
        message: 'Please enter employee email.',
        name: 'email',
        },
    ]).then((answers) => {
        const employee = new Employee(answers);
        console.log(employee);
        teamArray.push(employee);
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
        message: 'Please enter the interns email',
        name: 'email',
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

function addEngineer(){
    inquirer
    .prompt([
        {
            type:'input',
            message: 'Please enter your engineers name.',
            name: 'name',
            },
            {
             type:'input',
             message: 'Please enter your engineers id.',
             name: 'id',
            },
            {
            type: 'input',
            message: 'Please enter engineers email.',
            name: 'email',
            },
        {
            type:'input',
            message: 'Please enter the employee github url.',
            name:'github'
            },
    ])
}

function buildTeam(){
    inquirer
    .prompt([{
      type: 'rawlist',
      message: 'Would you like to add more members to the team?' ,
      choices:['Manager','Intern','Engineer','no'],
    }
    ]).then((createTeam) => {
        const team = workforce(data);
        fs.writeFile('./src/generateHtml.js', team, (err) => err ? console.log(err) : console.log('Your team is made.'))
    });
};



createManager();