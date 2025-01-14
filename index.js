// TODO: Include packages needed for this application
import fs from "fs";
import path from "path";
import inquirer from "inquirer";
import generateMarkdown from "./utils/generateMarkdown.js";

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "projectTitle",
    message: "README Generator",
  },
  {
    type: "input",
    name: "description",
    message: "Describe your project",
  },

  {
    type: "input",
    name: "installationInstructions",
    message: "Describe how to install",
  },

  {
    type: "input",
    name: "usageInformation",
    message: "Describe how to use the generator",
  },

  {
    type: "input",
    name: "contributionGuidelines",
    message: "Rules on how to contribute to the README",
  },

  {
    type: "input",
    name: "testInstructions",
    message: "How do we test the generator?",
  },

  {
    type: "list",
    name: "licenseInformation",
    message: "What type of license is your generator using?",
    choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
  },

  {
    type: "input",
    name: "githubUsername",
    message: "What is your GitHub username?",
  },

  {
    type: "input",
    name: "emailAddress",
    message: "What is your email address?",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    console.log(answers);
    writeToFile("README.md", generateMarkdown(answers));
  });
}

// Function call to initialize app
init();
