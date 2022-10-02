const Engineer = require('../lib/Engineer.js');

test("create the engineer's github username object property", () => {
  const engineer = new Engineer('Peter Evans', 'ccc-22222', 'pevans@webdev.io', 'AlexJCturbo');

  expect(engineer.github).toEqual(expect.any(String));
});

test("get the engineer's GitHub", () => {
  const engineer = new Engineer('Peter Evans', 'ccc-22222', 'pevans@webdev.io', 'AlexJCturbo');

  expect(engineer.getGithub()).toEqual(expect.any(String));
})

test('test override to return Engineer', () => {
  const engineer = new Engineer('Peter Evans', 'ccc-22222', 'pevans@webdev.io', 'AlexJCturbo');

  expect(engineer.getRole()).toBe('Engineer');
});