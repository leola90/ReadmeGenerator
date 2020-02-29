const inquirer = require("inquirer");
const fs = require("fs");
const axios = require("axios");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
    return inquirer.prompt([
        {
            type: "input",
            name: "username",
            message: "Enter your GitHub username:"
        },
        {
            type: "input",
            name: "title",
            message: "What is the project title?",
        },
        {
            type: "input",
            name: "description",
            message: "Description?",
        },
        {
            type: "input",
            name: "table",
            message: "Table of Contents?",
        },
        {
            type: "input",
            name: "installation",
            message: "Installation?",
        },
        {
            type: "input",
            name: "usage",
            message: "What is the usage?",
        },
        {
            type: "input",
            name: "License",
            message: "What is the license?",
        },
        {
            type: "input",
            name: "contributing",
            message: "Contributors?",
        },
        {
            type: "input",
            name: "test",
            message: "Tests?",
        }
    ])
};

function README(answers) {
    return `
     #My GitHub username is: ${answers.username}
     #Project Title: ${answers.title}
     #Description: ${answers.description}
     #Table of Content: ${answers.table}
     #Installation: ${answers.installation}
     #Usage: ${answers.usage}
     #License: ${answers.License}
     #Contributors: ${answers.contributing}
    `;
}

promptUser()
    .then(function(answers) {
        console.log("hi")
        const readMe = README(answers);

        return writeFileAsync("README.md", readMe);
    })
    .then(function() {
        console.log("Successfully wrote to README.MD");
    })
    .catch(function(err) {
        console.log(err);
    });
    
   
     
    
     
    
     