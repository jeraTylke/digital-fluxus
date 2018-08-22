$(document).ready(function() {

  generatePrompts();

});


function generatePrompts(){

$.getJSON( "/resources/assets/js/prompts/prompts.json", function( jsonData ) {

  var promptData = jsonData.prompts;

  var promptLength = Object.keys(promptData).length;

  for (var i = 0; i < promptLength; i++) {
    promptN = Object.keys(promptData)[i];

    console.log(promptData);
    console.log("prompt length =" + promptLength);
    console.log("prompt number = " + promptN);

    $("#promptContainer").append("<h1 id=prompt" + promptN + ">" + promptData[promptN].title + "</h1>" )
    // $("#prompt").text(promptData["2"].body)
    console.log(promptData["2"].body)
  };

})

}
