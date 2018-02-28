// STANDARD PROMPT CONTROLLER
///////////////////////////////

// This page controls the standard prompt pages. It shows the 'new prompt' button after a set amount of time.
console.log("🤠");
var seconds = 10; //how long to wait until prompt shows up in seconds.
var timeToWait = seconds * 1000;

setTimeout(function() {
  $(".newPromptButton").addClass('active')
}, timeToWait);
