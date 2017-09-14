'use strict';
var fs = require('fs');
var path = require('path');
var filePath = path.join(__dirname,'app.js');
var name = 'index.html';

fs.readdir(__dirname,function(err,listFiles){
    var bool = false;
    
    for(var i=0;i<listFiles.length;i++)
        {
            if(listFiles[i] === name)
                {
                    bool = true;

                }
            
        }
    if(bool == true)
    {
            console.log('da tim thay 1 file co ten la index.html');
    }
    else{
            console.log('khong co file nao la index.html');
    }    
});
