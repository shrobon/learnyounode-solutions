var x = process.argv.length;
var dig = 0, sum = 0;

for(var i=2; i< x; i++){
	dig = Number(process.argv[i]);
	sum = sum+dig;
}
console.log(sum);