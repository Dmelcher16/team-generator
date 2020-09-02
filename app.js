const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Employee = require("./lib/Employee");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const {
    addEmployeePrompt,
    internPrompt,
    engineerPrompt,
    managerPrompt,
} = require("./lib/prompt");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const team = [];

managerPrompt().then(function(manager){
    team.push(manager);
    main();
});

async function main() {
    const {teamMember} = await addEmployeePrompt();
    if (teamMember === "Engineer"){
        const engineer = await engineerPrompt();
        team.push(engineer);
        
        main();
    } else if (teamMember === "Intern"){
        const intern = await internPrompt();
        team.push(intern);
        
        main();
    } else {
        console.log("Your new file is ready! Check the output folder!")
        fs.writeFile(outputPath, render(team), function (err) {
            if (err) {
                return console.log(err);
            }
        });
    };
};