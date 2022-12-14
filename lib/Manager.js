const Employee = require('./Employee');

class Manager extends Employee {
  constructor(name, id, email, office) {
    super(name, id, email);

    this.office = office;
  }

  //Overridden to return 'Manager' instead of 'Employee'
  getRole() {
    return `Manager`;
  }
}

module.exports = Manager;