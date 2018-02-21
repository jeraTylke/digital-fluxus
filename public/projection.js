var socket = io.connect('http://localhost:3000')

socket.on('projectionRectangle', function(data){
  console.log("made it to projection.html" + data);


})

socket.on('testInput2ProjectionMessage', function(testInput2Value){
$("#promptResponses").append('<p>'+ testInput2Value +'</p>')

})
