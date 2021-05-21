// This function creates the ToC list item for Installation if data is passed in through the `text` parameter.  This is the template for all of the headers to follow.  I wanted this because I didn't want static ToC list items if the user didn't want them included.
const generateInstallHeader = (text) => {
    if (!text) {
        return '';
    }
    return `
- [Installation](#installation)
    `
}

// This is the blueprint for generating the optional sections.  It takes the install data through the `installText` parameter, creates a header for the section and the content from the user below that.
const generateInstall = installText => {
    if (!installText) {
        return '';
    }
    generateInstallHeader(installText);
    return ` 
## Installation Instructions:
${installText}  
    `;
}

const generateUsageHeader = (usageText) => {
    if (!usageText) {
        return '';
    }
    return `
- [Usage](#usage)
    `
}

const generateUsage = usageText => {
    if (!usageText) {
        return '';
    }
    generateUsageHeader();
    return ` 
## Usage:
${usageText}  
    `;
}


// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const generateLicenseBadge = licenseText => {
    if (!licenseText) {
        return '';
    }
    // creates the badge using a template literal in a URL.
    return `
![${licenseText}](https://img.shields.io/badge/license-${licenseText}-blue)
    `
}

const generateLicenseHeader = (licenseText) => {
    if (!licenseText) {
        return '';
    }
    return `
- [License](#license)
    `
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const generateLicense = licenseText => {
    // If the user chose to not include a license, there's no `licenseText`, and the program moves on.
    if (!licenseText) {
        return '';
    }
    // Here is the license data.  It matches the license name, returns a header for the License section and information about the license.
    if (licenseText === 'GNU_GPLv3') {
        return `
## License
#### [GNU GPLv3](https://choosealicense.com/licenses/gpl-3.0/);
Permissions of this strong copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights.
            `;
    }
    if (licenseText === 'GNU_LGPLv3') {
        return `
## License
#### [GNU LGPLv3](https://choosealicense.com/licenses/lgpl-3.0/);
Permissions of this copyleft license are conditioned on making available complete source code of licensed works and modifications under the same license or the GNU GPLv3. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. However, a larger work using the licensed work through interfaces provided by the licensed work may be distributed under different terms and without source code for the larger work.
        `;
    }
    if (licenseText === 'Apache_License_2') {
        return `
## License
#### [Apache License 2.0](https://choosealicense.com/licenses/apache-2.0/);
A permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works may be distributed under different terms and without source code.
            `;
    }
    if (licenseText === 'Mozilla_Public_License_2') {
        return `
## License
#### [Mozilla Public License 2.0](https://choosealicense.com/licenses/mpl-2.0/);
Permissions of this weak copyleft license are conditioned on making available source code of licensed files and modifications of those files under the same license (or in certain cases, one of the GNU licenses). Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. However, a larger work using the licensed work may be distributed under different terms and without source code for files added in the larger work.
            `;
    }
    if (licenseText === 'MIT_License') {
        return `
## License
#### [MIT License](https://choosealicense.com/licenses/mit/);
A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.
            `;
    }
}

const generateContributorsHeader = (contributorsText) => {
    if (!contributorsText) {
        return '';
    }
    return `
- [Contributors](#Contributors)
    `
}

const generateContributors = contributorsText => {
    if (!contributorsText) {
        return '';
    }
    generateContributorsHeader();
    return ` 
## Contributors:
${contributorsText}  
    `;
}

const generateTestHeader = (testText) => {
    if (!testText) {
        return '';
    }
    return `
- [Testing](#Testing)
    `
}

const generateTest = testText => {
    if (!testText) {
        return '';
    }
    generateTestHeader();
    return ` 
## Testing:
${testText}  
    `;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(readmeData) {
    // Using a template literal, I'm plugging in all the user's data from the `readmeData` object, grabbing what I need in the order in which I want it to appear.  Also calling methods within the template literal to populate the README accordingly
    return `
# ${readmeData.title}
## Description
The deployed application can be seen by clicking this link: [${readmeData.title}](${readmeData.link}).  
${readmeData.description}  
${generateLicenseBadge(readmeData.license)}    
    
### Table of Contents:
${generateInstallHeader(readmeData.install)}
${generateUsageHeader(readmeData.usage)}
${generateLicenseHeader(readmeData.license)}
${generateContributorsHeader(readmeData.contributors)}
${generateTestHeader(readmeData.test)}
- [Questions](#questions)

${generateInstall(readmeData.install)}
${generateUsage(readmeData.usage)}
${generateLicense(readmeData.license)}
${generateContributors(readmeData.contributors)}
${generateTest(readmeData.test)}
    
## Questions?
Please feel free to contact me with any questions or comments, or visit my GitHub to see more of my work.  
[Contact me by email](mailto:${readmeData.email})    
[GitHub User ${readmeData.github}](https://github.com/${readmeData.github})
    
${readmeData.title} made with ❤️ by ${readmeData.name}
`;
}

// Exporting `generateMarkdown()`
module.exports = generateMarkdown;
