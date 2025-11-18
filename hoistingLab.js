"use strict";

// Before fixed, predict output:
// console.log(score); // undefined due to var hoisting, but uninitialized
// announce(); // works because function declaration hoisted
// var score = 50;
// function announce() { console.log("Game started"); }
// let status = "ready"; // temporal dead zone before declaration
// startGame(); // error as status not accessible due to block scoping

// Fix:

var score = 50;
function announce() {
  console.log("Game started");
}
console.log(score);
announce();

let status = "ready";
function startGame() {
  console.log(status);
}
startGame();

// Arrow function version (function declarations are hoisted differently):

const announceArrow = () => console.log("Game started");
const startGameArrow = () => console.log(status);

// Hoisting explanation:
// var declarations hoisted with undefined initializer
// function declarations fully hoisted with body
// let/const hoisted but in temporal dead zone until initialized
// Arrow functions behave as const variables, so not hoisted
