var path   = require('path');
var fs     = require('fs');
module.exports = function (dir,ext,callback){
    fs.readdir(dir,function (err,data){
		if(err){
			callback(err,null);	
		}
		else{
			ext='.'+ext;
			var array=[];
			for(var i=0; i<data.length; i++){
				if(ext==path.extname(data[i])){
					array.push(data[i]);
				}
			}
			callback(null,array);
		}
	});
}