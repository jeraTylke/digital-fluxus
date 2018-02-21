// INTERACTIVE PROMPT CONTROLLER
/////////////////////////////////

// This page handles the interactive prompt submission pages

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



}) //END CONNECTION
