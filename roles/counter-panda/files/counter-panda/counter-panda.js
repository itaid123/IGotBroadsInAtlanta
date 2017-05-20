/* this nodejs service is counting POST requests it gets
   and display it to the browser in the mentioned port*/
var http = require('http');
var config = require('./config.json');
var HttpDispatcher = require('httpdispatcher');
var dispatcher = new HttpDispatcher();
var counter = 0;

// This function is handling the requests
function handleRequest(request, response){
    try {
        console.log("Requested URL: " + request.url);
        dispatcher.dispatch(request, response);
    } catch(err) {
        console.log(err);
    }
}

// This function increase the counter every POST request
dispatcher.onGet("/", function(req, res) {
    counter++;
    res.writeHead(200, {'Content-Type': 'text/plain'};
    res.end('Already served ' + counter + ' POST requests');
});

// Error Handling
dispatcher.onError(function(req, res) {
        res.writeHead(404);
        res.end("404 - Page Does not exists");
});

// Listen for requests, and notify the "user"
http.createServer(handleRequest).listen(config.port, function(){
    console.log("Server listening on: http://localhost:%s", config.port);
});
