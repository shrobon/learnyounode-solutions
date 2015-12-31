//solution of collect without using any other modules
var http = require('http');
var str="";
http.get(process.argv[2],function(response){
	
	response.on("data",function(data){
		str =str + data.toString();
	});

	response.on("error",function(error){
		console.log(error);
	});

	response.on("end",function(){
		console.log(str.length);
		console.log(str);
	});

}); 