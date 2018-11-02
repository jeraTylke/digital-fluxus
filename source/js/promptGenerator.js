// RUN IMPORTS
import Cookies from 'js-cookie';
import $ from 'jquery';
import jsonData from '../data/prompts.json';
import colorData from '../data/backgroundColors';
window.$ = window.jQuery = $;


// SET GLOBAL VARIABLES
var currentUrl = location.pathname;
var promptData = jsonData.prompts;
var availablePrompts = promptData;
var currentPrompt;
var currentPromptData;
var isInteractivePrompt;
var isPromptFinished;


// OPTIONS
var promptSeconds = 3; //how long to wait until prompt shows up in seconds.
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


// BACKGROUND COLOR CHANGE

function changeBackgroundColor(){
    var randColor = Math.floor(Math.random()* colorData.length)
    $(".mainBody").css('background-color', colorData[randColor]);
}


// if on home page, reset all cookies to start fresh
if(currentUrl === '/' || currentUrl === '/default.aspx'){
    resetCookies();
}

// For Resetting Cookies based on which prompts have been viewed
function resetCookies(){
    var promptData = jsonData.prompts;

    console.log("Cookies Reset!");
    if(debug == true)console.log(promptData);
    for (var i = 0; i < promptData.length; i++) {
        if(debug === true)console.log("removed " + promptData[i].id);
        Cookies.remove('visited_'+promptData[i].id);
    }
}



// START RUNNING SCRIPTS
/////////////////////////
$(document).ready(function() {
    console.log("Load Page");
    isPromptFinished = true;
    pageChecker();
});
// promptGenerator();
$(".promptFinished").click(function() {
    $(".newPromptButton").removeClass("active");
    isPromptFinished = true;
    pageChecker();
});

$("#resetCookies").click(function() {
    resetCookies();
});


function pageChecker(){



    if(debug === true){console.log("Starting pageChecker()");}
    if(debug === true){console.log(availablePrompts);}
    if(debug === true){console.log("Here's the initial array = " + promptData);}
    if(debug === true){console.log("current prompt = " + currentPrompt);}

    for (var i = promptData.length - 1; i >= 0; i--) {
        if(currentPrompt == promptData[i].id){
            if(debug == true){console.log("set cookie = " + promptData[i].id);}
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
            console.log("All Prompts Have Been Finished!");
            $("#prompt").html("All Prompts Have Been Finished!");
            $("#subPrompt").html(" ");
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
    currentPromptData = availablePrompts[rand];
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

    if (availablePrompts.length === 0) {
        if(debug === true)console.log("Finished!");
    } else {
        if(currentUrl === '/prompttest.html') {
            renderPrompt(currentPromptData, currentPrompt);
        } else {
            if(debug === true)console.log("On Home Page");
        }
    }

}


/// Render Current Prompt to Page
//////////////////////////////////

function renderPrompt(currentPrompt){
    changeBackgroundColor();
    console.log("Rendering Prompt!");
    if(debug == true)console.log("Rendered Prompt = " + currentPrompt.id );
    if(debug == true)console.log(currentPromptData);
    $('#prompt').html(currentPrompt.prompt);
    $('#subPrompt').html(currentPrompt.body);
    $('#promptType').html(currentPrompt.type);

    if(currentPrompt.type === "int"){
        $(".interactiveInput").addClass("active").attr('id', currentPrompt.id + "Input");
        $(".inputSubmit").addClass("active").attr('id', currentPrompt.id + "InputSubmit");
        $('.inputSubmit').prop('disabled', false);
        $(".interactiveInput").val('');



        var socket = io.connect();
        socket.on('connect', function(data){
            console.log("Connected to server?");
            var inputValue;

            $("#"+currentPrompt.id+"InputSubmit").on('click', function(event) {
                inputValue = $("#"+currentPrompt.id+"Input").val();

                // $(this).prop('disabled', 'true');
                $('.newPromptButton').addClass('active');

                console.log("#" + $(this)["0"].id + " button clicked!");
                console.log($("#"+currentPrompt.id+"Input"));


                console.log("Sending "+ inputValue);

                socket.emit('inputMessage', inputValue);

            }); //click


        })//end connection

        } else {
        $(".inputSubmit").removeClass("active");
        $(".interactiveInput").removeClass("active");
        nextPromptTimer(currentPrompt);
    }



}

function nextPromptTimer(currentPrompt) {

// Ensure button doesn't appear from timer on non-interactive prompts
        setTimeout(function () {
            $(".newPromptButton").addClass('active');
            console.log("Show button!")
        }, promptSeconds * 1000);
}
