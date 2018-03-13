//// PROJECTION
////////////////

// This page handles all the incoming messages from the server that get output to our projection page.

var socket = io.connect() // Connect to the server -- USE FOR LOCAL TESTING
// var socket = io.connect('http://localhost:3000') // Connect to the server -- USE FOR LOCAL TESTING

// Each one of these "socket.on"'s will exist for each prompt page.

// listens for incoming message first, starts a function and sends a variable with the function.
socket.on('testInput2ProjectionMessage', function(testInput2Value){
$("#promptResponses").append('<p>'+ testInput2Value +'</p>')
// append a new message to the #promptResponses DIV and add a new paragraph tag using data from one of the prompt submissions.
})


//2 fave books
socket.on('bookInputProjectionMessage', function(bookInputValue){
$("#promptResponses").append('<p>'+ bookInputValue +'</p>')

})

//modern art
socket.on('modernInputProjectionMessage', function(modernInputValue){
$("#promptResponses").append('<p>'+ modernInputValue +'</p>')

})

//mood
socket.on('moodInputProjectionMessage', function(moodInputValue){
$("#promptResponses").append('<p>'+ moodInputValue +'</p>')

})

//soup
//////
socket.on('soupInputProjectionMessage', function(soupInputValue){
$("#promptResponses").append('<p>'+ soupInputValue +'</p>')

})


//beat
//////
socket.on('beatInputProjectionMessage', function(beatInputValue){
$("#promptResponses").append('<p>'+ beatInputValue +'</p>')

})

//tall giraffe
//////////////
socket.on('tallInputProjectionMessage', function(tallInputValue){
$("#promptResponses").append('<p>' +  'Are Giraffes Too Tall? - ' + tallInputValue +'</p>')
})


//box
/////
socket.on('boxInputProjectionMessage', function(boxInputValue){
$("#promptResponses").append('<p>'+ boxInputValue +'</p>')

})

//story
///////
socket.on('storyInputProjectionMessage', function(storyInputValue){
$("#promptResponses").append('<p>'+ storyInputValue +'</p>')

})

//penguin
/////////
socket.on('penInputProjectionMessage', function(penInputValue){
$("#promptResponses").append('<p>'+ penInputValue +'</p>')

})

//nightmare
///////////
socket.on('nightInputProjectionMessage', function(nightInputValue){
$("#promptResponses").append('<p>'+ nightInputValue +'</p>')

})






// EXAMPLE
// socket.on('testInput3ProjectionMessage', function(testInput3Value){
// $("#promptResponses").append('<p>'+ testInput3Value +'</p>')


// })
