const Shape = require("./shape.js");

class Square extends Shape {
  constructor(text, textColor, shape, bgColor) {
    super(text, textColor, bgColor);
    this.shape = shape;
  }
  render() {
    return `<svg version ="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" fill="${this.bgColor}"/><text x="5" y="65" fill="${this.textColor}" font-size="50">${this.text}</text></svg>`;
  }
}

module.exports = Square;
