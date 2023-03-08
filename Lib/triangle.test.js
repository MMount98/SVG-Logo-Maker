const Triangle = require("./triangle.js");

describe("Triangle", () => {
  test("should apply string for SVG triangle", () => {
    const shape = new Triangle("test", "red", "triangle", "blue");

    expect(shape.render()).toEqual(
      '<polygon points="150, 18 244, 182 56, 182" fill="blue" />'
    );
  });
});
