const fs = require('fs');

// writing files
const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        // taking the `generateMarkdown()` data, writing it to a file called README.md, and saving it in the "/dist" folder.
        fs.writeFile('./dist/README.md', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};

// Exporting `writeFile()`
module.exports = { writeFile };