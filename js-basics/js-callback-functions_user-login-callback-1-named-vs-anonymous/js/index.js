console.clear();

function showWelcomeMessage() {
  console.log("Welcome!");
}
function handleUserLogin(onSuccess) {
  // You might wonder why this function is called `onSuccess`. This will become clear by the fourth challenge! 🤞
  onSuccess();
}

function showWelcomeMessage() {
  console.log("Welcome!");
}

// Call handleUserLogin below!
// regular function
handleUserLogin(showWelcomeMessage);
// arrow function
handleUserLogin(() => {
  showWelcomeMessage();
});
