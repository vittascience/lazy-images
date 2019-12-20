const fs = require('fs');
const sharp = require('sharp');
const isImage = require('is-image');

let imagesTreated = 0;

async function resizeImage(path, filename)
{
    let filepath = path + "/" + filename;
    await sharp(filepath).resize({ height: 40 }).toFile('./result/lazy-'+filename).then(data => {
        ++imagesTreated;
        console.log(imagesTreated + " " + filename + " => done");
    });
}

function execute(path)
{
    if (path[path.length - 1] === "/")
        path = path.substr(0, path.length - 1);
    fs.readdir(path, function (err, files) {
        if (err) {
            console.error('Unable to scan directory: ' + err);
            process.exit(0);
        }
        files.forEach(async function (file) {
            if (isImage(path + "/" + file)) {
                await resizeImage(path, file);
            }
        });
    });
}

module.exports = {execute};