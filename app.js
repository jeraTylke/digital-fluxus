var express = require('express')
var app = express(); //starts express
var server = require('http').Server(app)
var io = require('socket.io')(server)
var port = process.env.PORT || 3000

server.listen(port, function(){
  console.log("App is running on port " + port);
})

app.use (express.static('public') ) //serves out public folder

io.on('connect', function(socket){
  socket.on('addRectangle', function(data){
    console.log("I got da message, boiiii " + data);

    io.emit('projectionRectangle', data)
  })
  console.log(socket.id);
})
