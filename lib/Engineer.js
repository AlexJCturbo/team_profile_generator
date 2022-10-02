const Employee = require('./Employee');

class Engineer extends Employee {
  constructor(name, id, email, github){
    super(name, id, email);
    
    this.github = github;
  }

  getGithub() {
    if (this.github) {
      return `https://github.com/${this.github}`;
    }
  }
  
  // Overridden to return 'Engineer'
  getRole() {
    return `Engineer`;
  }
}

module.exports = Engineer;