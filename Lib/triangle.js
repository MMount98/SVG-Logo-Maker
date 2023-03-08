const Shape = require("./shape.js");

class Triangle extends Shape {
  constructor(text, textColor, shape, bgColor) {
    super(text, textColor, bgColor);
    this.shape = shape;
  }
  render() {
    return `'<polygon points="150, 18 244, 182 56, 182" fill="${this.bgColor}" />'`;
  }
}

module.exports = Triangle;
