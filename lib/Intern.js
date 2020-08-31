// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
      super(name, id, email); //calling employee constructor
      this.school = school;
    };

    getSchool(){
        console.log(`${this.name} is currently attending school at ${this.school}`);
        return this.school;
    };

    getRole(){
        return "Intern";
    };
};

module.exports = Intern;