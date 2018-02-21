var prompts = ['testPrompt1.html','testPrompt2.html']

  rand = Math.floor(Math.random()* prompts.length)

window.location.replace("prompts/" + prompts[rand]);
