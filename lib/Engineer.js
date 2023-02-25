// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee.js");

class Engineer extends Employee {
    constructor(name, id, email, github) {

        super(name, id, email, "Engineer");
        this.github = github;
    }
    // returns github
    getGithub(){
        return this.github;
    }
    // Overide to return Engineer
    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;