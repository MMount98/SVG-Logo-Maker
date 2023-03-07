const inquirer = require("inquirer");

inquirer
  .prompt([
    {
      type: "type",
      message: "Please Enter up to three Characters:",
      name: "title",
    },
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
  })
  .catch((error) => {});
