const Shape = require("./shape.js");

class Square extends Shape {
  constructor(text, textColor, shape, bgColor) {
    super(text, textColor, bgColor);
    this.shape = shape;
  }
  render() {
    return `<rect width="200" height="200" style="fill:${this.bgColor}"/> `;
  }
}

module.exports = Square;
