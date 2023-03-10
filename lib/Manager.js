// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee.js");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        
        super(name, id, email, "Manager");
        this.officeNumber = officeNumber;
    }
    // returns officeNumber
    getOfficeNumber() {
        return this.officeNumber;
    }
    // Overide to return Manager
    getRole() {
        return "Manager";
    }
    
}

module.exports = Manager;