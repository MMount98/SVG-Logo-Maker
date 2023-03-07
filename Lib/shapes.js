const shapeRender = (shape) => {
  switch (shape) {
    case "circle":
      return `<circle cx="50" cy="50" r="40"/>`;
      break;
    case "triangle":
      return `<polygon points="50 15, 100 100, 0 100"/>`;
      break;
    case "square":
      return `<rect width="200" height="200"/>`;
      break;
    default:
  }
};

module.exports = { shapeRender };
