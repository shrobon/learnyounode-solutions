var fs = require('fs');
//buffer = fs.readFileSync('/Users/shrobonbiswas/Desktop/Code /node/learnyounode/test.txt');
buffer = fs.readFileSync(process.argv[2]);
var str = buffer.toString();
//console.log(str);
var str1=str.split('\n');
console.log(str1.length-1);
