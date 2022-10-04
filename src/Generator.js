const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const template = require('./template');


//Main function of the Team Profile Generator
function Generator() {
  this.manager;
  this.engineer;
  this.intern;
  this.team = [];

  //Function to collect manager data
  Generator.prototype.initializeGenerator = function() {
    console.log(`

Welcome to the Team Profile Generator!

==============================================================
To generate the team profile provide the following information
==============================================================

    `);

    inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: "Enter the name of the team manager (required):",
        validate: nameManager => {
          if (nameManager) {
            return true;
          } else {
            console.log("Please enter the name of the team manager:");
          }
        }
      },
      {
        type: 'input',
        name: 'id',
        message: 'Enter the manager ID (required):',
        validate: idManager => {
          if (idManager) {
            return true;
          } else {
            console.log("Please enter the manager ID:");
          }
        }
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter the manager email address (required):',
        validate: emailManager => {
          if (emailManager) {
            return true;
          } else {
            console.log("Please enter the manager email address:");
          }
        }
      },
      {
        type: 'input',
        name: 'office',
        message: "Enter the manager's office number (required):",
        validate: officeManager => {
          if (officeManager) {
            return true;
          } else {
            console.log("Please enter the manager's office number:");
          }
        }
      }
    ])
    .then(managerData => {
      //Destructuring the answers
      const {name, id, email, office} = managerData;
      this.manager = new Manager(name, id, email, office);
      this.team.push(this.manager);
      console.log(this.team);
      this.goToMenu();
    })
  };


  //Function to add members to the team or continue generating team profile
  Generator.prototype.goToMenu = function() {
    console.log(`

------------------------------------------------------------------
Select an option from the next list to continue building the team.
    `)

    inquirer.prompt({
        type: 'list',
        name: 'menu',
        message: 'Select what option would you like from the next list:',
        choices: [
          'Add an engineer to the team.',
          'Add an intern to the team.',
          'Create the team profile.']
      })
      .then(selection => {
        console.log(selection.menu);

        if (selection.menu === 'Add an engineer to the team.') {
          this.addEngineer();
        } else if (selection.menu === 'Add an intern to the team.') {
          this.addIntern();
        } else {
          this.buildTeam();
        }
      })
  };

  
  //Function to collect engineers data
  Generator.prototype.addEngineer = function() {
    inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: "Enter the name of the engineer (required):",
        validate: nameManager => {
          if (nameManager) {
            return true;
          } else {
            console.log("Please enter the name of the engineer:");
          }
        }
      },
      {
        type: 'input',
        name: 'id',
        message: 'Enter the engineer ID (required):',
        validate: idManager => {
          if (idManager) {
            return true;
          } else {
            console.log("Please enter the engineer ID:");
          }
        }
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter the engineer email address (required):',
        validate: emailManager => {
          if (emailManager) {
            return true;
          } else {
            console.log("Please enter the engineer email address:");
          }
        }
      },
      {
        type: 'input',
        name: 'github',
        message: "Enter the engineer's GitHub (required):",
        validate: githubManager => {
          if (githubManager) {
            return true;
          } else {
            console.log("Please enter the engineer's GitHub:");
          }
        }
      }
    ])
    .then(engineerData => {
      //Destructuring the answers
      const {name, id, email, github} = engineerData;
      this.engineer = new Engineer(name, id, email, github);
      this.team.push(this.engineer);
      console.log(this.team);
      this.goToMenu();
    })
  };


  //Function to collect interns data
  Generator.prototype.addIntern = function() {
    inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: "Enter the name of the intern (required):",
        validate: nameManager => {
          if (nameManager) {
            return true;
          } else {
            console.log("Please enter the name of the intern:");
          }
        }
      },
      {
        type: 'input',
        name: 'id',
        message: 'Enter the intern ID (required):',
        validate: idManager => {
          if (idManager) {
            return true;
          } else {
            console.log("Please enter the intern ID:");
          }
        }
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter the intern email address (required):',
        validate: emailManager => {
          if (emailManager) {
            return true;
          } else {
            console.log("Please enter the intern email address:");
          }
        }
      },
      {
        type: 'input',
        name: 'school',
        message: "Enter the intern's school (required):",
        validate: schoolManager => {
          if (schoolManager) {
            return true;
          } else {
            console.log("Please enter the intern's school:");
          }
        }
      }
    ])
    .then(internData => {
      //Destructuring the answers
      const {name, id, email, school} = internData;
      this.intern = new Intern(name, id, email, school);
      this.team.push(this.intern);
      console.log(this.team);
      this.goToMenu();
    })
  };

  //Function to generate the team profile and write the HTML file
  Generator.prototype.buildTeam = function() {
    const teamData = template(this.team);
    //console.log(teamData);

    return new Promise((resolve, reject) => {
      fs.writeFile('./dist/index.html', template(this.team), err => {
        if (err) {
          reject(err);
          return;
        }
        resolve({
          ok: true,
          message: 'File created!'
        });
      });

      fs.copyFile('./src/style.css', './dist/style.css', err => {
        if (err) {
            reject(err);
            return;
        }
        resolve ({
            ok: true,
            message: 'Style sheet copied successfully!'
        });
      });

    });
  };

};

module.exports = Generator;