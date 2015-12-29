/*Asynchronous IO */
//console.log(process.argv);
var fs = require('fs'); 
var x = fs.readFile(process.argv[2],function(err,data){
	
	if(err){
		console.log(std.err);
	}

	else{
		console.log(data.toString().split('\n').length - 1);
	}

});