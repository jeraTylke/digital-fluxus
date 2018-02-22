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


//2 fave books
  socket.on('bookInputMessage', function(bookInputData){
    io.emit('bookInputProjectionMessage',bookInputData)
  })

// modern Art
socket.on('modernInputMessage', function(modernInputData){
  io.emit('modernInputProjectionMessage',modernInputData)
})

//mood
//////
socket.on('moodInputMessage', function(moodInputData){
  io.emit('moodInputProjectionMessage',moodInputData)
})

//soup
//////
socket.on('soupInputMessage', function(soupInputData){
  io.emit('soupInputProjectionMessage',soupInputData)
})


//beat
//////
socket.on('beatInputMessage', function(beatInputData){
  io.emit('beatInputProjectionMessage',beatInputData)
})


//tall giraffe
//////////////
socket.on('tallInputMessage', function(tallInputData){
  io.emit('tallInputProjectionMessage',tallInputData)
})


//box
/////
socket.on('boxInputMessage', function(boxInputData){
  io.emit('boxInputProjectionMessage',boxInputData)
})

//story
///////
socket.on('storyInputMessage', function(storyInputData){
  io.emit('storyInputProjectionMessage',storyInputData)
})

//penguin
/////////
socket.on('penInputMessage', function(penInputData){
  io.emit('penInputProjectionMessage',penInputData)
})

//nightmare
///////////
socket.on('nightInputMessage', function(nightInputData){
  io.emit('nightInputProjectionMessage',nightInputData)
})







}) //END SERVER FUNCTIONS
