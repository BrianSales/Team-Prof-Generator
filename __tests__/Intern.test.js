const Intern = require('../lib/Intern');

test("Can instantiate Intern instance", () => {
  const e = new Intern();
  expect(typeof (e)).toBe("object");
});
test("Can set name via constructor arguments", () => {
  const name = "Bob";
  const e = new Intern(name);
  expect(e.name).toBe(name);
});


test("Can get name via getName()", () => {
  const testValue = "Bob";
  const e = new Intern(testValue);
  expect(e.getName()).toBe(testValue);
});
test("Can get id via getId()", () => {
  const testValue = 100;
  const e = new Intern("Foo", testValue, 'test@test.com', 'USC');
  expect(e.getId()).toBe(testValue);
});

test("Can get email via getEmail()", () => {
  const testValue = "test@test.com";
  const e = new Intern("Foo", 1, testValue, 'USC');
  expect(e.getEmail()).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const e = new Intern("Bob", 1, "test@test.com", 'USC');
  expect(e.getRole()).toBe(testValue);
});

test("getSchool() returns school", () => {
  const testValue = "USC";
  const e = new Intern("Bob", 1, "test@test.com", testValue);
  expect(e.getSchool()).toBe(testValue)

})