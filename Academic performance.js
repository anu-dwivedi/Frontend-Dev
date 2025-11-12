const marks = [90, 85, 70, 80, 95]; // marks of 5 subjects

// Validate and calculate
const hasFail = marks.some(mark => mark < 35);
const average = marks.reduce((sum, mark) => sum + mark, 0) / marks.length;

if (hasFail) {
  console.log("Detained");
} else if (average >= 85) {
  console.log("Promoted with Distinction");
} else if (average >= 50) {
  console.log("Promoted");
} else {
  console.log("Detained");
}

console.log(`Overall percentage: ${average.toFixed(2)}%`);
