//console.log(process.argv);
var fs=require('fs');
var path=require('path');

file=fs.readdir(process.argv[2],function callback(err,list){
	if(err){
		console.log(err);
	}
	else{
		var ext;
		var str;
		for(var i=0;i<list.length;i++){
			ext = path.extname(list[i]);
			str = '.'+process.argv[3];
			if(ext==str){
				console.log(list[i]);
			}
		}
	}
});


