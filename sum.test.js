const test = require("node:test");
const assert = require("node:assert/strict")
const sum = requires("./sum");

test("add 2 numbers", () => {
  assert.equal(sum(2, 3), 5);
});

test("handles negative numbers", () => {
  assert.equal(sum(-2, 3), 1);
});
