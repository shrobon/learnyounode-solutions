var map = require('through2-map');
//through2-map is used to change stuff while in stream
var http= require('http');

http.createServer(function(req,res){
	if(req.method == 'POST'){
		req.pipe(map(function(chunk){
			return chunk.toString().toUpperCase();
		})).pipe(res);
	}
	
}).listen(process.argv[2]);