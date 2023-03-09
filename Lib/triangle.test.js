const Triangle = require("./triangle.js");

describe("Triangle", () => {
  test("should apply string for SVG triangle", () => {
    const shape = new Triangle("mjm", "red", "triangle", "blue");

    expect(shape.render()).toEqual(
      '<svg version ="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="75 0, 170 200, 0 200" fill="blue"/><text x="35" y="130" fill="red" font-size="50">mjm</text></svg>'
    );
  });
});
