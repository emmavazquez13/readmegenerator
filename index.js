// TODO: Include packages needed for this application
const { writeFile } = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is your project title?",
  },
  {
    type: "input",
    name: "description",
    message: "What is your description of your project?",
  },
  {
    type: "input",
    name: "installation",
    message: "How do you install this app?",
  },
  {
    type: "input",
    name: "usage",
    message: "What is your usage information?",
  },
  {
    type: "input",
    name: "contribution",
    message: "What are the contribution guidelines?",
  },
  {
    type: "input",
    name: "test",
    message: "What are the test instructions?",
  },
  {
    type: "input",
    name: "github",
    message: "What is your github username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email?",
  },
  {
    type: "input",
    name: "questions",
    message: "How can you be reached for additional questions?",
  },
  {
    type: "list",
    name: "license",
    message: "What license do you want to use?",
    choices: ["Apache", "MIT", "Boost", "None"],
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
   writeFile(fileName, data, err => { 
    if (err) {
    console.log(err) 
    return
    }
    });

}

// TODO: Create a function to initialize app
function init() {
  console.log("Initializing app");

  inquirer
    .prompt(questions)
    .then((answers) => {
      // Use user feedback for... whatever!!
      const markdown = generateMarkdown(answers);
      return writeToFile("./ReadMeSample.md", markdown) 
    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else went wrong
      }
    });
}

// Function call to initialize app
init();
