var filter_module= require('./filter.js');
filter_module(process.argv[2],process.argv[3],function(err,files){
	if(err){
		console.log(err);
	}
	else{
		for(var i=0;i<files.length;i++){
			console.log(files[i]);
		}
	}
});
