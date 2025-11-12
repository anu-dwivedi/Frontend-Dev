// Personalized Login Greeting
// Declare variables for userName and current hour value
const userName = "Student"; // Replace with actual user input if needed
const currentHour = new Date().getHours();

// Determine the greeting message based on current hour
let greetingMessage;

if (currentHour < 12) {
  greetingMessage = `Good Morning ${userName}!`;
} else if (currentHour >= 12 && currentHour < 17) {
  greetingMessage = `Good Afternoon ${userName}!`;
} else {
  greetingMessage = `Good Evening ${userName}!`;
}

// Output the greeting message
console.log(greetingMessage);
