/// STAGING "DICE ROLLER" CONTROLLER
/////////////////////////////////////

// This page randomly assigns a new prompt when someone is linked to it.

var prompts = ['testPrompt1.html','testPrompt2.html'] //Each prompt is added to an array

  rand = Math.floor(Math.random()* prompts.length)
  // A random number is generated based off of how many prompts are in the array

window.location.replace("prompts/" + prompts[rand]);

// The window links to one of the randomly selected prompt pages.
