"use strict";

const operations = ["add", "divide", "power", "root", "subtract"];
const num1 = 25, num2 = 0;

class InvalidOperationError extends Error {
  constructor(message) {
    super(message);
    this.name = "InvalidOperationError";
  }
}

try {
  const operation = "divide"; // Example input

  let result;

  switch (operation) {
    case "add":
      result = num1 + num2;
      break;
    case "subtract":
      result = num1 - num2;
      break;
    case "divide":
      if (num2 === 0) throw new Error("Division by zero is not allowed");
      result = num1 / num2;
      break;
    case "power":
      result = Math.pow(num1, num2);
      break;
    case "root":
      if (num1 < 0) throw new Error("Root of negative number");
      result = Math.sqrt(num1);
      break;
    default:
      throw new InvalidOperationError(`Operation "${operation}" not recognized`);
  }

  console.log(`Operation: ${operation}\nResult: ${result}`);

} catch (error) {
  console.error(`Error: ${error.name} - ${error.message}`);
}

// Notes: Custom error extends Error class.
// Try...catch handles errors and formats output.
