// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown.js';

// TODO: Create an array of questions for user input
const questions = [{
  type: 'input',
  message: 'Title of the Project:',
  name: 'title'
},
{
  type: 'input',
  message: 'Enter a Description:',
  name: 'description'
},
{
  type: 'input',
  message: 'Enter Installation field:',
  name: 'installation'
},
{
  type: 'input',
  message: 'Enter Usage:',
  name: 'usage'
},
{
  type: 'input',
  message: 'Enter Contributing:',
  name: 'contributing'
},
{
  type: 'input',
  message: 'Enter Tests:',
  name: 'tests'
},
{
  type: 'rawlist',
  message: 'Select a license:',
  name: 'license',
  choices: ["Academic Free License",
"Boost Software License 1.0",
"BSD 4-clause \"Original\" or \"Old\" license",	
"BSD Zero-Clause license",
"Eclipse Public License 1.0",
"GNU General Public License v2.0",
"ISC",
"LaTeX Project Public License v1.3c",
"Microsoft Public License	MS-PL",
"MIT"]
},
{
  type: 'input',
  message: 'Enter github Username:',
  name: 'github'
},
{
  type: 'input',
  message: 'Enter email:',
  name: 'email'
},
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile("README.md",data,(err) => {if (err) throw err;})
}


// TODO: Create a function to initialize app
function init() {
  inquirer
  .prompt(questions)
  .then((response) => {writeToFile("README.md", generateMarkdown(response))})
}

// Function call to initialize app
init();
