// Q2: Demonstrate JavaScript event loop microtask/macrotask order

console.log("Start");

setTimeout(() => {
  console.log("setTimeout (macrotask)"); // Runs last
}, 0);

Promise.resolve().then(() => {
  console.log("Promise.then (microtask)"); // Runs after sync code before macrotasks
});

console.log("End");

// Output order:
// Start
// End
// Promise.then (microtask)
// setTimeout (macrotask)

/*
Explanation:
- Microtasks (Promise.then) run immediately after the current stack, before macrotasks (setTimeout).
- This ensures quick reaction to resolved Promises, allowing more predictable async code.
*/
