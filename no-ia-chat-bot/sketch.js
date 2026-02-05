let bot;
let userInput;
let submitButton;
let outputDiv;
let statusP;

function setup() {
  noCanvas();
  
  // Create container for chat history
  outputDiv = createDiv();
  outputDiv.id('outputDiv');
  
  // Create input field
  userInput = createInput();
  userInput.size(300);
  userInput.attribute('placeholder', 'Say something...');
  userInput.attribute('disabled', 'true');
  
  // Create submit button
  submitButton = createButton('Submit');
  submitButton.mousePressed(botChat);
  submitButton.attribute('disabled', 'true');
  
  // Allow pressing Enter to submit
  userInput.elt.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      submitButton.elt.click();
    }
  });

  statusP = createP("Loading bot... Please wait.");
  statusP.style('color', '#888');
  statusP.style('font-size', '12px');

  // Load the bot
  bot = new RiveScript();
  bot.loadFile(["begin.rive", "dialogue.rive"])
    .then(botReady)
    .catch(botError);
}

function botReady() {
  console.log("Bot is ready!");
  bot.sortReplies();
  
  statusP.html("Bot is ready! (Try asking: 'hello', 'what is your name')");
  statusP.style('color', 'green');
  userInput.removeAttribute('disabled');
  submitButton.removeAttribute('disabled');
  userInput.elt.focus();
}

function botError(error) {
  console.error("Bot error: " + error);
  statusP.html("Error: " + error + "<br>Hint: Make sure to run this using a Local Server (e.g. Live Server extension).");
  statusP.style('color', 'red');
}

function botChat() {
  let username = "local-user";
  let input = userInput.value();
  
  if (input.trim() === "") return;

  // Display user message
  let userP = createP(input);
  userP.class('userConvo');
  userP.parent(outputDiv);
  
  // Get bot reply
  bot.reply(username, input).then(function(reply) {
    console.log("Bot says: " + reply);
    
    // Display bot reply
    let botP = createP(reply);
    botP.class('botConvo');
    botP.parent(outputDiv);
    
    // Auto scroll to bottom
    window.scrollTo(0, document.body.scrollHeight);
  });
  
  userInput.value('');
}
