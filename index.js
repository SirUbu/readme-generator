// TODO: Include packages needed for this application
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    // prompt for title
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        validate: titleInput => {
            if (titleInput) return true;
            else {
                console.log('----PROJECT TITLE REQUIRED----');
                return false;
            }
        }
    },
    // prompt for description
    {
        type: 'input',
        name: 'description',
        message: 'Enter a description of your project:',
        validate: descInput => {
            if (descInput) return true;
            else {
                console.log('----PROJECT DESCRIPTION REQUIRED----');
                return false;
            }
        }
    },
    // prompt to select OPTIONAL sections
    {
        type: 'checkbox',
        name: 'contents',
        message: 'What sections would you like to add?',
        choices: ['Installation', 'Credits', 'License', 'Badges', 'Features', 'Contributing', 'Tests']
    },
    // prompt for installation
    {
        type: 'input',
        name: 'installation',
        message: 'Enter installation instructions:',
        when: ({ contents} ) => {
            if (contents.includes('Installation')) return true;
            else return false;
        }
    },
    // prompt for usage
    {
        type: 'input',
        name: 'usage',
        message: 'Describe how to USE this application?',
        validate: titleInput => {
            if (titleInput) return true;
            else {
                console.log('----PROJECT USAGE DESCRIPTION REQUIRED----');
                return false;
            }
        }
    },
    // prompt for screenshot
    {
        type: 'confirm',
        name: 'confirmScreenshot',
        message: 'Would you like to include a screenshot?',
        default: false,
    },
    // prompt for screenshot added to directory if screenshot true
    {
        type: 'input',
        name: 'screenshot',
        message: 'Add the screenshot to the "assets/images directory. What is the name of your image file?',
        when: ({ confirmScreenshot }) => {
            if (confirmScreenshot) return true;
            else return false;
        },
        validate: screenshotInput => {
            if (screenshotInput) return true;
            else {
                console.log('----PROJECT SCREENSHOT REQUIRED----')
                return false;
            }
        }
    },
    // prompt for link
    {
        type: 'confirm',
        name: 'confirmLink',
        message: 'Would you like to include a deployed application link?',
        default: false,
    },
    // prompt for link info if link true
    {
        type: 'input',
        name: 'link',
        message: 'Enter full deployed application link:',
        when: ({ confirmLink }) => {
            if (confirmLink) return true;
            else return false;
        },
        validate: linkInput => {
            if (linkInput) return true;
            else {
                console.log('----Project Link Required----');
                return false;
            }
        }
    },
    // prompts for credits

    // prompt for license

    // prompt for badges

    // prompt for features

    // prompt for contributing

    // prompt for tests
    
    // prompt for Questions

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions);
}

// Function call to initialize app
init()
    .then(promptResponse => {
        console.log(promptResponse);
    })
    .catch(err => {
        console.log(err);
    });
