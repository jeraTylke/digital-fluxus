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
$("#promptResponses").append('<p>'+'Favorite Books - ' + bookInputValue +'</p>')

})

//modern art
socket.on('modernInputProjectionMessage', function(modernInputValue){
$("#promptResponses").append('<p>'+ 'Modern Art - ' + modernInputValue +'</p>')

})

//mood
socket.on('moodInputProjectionMessage', function(moodInputValue){
$("#promptResponses").append('<p>'+ 'What is your mood - ' + moodInputValue +'</p>')

})

//soup
//////
socket.on('soupInputProjectionMessage', function(soupInputValue){
$("#promptResponses").append('<p>'+ 'Soup - ' + soupInputValue +'</p>')

})


//beat
//////
socket.on('beatInputProjectionMessage', function(beatInputValue){
$("#promptResponses").append('<p>'+ 'Give me a beat - ' + beatInputValue +'</p>')

})

//tall giraffe
//////////////
socket.on('tallInputProjectionMessage', function(tallInputValue){
$("#promptResponses").append('<p>' +  'Are Giraffes Too Tall? - ' + tallInputValue +'</p>')
})


//box
/////
socket.on('boxInputProjectionMessage', function(boxInputValue){
$("#promptResponses").append('<p>'+ 'What is in box - ' + boxInputValue +'</p>')

})

//story
///////
socket.on('storyInputProjectionMessage', function(storyInputValue){
$("#promptResponses").append('<p>'+ 'His Story - ' + storyInputValue +'</p>')

})

//penguin
/////////
socket.on('penInputProjectionMessage', function(penInputValue){
$("#promptResponses").append('<p>'+'penguin name - ' + penInputValue +'</p>')

})

//nightmare
///////////
socket.on('nightInputProjectionMessage', function(nightInputValue){
$("#promptResponses").append('<p>'+ 'Nightmare - ' + nightInputValue +'</p>')

})






// EXAMPLE
// socket.on('testInput3ProjectionMessage', function(testInput3Value){
// $("#promptResponses").append('<p>'+ testInput3Value +'</p>')


// })
