const inquirer = require('inquirer');
const fs = require('fs');
const { writeFile } = require('./utils/generateMarkdown.js');
const generateReadme = require('./src/readme-template');

const promptUser = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is your name?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Listen, I need a name. Make one up. If you're embarrassed by your project, directors who make crappy movies use Allen Smithee.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'What\'s your GitHub username?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your github handle!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What's your email address?",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Would you rather give your phone number?');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'title',
            message: "What do you call your application",
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('"untitled" works. But this program isn\'t going anywhere until you call your application something.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'link',
            message: 'Enter a link to your deployed application:',
            validate: linkInput => {
                if (linkInput) {
                    return true;
                } else {
                    console.log("Did you think using a README generator meant you didn't have to do any work? Just give the address and let's keep moving.");
                    return false;
                }
            }
        },
        {
            type: 'checkbox',
            name: 'languages',
            message: 'What did you build this project with? (Check all that apply)',
            choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter a detailed description of your application.',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log("I'm making this as easy as I can for you. But I'm sitting on the couch writing this and I don't know anything about your application.  Go ahead and write it out.");
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmInstall',
            message: 'Would you like to enter installation instructions for your application?',
            default: true
        },
        {
            type: 'input',
            name: 'install',
            message: 'Provide clear directions on installing your application:',
            when: ({ confirmInstall }) => {
                if (confirmInstall) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmUsage',
            message: 'Would you like to enter directions on using your application?',
            default: true
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide specific directions on how to use your application',
            when: ({ confirmUsage }) => {
                if (confirmUsage) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'license',
            message: 'What license are you using for your application?',
            choices: ['MIT License', 'ISC License', 'Apache License 2.0', 'GNU General Public License v2.0', 'GNU General Public License v3.0']
        },
        {
            type: 'confirm',
            name: 'confirmContributors',
            message: 'Would you like to add contributors to your README?',
            default: false
        },
        {
            type: 'input',
            name: 'contributors',
            message: 'Who else contributed to the application\'s development?',
            when: ({ confirmContributors }) => {
                if (confirmContributors) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmTest',
            message: 'Would you like to enter testing instructions for your application?',
            default: true
        },
        {
            type: 'input',
            name: 'test',
            message: 'Enter detailed instructions on testing your application.',
            when: ({ confirmTest }) => {
                if (confirmTest) {
                    return true;
                } else {
                    return false;
                }
            }
        },
    ])
}

promptUser()
    .then(readmeData => {
        return generateReadme(readmeData);
    })
    .then(templateData => {
        console.log("hello!");
        return writeFile(templateData)
    })
    .then(writeFileResponse => {
        console.log(writeFileResponse);
        return copyFile();
    })
    .then(copyFileResponse => {
        console.log(copyFileResponse);
    })
    .catch(err => {
        console.log(err)
    });