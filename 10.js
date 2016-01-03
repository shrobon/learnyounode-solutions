var net = require('net');
var server= net.createServer(function(socket){
	
	//we can use the zeroFill() function also to append zeros
		var dt= new Date();
		var arr = [];

		var year=dt.getFullYear();
		arr.push(year);
		arr.push('-');

		var month=dt.getMonth()+1;
		if(month<10){
			month='0'+month;
		}
		arr.push(month);
		arr.push('-');

		var date =dt.getDate();
		if(date<10){
			date='0'+date;
		}
		arr.push(date);
		arr.push(' ');

		var hours =dt.getHours();
		arr.push(hours);
		arr.push(':');

		var mins = dt.getMinutes();
		arr.push(mins);
		arr.push('\n');
		
	socket.write(arr.join('')); //writing
	socket.end(); //closing the connection
});

server.listen(process.argv[2]);