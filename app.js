const fs = require('fs');

fs.writeFile('./test.txt',"Hello",(err, data) => {
    if(err){
        console.log(err);
        return;
    }
    console.log('File was saved');
});


