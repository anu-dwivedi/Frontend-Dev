// Global bonus variable
let bonus = 5000;

function calculateSalary(isPermanent) {
  // local salary variable
  let salary = 40000;
  if (isPermanent) {
    salary += bonus; // add bonus if permanent
  }
  console.log(`Total Salary: ${salary}`);
  // global bonus remains unchanged
}

// Test calls
calculateSalary(true);  // With bonus
calculateSalary(false); // Without bonus
console.log(`Global bonus: ${bonus}`); // Should be 5000 always
