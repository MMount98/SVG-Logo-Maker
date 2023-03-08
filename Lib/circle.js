const Shape = require("./shape.js");

class Circle extends Shape {
  constructor(text, textColor, shape, bgColor) {
    super(text, textColor, bgColor);
    this.shape = shape;
  }
  render() {
    return `<${this.shape} cx="50" cy="50" r="40" fill="${this.bgColor}" />`;
  }
}

module.exports = Circle;
