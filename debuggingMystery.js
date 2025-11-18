"use strict";

function showMessage() {
  // This throws an error because 'greeting' is assigned without declaration.
  // In strict mode, this is disallowed since it creates an implicit global.
  // Fix by declaring with let/const/var.
  let greeting = "Welcome";
  console.log(greeting);
}

showMessage();

// Explanation:
// Without declaration, strict mode disallows creation of implicit globals.
// Declaring 'greeting' confines it to local scope of the function.
// Use VS Code debugger watch on 'greeting' to observe variable during runtime and see call stack.
