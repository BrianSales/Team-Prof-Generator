// Manager has all the same properties of an employee but with a few more things
const Employee = require('./Employee');
class Intern extends Employee {
  // set up a manager
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school
  }

  getRole() {
    return "Intern"

  }

  getSchool() {
    return this.school
  }

}

module.exports = Intern;