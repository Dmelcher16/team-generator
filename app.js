const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```

function prompts() {
    return (inquirer.prompt( [
        {
            name: "ManagerName",
            type: "input",
            message: "What is your manager's name?"
        }, {
            name: "ManagerID",
            type: "input",
            message: "What is your manager's ID?"
        }, {
            name: "ManagerEmail",
            type: "input",
            message: "What is your manager's Email?"
        }, {
            name: "ManagerOfficeNumber",
            type: "input",
            message: "What is your manager's office number?"
        },
        {
            type: "list",
            message: "Which type of team member would you like to add?",
            name: "teamMember",
            choices: ["Engineer", "Intern"]
        }, {
            when: function(answers) {
                return answers.teamMember === "Engineer";
            },
            name: "EngineerName",
            type: "input",
            message: "What is your engineer's name?",
        }, {
            when: function(answers) {
                return answers.teamMember === "Engineer";
            },
            name: "EngineerID",
            type: "input",
            message: "What is your engineer's ID?",
        }, {
            when: function(answers) {
                return answers.teamMember === "Engineer";
            },
            name: "EngineerEmail",
            type: "input",
            message: "What is your engineer's Email?",
        }, {
            when: function(answers) {
                return answers.teamMember === "Engineer";
            },
            name: "EngineerGithub",
            type: "input",
            message: "What is your engineer's GitHub username?"
        }, {
            when: function(answers) {
                return answers.teamMember === "Intern";
            },
            name: "InternName",
            type: "input",
            message: "What is your intern's name?",
        }, {
            when: function(answers) {
                return answers.teamMember === "Intern";
            },
            name: "InternID",
            type: "input",
            message: "What is your intern's ID?",
        }, {
            when: function(answers) {
                return answers.teamMember === "Intern";
            },
            name: "InternEmail",
            type: "input",
            message: "What is your intern's Email?",
        }, {
            when: function(answers) {
                return answers.teamMember === "Intern";
            },
            name: "InternSchool",
            type: "input",
            message: "What school does your intern attend?",
        }, 
        
        {
            name: "add",
            type: "confirm",
            message: "Would you like to add another team member?",
            then: function(confirmed) {
                if (true){
                    return prompts()
                } else{
                    return "Your document is being created"
                }
            }
        }


        // {
        //     type: "input",
        //     message: "What is your GitHub username?",
        //     name: "username",
        // },
        // {
        //     type: "list",
        //     message: "What kind of license should your project have?",
        //     name: "license",
        //     choices: ["MIT", "GPL", "Apache", "unlicensed"]
        // },
       
        
        ])
    )
};

prompts();