// TODO: Include packages needed for this application
const fs = require("fs")
const inquirer = require("inquirer");
 const generateMarkdown = require("./utils/generateMarkdown.js")
// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "Enter the title of your project",
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter your projects name');
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "about",
            message: "Enter a description of your project",
            validate: aboutInput => {
                if (aboutInput) {
                    return true;
                } else {
                    console.log('Please enter a description of your project');
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "install",
            message: "Please enter the instructions on how to install your project",
            validate: installInput => {
                if (installInput) {
                    return true;
                } else {
                    console.log('Please enter the installation instructions of your project');
                    return false;
                }
            }
        },
        {
            type: "rawlist",
            name: "license",
            message: "Pick a license",
            choices: [
                "MIT", "Apache", "GNU"
            ]
        }
    ]).then(project=> {
        writeToFile('README', project)
    })
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) { 
    const markdown = generateMarkdown(data)
    console.log(markdown);
    fs.writeFile('./dist/'+fileName+'.md', markdown, err => {
        if (err) {
            reject(err);
            return;
        }
        console.log('File created!')
    });
}

// TODO: Create a function to initialize app
function init() { 
    questions()
}

// Function call to initialize app
init();
