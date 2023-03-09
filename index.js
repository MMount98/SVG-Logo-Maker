const inquirer = require("inquirer");
const Circle = require("./Lib/circle.js");
const Square = require("./Lib/square.js");
const Triangle = require("./Lib/triangle.js");
const fs = require("fs");

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

    switch (data.shape) {
      case "circle":
        newShape = new Circle(
          data.text,
          data.textColor,
          data.shape,
          data.bgColor
        );
        break;
      case "square":
        newShape = new Square(
          data.text,
          data.textColor,
          data.shape,
          data.bgColor
        );
        break;
      case "triangle":
        newShape = new Triangle(
          data.text,
          data.textColor,
          data.shape,
          data.bgColor
        );
        break;
      default:
        throw Error("Failed to pass shape value to Constructor");
    }

    fs.writeFile("./Examples/logo.svg", newShape.render(), (err) => {
      if (err) {
        console.log("Ran into Error building Logo.svg");
      } else {
        console.log("Generated logo.svg");
      }
    });
  })
  .catch((error) => {});
