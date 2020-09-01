const inquirer = require("inquirer");

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
    ])
    // .then(function (manager) {
    //   // console.log(manager);
    //   addEmployeePrompt();
    // });
}

function addEmployeePrompt() {
  return inquirer
    .prompt([
      {
        type: "list",
        message: "Which type of team member would you like to add?",
        name: "teamMember",
        choices: ["Engineer", "Intern", "Quit"],
      },
    ])
    // .then(function ({ teamMember }) {
    //   if (teamMember === "Engineer") {
    //     console.log("Engineer");
    //     engineerPrompt();
    //   } else if (teamMember === "Intern") {
    //     console.log("Intern");
    //     internPrompt();
    //   } else {
    //     // write to file
    //   }
    // });
}

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
    ])
    // .then(function (engineer) {
    //   console.log(engineer);
    //   addEmployeePrompt();
    // });
}

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
    ])
    // .then(function (intern) {
    //   console.log(intern);
    //   addEmployeePrompt();
    // });
}

module.exports = {
    addEmployeePrompt,
    internPrompt,
    engineerPrompt,
    managerPrompt,
};
