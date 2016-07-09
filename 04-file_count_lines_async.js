var fs = require('fs');

if (process.argv.length<3) {
    console.log('Not enough parameters');
}
else {
    var fileName = process.argv[2];
    var buffer = fs.readFile(fileName,'utf8',function(err,data) {
        var contents = data;
        var tokens = contents.split('\n');
        var count_new_lines = tokens.length-1;
        console.log(count_new_lines);
    });
}