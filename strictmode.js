// Without "use strict":
function demo(a, a) {
  total = 10;
  delete total;
}
demo(5, 10);

// Running this without strict mode:
// - The duplicate argument names do not cause syntax errors in non-strict mode.
// - 'total' becomes an implicit global.
// - delete of variable 'total' fails silently.

// With "use strict":
"use strict";
function demo(a, a) { // SyntaxError: Duplicate parameter name not allowed in strict mode
  let total = 10;    // Declare explicitly
  delete total;      // SyntaxError: Delete of an unqualified identifier in strict mode.
}
demo(5, 10);

// Explanation:
// Strict mode disallows duplicate function parameters for clarity.
// Variables cannot be deleted; only object properties can.

// Correct ES6 version:

function demoFixed(a, b) {
  let total = 10;
  // delete total; // removed
  console.log(a, b, total);
}
demoFixed(5, 10);
