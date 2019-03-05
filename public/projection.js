//// PROJECTION
////////////////

// This page handles all the incoming messages from the server that get output to our projection page.

var socket = io.connect(); // Connect to the server -- USE FOR LOCAL TESTING
// var socket = io.connect('http://localhost:3000') // Connect to the server -- USE FOR LOCAL TESTING


socket.on('inputProjectionMessage', function(InputRender){
    if ( InputRender.length ) {
        $("#promptResponses").append('<p>' + InputRender + '</p>')
    }
    $('html, body').animate({ scrollTop: $(document).height() }, 1400);
    return false;
});