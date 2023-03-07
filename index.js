//Requie In
const inquirer = require("inquirer");
const fs = require("fs");
const shapeCheck = require("./Lib/shapes");

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
      name: "colorShape",
    },
  ])
  .then((data) => {
    console.log(shapeCheck.shapeRender(data.shape));
  })
  .catch((error) => {});
