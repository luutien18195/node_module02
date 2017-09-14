'use strict';

var fs = require('fs');
var path = require('path');

var name = 'index.html';

var filePath = path.join(__dirname,'fs.js');

console.log(__dirname);
console.log(path.dirname(filePath));
console.log(path.basename(filePath));
console.log(path.basename(filePath,'.js'));
console.log(path.extname(filePath));
console.log(path.resolve(filePath,'..','views'));

fs.stat('views', function (err,stats) {
    if(stats.isDirectory()) {
       console.log('thu muc')
    }
    if (stats.isFile()){
        console.log('file')
    }
})
var stats = fs.statSync('views');
console.log(stats);


