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
    let newCircle;
    let newSquare;
    let newTriangle;

    if (data.shape === "circle") {
      newCircle = new Circle(data);
    } else if (data.shape === "square") {
      newSquare = new Square(data);
      console.log(newSquare);
    } else if (data.shape === "triangle") {
      newTriangle = new Triangle(data);
      console.log(newTriangle);
    }
    console.log(newCircle);
  })
  .catch((error) => {});
