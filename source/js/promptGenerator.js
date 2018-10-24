import jsonData from '../data/prompts.json';


$(document).ready(function() {

if (window.location.pathname == "/prompttest.html") {
    generatePrompts();
} else
{
    console.log("Not on prompt page");
}

});


function generatePrompts(){

// $.getJSON( "prompts.json", function( jsonData ) {

  var promptData = jsonData.prompts;
  console.log(promptData);

  var promptLength = Object.keys(promptData).length;

  var activePrompt = 7;

  var promptN;

  for (var i = 0; i < promptLength; i++) {
    promptN = Object.keys(promptData)[i];

    $(document).attr("title", promptData[activePrompt].title);
    $("#promptContainer")
        .append(
        "<h1 id=" + promptData[activePrompt].id
        + ">" + promptData[activePrompt].prompt + "</h1>"
        )
        .append(
        "<p>" + promptData[activePrompt].body + "</p>"
    );



    console.log(promptData);
    console.log("prompt length =" + promptLength);
    console.log("prompt number = " + promptN);



    // $("#promptContainer").append("<h1 id=prompt" + promptN + ">" + promptData[promptN].title + "</h1>" )
    // $("#prompt").text(promptData["2"].body)
    console.log(promptData["2"].body)
  };

// })

}
