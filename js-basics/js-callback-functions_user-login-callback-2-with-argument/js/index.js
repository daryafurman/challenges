console.clear();

function handleUserLogin(onSuccess) {
  onSuccess("Jane Doe");
}

// The exercise starts here!
//first part
const userName = "Jane Doe";

function showWelcomeMessage(userName) {
  console.log("Welcome", userName, "! You are logged in now.");
}

handleUserLogin(showWelcomeMessage);

//second part
handleUserLogin(() => {
  console.log("Welcome", userName, "! You are logged in now.");
});
