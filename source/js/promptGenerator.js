import Cookies from 'js-cookie';
import $ from 'jquery';
window.$ = window.jQuery = $;
import jsonData from '../data/prompts.json';

var currentUrl = location.pathname;


var promptData = jsonData.prompts;
var availablePrompts = promptData;
var currentPrompt;
var isInteractivePrompt;
var isPromptFinished;

var debug = true;

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
if(currentUrl === '/' || currentUrl === '/default.aspx'){
    resetCookies();
}

function resetCookies(){
    console.log("Cookies Reset!");
    for (var i = 0; i < promptData.length; i++) {
        Cookies.remove('visited_'+promptData[i].id);
    }
}


// START RUNNING SCRIPTS

// pageChecker();
// promptGenerator();
$("#promptFinished").click(function() {
    isPromptFinished = true;
    pageChecker();
});

$("#resetCookies").click(function() {
    resetCookies();
});


function pageChecker(){

    if(debug === true){console.log("Starting pageChecker()");}
    if(debug === true)console.log(availablePrompts);
    if(debug === true){console.log("Here's the initial array = " + promptData);}
    if(debug === true)console.log("current prompt = " + currentPrompt);

    for (var i = promptData.length - 1; i >= 0; i--) {
        if(currentPrompt === promptData[i].id){
            if(debug === true){console.log("set cookie = " + promptData[i].id);}
            Cookies.set('visited_'+promptData[i].id, true);
        } else {
            if(debug === true){console.log("no cookie set at " + currentPrompt + " for " + promptData[i].id + " - not on this prompt.");}
        }
    }
    if(debug === true){console.log("Ending pageChecker() - starting newPrompt()");}

    newPrompt();
}


/// STAGING "DICE ROLLER" CONTROLLER
/////////////////////////////////////

function newPrompt() {

    if (debug === true) {
        console.log("Starting newPrompt()");
    }

    if (isPromptFinished === true) {

            for (var i = availablePrompts.length - 1; i >= 0; i--) {
// The key here is to loop BACKWARDS, as each time an object is spliced, the array is re-indexed and length becomes obsolete
                    if (Cookies.get("visited_" + promptData[i].id)) {
                        if (debug === true) {
                            console.log("removed cookie from available prompts = " + availablePrompts[i].id);
                        }
                        removeArrayItem(availablePrompts, promptData[i]);
                        if (debug === true) {
                            console.log("available prompts =");
                        }
                        if (debug === true) {
                            console.log(availablePrompts);
                        }
                    }
            }
        if (availablePrompts.length === 0) {
            console.log("All Prompts Have Been Finished!")
            $("#loadingPrompt").text("All Prompts Have Been Finished!");
        } else{
            if (debug === true) {console.log("Starting promptGenerator()");}
            isPromptFinished = false;
            promptGenerator();
        }

    }//if ispromptfinished
     else {
            if (debug === true) {console.log("Prompt not finished");}
        }
    }



// end newPrompt()

function promptGenerator() {
    if(debug === true){console.log("promptGenerator() started");}

    // This page randomly assigns a new prompt when someone is linked to it.
    var rand = Math.floor(Math.random()* availablePrompts.length);
    currentPrompt = availablePrompts[rand].id;
    if (availablePrompts[rand].type === "int"){
        isInteractivePrompt = true;
    } else {
        isInteractivePrompt = false;
    }

    if(debug === true){console.log("current prompt is = " + currentPrompt);}
    if(debug === true){console.log("availablePrompts length = "+ availablePrompts.length);}
    if(debug === true){console.log("Random number from available prompts is =  " + rand);}
    if(debug === true){console.log("current prompt generated= " + availablePrompts[rand].id);}
    if(debug === true){console.log("Is it an interactive prompt? " + isInteractivePrompt)}
    // A random number is generated based off of how many prompts are in the array

    if (availablePrompts.length == 0) {
        $("#loadingPrompt").text("All Prompts Have Been Finished!");
        $("#resetButton").removeClass('hidden');
    } else {
        // renderPrompt(currentPrompt);
    }

}








// $(document).ready(function() {
//
// if (window.location.pathname == "/prompttest.html") {
//     generatePrompts();
// } else
// {
//     console.log("Not on prompt page");
// }
//
// });

//
// function generatePrompts(){
//
//   if (currentPrompt != interactivePrompt) {
//
//     }
//
// // $.getJSON( "prompts.json", function( jsonData ) {
//
//   var promptData = jsonData.prompts;
//   console.log(promptData);
//
//   var promptLength = Object.keys(promptData).length;
//
//   var activePrompt = 7;
//
//   var promptN;
//
//   for (var i = 0; i < promptLength; i++) {
//     promptN = Object.keys(promptData)[i];
//
//     $(document).attr("title", promptData[activePrompt].title);
//     $("#promptContainer")
//         .append(
//         "<h1 id=" + promptData[activePrompt].id
//         + ">" + promptData[activePrompt].prompt + "</h1>"
//         )
//         .append(
//         "<p>" + promptData[activePrompt].body + "</p>"
//     );
//
//
//
//     console.log(promptData);
//     console.log("prompt length =" + promptLength);
//     console.log("prompt number = " + promptN);
//
//
//
//     // $("#promptContainer").append("<h1 id=prompt" + promptN + ">" + promptData[promptN].title + "</h1>" )
//     // $("#prompt").text(promptData["2"].body)
//     console.log(promptData["2"].body)
//   };

// })

// }
