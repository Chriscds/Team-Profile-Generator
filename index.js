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
// store responses
teamMembersArray = [];

// inquirer prompt questions
inquirer.prompt([
    {
    // manager questions
        // What is the team manager's name?
        type: 'input',
        name: 'name',
        message: 'What is the team manager\'s name?',
    },
    {
            // What is the team manager's ID?
        type: 'input',
        name: 'id',
        message: 'What is the team manager\'s ID?',
    },
    {
                // What is the team manager's email address?
        type: 'input',
        name: 'email',
        message: 'What is the team manager\'s email address?',
    },
    {
                    // What is the team manager's office number?
        type: 'input',
        name: 'officenumber',
        message: 'What is the team manager\'s office number?',

        // What team member would you like to add? (Choice for employee)
}]).then(response => {
    // populate manager information
    const managerInfo = new Manager(response.name, response.id, response.email, response.officenumber);
    // console.log(managerInfo);
    // push to array
    teamMembersArray.push(managerInfo);
    
    

    // prompts for next employee
    NextEmployeePrompt();
})

const NextEmployeePrompt = () => {
    inquirer.prompt([{
        // Choice for employee
        type: 'list',
        message: 'Would you like to add another employee?',
        name: 'employee',
        choices: ['Engineer', 'Intern', 'No more Employee\'s'],
    }]).then(response => {
        
    const employeeChoice = response.employee;
    // if engineer = promptForEngineer
        if (employeeChoice === 'Engineer') {
            promptForEngineer()
    // else if intern = promptForIntern
        } else if (employeeChoice === 'Intern') {
            promptForIntern()
    // else = generateTeam
        } else {
            // use the functionality from page-template to generate the team
            buildPage();
        }
    })
}

const promptForEngineer = () => {
    inquirer.prompt([
        {
        //engineer questions
            // What is your Engineers name?
            type: 'input',
            name: 'engineerName', 
            message: 'What is your Engineer\'s name?',
        },
        {
                // What is your Engineers ID?
            type: 'input',
            name: 'engineerId', 
            message: 'What is your Engineer\'s ID?',
        },
        {
                    // What is your Engineers email address?
            type: 'input',
            name: 'engineeremail', 
            message: 'What is your Engineer\'s email address?',
        },
        {
                        // What is your Engineers GitHub username?
            type: 'input',
            name: 'githubUsername', 
            message: 'What is your Engineer\'s GitHub username?',        
         
            // What team member would you like to add? (Choice for employee)
    }]).then(response => {
        // new Engineer(response)
        const engineerInfo = new Engineer (response.engineerName, response.engineerId, response.engineeremail, response.githubUsername);
        // add new engineer to employees array
        teamMembersArray.push(engineerInfo);
        // console.log(engineerInfo);
        
        // prompts for next employees
        NextEmployeePrompt()
    })
}

const promptForIntern = () => {
    inquirer.prompt([
        {
        //intern questions
        // What is your Intern's name?
        type: 'input',
            name: 'internName', 
            message: 'What is your Intern\'s name?',
        },
        {
            // What is your Intern's ID?
            type: 'input',
            name: 'internId', 
            message: 'What is your Intern\'s ID?',
        },
        {
                // What is your Intern's email address?
            type: 'input',
            name: 'internEmail', 
            message: 'What is your Intern\'s email address?',
        },
        {
                // What is your Intern's school?
            type: 'input',
            name: 'internSchool', 
            message: 'What is your Intern\'s School\s name?',
        

            // What team member would you like to add? (Choice for employee)
    }]).then(response => {
        // new intern (response)
        const internInfo = new Intern (response.internName, response.internId, response.internEmail, response.internSchool);
        // console.log(internInfo);
        // add new intern to employees array
        teamMembersArray.push(internInfo);
       
        // prompts for next employees
        NextEmployeePrompt()
    })
}

const buildPage = () => {
    // writes file to directory output, filename team.html, render generateTeam(teamMembersArray[array])
    // console.log(teamMembersArray);
    fs.writeFileSync(outputPath, render(teamMembersArray));
    console.log("Your team member html page has been created successfully!");
}

