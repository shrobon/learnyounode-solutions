var http=require('http');
http.get(process.argv[2],function(response){
	response.on("data",function(data){
		var str= data.toString();
		var str1=str.split('\n');
		for(var i=0;i<str1.length;i++){
			console.log(str1[i]);
		}

	});

	response.on("error",function(error){
		console.log(error.message);
	});


});