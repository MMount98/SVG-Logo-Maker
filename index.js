const inquirer = require("inquirer");

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
  .then((answers) => {
    // Use user feedback for... whatever!!
  })
  .catch((error) => {});
