var socket = io.connect();

socket.on('connect', function(data){

$('#testInput2Submit').on('click', function(event) {
  event.preventDefault();
  console.log(this);
  $(this).prop('disabled', 'true')
  $('.newPromptButton').addClass('active')
  /* Act on the event */
  var testInput2Value = $('#testInput2').val();
  console.log(testInput2Value);

  socket.emit('testInput2Message', testInput2Value)
});




})

// socket.emit('clearScreen', submittedAnswer)
