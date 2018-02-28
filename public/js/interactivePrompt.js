// INTERACTIVE PROMPT CONTROLLER
/////////////////////////////////

// This page handles the interactive prompt submission pages

console.log("🐋");

var socket = io.connect();

socket.on('connect', function(data){

// When clicking the submit button on certain inputs, start a function

$('#testInput2Submit').on('click', function(event) {
  event.preventDefault();
  $(this).prop('disabled', 'true') // Disables the submit button so something can only be submitted once.
  $('.newPromptButton').addClass('active') // Shows the 'new prompt' button

  var testInput2Value = $('#testInput2').val(); // Takes the value submitted into the prompt input field and stores it in a variable.

  socket.emit('testInput2Message', testInput2Value) // Sends the value submitted into the prompt that was stored in the variable to the server.
}); // END INDIVIDUAL PROMPT FUNCTION


//2 fav books
/////////////
$('#bookInputSubmit').on('click', function(event) {
  event.preventDefault();
  $(this).prop('disabled', 'true')
  $('.newPromptButton').addClass('active')

  var bookInputValue = $('#bookInput').val();

  socket.emit('bookInputMessage', bookInputValue)
});



//modern Art
/////////////

$('#modernInputSubmit').on('click', function(event) {
  event.preventDefault();
  $(this).prop('disabled', 'true')
  $('.newPromptButton').addClass('active')

  var modernInputValue = $('#modernInput').val();

  socket.emit('modernInputMessage', modernInputValue)
});

// mood
///////
$('#moodInputSubmit').on('click', function(event) {
  event.preventDefault();
  $(this).prop('disabled', 'true')
  $('.newPromptButton').addClass('active')

  var moodInputValue = $('#moodInput').val();

  socket.emit('moodInputMessage', moodInputValue)
});


//soup
//////
$('#soupInputSubmit').on('click', function(event) {
  event.preventDefault();
  $(this).prop('disabled', 'true')
  $('.newPromptButton').addClass('active')

  var soupInputValue = $('#soupInput').val();

  socket.emit('soupInputMessage', soupInputValue)
});

//beat
//////
$('#beatInputSubmit').on('click', function(event) {
  event.preventDefault();
  $(this).prop('disabled', 'true')
  $('.newPromptButton').addClass('active')

  var beatInputValue = $('#beatInput').val();

  socket.emit('beatInputMessage', beatInputValue)
});

//tall giraffe
//////
$('#tallInputSubmit').on('click', function(event) {
  event.preventDefault();
  $(this).prop('disabled', 'true')
  $('.newPromptButton').addClass('active')

  var tallInputValue = $('#tallInput').val();

  socket.emit('tallInputMessage', tallInputValue)
});


//box
/////
$('#boxInputSubmit').on('click', function(event) {
  event.preventDefault();
  $(this).prop('disabled', 'true')
  $('.newPromptButton').addClass('active')

  var boxInputValue = $('#boxInput').val();

  socket.emit('boxInputMessage', boxInputValue)
});

//story
///////
$('#storyInputSubmit').on('click', function(event) {
  event.preventDefault();
  $(this).prop('disabled', 'true')
  $('.newPromptButton').addClass('active')

  var storyInputValue = $('#storyInput').val();

  socket.emit('storyInputMessage', storyInputValue)
});

//penguin
/////////
$('#penInputSubmit').on('click', function(event) {
  event.preventDefault();
  $(this).prop('disabled', 'true')
  $('.newPromptButton').addClass('active')

  var penInputValue = $('#penInput').val();

  socket.emit('penInputMessage', penInputValue)
});

//nightmare
///////////
$('#nightInputSubmit').on('click', function(event) {
  event.preventDefault();
  $(this).prop('disabled', 'true')
  $('.newPromptButton').addClass('active')

  var nightInputValue = $('#nightInput').val();

  socket.emit('nightInputMessage', nightInputValue)
});










}) //END CONNECTION
