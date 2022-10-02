const Employee = require('../lib/Employee.js');

test('create an employee object', () => {
  const employee = new Employee('John Miller', 'abc-12345', 'jmiller@webdev.io', 501);

  expect(employee.name).toEqual(expect.any(String));
  expect(employee.id).toEqual(expect.any(String));
  expect(employee.email).toEqual(expect.any(String));
})

test("get the employee's name", () => {
  const employee = new Employee('John Miller', 'abc-12345', 'jmiller@webdev.io', 501);

  expect(employee.getName()).toEqual(expect.any(String));
})

test("get the employee's ID", () => {
  const employee = new Employee('John Miller', 'abc-12345', 'jmiller@webdev.io', 501);

  expect(employee.getId()).toEqual(expect.any(String));
})

test("get the employee's email", () => {
  const employee = new Employee('John Miller', 'abc-12345', 'jmiller@webdev.io', 501);

  expect(employee.getEmail()).toEqual(expect.any(String));
})

test("get the employee's role", () => {
  const employee = new Employee('John Miller', 'abc-12345', 'jmiller@webdev.io', 501);

  expect(employee.getRole()).toBe('Employee');
})