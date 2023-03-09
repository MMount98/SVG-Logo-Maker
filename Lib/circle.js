const Shape = require("./shape.js");

class Circle extends Shape {
  constructor(text, textColor, shape, bgColor) {
    super(text, textColor, bgColor);
    this.shape = shape;
  }
  render() {
    return `<svg version ="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><${this.shape} cx="50" cy="50" r="40" fill="${this.bgColor}"/><text x="5" y="65" fill="${this.textColor}" font-size="50">${this.text}</text></svg>`;
  }
}

module.exports = Circle;
