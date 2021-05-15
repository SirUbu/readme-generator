// function that returns table of content choices
function renderTableChoices(contents) {
  if (contents.length > 0) {
    return `
      ${contents.map(title => {
        return `* [${title.charAt(0).toUpperCase()}${title.slice(1)}](#${title})`
      })
      .join('')}
    `
  } else return '';
};

// function that returns the table of contents section
function renderTableOfContents(contents) {
  return `
    ## Table of Contents

      * [Usage](#usage)
      * [Questions](#questions)
      ${renderTableChoices(contents)}
  `;
};

// function that returns the installation section
function renderInstallation(installation) {
  if (installation) {
    return `
      ## Installation
      ${installation}
    `
  } else return '';
};

// function that returns the screenshot
function renderScreenshot(confirmScreenshot, screenshot) {
  if (confirmScreenshot) {
    return `
    ### Screenshot

      ![Project Screenshot](./assets/images/${screenshot})
    `
  } else return '';
};

// function that returns the deployed link
function renderDeployedLink(confirmLink, link) {
  if (confirmLink) {
    return `
    ### Link

      ${link}
    `
  } else return '';
};

// function that returns the credits section
function renderCreditsSection(credit) {
  if (credit) {
    return `
    ## Credits

      ${credit}
    `
  } else return '';
}

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'GNU AGPLv3':
      return `![GNU AGPLv3](https://img.shields.io/badge/License-GNU%20AGPLv3-informational)`;
    case 'GNU GPLv3':
      return `![GNU GPLv3](https://img.shields.io/badge/License-GNU%20GPLv3-informational)`;
    case 'GNU LGPLv3':
      return `![GNU LGPLv3](https://img.shields.io/badge/License-GNU%20LGPLv3-informational)`;
    case 'Mozilla Public License 2.0':
      return `![Mozilla Public License 2.0(https://img.shields.io/badge/License-Mozilla%20Public%20License%202.0-informational)`;
    case 'Apache License 2.0':
      return `![Apache License 2.0](https://img.shields.io/badge/License-Apache%20License%202.0-informational)`;
    case 'MIT License':
      return `![MIT License](https://img.shields.io/badge/License-MIT%20License-informational)`;
    case 'Boost Software License 1.0':
      return `![Boost Software License 1.0](https://img.shields.io/badge/License-Boost%20Software%20License%201.0-informational)`;
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'GNU AGPLv3':
      return `[${renderLicenseBadge(license)}](https://choosealicense.com/licenses/agpl-3.0/)`;
    case 'GNU GPLv3':
      return `[${renderLicenseBadge(license)}](https://choosealicense.com/licenses/gpl-3.0/)`;
    case 'GNU LGPLv3':
      return `[${renderLicenseBadge(license)}](https://choosealicense.com/licenses/lgpl-3.0/)`;
    case 'Mozilla Public License 2.0':
      return `[${renderLicenseBadge(license)}](https://choosealicense.com/licenses/mpl-2.0/)`;
    case 'Apache License 2.0':
      return `[${renderLicenseBadge(license)}](https://choosealicense.com/licenses/apache-2.0/)`;
    case 'MIT License':
      return `[${renderLicenseBadge(license)}](https://choosealicense.com/licenses/mit/)`;
    case 'Boost Software License 1.0':
      return `[${renderLicenseBadge(license)}](https://choosealicense.com/licenses/bsl-1.0/)`;
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `
    ## License

      ${renderLicenseLink(license)}
    `
  } else return '';
};

// function that returns the features section
function renderFeaturesSection(features) {
  if (features) {
    return `
      ## Features

      ${features}
    `
  } else return '';
};

// function that returns the contributing section 
function renderContributingSection(contributing, contributingInput) {
  if (contributing === 'undefined') {
    return '';
  } else if (contributing) {
    return `
      ## Contributing

      ${contributingInput}
    `
  } else {
    return `
      ## Contributing

      [[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.0-4baaaa.svg)](code_of_conduct.md)]([![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.0-4baaaa.svg)](code_of_conduct.md))
    `
  }
};

// function that returns the tests section
function renderTestsSection(tests) {
  if(tests) {
    return `
      ## Tests

      ${tests}
    `
  } else return '';
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Description
  
  ${data.description}


  ${renderTableOfContents(data.contents)}

  
  ${renderInstallation(data.installation)}


  ## Usage
  ${data.usage}
  ${renderScreenshot(data.confirmScreenshot, data.screenshot)}
  ${renderDeployedLink(data.confirmLink, data.link)}


  ${renderCreditsSection(data.credit)}


  ${renderLicenseSection(data.license)}


  ${renderFeaturesSection(data.features)}


  ${renderContributingSection(data.contributing, data.contributingInput)}


  ${renderTestsSection(data.tests)}


  ## Questions

  For all questions regarding this project, feel free to contact me at:


  GitHub: [${data.questionsGithub}](https://github.com/${data.questionsGithub})


  Email: ${data.questionsEmail}
`;
};

module.exports = generateMarkdown;
