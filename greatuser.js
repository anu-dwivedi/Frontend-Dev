// Function to greet user and demonstrate callback flow
function greetUser(name, callback) {
  console.log(`Hello ${name}`);
  callback(); // Execute the callback after greeting
}

function showEndMessage() {
  console.log("Welcome to the course!");
}

// Demonstrate callback flow
greetUser("Alice", showEndMessage);
// Output:
// Hello Alice
// Welcome to the course!
