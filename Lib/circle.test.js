const Circle = require("./circle.js");

describe("Circle", () => {
  test("should apply string for SVG circle", () => {
    const shape = new Circle("test", "red", "circle", "blue");

    expect(shape.render()).toEqual(
      '<circle cx="50" cy="50" r="40" fill="blue" />'
    );
  });
});
