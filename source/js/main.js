
// universal scripts -> gets loaded on every page
/////////////////////////////////////////////////

// first, we require any modules or javascript libraries we need

import Cookies from 'js-cookie';
import $ from 'jquery';
window.$ = window.jQuery = $;


// then, we include any of our own custom scripts


/*
=======================
==UNIVERSAL VARIABLES==
=======================
*/
var debug = true; //set console to debug

var url = location.pathname;

// var promptPages = ['flowers.html','jump.html','shakeHands.html','race.html','lights.html','lemons.html','happen.html','time.html','floor.html','eyes.html','color.html','drums.html', 'bookIP.html', 'modernIP.html','moodIP.html', 'beatIP.html', 'tallIP.html','storyIP.html','penIP.html', 'nightIP.html']; //Each prompt is added to an array

var backgroundColors = [];

// var interactivePrompts = ["bookIP.html","modernIP.html","moodIP.html","beatIP.html","storyIP.html","penIP.html","nightIP.html"];

// var basicPrompts = ['flowers.html','jump.html','shakeHands.html','race.html','lights.html','lemons.html','happen.html','time.html','floor.html','eyes.html','color.html','drums.html'];


/*
=====================
==UNIVERSAL SCRIPTS==
=====================
*/

// used for removing items from arrays

function removeArrayItem(arr) {
    var what, a = arguments, L = a.length, ax;
    while (L > 1 && arr.length) {
        what = a[--L];
        while ((ax= arr.indexOf(what)) !== -1) {
            arr.splice(ax, 1);
        }
    }
    return arr;
}


// if on home page, reset all cookies to start fresh

if(url == '/' || url == '/default.aspx'){
    resetCookies();
}

$(document).ready(function() {
// run the page checker
    pageChecker();
};




function pageChecker(){
    if(debug == true){console.log("Starting pageChecker()");}
    if(debug == true){console.log("Here's the initial array = " + promptPages);}

    for (var i = promptPages.length - 1; i >= 0; i--) {
        if(url.indexOf(promptPages[i]) > -1){
            if(debug == true){console.log("set cookie = " + promptPages[i]);}
            Cookies.set('visited_'+promptPages[i], true);
        } else {
            if(debug == true){console.log("no cookie set at " + url + " for " + promptPages[i] + " - not on this page.");}
        }
    }
    if(debug == true){console.log("Ending pageChecker() - starting newPrompt()");}

    newPrompt();
}

/// STAGING "DICE ROLLER" CONTROLLER
/////////////////////////////////////

function newPrompt(){

    if(debug == true){console.log("Starting newPrompt()");}

    if(url.indexOf("promptsOLD.html") > -1){

// The key here is to loop BACKWARDS, as each time an object is spliced, the array is reindexed and length becomes obsolete
        for (var i = promptPages.length - 1; i >= 0; i--) {
            if (Cookies.get("visited_"+promptPages[i])) {
                if(debug == true){console.log("removed cookie = " + promptPages[i]);}
                removeArrayItem(promptPages, promptPages[i]);
                if(debug == true){console.log(promptPages);}
            }
        }
        if(debug == true){console.log("Starting promptGenerator()");}
        promptGenerator();
    } else {
        if(debug == true){console.log("ending newPrompt(), not on promptsOLD.html page");}
    }

} //end newPrompt()

function promptGenerator() {
    if(debug == true){console.log("promptGenerator() started");}
    // This page randomly assigns a new prompt when someone is linked to it.
    var rand = Math.floor(Math.random()* promptPages.length)
    if(debug == true){console.log("promptPages length = "+ promptPages.length);}
    if(debug == true){console.log("Random number from available prompts is =  "+ rand);}
    if(debug == true){console.log("visiting this page= " + promptPages[rand]);}
    // A random number is generated based off of how many prompts are in the array

    if (promptPages.length == 0) {
        $("#loadingPrompt").text("All Prompts Have Been Finished!")
        $("#resetButton").removeClass('hidden');
    } else {
        window.location.replace("prompts/" + promptPages[rand]);
    }

    // The window links to one of the randomly selected prompt pages.
}


function resetCookies(){
    for (var i = 0; i < promptPages.length; i++) {
        Cookies.remove('visited_'+promptPages[i]);
    }
}

// BACKGROUND COLOR CHANGE

for (var i = 0; i < interactivePrompts.length; i++) {
    if (url.indexOf(interactivePrompts[i]) > -1) {
        var backgroundColors = ["#9a455c","#321987","#233e5b","#aa6f44"];
        changeBackgroundColor(backgroundColors);
    } else if (url.indexOf(basicPrompts[i]) > -1) {
        var backgroundColors = ["#249c98","#517bbb","#ff6300","#bd95a3", "#4fa85b"];
        changeBackgroundColor(backgroundColors);
    }
}

function changeBackgroundColor(randomColors){
    var randColor = Math.floor(Math.random()* backgroundColors.length)
    $(".mainBody").css('background-color', randomColors[randColor]);
}

