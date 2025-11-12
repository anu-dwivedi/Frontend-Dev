const operators = ['+', '-', '*', '/'];
const num1 = Math.floor(Math.random() * 20) + 1;
const num2 = Math.floor(Math.random() * 20) + 1;
const operator = operators[Math.floor(Math.random() * operators.length)];

let correctAnswer;

switch (operator) {
  case '+':
    correctAnswer = num1 + num2;
    break;
  case '-':
    correctAnswer = num1 - num2;
    break;
  case '*':
    correctAnswer = num1 * num2;
    break;
  case '/':
    correctAnswer = (num1 / num2).toFixed(2);
    break;
}

console.log(`Question: What is ${num1} ${operator} ${num2}?`);
console.log(`Correct answer: ${correctAnswer}`);
