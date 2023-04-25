// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the name of your project?"
    },
    {
        type: "input",
        name: "name",
        message: "Who created this project?"
    },
    {
        type: "input",
        name: "description",
        message: "Provide a brief description of the purpose and functionalitly of your project."
    },
    {
        type: "input",
        name: "installation",
        message: "What are the stepps required to install your project? Provide a step-by-step description of how to get the development environment running."
    },
    {
        type: "input",
        name: "usage",
        message: "Provide instructions and expamples for use. Include screenshots as needed."
    },
    {
        type: "input",
        name: "credits",
        message: "List your collaboratiors, if any, with links to their GitHub profiles."
    },
    {
        type: "checkbox",
        name: "license",
        message: "Please select which licensing option you used on your project",
        choices: ["MIT", "APACHE2.0", "GNU GPLv3", "ISC", "none"]
    },
    {
        type: "input",
        name: "creator",
        message: "Enter your GitHub username."
    },
    {
        type: "input",
        name: "email",
        message: "Provide your preferred email address."
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responses => {
        console.log("Generating Professional README.md File...");
        writeToFile("/dist/README.md", generateMarkdown({ ...responses}));
    }));
}

// Function call to initialize app
init();
