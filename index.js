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
inquirer.prompt([
    {
    // manager questions
        // What is the team manager's name?
        type: 'input',
        name: 'name',
        message: 'What is the team managers name?',
    },
    {
            // What is the team manager's ID?
        type: 'input',
        name: 'id',
        message: 'What is the team managers ID?',
    },
    {
                // What is the team manager's email address?
        type: 'input',
        name: 'email',
        message: 'What is the team managers email address?',
    },
    {
                    // What is the team manager's office number?
        type: 'input',
        name: 'number',
        message: 'What is the team managers office number?',

        // What team member would you like to add? (Choice for employee)
}]).then(response => {
    // populate manager information
    // prompt for next employee()
})

const NextEmployeePrompt = () => {
    inquirer.prompt([{
        // Choice for employee
        type: 'list',
        message: 'Would you like to add an employee?',
        name: 'employee',
        choices: ['Engineer', 'Intern'],
    }]).then(response => {
        // if engineer
            // promptForEngineer
        // else if intern
            // promptForIntern
        // else
    const employeeChoice = response.employee;
        if (employeeChoice === 'Engineer') {
            promptForEngineer()
        } else if (employeeChoice === 'Intern') {
            promptForIntern()
        } else {
            // use the functionality from page-template to generate the team
            generateTeam(team); // check if correct
        }
    })
}

const promptForEngineer = () => {
    inquirer.prompt([
        {
        //engineer questions
            // What is your Engineers name?
            type: 'input',
            name: 'engineerName', //Check name is good to use
            message: 'What is your Engineers name?',
        },
        {
                // What is your Engineers ID?
            type: 'input',
            name: 'engineerId', //Check name is good to use
            message: 'What is your Engineers ID?',
        },
        {
                    // What is your Engineers email address?
            type: 'input',
            name: 'engineeremail', //Check name is good to use
            message: 'What is your Engineers email address?',
        },
        {
                        // What is your Engineers GitHub username?
            type: 'input',
            name: 'githubUsername', //Check name is good to use
            message: 'What is your Engineers GitHub username?',        
         
            // What team member would you like to add? (Choice for employee)
    }]).then(response => {
        // new Engineer(response)
        // add new engineer to employees array
            // promptForNextEmployee
            NextEmployeePrompt()
    })
}

const promptForIntern = () => {
    inquirer.prompt([
        {
        //intern questions
        // What is your Intern's name?
        type: 'input',
            name: 'internName', //Check name is good to use
            message: 'What is your Interns name?',
        },
        {
            // What is your Intern's ID?
            type: 'input',
            name: 'internId', //Check name is good to use
            message: 'What is your Interns ID?',
        },
        {
                // What is your Intern's email address?
            type: 'input',
            name: 'internemail', //Check name is good to use
            message: 'What is your Interns email address?',
        

            // What team member would you like to add? (Choice for employee)
    }]).then(response => {
        // add new intern to employees array
            // promptForNextEmployee
            NextEmployeePrompt()
    })
}

const buildPage = () => {

}