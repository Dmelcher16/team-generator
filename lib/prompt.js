const inquirer = require("inquirer");
const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");

function managerPrompt() {
  return inquirer
    .prompt([
      {
        name: "name",
        type: "input",
        message: "What is your manager's name?",
      },
      {
        name: "id",
        type: "input",
        message: "What is your manager's ID?",
      },
      {
        name: "email",
        type: "input",
        message: "What is your manager's Email?",
      },
      {
        name: "officeNumber",
        type: "input",
        message: "What is your manager's office number?",
      },
    ]).then(response =>{
      console.log(response)
      let newManager = new Manager(
        response.name,
        response.id,
        response.email,
        response.officeNumber
        )
        return newManager
    });
};

function addEmployeePrompt() {
  return inquirer
    .prompt([
      {
        type: "list",
        message: "Which type of team member would you like to add?",
        name: "teamMember",
        choices: ["Engineer", "Intern", "Quit"],
      },
    ]);
};

function engineerPrompt() {
  return inquirer
    .prompt([
      {
        name: "name",
        type: "input",
        message: "What is your engineer's name?",
      },
      {
        name: "id",
        type: "input",
        message: "What is your engineer's ID?",
      },
      {
        name: "email",
        type: "input",
        message: "What is your engineer's Email?",
      },
      {
        name: "github",
        type: "input",
        message: "What is your engineer's GitHub username?",
      },
    ]).then(response =>{
      console.log(response)
      let newEngineer = new Engineer(
        response.name,
        response.id,
        response.email,
        response.github
        )
        return newEngineer
    });
};

function internPrompt() {
  return inquirer
    .prompt([
      {
        name: "name",
        type: "input",
        message: "What is your intern's name?",
      },
      {
        name: "id",
        type: "input",
        message: "What is your intern's ID?",
      },
      {
        name: "email",
        type: "input",
        message: "What is your intern's Email?",
      },
      {
        name: "school",
        type: "input",
        message: "What school does your intern attend?",
      },
    ]).then(response =>{
      console.log(response)
      let newIntern = new Intern(
        response.name,
        response.id,
        response.email,
        response.school
        )
        return newIntern
    });
};

module.exports = {
    addEmployeePrompt,
    internPrompt,
    engineerPrompt,
    managerPrompt,
};
