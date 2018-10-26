// STANDARD PROMPT CONTROLLER
///////////////////////////////

// This page controls the standard prompt pages. It shows the 'new prompt' button after a set amount of time.
var seconds = 10; //how long to wait until prompt shows up in seconds.
var timeToWait = seconds * 1000;

var url = window.location.pathname;


// Ensure button doesn't appear from timer on non-interactive pages
  if(url.indexOf("IP") === -1){
    setTimeout(function() {
      $(".newPromptButton").addClass('active')
    }, timeToWait);
  }
