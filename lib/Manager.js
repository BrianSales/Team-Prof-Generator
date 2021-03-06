// Manager has all the same properties of an employee but with a few more things
const Employee = require('./Employee');
class Manager extends Employee {
  // set up a manager
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }

  getRole() {
    return "Manager"

  }

}


module.exports = Manager;