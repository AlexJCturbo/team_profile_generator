class Employee {
  constructor(name = '') {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  getName() {
    inquirer.prompt ({
      type: 'input',
      name: 'name',
      message: 'What is your name?'
    })
    .then (({name}) => {
      this.employee = new Employee(name);
    })
  }

  getId()

  getEmail()

  getRole() //Returns 'Employee'

}