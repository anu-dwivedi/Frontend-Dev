function applyOperation(numbers, operation) {
  return numbers.map(operation);
}

// Double each number
const doubled = applyOperation([1,2,3,4], n => n * 2);
console.log(doubled); // [2,4,6,8]

// Square each number
const squared = applyOperation([1,2,3,4], n => n * n);
console.log(squared); // [1,4,9,16]
