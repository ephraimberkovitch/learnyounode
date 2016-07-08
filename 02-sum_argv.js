var sum = 0;
if (process.argv.length<3)
    console.log('Not enough parameters');
else {
    for (var i=2;i<process.argv.length;i++) {
        sum += Number(process.argv[i]);
    }
    console.log(sum);
}

