const generateInstallHeader = (installText) => {
    if (!installText) {
        return '';
    }
    return `
    - [Installation](#installation)
    `
}

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
// function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) { }

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
module.exports = templateData => {
    function generateMarkdown(readmeData) {
        return `
        # ${readmeData.title}
        ## Description
        The deployed application can be seen by clicking this link: [${readmeData.title}](${readmeData.link}).  
        ${readmeData.description}  
            
        ##### Table of Contents
        ${generateInstallHeader(readmeData.install)}
        ${generateUsageHeader(readmeData.usage)}
        
        ${generateContributorsHeader(readmeData.contributors)}
        ${generateTestHeader(readmeData.test)}
        - [Questions](#questions)
        
        ${generateInstall}
        ${generateUsage}

        ${generateContributors}
        ${generateTest}
            
        ## Questions?
        Please feel free to contact me with any questions or comments, or visit my GitHub to see more of my work.  
        [Contact me by email](mailto:${readmeData.email}) 
        [GitHub User ${readmeData.github}](https://github.com/${readmeData.github})

    `;
    }
}


