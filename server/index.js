'use strict';

var app = require('./app'),
    db = require('./db');

var portS = 8080;
var port = 8000;

// curl -k https://localhost:8000/
var https = require('https');
var fs = require('fs');

var options = {
    key: fs.readFileSync('server/keys/key.pem'),
    cert: fs.readFileSync('server/keys/cert.pem')
};

var server = https.createServer(options, app).listen(portS, function() {
    console.log("server listening on port", portS);
});

app.listen(port, function() {
	console.log("server listening on port", port);
});

module.exports = server;


// 'use strict';

// var app = require('./app'),
//   db = require('./db');

// var port = 8080;
// var server = app.listen(port, function () {
//   console.log('HTTP server patiently listening on port', port);
// });

// module.exports = server;
