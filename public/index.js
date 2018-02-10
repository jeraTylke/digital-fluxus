var socket = io.connect('http://localhost:3000')

$('button').click(function(){
  socket.emit('addRectangle', true)
})
