// TODO: Create a function that returns a license badge based on which license is passed in
const fs = require("fs");
// If there is no license, return an empty string
function renderLicenseBadge(license) {

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}

function licenseHandler(license) {
const licenseObj = {}
  if (license === "MIT") {
    licenseObj.link = "https://choosealicense.com/licenses/mit/"
    licenseObj.badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  } else if (license === "Apache") {
    licenseObj.link = "https://www.apache.org/licenses/LICENSE-2.0"
    licenseObj.badge = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  } else {
    licenseObj.link = "https://www.gnu.org/licenses/gpl-3.0.en.html"
    licenseObj.badge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
  }
return licenseObj
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
const {badge, link} = licenseHandler(data.license)
  return `
  # ${data.title} ${badge}


  ## Description
  *${data.about}

  ## Table of Contents 
  1. [Installation](#installation)
  2. [Usage](#usage)
  3. [License](#license)
  4. [Contributing](#contributing)
  5. [Test](#tests)
  6. [Questions](#questions)

  ## Installation
  *${data.install}

  ## Usage
  *${data.usage}

  ## License 
  ${data.license} ${badge}
  ${link}

  ## Contributing 
  *${data.contributing}

  ## Tests
  *Test Please!

  ## Questions
  *If you have any questions please contact me at ${data.email}
  *Or visit my github at ${data.github}







`;
}

module.exports = generateMarkdown;
