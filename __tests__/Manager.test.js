//const Employee = require('../lib/Employee.js');
const Manager = require('../lib/Manager.js');

test("create the manager's office number object", () => {
  const manager = new Manager('John Miller', 'abc-12345', 'jmiller@webdev.io', '501');

  expect(manager.office).toEqual(expect.any(String));
})

test('test override to return Manager', () => {
  const manager = new Manager('John Miller', 'abc-12345', 'jmiller@webdev.io', '501');

  expect(manager.getRole).toBe('Manager');
})