//Without using async
var http = require('http');
//buffers to store site content
var site1="";
var site2="";
var site3="";
http.get(process.argv[2],function(response){
	response.setEncoding('utf8');
	response.on("data",function(data){	
		site1=site1+data;
		
	}).on("end",function(something){
		http.get(process.argv[3],function(response){
			response.setEncoding('utf8');
			response.on("data",function(data1){		
				site2=site2+data1;
			}).on("end",function(something_1){
				http.get(process.argv[4],function(response){
				response.setEncoding('utf8');
				response.on("data",function(data2){
					site3=site3+data2;
				}).on("end",function(finish_it){
					console.log(site1);
					console.log(site2);
					console.log(site3);
				});
			});
		});
	});
});
});
