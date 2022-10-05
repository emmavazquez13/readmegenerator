// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if(license === 'Apache') {
        return 'https://img.shields.io/badge/License-Apache_2.0-blue.svg'
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license === 'Apache') {
        return 'https://opensource.org/licenses/Apache-2.0'
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    return `[![license](${renderLicenseBadge(license)})] ${renderLicenseLink(license)}`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseSection(data.license)}

<hr>

## Table of Contents 

- [Description](#description)
- [Installation](#installation)
- [Usage Information](#usage)
- [License](#license)

<hr>

## Description 

- ${data.description}

<hr>

## Installation 

- ${data.installation}

<hr>

## Usage  

- ${data.usage}

<hr>

## Contribution Guidelines 

- ${data.contribution}

<hr>

## Test Instructions 

- ${data.test}

<hr>

## License 

- ${data.license}

<hr>

## Questions

- For Questions you can reach me at: ${data.questions}
- Check out my github: [Git Hub Profile](https://github.com/${data.github})
- Send me an email: ${data.email}
`;
}

module.exports = generateMarkdown;
