// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(!Object.is(license, null)||!Object.is(license, undefined)){
    const replaceSpace = license.replace(/ +/gm, "_");
    return `![alt text](https://img.shields.io/badge/License-${replaceSpace}-blue)`;
  }else{
    return ""
  }
  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(!Object.is(license, null)||!Object.is(license, undefined)){
    switch(license){
      case "Academic Free License":
        return "https://opensource.org/license/afl-3-0-php";
      case "Boost Software License 1.0":
        return "https://www.boost.org/users/license.html";
      case "BSD 4-clause \"Original\" or \"Old\" license":	
      return "https://spdx.org/licenses/BSD-4-Clause.html";
      case "BSD Zero-Clause license":
        return "https://opensource.org/license/0bsd";
      case "Eclipse Public License 1.0":
        return "https://opensource.org/license/epl-1-0";
      case "GNU General Public License v2.0":
        return "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html";
      case "ISC":
        return "https://opensource.org/license/isc-license-txt";
      case "LaTeX Project Public License v1.3c":
        return "https://www.latex-project.org/lppl/lppl-1-3c/";
      case "Microsoft Public License	MS-PL":
        return "https://opensource.org/license/ms-pl-html";
      case "MIT":
        return "https://opensource.org/license/mit";
    }
  }else{
    return ""
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(!Object.is(license, null)||!Object.is(license, undefined)){
    const link = renderLicenseLink(license) 
    return `Distributed under the ${license}. See ${link} for more information`
  }  
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const lBadge = renderLicenseBadge(data.license)
  const lSect = renderLicenseSection(data.license)
  const readMEData = `# ${data.title} \n${lBadge}\n\n## Description\n${data.description}\n\n## Table of Contents\n[Installation](##Installation)\n\n[Usage](##Usage)\n\n[License](##License)\n\n[Contributing](##Contributing)\n\n[Tests](##Tests)\n\n[Questions](##Questions)\n\n## Installation\n${data.installation}\n\n## Usage\n${data.usage}\n\n## License\n${lSect}\n\n## Contributing\n${data.contributing}\n\n## Tests\n${data.tests}\n\n## Questions\nIf you have any questions please contact me at ${data.email}.\nGitHub info\nUsername: ${data.github} \nLink:https://github.com/${data.github}\n<`

  return `${readMEData}
  
  `;
}

export default generateMarkdown;
