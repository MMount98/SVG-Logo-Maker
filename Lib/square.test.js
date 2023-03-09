const Square = require("./square.js");

describe("Square", () => {
  test("should apply string for SVG square", () => {
    const shape = new Square("mjm", "red", "square", "blue");

    expect(shape.render()).toEqual(
      '<svg width="200" height="300"><rect width="100" height="100" fill="blue"/><text x="5" y="65" fill="red" font-size="50">mjm</text></svg>'
    );
  });
});
