const Intern = require('../lib/Intern.js');

test("create the intern's school object property", () => {
  const intern = new Intern('Emma Brown', 'iii-123', 'intern123@webdev.io', 'UofT');

  expect(intern.school).toEqual(expect.any(String));
});

test("get the intern's school name", () => {
  const intern = new Intern('Emma Brown', 'iii-123', 'intern123@webdev.io', 'UofT');

  expect(intern.getSchool()).toEqual(expect.any(String));
})

test('test override to return Engineer', () => {
  const intern = new Intern('Emma Brown', 'iii-123', 'intern123@webdev.io', 'UofT');

  expect(intern.getRole()).toBe('Intern');
});