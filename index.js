//Requie In
const inquirer = require("inquirer");
const fs = require("fs");
const circle = require("./Lib/Circle-constructor.js");

inquirer
  .prompt([
    {
      type: "type",
      message: "Please Enter up to three Characters:",
      name: "title",
    },
    {
      type: "type",
      message: "Please type in a color (or a hexadecimal number) for the Text:",
      name: "colorText",
    },
    {
      type: "list",
      message: "Please Select a Shape:",
      choices: ["circle", "triangle", "square"],
      name: "shape",
    },
    {
      type: "type",
      message:
        "Please type in a color (or a hexadecimal number) for the shape:",
      name: "colorFill",
    },
  ])
  .then((data) => {
    const renderShape = (data) => {
      switch (data.Shape) {
        case "circle":
          return new Circle(data);
          break;
        case "triangle":
          return new Triangle(data);
          break;
        case "square":
          return new Square(data);
          break;
        default:
          throw new Error("Error in Passing Input from Prompt");
      }
    };
  })
  .catch((error) => {});
