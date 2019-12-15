const assert = require("assert");
const hoover = require("../program");

describe("hoover program function", () => {
  it("Should follow directions correctly to its final position", () => {
    const instructions = `5 5\n1 2\n1 0\n2 2\n2 3\nNNESEESWNWW`;
    assert.equal(hoover(instructions),`1 3\n1`);
  });

  it("Clean up a dirt patch only once even if it moves over multiple times ", () => {
    const instructions = `5 5\n1 2\r\n1 0\n2 2\n2 3\nNESEEWWWE`;
    assert.equal(hoover(instructions),`2 2\n2`);
  });

  it("Should stay on the grid even if directions indicate to move beyond", () => {
    const instructions = `5 5\n1 2\r\n1 0\n2 2\n2 3\nNWWNNNW`;
    assert.equal(hoover(instructions),`0 4\n0`);
  });
});
