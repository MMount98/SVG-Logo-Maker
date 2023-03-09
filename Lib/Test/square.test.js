const Square = require("../square.js");

describe("Square", () => {
  test("should apply string for SVG square", () => {
    const shape = new Square("mjm", "red", "square", "blue");

    expect(shape.render()).toEqual(
      '<svg version ="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" fill="blue"/><text x="5" y="65" fill="red" font-size="50">mjm</text></svg>'
    );
  });
});
