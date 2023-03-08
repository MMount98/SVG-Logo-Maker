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
    let newShape;

    if (data.shape === "circle") {
      newShape = new Circle(
        data.text,
        data.textColor,
        data.shape,
        data.bgColor
      );
    } else if (data.shape === "square") {
      newShape = new Square(
        data.text,
        data.textColor,
        data.shape,
        data.bgColor
      );
    } else if (data.shape === "triangle") {
      newShape = new Triangle(
        data.text,
        data.textColor,
        data.shape,
        data.bgColor
      );
    }
    console.log(newShape);
  })
  .catch((error) => {});
