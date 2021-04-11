const inquirer = require("inquirer")
const fs = require("fs")
const generateHTML = require('./src/generateHTML')

// TODO: Create an array of questions for user input

const question = [
  {
    type: "list",
    name: "type",
    message: "Who do you want to add?",
    choices: [
      "Manager", "Intern", "Engineer", "Exit"
    ],
  },
]

const managerQuestions = [
  {
    type: "input",
    name: "name",
    message: "Enter your name",
    validate: (value) => { if (value) { return true } else { return 'i need a value to continue' } },
  },
  {
    type: "input",
    name: "id",
    message: "Enter your id",
    validate: (value) => { if (value) { return true } else { return 'i need a value to continue' } },
  },
  {
    type: "input",
    name: "email",
    message: "Enter email address",
    validate: (value) => { if (value) { return true } else { return 'i need a value to continue' } },
  },
  {
    type: "input",
    name: "officeNumber",
    message: "Enter your office number",
    validate: (value) => { if (value) { return true } else { return 'i need a value to continue' } },
  },


]
const internQuestions = [
  {
    type: "input",
    name: "name",
    message: "Enter your name",
    validate: (value) => { if (value) { return true } else { return 'i need a value to continue' } },
  },
  {
    type: "input",
    name: "id",
    message: "Enter your id",
    validate: (value) => { if (value) { return true } else { return 'i need a value to continue' } },
  },
  {
    type: "input",
    name: "email",
    message: "Enter email address",
    validate: (value) => { if (value) { return true } else { return 'i need a value to continue' } },
  },
  {
    type: "input",
    name: "school",
    message: "Enter your school name",
    validate: (value) => { if (value) { return true } else { return 'i need a value to continue' } },
  },
]

const engineerQuestions = [
  {
    type: "input",
    name: "name",
    message: "Enter your name",
    validate: (value) => { if (value) { return true } else { return 'i need a value to continue' } },
  },
  {
    type: "input",
    name: "id",
    message: "Enter your id",
    validate: (value) => { if (value) { return true } else { return 'i need a value to continue' } },
  },
  {
    type: "input",
    name: "email",
    message: "Enter email address",
    validate: (value) => { if (value) { return true } else { return 'i need a value to continue' } },
  },
  {
    type: "input",
    name: "github",
    message: "Enter your github link",
    validate: (value) => { if (value) { return true } else { return 'i need a value to continue' } },
  },
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function (err) {
    if (err) {
      console.log(err)
    }
    console.log("Readme Generated Succesfully")
  })
}

// Used to store information that the user fills out 
let employeeInformation = [];



async function init() {
  let done = false;
  while (done == false) {
    const answer = await inquirer.prompt(question)
    if (answer.type == 'Exit') {
      const html = generateHTML(employeeInformation)
      writeToFile("index.html", html)
      return;
    } else if (answer.type == 'Manager') {
      const answers = await inquirer.prompt(managerQuestions)

      answers.type = 'Manager';
      employeeInformation.push(answers)

    } else if (answer.type == 'Intern') {
      const answers = await inquirer.prompt(internQuestions)

      answers.type = 'Intern';
      employeeInformation.push(answers)

    } else if (answer.type == 'Engineer') {
      const answers = await inquirer.prompt(engineerQuestions)

      answers.type = 'Engineer';
      employeeInformation.push(answers)

    }

  }

}

// Function call to initialize app
init();

