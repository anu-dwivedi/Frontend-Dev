const expenses = [200, 150, 800, 100, 120];  // food, travel, rent, bills, leisure

// Calculate total
let total = 0;
for (let expense of expenses) {
  total += expense;
}

// Calculate tax and final amounts
const taxRate = 0.10; // 10%
const taxAmount = total * taxRate;
const finalAmount = total + taxAmount;
const average = total / expenses.length;

// Output results with two decimals
console.log(`Total expenses: $${total.toFixed(2)}`);
console.log(`Average expense: $${average.toFixed(2)}`);
console.log(`Final amount after tax: $${finalAmount.toFixed(2)}`);
