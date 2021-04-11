
const Engineer = require('../lib/Engineer');

test("Can instantiate Engineer instance", () => {
  const e = new Engineer();
  expect(typeof (e)).toBe("object");
});
test("Can set name via constructor arguments", () => {
  const name = "Bob";
  const e = new Engineer(name);
  expect(e.name).toBe(name);
});


test("Can get name via getName()", () => {
  const testValue = "Bob";
  const e = new Engineer(testValue);
  expect(e.getName()).toBe(testValue);
});
test("Can get id via getId()", () => {
  const testValue = 100;
  const e = new Engineer("Foo", testValue, 'test@test.com', 'https://github.com/BrianSales');
  expect(e.getId()).toBe(testValue);
});

test("Can get email via getEmail()", () => {
  const testValue = "test@test.com";
  const e = new Engineer("Foo", 1, testValue, 'https://github.com/BrianSales');
  expect(e.getEmail()).toBe(testValue);
});

test("getRole() should return \"Engineer\"", () => {
  const testValue = "Engineer";
  const e = new Engineer("Bob", 1, "test@test.com", 'https://github.com/BrianSales');
  expect(e.getRole()).toBe(testValue);
});

test("getGithub() returns github profile", () => {
  const testValue = "https://github.com/BrianSales";
  const e = new Engineer("Bob", 1, "test@test.com", testValue);
  expect(e.getGithub()).toBe(testValue)

})