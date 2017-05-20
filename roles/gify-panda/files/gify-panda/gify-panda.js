/* This service is Listening for requests for specific files
   by URLS and serving them to the user from "resources" directory.*/

var config = require('./config.json');
var express = require('express');
var path = require('path');
var app = express();

// Define the port to run on
app.set('port', config.port);

app.use(express.static(path.join(__dirname, 'resources')));

// Listen for requests
var server = app.listen(app.get('port'), function() {
  var port = server.address().port;
  console.log('Happy to serve you on port ' + port);
});
