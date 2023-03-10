// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee.js");

class Intern extends Employee {
    constructor(name, id, email, school) {
        
        super(name, id, email, "Intern");
        this.school = school;
    }
    // returns school
    getSchool(){
        return this.school;
    }
    // Overide to return Intern
    getRole(){
        return "Intern";
    }
}

module.exports = Intern;