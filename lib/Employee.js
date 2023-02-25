// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email, role) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role;
    }
    // returns name
    getName(){
        return this.name;
    }   
    // returns id
    getId(){
        return this.id;
    }
    // returns email
    getEmail(){
        return this.email;
    }
    // returns Employee
    getRole(){
        return "Employee";
    }
}

module.exports = Employee;