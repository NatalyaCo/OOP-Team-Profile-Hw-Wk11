const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const {
    choices
} = require('yargs');
const {
    type
} = require('os');

const employees = [];


const promptUser = () => {
    return inquirer.prompt([{
            type: 'input',
            name: 'name',
            message: 'Please enter manager name',
        },

        {
            type: 'input',
            name: 'id',
            message: 'Please enter manager id',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter member email address',
        },
        {
            type: 'input',
            name: 'office',
            message: 'Enter Manager office number'
        },

    ])
}
const generateHTMLcards = (employees) =>{
    let newField = ""
   if (employees.getRole()==="Manager") {
       newField = ` <h4> Office Number ${employees.officeNumber} </h4>`
   }
else if (employees.getRole()==="Engineer") {
        newField = `  <h4>GitHub ${employees.github} </h4>`
}
else if (employees.getRole()==="Intern") {
    newField = `<h4> School of Attendance ${employees.school} </h4>`
}

 return  `<section class='row'>
 <div class="col s4">
 <div class="card cyan lighten-3">
     <div class="card content teal lighten-5 center-align">
         <h2 class="padding-top card-title">${employees.name}</h2>
         <h5>${employees.getRole()}</h5>
     </div>
     <div class="card-content">
         <div class="card-content">
             <h5> ID number ${employees.id}</h5>
         </div>
         <div class="card-content">
             <span>Email:<a class='black-text' href='mailto:${employees.email}'> ${employees.email}</a></span>
         </div>
         <div class="card-content">
        ${newField}
         </div>
     </div>
 </div>
</div>
</section>
`
}
 const generateHTML=(employees)=> { 
     let cards =""
     for (let i=0; i<employees.length; i++){
         cards = cards + generateHTMLcards(employees[i])
     }

     return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" integrity="sha512-UJfAaOlIRtdR+0P6C3KUoTDAxVTuy3lnSXLyLKlHYJlcSU8Juge/mjeaxDNMlw9LgeIotgz5FP8eUQPhX1q10A==" crossorigin="anonymous" />        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA==" crossorigin="anonymous" />
 <link rel="stylesheet" href="./assets/css/style.css">
    </head>
    <body>
        <header class='cyan lighten-1'>
            <div class='cyan lighten-1'>
                <h1 class='center-align'>Our Dream Team</h1>
            </div>
        </header>
        <main>
            <section class='row'>
                
               ${cards}
            
               
            
            </section>
        </main>
    </body>
    </html>`;
}

const init = () => {
    promptUser()

        .then((answers) => {
            const manager = new Manager(answers.name, answers.id, answers.email, answers.office)

            employees.push(manager)
            menu()

            console.log('Successfully wrote to index.html')
        })
        .catch((err) => console.error(err));
};

function menu() {
    inquirer.prompt([{
            type: 'confirm',
            message: 'Do you want to add another employee?',
            name: 'confirm'
        }])
        .then(response => {
            console.log(response.confirm)
            if (response.confirm  ) {
                addEmployee()
            } else {
                console.log(employees)
                fs.writeFileSync('index.html', generateHTML(employees))
            }
        })
}



function addEmployee() {
    inquirer.prompt([{
            type: 'list',
            name: 'job',
            message: 'Which of the positions would you like to add?',
            choices: ['Engineer', 'Intern']
        }])
        .then(answers => {

            if (answers.job === 'Engineer') {
                addEngineer()
            } else {
                addIntern()
            }

        })

}

function addEngineer() {
    inquirer.prompt([{
                type: 'input',
                name: 'name',
                message: 'Please enter engineer name',
            },

            {
                type: 'input',
                name: 'id',
                message: 'Please enter engineer id',
            },
            {
                type: 'input',
                name: 'email',
                message: 'Please enter member email address',
            },

            {
                type: 'input',
                name: 'git',
                message: 'Enter engineer GitHub user name'
            }
        ])
        .then(answers => {
            const engineer = new Engineer(answers.name, answers.id, answers.email, answers.git)

            employees.push(engineer)
            menu()
        })
}

function addIntern() {
    inquirer.prompt([{
                type: 'input',
                name: 'name',
                message: 'Please enter Intern name',
            },

            {
                type: 'input',
                name: 'id',
                message: 'Please enter Intern id',
            },
            {
                type: 'input',
                name: 'email',
                message: 'Please enter member email address',
            },

            {
                type: 'input',
                name: 'school',
                message: 'Enter name of school Intern is attending'
            }
        ])

        .then(answers => {
            const intern = new Intern(answers.name, answers.id, answers.email, answers.school)

            employees.push(intern)
            menu()
        })
       
}


init();