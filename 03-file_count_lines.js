var fs = require('fs');

if (process.argv.length<3) {
    console.log('Not enough parameters');
}
else {
    var fileName = process.argv[2];
    var buffer = fs.readFileSync(fileName);
    var contents = buffer.toString();
    var tokens = contents.split('\n');
    var count_new_lines = tokens.length-1;
    console.log(count_new_lines);
}