const Circle = require("./circle.js");

describe("Circle", () => {
  test("should apply string for SVG circle", () => {
    const shape = new Circle("mjm", "red", "circle", "blue");

    expect(shape.render()).toEqual(
      '<svg version ="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="40" fill="blue"/><text x="5" y="65" fill="red" font-size="50">mjm</text></svg>'
    );
  });
});
