const fs = require('fs');

// fs.writeFile('./test.txt',"Hello",(err, data) => {
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log('File was saved');
// });
const fileName = __dirname + '/test.txt';
//const outFileName = __dirname + '/test-copy.txt';

//const readStream = fs.createReadStream(fileName);
//const writeStream = fs.createWriteStream(outFileName);

//readStream.on('data', data => {
//    console.log(data.toString());
//})


// readStream.pipe(writeStream);


// fs.readFile(fileName, (err, data) => {
//     if(err) {
//         console.log(err);
//         return;
//     }
//     console.log(data);
// })


//synchronous reading
 const data = fs.readFileSync(fileName);
 console.log(data.toString());


//Os related stuff
// const os = require('os');
//
// console.log('Architecture ' + os.arch());
// console.log('CPUs ' + os.cpus().length);
// console.log('OS ' + os.platform());


