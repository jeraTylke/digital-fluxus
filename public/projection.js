var socket = io.connect('http://localhost:3000')

socket.on('projectionRectangle', function(data){
  console.log("made it to projection.html" + data);


})
