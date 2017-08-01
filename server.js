var express = require('express');
var app = express();
var cors = require('cors');

var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200
}

app.get('/get_time', cors(corsOptions), function (req, res) {
	let time = new Date().getTime();
   res.send(JSON.stringify(time));
})

var server = app.listen(3000, function () {
   var port = server.address().port
   console.log("Magic happen on port", + port);
})