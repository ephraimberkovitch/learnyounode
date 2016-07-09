var fs = require('fs');
var path = require('path');

module.exports = function(dir,ext,func) {
    files = [];
    fs.readdir(dir,function(err,data) {
        if (err)
           return func(err);
        data.forEach(function(file) {
           if (path.extname(file)==='.'+ext)
                files.push(file);
        });
        return func(null,files);
    });
}