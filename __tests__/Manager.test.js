const Manager = require('../lib/Manager');

test("Can instantiate Manager instance", () => {
  const e = new Manager();
  expect(typeof (e)).toBe("object");
});
test("Can set name via constructor arguments", () => {
  const name = "Bob";
  const e = new Manager(name);
  expect(e.name).toBe(name);
});


test("Can get name via getName()", () => {
  const testValue = "Bob";
  const e = new Manager(testValue);
  expect(e.getName()).toBe(testValue);
});
test("Can get id via getId()", () => {
  const testValue = 100;
  const e = new Manager("Foo", testValue, 'test@test.com', 102);
  expect(e.getId()).toBe(testValue);
});

test("Can get email via getEmail()", () => {
  const testValue = "test@test.com";
  const e = new Manager("Foo", 1, testValue, 102);
  expect(e.getEmail()).toBe(testValue);
});

test("getRole() should return \"Manager\"", () => {
  const testValue = "Manager";
  const e = new Manager("Bob", 1, "test@test.com", 102);
  expect(e.getRole()).toBe(testValue);
});

test("getofficeNumber() returns github profile", () => {
  const testValue = 102;
  const e = new Manager("Bob", 1, "test@test.com", testValue);
  expect(e.officeNumber).toBe(testValue)

})