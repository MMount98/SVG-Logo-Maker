const Circle = require("./circle.js");

describe("Circle", () => {
  test("should apply string for SVG circle", () => {
    const shape = new Circle("mjm", "red", "circle", "blue");

    expect(shape.render()).toEqual(
      '<svg width="200" height="300"><circle cx="50" cy="50" r="40" fill="blue"/><text x="5" y="65" fill="red" font-size="50">mjm</text></svg>'
    );
  });
});
