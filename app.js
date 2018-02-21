// SERVER
///////////

var express = require('express')
var app = express(); //starts express
var server = require('http').Server(app)
var io = require('socket.io')(server)
var port = process.env.PORT || 3000

/*
===================
=== NON UTILITY ===
===================
*/

var clients = []; // UNUSED


server.listen(port, function(){ // Starts running the app on a network port
  console.log("App is running on port " + port);
})

app.use (express.static('public') ) // sets public folder as public-viewable folder.

io.on('connect', function(socket){
// Server functions


// When the server 'hears' or receives a message, start a function, and push a variable containing data through (prompt response).
  socket.on('testInput2Message', function(testInput2Data){
    // This response message is then sent to your projection.html page (makes it visible on screen because it is listening for that message)
    io.emit('testInput2ProjectionMessage',testInput2Data)
  })


}) //END SERVER FUNCTIONS
