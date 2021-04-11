// Manager has all the same properties of an employee but with a few more things
class Engineer extends Employee {
  // set up a manager
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github
  }

  getRole() {
    return "Engineer"

  }

  getGithub() {
    return this.github
  }

}