"use strict";

function outer() {
  console.log(count); // undefined: var count is hoisted but undefined here
  var count = 5;

  function inner() {
    console.log(count); // undefined: var count inside inner shadows outer count, hoisted uninitialized
    var count = 10;
  }
  inner();
}
outer();

// Explanation:
// Hoisting creates separate memory for inner count and outer count variables,
// so inner logs undefined because its inner 'count' is hoisted but not initialized.

// Arrow function version for inner:
function outerArrow() {
  console.log(count); // undefined (outer var count hoisted)
  var count = 5;

  const inner = () => {
    // Arrow function does not have its own 'this' or 'arguments' and no hoisting of variables inside.
    // It accesses outer scope count = 5
    console.log(count);
  };
  inner();
}
outerArrow();

// Debug: Observe call stack in debugger to see execution context.
