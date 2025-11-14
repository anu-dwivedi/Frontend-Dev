const scores = Array.from({ length: 8 }, () => Math.floor(Math.random() * 71) + 30);

const highest = Math.max(...scores);
const lowest = Math.min(...scores);
const average = scores.reduce((a, b) => a + b, 0) / scores.length;
const passedCount = scores.filter(score => score >= 50).length;

console.log("Student Performance Summary:");
console.log(`Scores: [${scores.join(", ")}]`);
console.log(`Highest Score: ${highest}`);
console.log(`Lowest Score: ${lowest}`);
console.log(`Average Score: ${average.toFixed(2)}`);
console.log(`Students Passed: ${passedCount}`);
