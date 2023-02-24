const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

// inquirer prompt questions
inquirer.prompt([{
    // manager questions
        // What is the team manager's name?
            // What is the team manager's ID?
                // What is the team manager's email address?
                    // What is the team manager's office number?

        // What team member would you like to add? (Choice for employee)
}]).then(response => {
    // populate manager information
    // prompt for next employee()
})

const NextEmployeePrompt = () => {
    inquirer.prompt([{
        // Choice for employee
    }]).then(response => {
        // if engineer
            // promptForEngineer
        // else if intern
            // promptForIntern
        // else
            // use the functionality from page-template to generate the team
    })
}

const promptForEngineer = () => {
    inquirer.prompt([{
        //engineer questions
            // What is your Engineers name?
                // What is your Engineers ID?
                    // What is your Engineers email address?
                        // What is your Engineers GitHub username?
         
            // What team member would you like to add? (Choice for employee)
    }]).then(response => {
        // new Engineer(response)
        // add new engineer to employees array
            // promptForNextEmployee
    })
}

const promptForIntern = () => {
    inquirer.prompt([{
        //intern questions
            // What is your Intern's name?
                // What is your Intern's ID?
                    // What is your Intern's email address?

            // What team member would you like to add? (Choice for employee)
    }]).then(response => {
        // add new intern to employees array
            // promptForNextEmployee
    })
}

const buildPage = () => {

}