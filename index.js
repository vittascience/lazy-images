const processing = require('./src/processing');
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
const fs = require("fs");

function isFolderValid(path)
{
    fs.stat(path, function(err, stats) {
        if (err) {
            if (err.errno === 34 || err.errno === -2)
                console.error("ERROR : This folder doesn't exist");
            else
                console.error("ERROR : Path");
            return (-1);
        }
        if (stats.blocks !== 0) {
            console.error("ERROR : This isn't a folder.");
            return (-1);
        }
        return (0);
    });
}

function main() {
    if (process.argv.length < 3)
        readline.question(`Image's folder path: `, (inputPath) => {
            readline.close();
            if (isFolderValid(inputPath) === -1)
                process.exit(0);
            processing.execute(inputPath);
        });
    else if (process.argv.length === 3) {
        if (isFolderValid(process.argv[2]) === -1)
            process.exit(0);
        processing.execute(process.argv[2]);
    }
    else {
        console.log("Usage:  npm start [FOLDER_PATH]\n\n\tFOLDER_PATH : Optional args");
        process.exit(0);
    }
}

main();