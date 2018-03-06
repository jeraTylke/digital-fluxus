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
var url = location.pathname;

var promptPages = ["moodIP","color","nightIP"]

for (var i = 0; i < promptPages.length; i++) {
  if(url.indexOf(promptPages[i]) > -1){
    console.log("Ayy this is "+promptPages[i]);

  }
}
