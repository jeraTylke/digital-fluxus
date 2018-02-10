var express = require('express')
var app = express(); //starts express
var server = require('http').Server(app)
var io = require('socket.io')(server)

server.listen(3000, function(){

  console.log("Server at 3000");
})

app.use (express.static('public') ) //serves out public folder

io.on('connect', function(socket){
  socket.on('addRectangle', function(data){
    console.log("I got da message, boiiii " + data);

    io.emit('projectionRectangle', data)
  })
  console.log(socket.id);
})
