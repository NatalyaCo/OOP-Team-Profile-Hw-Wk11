const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const employees = [];
// Use writeFileSync method to use promises instead of a callback function

const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Please enter team member name',
    }, 
    {
        type: 'list',
        name: 'role',
        message: 'Select member role',
        choices: [
            'Manager',
            'Engineer',
            'Intern',
            
        ]
    },

    {
        type: 'input',
        name: 'id',
        message: 'Please enter team member id',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter member email address',
    },

const generateHTML = ({ name, role, id, email}) =>
`<!DOCTYPE html>
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
                
                <div class="col s4">
                    <div class="card cyan lighten-3">
                        <div class="card content teal lighten-5 center-align">
                            <h2 class="padding-top card-title">Tom</h2>
                            <h5 class='padding-bot'><span class="icon icons"><i class="fas fa-briefcase"></i></span>Manager</h5>
                        </div>
                        <div class="card-content">
                            <div class="card-content">
                                <span>ID:1234</span>
                            </div>
                            <div class="card-content">
                                <span>Email:<a class='black-text' href='mailto:tom@gmail.com'> tom@gmail.com</a></span>
                            </div>
                            <div class="card-content">
                                <span>Office Number: 101</span>
                            </div>
                        </div>
                    </div>
                </div>
            
                <div class="col s4">
                    <div class="card cyan lighten-3">
                        <div class="card content teal lighten-5 center-align">
                            <h2 class="padding-top card-title">Dick</h2>
                            <h5 class='padding-bot'><span class="icon icons"><i class="fas fa-laptop-code"></i></span>Engineer</h5>
                        </div>
                        <div class="card-content">
                            <div class="card-content">
                                <span>ID:2345</span>
                            </div>
                            <div class="card-content">
                                <span>Email:<a class='black-text' href='mailto:dick@gmail.com'> dick@gmail.com</a></span>
                            </div>
                            <div class="card-content">
                                <span>GitHub:<a href='https://github.com/dicky99' target='_blank'> dicky99</a></span>
                            </div>
                        </div>
                    </div>
                </div>
            
                <div class="col s4">
                    <div class="card cyan lighten-3">
                        <div class="card content teal lighten-5 center-align">
                            <h2 class="padding-top card-title">Harry</h2>
                            <h5 class='padding-bot'><span class="icon icons"><i class="fas fa-book"></i></span>Intern</h5>
                        </div>
                        <div class="card-content">
                            <div class="card-content">
                                <span>ID:5678</span>
                            </div>
                            <div class="card-content">
                                <span>Email:<a class='black-text' href='mailto:harry@gmail.com'> harry@gmail.com</a></span>
                            </div>
                            <div class="card-content">
                                <span>GitHub:<a href='https://github.com/internz22' target='_blank'> Internz22</a></span>    
                            </div>
                        </div>
                    </div>
                </div>
            
            </section>
        </main>
    </body>
    </html>`;

// Bonus using writeFileSync as a promise
const init = () => {
promptUser()
  // Use writeFileSync method to use promises instead of a callback function
  .then((answers) => fs.writeFileSync('index.html', generateHTML(answers)))
  .then(() => console.log('Successfully wrote to index.html'))
  .catch((err) => console.error(err));
};

init();
