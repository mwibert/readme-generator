// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "None") {
    return ``;
  }
  return `![GitHub license](https://img.shields.io/badge/license-${license.replace(
    " ",
    "_"
  )}-blue.svg)`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "None") {
    return `## License`;
  }
  return `## License
  This project is licensed under: ${license}
  `;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectTitle}
  ## Table of Contents
  * [description](#description)
  * [installationInstructions](#installation)
  * [usageInformation](#usage)
  * [contributionGuidelines](#contribution)
  * [testInstructions](#test)
  * [licenseInformation](#license)
  * [githubUsername](#github)
  * [emailAddress](#email)




  ## Description
 ${data.description}
  ## Installation
  ${data.installationInstructions}

  ## Usage
  ${data.usageInformation}


  ## Contribution
 ${data.contributionGuidelines}


  ## Test
   ${data.testInstructions}



  ## License
   ${renderLicenseBadge(data.licenseInformation)}
   ${renderLicenseSection(data.licenseInformation)}

  ## GitHub
   ${data.githubUsername}


  ## Email
   ${data.emailAddress}


`;
}

export default generateMarkdown;
