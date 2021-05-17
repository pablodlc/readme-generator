const fs = require('fs');

// writing files
const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        console.log(fileContent);
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

module.exports = { writeFile };
