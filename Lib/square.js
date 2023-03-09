const Shape = require("./shape.js");

class Square extends Shape {
  constructor(text, textColor, shape, bgColor) {
    super(text, textColor, bgColor);
    this.shape = shape;
  }
  render() {
    return `<svg width="200" height="300"><rect width="100" height="100" fill="${this.bgColor}"/><text x="5" y="65" fill="${this.textColor}" font-size="50">${this.text}</text></svg>`;
  }
}

module.exports = Square;
