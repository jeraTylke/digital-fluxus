// SERVER
///////////

var express = require('express');
var app = express(); //starts express
var server = require('http').Server(app);
var io = require('socket.io')(server);
var port = process.env.PORT || 3000;


/*
===================
=== NON UTILITY ===
===================
*/

var clients = []; // UNUSED


server.listen(port, function(){ // Starts running the app on a network port
  console.log("App is running on port " + port);
});

app.use (express.static('public') ); // sets public folder as public-viewable folder.

io.on('connect', function(socket){
// Server functions

//TODO replace with for/loop concatenating the json-provided ids as the prefixes of 'Message' and 'ProjectionMessage'
// socket.on(promptData[i].id + 'Message',);

    socket.on('inputMessage', function(InputData){
        io.emit('inputProjectionMessage',InputData)
    });


}); //END SERVER FUNCTIONS
