//// PROJECTION
////////////////

// This page handles all the incoming messages from the server that get output to our projection page.

var socket = io.connect('http://localhost:3000') // Connect to the server


// Each one of these "socket.on"'s will exist for each prompt page.

// listens for incoming message first, starts a function and sends a variable with the function.
socket.on('testInput2ProjectionMessage', function(testInput2Value){
$("#promptResponses").append('<p>'+ testInput2Value +'</p>')
// append a new message to the #promptResponses DIV and add a new paragraph tag using data from one of the prompt submissions.
})

// EXAMPLE
socket.on('testInput3ProjectionMessage', function(testInput3Value){
$("#promptResponses").append('<p>'+ testInput3Value +'</p>')


})
