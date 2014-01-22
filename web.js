var express = require('express');
var express = require("express");
var logfmt = require("logfmt");
var app = express();

app.use(logfmt.requestLogger());

app.get('/', function(request, response) {
    response.sendfile(__dirname + '/index.html');
});

app.get('/sidebar', function(request, response) {
    response.sendfile(__dirname + '/sidebar.html');
});

app.configure(function() {
    app.use('/img', express.static(__dirname + '/img'));
    app.use('/assets', express.static(__dirname + '/assets'));
    app.use('/data', express.static(__dirname + '/data'));
});

var port = Number(process.env.PORT || 5000);

app.listen(port, function() {
      console.log("Listening on " + port);
});


