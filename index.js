const inquirer = require("inquirer");
const Circle = require("./Lib/circle.js");
const Square = require("./Lib/square.js");
const Triangle = require("./Lib/triangle.js");

inquirer
  .prompt([
    {
      type: "input",
      name: "text",
      message: "Please enter in a title (only 3 characters):",
    },
    {
      type: "input",
      name: "textColor",
      message:
        "Please enter in a color (or a hexadecimal number) for the text:",
    },
    {
      type: "list",
      name: "shape",
      message: "Which background shape would you like?",
      choices: ["circle", "square", "triangle"],
    },
    {
      type: "input",
      name: "bgColor",
      message:
        "Please enter in a color (or a hexadecimal number) for the background color:",
    },
  ])
  .then((data) => {
    if (data.shape === "circle") {
      let newCircle = new Circle(data);
      console.log(newCircle);
    } else if (data.shape === "square") {
      let newSquare = new Square(data);
      console.log(newSquare);
    } else if (data.shape === "triangle") {
      let newTriangle = new Triangle(data);
      console.log(newTriangle);
    }
  })
  .catch((error) => {});
