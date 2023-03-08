const Square = require("./square.js");

describe("Square", () => {
  test("should apply string for SVG square", () => {
    const shape = new Square("test", "red", "square", "blue");

    expect(shape.render()).toEqual(
      '<rect width="200" height="200" style="fill:blue"/> '
    );
  });
});
