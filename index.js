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
        const manager = new Manager(answers.name,answers.id,answers.email,answers.officeNumber);
        console.log(manager);
        teamArray.push(manager);
        buildTeam();
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
        {
            type: 'input',
            message: 'Please enter the id number',
            name: 'id',
        }   
    ]).then((answers) => {
        const intern = new Intern(answers.name,answers.id,answers.email,answers.school);
        console.log(intern);
        teamArray.push(intern);
        buildTeam();
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
    ]).then((answers) => {
        const engineer = new Engineer(answers.name,answers.id,answers.email,answers.github);
        console.log(engineer);
        teamArray.push(engineer);
        buildTeam();
    })
}

function buildTeam(){
    inquirer
    .prompt([{
      type: 'rawlist',
      message: 'Would you like to add more members to the team?' ,
      choices:['Manager','Intern','Engineer','no'],
      name: "positions"
    }
    ]).then((createTeam) => { 
        if(createTeam.positions == "Manager"){
            createManager()
        }else if(createTeam.positions == "Intern"){
            addIntern()
        }else if(createTeam.positions == "Engineer"){
            addEngineer()
        }else{
            const team = generateHtml(teamArray);
        fs.writeFile('./src/teamHtml.html', team, (err) => err ? console.log(err) : console.log('Your team is made.'))
        }
    });
};



createManager();