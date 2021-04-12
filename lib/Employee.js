// Describe an employee
class Employee {
  // Set up an employee - an employee needs 3 things:name,id,email
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  // method (like a function)
  getName() {
    return this.name;
  }
  getId() {
    return this.id;
  }
  getEmail() {
    return this.email;
  }

  getRole() {
    return "Employee"
  }

}

// Let other files use this class
module.exports = Employee;

// Create a new employee 
