const Shape = require("./shape.js");

class Square extends Shape {
  constructor(text, textColor, shape, bgColor) {
    super(text, textColor, bgColor);
    this.shape = shape;
  }
}

module.exports = Square;
