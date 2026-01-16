console.log('Start');

// process.nextTick (highest priority microtask)
process.nextTick(() => {
    console.log('process.nextTick');
});

// Promise callback (microtask)
Promise.resolve().then(() => {
    console.log('Promise.then');
});

// setTimeout (timers phase)
setTimeout(() => {
    console.log('setTimeout');
}, 0);

// setImmediate (check phase)
setImmediate(() => {
    console.log('setImmediate');
});

console.log('End');
