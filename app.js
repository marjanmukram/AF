const fs = require('fs');

const fileName = __dirname + '/test.txt';
const outFileName = __dirname + '/test-copy.txt';

const readStream = fs.createReadStream(fileName);
const writeStream = fs.createWriteStream(outFileName);


//Listening and writng
readStream.on('data', data => {
    console.log(data.toString());
})

//Copying
readStream.pipe(writeStream);


// fs.readFile(fileName, (err, data) => {
//     if(err) {
//         console.log(err);
//         return;
//     }
//     console.log(data);
// })




