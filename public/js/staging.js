/// STAGING "DICE ROLLER" CONTROLLER
/////////////////////////////////////

// This page randomly assigns a new prompt when someone is linked to it.

var prompts = ['flowers.html','jump.html','shakeHands.html','race.html','lights.html','lemons.html','happen.html','time.html','floor.html','eyes.html','color.html','drums.html', 'bookIP.html', 'modernIP.html','moodIP.html', 'beatIP.html', 'tallIP.html','storyIP.html','penIP.html', 'nightIP.html'] //Each prompt is added to an array

  rand = Math.floor(Math.random()* prompts.length)
  // A random number is generated based off of how many prompts are in the array

// window.location.replace("prompts/" + prompts[rand]);

// The window links to one of the randomly selected prompt pages.
