"use strict";

function pyramidPattern(limit = 5) {
  // Using 'let' for loop counter to limit scope
  for (let i = 1; i <= limit; i++) {
    let line = "";
    for (let j = 1; j <= i; j++) {
      line += "* ";
    }
    console.log(line.trim());
  }
}

pyramidPattern(4);

// Replace let with var to observe:
// Using 'var' causes the loop counters to be function/global scoped, causing potential issues in async environments or nested functions.

// Example with 'var' for debugging reuse:
// The output remains correct with 'var' for this simple loop.

// 'use strict' helps catch undeclared variables, e.g. missing 'let' or 'var' in loop.

// Outer loop limit default 5, can be overridden.
