var express = require('express');
var express = require("express");
var logfmt = require("logfmt");
var app = express();

app.use(logfmt.requestLogger());

app.get('/', function(request, response) {
    response.sendfile(__dirname + '/index.html');
}).configure(function() {
    app.use('/img', express.static(__dirname + '/img'));
});

var port = Number(process.env.PORT || 5000);

app.listen(port, function() {
      console.log("Listening on " + port);
});


