const Shape = require("./shape.js");

class Triangle extends Shape {
  constructor(text, textColor, shape, bgColor) {
    super(text, textColor, bgColor);
    this.shape = shape;
  }
  render() {
    return `<svg width="200" height="300"><polygon points="75 0, 170 200, 0 200" fill="${this.bgColor}"/><text x="35" y="130" fill="${this.textColor}" font-size="50">${this.text}</text></svg>`;
  }
}

module.exports = Triangle;
