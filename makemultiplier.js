function makeMultiplier(multiplier) {
  // Returns a function that "remembers" multiplier
  return function(num) {
    return num * multiplier;
  };
}

const triple = makeMultiplier(3);
console.log(triple(5)); // 15

// Closure: The returned function remembers the 'multiplier' variable from its outer scope.
