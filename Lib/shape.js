class Shape {
  constructor(text, textColor, bgColor) {
    this.text = text;
    this.textColor = textColor;
    this.bgColor = bgColor;
  }
  render() {
    return `${this.text} ${this.textColor} ${this.shape} ${this.bgColor}`;
  }
}

module.exports = Shape;
