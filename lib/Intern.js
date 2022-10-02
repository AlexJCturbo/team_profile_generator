const Employee = require('./Employee');

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);

    this.school = school;
  }

  getSchool() {
    if (this.school) {
      return `The Intern is attending ${this.school}.`;
    }
  }
  
  // Overridden to return 'Intern'
  getRole() {
    return `Intern`;
  }

}

module.exports = Intern;