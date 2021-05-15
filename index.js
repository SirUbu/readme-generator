// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

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
                console.log('PROJECT TITLE REQUIRED');
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
                console.log('PROJECT DESCRIPTION REQUIRED');
                return false;
            }
        }
    },
    // prompt to select OPTIONAL sections
    {
        type: 'checkbox',
        name: 'contents',
        message: 'What optional sections would you like to add?',
        choices: ['installation', 'credits', 'license', 'features', 'contributing', 'tests']
    },
    // prompt for installation if selected
    {
        type: 'input',
        name: 'installation',
        message: 'Enter installation instructions:',
        validate: installationInput => {
            if (installationInput) return true;
            else {
                console.log('INSTALLATION INSTRUCTIONS REQUIRED');
                return false;
            }
        },
        when: ({ contents} ) => {
            if (contents.includes('installation')) return true;
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
                console.log('PROJECT USAGE DESCRIPTION REQUIRED');
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
                console.log('PROJECT SCREENSHOT REQUIRED')
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
        message: 'Enter FULL deployed application link:',
        when: ({ confirmLink }) => {
            if (confirmLink) return true;
            else return false;
        },
        validate: linkInput => {
            if (linkInput) return true;
            else {
                console.log('PROJECT LINK REQUIRED');
                return false;
            }
        }
    },
    // prompts for credit choices if selected
    {
        type: 'input',
        name: 'credit',
        message: 'List any collaborators, third-party assets, or resources used and their respective FULL links:',
        validate: creditInput => {
            if (creditInput) return true;
            else {
                console.log('PROJECT CREDITS REQUIRED');
                return false;
            }
        },
        when: ({ contents }) => {
            if (contents.includes('credits')) return true;
            else return false;
        }
    },
    // prompt for license
    {
        type: 'list',
        name: 'license',
        message: 'Select the license for your project:',
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0'],
        loop: false,
        when: ({ contents }) => {
            if (contents.includes('license')) return true;
            else return false;
        }
    },
    // prompt for features
    {
        type: 'input',
        name: 'features',
        message: 'Describe any additional features:',
        validate: featuresInput => {
            if (featuresInput) return true;
            else {
                console.log('PROJECT FEATURES REQUIRED');
                return false;
            }
        },
        when: ({ contents }) => {
            if (contents.includes('features')) return true;
            else return false;
        }
    },
    // prompt for contributing
    {
        type: 'confirm',
        name: 'contributing',
        message: 'Would you like to write your own contributing guidelines?',
        default: false,
        when: ({ contents} ) => {
            if (contents.includes('contributing')) return true;
            else return false;
        }
    },
    {
        type: 'input',
        name: 'contributingInput',
        message: 'Enter your contributing guidelines:',
        validate: contributingResponse => {
            if (contributingResponse) return true;
            else {
                console.log('CONTRIBUTING GUIDELINES REQUIRED');
                return false;
            }
        },
        when: ({ contents} ) => {
            if (contents.includes('installation')) return true;
            else return false;
        },
        when: ({ contributing} ) => {
            if (contributing) return true;
            else return false;
        }
    },
    // prompt for tests
    {
        type: 'input',
        name: 'tests',
        message: 'Provide examples on how to run included project tests:',
        validate: testsInput => {
            if (testsInput) return true;
            else {
                console.log('TEST EXAMPLES REQUIRED');
                return false;
            }
        },
        when: ({ contents} ) => {
            if (contents.includes('tests')) return true;
            else return false;
        }
    },
    // prompt for Questions (GitHub)
    {
        type: 'input',
        name: 'questionsGithub',
        message: 'What is your GitHub username:',
        validate: questionsGithubInput => {
            if (questionsGithubInput) return true;
            else {
                console.log('USER NAME REQUIRED');
                return false;
            }
        }
    },
    // prompt for Questions (email)
    {
        type: 'input',
        name: 'questionsEmail',
        message: 'What is your email address:',
        validate: questionsEmailInput => {
            if (questionsEmailInput) return true;
            else {
                console.log('EMAIL REQUIRED');
                return false;
            }
        }
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {};

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions);
}

// Function call to initialize app
init()
    .then(promptResponse => {
        console.log(promptResponse);
        console.log(generateMarkdown(promptResponse));
    })
    .catch(err => {
        console.log(err);
    });
