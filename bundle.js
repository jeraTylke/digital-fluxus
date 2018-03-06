// universal scripts -> gets loaded on every page
/////////////////////////////////////////////////

// to bundle, run this command in the terminal:
// watchify bundle.js -o public/js/main.js -v


// first, we require any modules or javascript libraries we need
var cookies = require('js-cookie');
var $ = require('jquery');
window.$ = window.jQuery = $;

// then, we include any of our own custom scripts
var prompt = require('./public/js/prompt.js')
var prompt = require('./public/js/interactivePrompt.js')




/*
=====================
==UNIVERSAL SCRIPTS==
=====================
*/
var backgroundColors = [];

var url = location.pathname;

var interactivePrompts = ["bookIP.html","modernIP.html","moodIP.html","beatIP.html","storyIP.html","penIP.html","nightIP.html"];

var basicPrompts = ['flowers.html','jump.html','shakeHands.html','race.html','lights.html','lemons.html','happen.html','time.html','floor.html','eyes.html','color.html','drums.html']

for (var i = 0; i < interactivePrompts.length; i++) {
  if (url.indexOf(interactivePrompts[i]) > -1) {
    var backgroundColors = ["rgb(190, 70, 102)"];
    changeBackgroundColor(backgroundColors);
  } else if (url.indexOf(basicPrompts[i]) > -1) {
    var backgroundColors = ["#ff0000","#00ff00","#0000ff"];
    changeBackgroundColor(backgroundColors);
  }
}

function changeBackgroundColor(randomColors){
  var randColor = Math.floor(Math.random()* backgroundColors.length)
  $(".mainBody").css('background-color', randomColors[randColor]);

}

var promptPages = ["moodIP","color","nightIP"]

for (var i = 0; i < promptPages.length; i++) {
  if(url.indexOf(promptPages[i]) > -1){
    console.log("Ayy this is "+promptPages[i]);

  }
}
